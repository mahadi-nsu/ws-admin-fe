import { Input, InputProps, Space } from 'antd';
import styled from 'styled-components';
interface ITextInputProps extends InputProps {
  label?: string;
  containerStyles?: React.CSSProperties;
}
const CustomerInput = ({
  label,
  containerStyles,
  ...props
}: ITextInputProps) => {
  return (
    <Container direction="vertical" style={containerStyles}>
      <p>{label}</p>
      <Input {...props} />
    </Container>
  );
};
export default CustomerInput;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }
  .ant-input,
  .ant-input-affix-wrapper {
    min-width: 50px;
    width: 40%;
    overflow: hidden;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: none !important;
    padding: 8px 11px;
  }
`;
