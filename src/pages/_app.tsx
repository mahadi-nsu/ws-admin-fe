import { CompanyLayout } from '@/components';
import SessionExpiredModal from '@/components/common/SessionExpired';
import { useAuth } from '@/hooks';
import fetcher from '@/lib/fetcher';
import GlobalStyle from '@/styles/GlobalStyles';
import theme, { antDTheme } from '@/styles/theme';
import { destroyStore } from '@/utils/storage';
import { ConfigProvider } from 'antd';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { ThemeProvider } from 'styled-components';

import { SWRConfig } from 'swr';

type PageProps = {
  messages: IntlMessages;
};

interface CustomPageProps {
  hasAccess?: string[];
  displayName?: string | null;
}

type NextAppProps = Omit<AppProps<PageProps>, 'pageProps'> & {
  Component: CustomPageProps;
  pageProps: PageProps;
};

export default function NextApp({ Component, pageProps }: NextAppProps) {
  const [showExpiredModal, setShowExpiredModal] = useState(false);
  const { user } = useAuth();
  const onIdle = () => {
    destroyStore();
    setShowExpiredModal(true);
  };

  useIdleTimer({
    onIdle,
    timeout: 1800_000, // 30min*60sec = 1800sec
  });

  return (
    <NextIntlProvider
      messages={pageProps.messages}
      onError={(err) => {
        if (err.code === 'MISSING_MESSAGE') {
          return 'Translation missing'; // This is a fallback message
        }
        throw err; // Re-throw other errors
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ConfigProvider theme={antDTheme}>
          <SWRConfig value={{ fetcher }}>
            <CompanyLayout>
              {/* <Authorizer
                hasAccess={Component.hasAccess}
                displayName={Component.displayName}
              > */}
              <NextNProgress />
              <MetaTags />
              <Component {...pageProps} />
              {/* </Authorizer> */}
            </CompanyLayout>
            <SessionExpiredModal isOpen={!!(user && showExpiredModal)} />
          </SWRConfig>
        </ConfigProvider>
      </ThemeProvider>
    </NextIntlProvider>
  );
}

const MetaTags = () => {
  return (
    <Head>
      <title>WorkSober</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
