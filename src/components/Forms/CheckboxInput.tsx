import { Checkbox, Space } from 'antd';
import { CheckboxProps } from 'antd/es/checkbox';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ICheckboxInputProps extends CheckboxProps {
  label?: string | ReactNode;
}

const CheckboxInput = ({ label, ...props }: ICheckboxInputProps) => {
  return (
    <Container direction="vertical">
      <Checkbox {...props}>{<p>{label}</p>}</Checkbox>
    </Container>
  );
};

export default CheckboxInput;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    padding: 8px 8px 8px 0;
    p {
      font-weight: 500;
      color: ${(props) => props.theme.colors.primary};
      font-size: 0.9rem;
      margin-left: 0.5rem;
      padding-top: 4px;
    }
    .ant-checkbox-inner {
      width: 20px;
      height: 20px;
    }
  }
`;
