import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styled from 'styled-components';

export const getLabelWithInfo = (label: string, tooltipText: string) => (
  <span>
    {label}{' '}
    <Tooltip title={tooltipText}>
      <StyledInfoIcon />
    </Tooltip>
  </span>
);

const StyledInfoIcon = styled(InfoCircleOutlined)`
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px; /* Adjust font size as needed */
`;
