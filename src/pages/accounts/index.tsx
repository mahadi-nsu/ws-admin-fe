import { roleTypes as r } from '@/components/Authorizer/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AccountsPage = () => {
  const router = useRouter();
  // redirect to /accounts/partner-accounts on load
  useEffect(() => {
    router.push('/accounts/partner-accounts');
  }, []);
  return null;
};

AccountsPage.displayName = 'Accounts Page';
AccountsPage.hasAccess = [r.ALL];
export default AccountsPage;
