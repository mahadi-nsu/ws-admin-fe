import Routes from '@/constants/routes';
import LanguageSwitcher from '@/features/authentication/components/LanguageSwitcher';
import { useAuth } from '@/hooks';
import useLocale from '@/hooks/useLocale';
import { getStoredValue } from '@/utils/storage';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navbar from './Navbar';

const PORTAL_URL = process.env.PORTAL_URL;

interface IAuthorizerProps {
  children: React.ReactNode;
}

const CompanyLayout = ({ children }: IAuthorizerProps) => {
  const { user, logout } = useAuth();
  const { locale } = useRouter();
  const t = useLocale();

  const lang = locale || getStoredValue('lang') || 'en';

  console.log('lang from admin', lang);

  const handleLogout = () => logout();

  const menuItems: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <Link href={'/service-desk'}>
          <Button shape="round">{user?.name || 'No user'}</Button>
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href={'/service-desk'}>
          <Button onClick={handleLogout} shape="round">
            {'Logout'}
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <Container>
      <Content>
        <Space align="center">
          <LogoLink href={'/service-desk'}>
            <Image
              height={149}
              width={709}
              alt="Worksober"
              src="/images/worksober-logo-white.png"
            />
          </LogoLink>
          <ServiceText>Service</ServiceText>
        </Space>
        {PORTAL_URL && (
          <Link
            href={PORTAL_URL + `/${lang}`}
            style={{ textDecoration: 'none' }}
          >
            <LinkText>Customer</LinkText>
          </Link>
        )}
        <RightMenu>
          <Dropdown
            menu={{ items: menuItems }}
            placement="bottom"
            className="mobile-dropdown"
          >
            <MenuOutlined />
          </Dropdown>
          <LanguageSwitcher />
          <MenuLinks>
            <Link href={Routes.BILLING()}>
              <Button shape="round">
                <UserOutlined />
                {user?.name || 'No user'}
              </Button>
            </Link>
            <Button danger shape="round" onClick={handleLogout}>
              Logout
            </Button>
          </MenuLinks>
        </RightMenu>
      </Content>
      <Navbar />
      {children}
    </Container>
  );
};

export default CompanyLayout;

const Container = styled.div`
  min-width: 600px;
`;

const LogoLink = styled(Link)`
  img {
    width: 220px;
    min-width: 180px;
    height: auto;
    @media (max-width: 500px) {
      width: 150px;
      min-width: 120px;
    }
  }
`;

const Content = styled.div`
  padding: 0.75rem 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('/images/header-bg.png');
  background-size: cover;
  background-repeat: repeat-x;

  .dropdown {
    border: 1.5px solid #fff;
  }
  svg {
    fill: white;
    cursor: pointer;
  }
`;

const RightMenu = styled.div`
  display: flex;
  gap: 1rem;

  .mobile-dropdown {
    @media (min-width: 800px) {
      display: none;
    }
  }
`;
const MenuLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 800px) {
    display: none;
  }
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const ServiceText = styled.h2`
  font-size: 28px;
  color: #fff;
  font-style: italic;
`;
const LinkText = styled.span`
  cursor: pointer;
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 15px;
`;
