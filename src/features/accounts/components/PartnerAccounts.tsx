import { PageLayout, SecondaryMenu } from '@/components';
import { accountMenuList } from '@/constants/menuItems';
import AccountsFilter from './AccountsFilter';

const PartnerAccounts = () => {
  return (
    <PageLayout
      title={`Manage Accounts`}
      icon="/icons/billing.png"
      rightContent={
        <SecondaryMenu
          items={accountMenuList}
          active="/accounts/partner-accounts"
        />
      }
    >
      <AccountsFilter />
      <div>Partner accounts</div>
    </PageLayout>
  );
};

export default PartnerAccounts;
