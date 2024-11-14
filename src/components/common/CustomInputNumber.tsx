import { Input, InputProps, Space } from 'antd';
import styled from 'styled-components';

interface ITextInputProps extends InputProps {
  label?: string;
}

const CustomerInputNumber = ({ label, ...props }: ITextInputProps) => {
  return (
    <Container direction="vertical">
      <p>{label}</p>
      <Input {...props} />
    </Container>
  );
};

export default CustomerInputNumber;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  
  width: 100%;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }
  .ant-input,
  .ant-input-affix-wrapper {
    text-align: center;
    min-width: 50px;
    width: 100px;
    overflow: hidden;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: none !important;
    padding: 8px 11px;
    
    
  }
`;
