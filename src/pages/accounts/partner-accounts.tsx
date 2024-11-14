import { roleTypes as r } from '@/components/Authorizer/constants';
import PartnerAccounts from '@/features/accounts';

const PartnerAccountsPage = () => {
  return <PartnerAccounts />;
};

PartnerAccountsPage.displayName = 'Partner Accounts Page';
PartnerAccountsPage.hasAccess = [r.ALL];
export default PartnerAccountsPage;
