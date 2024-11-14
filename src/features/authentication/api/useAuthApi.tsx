import apiClient from '@/lib/apiClient';
import { IUser } from '@/types/IUser';

export interface IUserLoginData {
  email: string;
  password: string;
  language: string;
  attemptNo: number;
}

export const loginUser = async (data: IUserLoginData) => {
  return apiClient.post(`/account/login`, data);
};

export const getUserData = async () => {
  return apiClient.get<IUser>(`/accounts/details`);
};

export const updateCompany = async (id: number) => {
  return apiClient.post(`/accounts/update/activate-company?companyId=${id}`);
};

export const updateDetails = async (data: {
  name: string;
  language: string;
  surname: string;
  email: string;
}) => {
  try {
    const response = await apiClient.post('/accounts/update/basic', data);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
