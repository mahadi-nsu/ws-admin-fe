import { Space, Upload, UploadProps } from 'antd';
import styled from 'styled-components';

interface IUploadInputProps extends UploadProps {
  label?: string;
}

const UploadInput = ({ label, ...props }: IUploadInputProps) => {
  return (
    <Container direction="vertical">
      {label && <p>{label}</p>}
      <StyledUpload {...props} />
    </Container>
  );
};

export default UploadInput;

const Container = styled(Space)`
  margin-bottom: 0.5rem;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.95rem;
  }
  .ant-upload {
    width: 100%;
    .ant-upload-btn {
      border-radius: 2rem;
      padding: 8px 11px;
    }
  }
`;

const StyledUpload = styled(Upload)`
  // Add your custom styles for the Upload component here
`;
