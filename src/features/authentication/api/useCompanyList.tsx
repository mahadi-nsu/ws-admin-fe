import useSWR from 'swr';

interface ICompany {
  id: number;
  name: string;
}

const useCompanyList = () => {
  const { data, error, isLoading } = useSWR<ICompany[]>('/accounts/companies');
  return { companies: data, error, isLoading };
};

export default useCompanyList;
