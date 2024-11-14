import { Button, TextInput } from '@/components';
import styled from 'styled-components';

const AccountsFilter = () => {
  return (
    <StyledFilterContainer>
      <LeftContainer>
        <StyledSearchContainer>
          <SearchInoputContainer>
            <TextInput placeholder="Search account.." />
            <Button
              label="Search"
              style={{ width: 'auto', height: '40px', marginBottom: '5px' }}
            />
          </SearchInoputContainer>
        </StyledSearchContainer>
      </LeftContainer>
      <RightContainer>
        <AddCompanyButtonContainer>
          <Button
            label="Add New Account"
            style={{
              width: 'auto',
              height: '40px',
              marginBottom: '5px',
              marginLeft: 'auto',
            }}
          />
        </AddCompanyButtonContainer>
      </RightContainer>
    </StyledFilterContainer>
  );
};

export default AccountsFilter;

const StyledFilterContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: start;
  width: 72%;
`;

const AddCompanyButtonContainer = styled.div`
  display: flex;
  align-items: start;
  margin-left: auto;
`;

const SearchInoputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  /* gap: 20px; */
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
