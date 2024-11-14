import { ACCESS_TOKEN_KEY } from '@/constants/storageKeys';
import { IUser } from '@/types/IUser';
import { destroyStore, getStoredValue } from '@/utils/storage';
import { message } from 'antd';
import { create } from 'zustand';
import { getUserData } from '../api/useAuthApi';

interface IUseAuth {
  isLoggedIn: boolean;
  loading: boolean;
  user: IUser | null;
  error: {} | null;
  authLoading: boolean;
  fetchAuthUser: () => void;
  logout: (_onDone?: () => void) => void;
}

const useAuth = create<IUseAuth>((set) => ({
  isLoggedIn: false,
  loading: false,
  user: null,
  error: null,
  authLoading: true,

  fetchAuthUser: async () => {
    const accessToken = getStoredValue(ACCESS_TOKEN_KEY);
    if (!accessToken) return set({ authLoading: false });
    try {
      const userRes = await getUserData();
      if (userRes.data) {
        set({ user: userRes.data, isLoggedIn: true });
      }
    } catch (error: any) {
      message.error(error?.response?.data?.message || 'Failed to login');
    } finally {
      set({ authLoading: false });
    }
  },

  logout: async (onDone) => {
    destroyStore();
    set({ user: null, isLoggedIn: false });
    onDone && onDone();
  },
}));

export default useAuth;
