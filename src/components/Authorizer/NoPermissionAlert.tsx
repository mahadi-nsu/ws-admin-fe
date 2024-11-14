import { Alert } from 'antd';

interface NoPermissionAlertProps {
  role: string | undefined;
}

const NoPermissionAlert = ({ role }: NoPermissionAlertProps) => {
  return (
    <Alert
      message={
        <span>
          You are
          <strong> {role || 'an user'} </strong>, you don't have access to view
          this service.
        </span>
      }
      description="Please contact your system administrator if you believe this is an error."
      type="error"
      showIcon
      role="alert"
    />
  );
};

export default NoPermissionAlert;
