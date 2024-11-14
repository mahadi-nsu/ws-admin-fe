import { IUser } from '@/types/IUser';
import useSWR from 'swr';
export const getUserDetailsData = () => {
  return useSWR<IUser>(`/accounts/details`);
};
