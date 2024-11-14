import { roleTypes as r } from '@/components/Authorizer/constants';
import CompanyAccounts from '@/features/accounts-company/components/CompanyAccounts';

const CompanyAccountsPage = () => {
  return <CompanyAccounts />;
};

CompanyAccountsPage.displayName = 'Company Accounts Page';
CompanyAccountsPage.hasAccess = [r.ALL];

export default CompanyAccountsPage;
