import axios from 'axios';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/storageKeys';
import {
  destroyStore,
  getStoredValue,
  increaseRefreshTokenValidity,
  storeValue,
} from '@/utils/storage';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
  },
});

// reqInterceptor
apiClient.interceptors.request.use(
  async (config) => {
    const url = config.url;
    const accessToken = getStoredValue(ACCESS_TOKEN_KEY);
    if (accessToken) {
      increaseRefreshTokenValidity();
      if (url && url.includes('/tcs')) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      } else {
        config.headers['X-Authorization'] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 &&
      error.config?.url !== '/account/login' &&
      !getStoredValue(REFRESH_TOKEN_KEY)
    ) {
      destroyStore();
      window.location.href = '/';
      return;
    }

    if (
      error.response?.data?.message?.includes('The token is expired since') &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = getStoredValue(REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        // refresh token
        const response = await apiClient.post('/account/refresh-token', {
          token: refreshToken,
        });

        const newAccessToken = response.data.token;
        storeValue(ACCESS_TOKEN_KEY, newAccessToken);
        return apiClient(originalRequest);
      } catch (_error: any) {
        destroyStore();
        if (_error.response && _error.response.data) {
          return Promise.reject(_error.response.data);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
