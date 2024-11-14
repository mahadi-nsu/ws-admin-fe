import { Space } from 'antd';
import { PickerDateProps } from 'antd/es/date-picker/generatePicker';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import styled from 'styled-components';

const DatePickerMoment = generatePicker<Moment>(momentGenerateConfig);

export interface DatePickerProps
  extends Omit<PickerDateProps<Moment>, 'picker'> {
  label?: string;
  picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
}

const CustomDatePicker = ({ label, picker, ...props }: DatePickerProps) => {
  return (
    <CustomDatePickerWrapper direction="vertical">
      {label && <p>{label}</p>}
      <DatePickerMoment {...props} picker={picker} className="date-picker" />
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;

const CustomDatePickerWrapper = styled(Space)`
  width: 100%;
  margin-bottom: 0.5rem;
  .date-picker {
    min-width: 180px;
    width: 100%;
    padding: 8px 11px;
    border-radius: 2rem;
  }
  p {
    padding-top: 5px;
    font-weight: 500;
    font-size: 0.95rem;
    margin-top: 2px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
