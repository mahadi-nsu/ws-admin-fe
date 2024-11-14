import { Button, Modal, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

type Props = {
  isOpen: boolean;
};

const SessionExpiredModal = ({ isOpen }: Props) => {
  const refresh = () => {
    window?.location.reload();
  };

  return (
    <Modal
      onOk={refresh}
      onCancel={refresh}
      title={`Session Expired`}
      footer={null}
      visible={isOpen}
    >
      <RootContainer>
        <Header code type="danger">
          Session Expired
        </Header>
        <Description>
          Due to inactivity, you session has been expired, please login again to
          continue.
        </Description>
        <Button shape="round" onClick={refresh} type="primary" key="console">
          Click here to login
        </Button>
      </RootContainer>
    </Modal>
  );
};

export default SessionExpiredModal;

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
`;

const Header = styled(Text)`
  font-size: 3rem;
  background-color: transparent;
  padding-bottom: 1rem;
  border-bottom: 1px solid red;
`;

const Description = styled(Text)`
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
