import { ThemeConfig } from 'antd/es/config-provider/context';

const theme = {
  colors: {
    primary: '#1f4269',
    lightPrimary: '#99d5f7',
  },
  boxShadow: `box-shadow: -1px 5px 10px 1px rgba(221, 221, 221, 0.5);`,
};

export default theme;

export const antDTheme: ThemeConfig = {
  token: {
    colorPrimary: theme.colors.primary,
  },
};
