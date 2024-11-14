import { roleTypes as r } from '@/components/Authorizer/constants';
import ManagerAccounts from '@/features/accounts-manager/components/ManagerAccounts';

const ManagerAccountsPage = () => {
  return <ManagerAccounts />;
};

ManagerAccountsPage.displayName = 'Manager Accounts Page';
ManagerAccountsPage.hasAccess = [r.ALL];
export default ManagerAccountsPage;
