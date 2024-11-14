import { Input, InputProps, Space } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ITextInputProps extends InputProps {
  label?: string | ReactNode;
}

const TextInput = ({ label, ...props }: ITextInputProps) => {
  return (
    <Container direction="vertical">
      {label && <p>{label}</p>}
      <Input {...props} />
    </Container>
  );
};

export default TextInput;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  width: 100%;
  /* border: 1px solid red; */
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }
  .ant-input,
  .ant-input-affix-wrapper {
    min-width: 180px;
    width: 100%;
    overflow: hidden;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: none !important;
    padding: 8px 11px;
  }
`;
