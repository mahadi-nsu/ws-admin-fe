import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const AccessDenied = ({ feature = 'this' }) => {
  return (
    <RootContainer>
      <Description>
        You don't have permission to view
        <Text code type="danger">
          {feature}
        </Text>
        A feature of the item
      </Description>
      <Description>Kindly contact the administrator.</Description>
    </RootContainer>
  );
};

export default AccessDenied;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  padding: 2%;
  transition: width 500ms;
  margin: 2.5rem auto;
  border: 1px solid #b80000;
`;

const Description = styled(Text)`
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
`;
