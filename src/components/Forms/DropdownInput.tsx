import { Select, Space } from 'antd';
import { SelectProps } from 'antd/es/select';
import styled from 'styled-components';

interface IDropdownInputProps extends SelectProps {
  label?: string;
}

const DropdownInput = ({ label, ...props }: IDropdownInputProps) => {
  return (
    <Container direction="vertical">
      {label && <p>{label}</p>}
      <Select className="select-input" {...props} />
    </Container>
  );
};

export default DropdownInput;

const Container = styled(Space)`
  margin-bottom: 0.3rem;
  width: 100%;

  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }
  .select-input {
    min-width: 100px;
    width: 100%;
    overflow: hidden;

    .ant-select-selector {
      border-radius: 2rem;
      overflow: hidden;
      box-shadow: none !important;
      height: auto; /* Let the height adjust automatically */
      min-height: 2.6rem; /* Set a minimum height */
      padding: 5px 11px;
    }
  }
`;
