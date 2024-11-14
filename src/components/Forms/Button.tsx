import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';

interface ICustomButtonProps extends ButtonProps {
  label?: string;
  isSecondary?: boolean;
  color?: string;
}

const CustomButton = ({
  label,
  isSecondary,
  color,
  ...props
}: ICustomButtonProps) => {
  return (
    <ButtonContainer color={color}>
      <Button type={isSecondary || color ? undefined : 'primary'} {...props}>
        {label}
      </Button>
    </ButtonContainer>
  );
};

export default CustomButton;

const ButtonContainer = styled.div<{ color?: string }>`
  .ant-btn {
    border-radius: 200px;
    ${(p) => p.color && `background-color: ${p.color};`}
    color: white; /* Ensure text color is always white */
  }
  .ant-btn-ghost {
    background-color: ${(p) => p.theme.colors.lightPrimary};
  }
`;
