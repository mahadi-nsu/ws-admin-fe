import useSWR from 'swr';
import { IAccounts } from '../types';

export const useGetAccounts = () => {
  return useSWR<IAccounts>('/accounts/list');
};
