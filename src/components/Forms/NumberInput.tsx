import { InputNumber, Space } from 'antd';
import { InputNumberProps } from 'antd/es/input-number';
import styled from 'styled-components';

interface IInputNumberProps extends InputNumberProps {
  label?: string;
}

const NumberInput = ({ label, ...props }: IInputNumberProps) => {
  return (
    <Container direction="vertical">
      {label && <p>{label}</p>}
      <InputNumber {...props} />
    </Container>
  );
};

export default NumberInput;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  width: 100%;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }

  .ant-input-number,
  .ant-input-number-input {
    min-width: 180px;
    width: 100%;
    overflow: hidden;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: none !important;
    padding: 4px 11px;
  }
`;
