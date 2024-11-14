import { Input, InputProps, Space } from 'antd';
import styled from 'styled-components';

interface ITextInputProps extends InputProps {
  label?: string;
}

const InputDevices = ({ label, ...props }: ITextInputProps) => {
  return (
    <Container direction="vertical">
      {label && <p>{label}</p>}
      <Input {...props} />
    </Container>
  );
};

export default InputDevices;

const Container = styled(Space)`
  text-align: center;
  margin: 25px 0px 3px 0px;
  margin-bottom: 7px;
  /* border: 1px solid red; */
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
    text-align: center;
  }
  .ant-input,
  .ant-input-affix-wrapper {
    text-align: center;
    min-width: 300px;
    width: 100%;
    overflow: hidden;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: none !important;
    padding: 8px 11px;
  }
`;
