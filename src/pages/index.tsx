import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/service-desk');
  }, []);

  return null;
};

IndexPage.displayName = 'Service desk';
IndexPage.hasAccess = ['all'];

export default IndexPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
