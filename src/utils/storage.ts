import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/storageKeys';
import Cookies from 'js-cookie';
import { getHostName } from './host';

const isBrowser = typeof window !== 'undefined';

export const storeValue = (
  key: string,
  value: string,
  config?: Cookies.CookieAttributes
) => {
  const domain = getHostName();
  if (isBrowser && key && value) {
    Cookies.set(key, value, { domain, ...config });
  }
};

export const increaseRefreshTokenValidity = () => {
  if (isBrowser) {
    var inThirtyMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);

    const domain = getHostName();

    const refreshToken = Cookies.get(REFRESH_TOKEN_KEY);
    if (refreshToken)
      Cookies.set(REFRESH_TOKEN_KEY, refreshToken, {
        expires: inThirtyMinutes,
        domain,
      });

    const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
    if (accessToken)
      Cookies.set(ACCESS_TOKEN_KEY, accessToken, {
        expires: inThirtyMinutes,
        domain,
      });
  }
};

export const getStoredValue = (key: string) => {
  if (isBrowser) {
    return Cookies.get(key);
  }
};

export const destroyStore = () => {
  if (isBrowser) {
    const lang = getStoredValue('lang') || 'en';
    const domain = getHostName();
    Object.keys(Cookies.get()).forEach((key) =>
      Cookies.remove(key, { domain, path: '/' })
    );
    storeValue('lang', lang);
  }
};
