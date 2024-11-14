import Routes from '@/constants/routes';
import { Button, Result } from 'antd';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

const FourOhFour = () => {
  const router = useRouter();
  const goToHome = () => router.push(Routes.BILLING());

  return (
    <Result
      status="404"
      title="404"
      style={{ marginTop: 40 }}
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={goToHome}>
          Please contact with administrator​
        </Button>
      }
    />
  );
};

export default FourOhFour;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}
