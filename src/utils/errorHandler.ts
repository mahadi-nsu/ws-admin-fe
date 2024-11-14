import { message } from 'antd';
import axios, { AxiosError } from 'axios';

const errorHandler = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
    message.error(error.response?.data); // or maybe just error.message
  } else {
    message.error('Something went wrong!');
  }
};

export default errorHandler;
