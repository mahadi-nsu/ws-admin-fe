import useSWR from 'swr';

export const useCanViewBilling = () => {
  return useSWR<'ALLOWED' | 'NOT ALLOWED'>('/billing/page/empty');
};

export const useCanViewBillingLastButton = () => {
  return useSWR<string[]>('/billing/page/billing-buttons');
};
