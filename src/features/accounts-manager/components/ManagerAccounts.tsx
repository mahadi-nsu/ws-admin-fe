import { DataTable, PageLayout, SecondaryMenu } from '@/components';
import CustomButton from '@/components/Forms/Button';
import { accountMenuList } from '@/constants/menuItems';
import AccountsFilter from '@/features/accounts/components/AccountsFilter';
import { Table } from 'antd';
import styled from 'styled-components';

const ManagerAccounts = () => {
  const Column = Table.Column;
  return (
    <PageLayout
      title={`Manage Manager Accounts`}
      icon="/icons/billing.png"
      rightContent={
        <SecondaryMenu
          items={accountMenuList}
          active="/accounts/manager-accounts"
        />
      }
    >
      <AccountsFilter />
      <DataTable bordered pagination={false}>
        <Column title="Partner ID" width={80} key="ID" align="center" />
        <Column title="Name of partner" width={120} key="ID" align="center" />
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

export default ManagerAccounts;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
`;
