import { DatePicker, DatePickerProps, Space } from 'antd';
import React from 'react';
import styled from 'styled-components';

type CustomDatePickerProps = DatePickerProps & {
  label: string;
};

const CustomDatePickerWrapper = styled(Space)`
  width: 100%;
  .date-picker {
    min-width: 180px;
    width: 100%;
    padding: 8px 11px;
    border-radius: 2rem;
  }
  p {
    padding-top: 3px;
    font-weight: 500;
    font-size: 0.95rem;
    margin-top: 2px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  ...props
}) => {
  return (
    <CustomDatePickerWrapper direction="vertical">
      <p>{label}</p>
      <DatePicker {...props} className="date-picker" />
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;
