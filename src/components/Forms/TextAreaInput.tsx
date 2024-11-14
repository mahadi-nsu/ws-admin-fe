import { Input, Space } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import styled from 'styled-components';

interface ITextAreaInputProps extends TextAreaProps {
  label: string;
}

const TextAreaInput = ({ label, ...props }: ITextAreaInputProps) => {
  return (
    <Container direction="vertical">
      <p>{label}</p>
      <Input.TextArea {...props} />
    </Container>
  );
};

export default TextAreaInput;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }
  textarea {
    border-radius: 1.25rem;
  }
`;
