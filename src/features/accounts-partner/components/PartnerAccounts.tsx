import { DataTable, PageLayout, SecondaryMenu } from '@/components';
import CustomButton from '@/components/Forms/Button';
import { accountMenuList } from '@/constants/menuItems';
import { Table } from 'antd';
import styled from 'styled-components';
import AccountsFilter from '../../accounts/components/AccountsFilter';

const PartnerAccounts = () => {
  const Column = Table.Column;
  return (
    <PageLayout
      title={`Manage Partner Accounts`}
      icon="/icons/billing.png"
      rightContent={
        <SecondaryMenu
          items={accountMenuList}
          active="/accounts/partner-accounts"
        />
      }
    >
      <AccountsFilter />
      <DataTable bordered pagination={false}>
        <Column title="Email" width={120} key="ID" align="center" />
        <Column title="Name surname" width={120} key="ID" align="center" />
        <Column title="Role" width={110} key="ID" align="center" />

        <Column
          title={`Action`}
          align="center"
          width={100}
          render={() => (
            <StyledActionContainer>
              <CustomButton label="Delete" danger />
              <CustomButton label="Edit" />
            </StyledActionContainer>
          )}
        />
      </DataTable>
    </PageLayout>
  );
};

export default PartnerAccounts;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
`;
