import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useCanView from '../Authorizer/hooks/useCanView';

const Navbar = () => {
  const { canBSSView, canPartnerView } = useCanView();
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const menuList = [
    {
      label: 'Service Desk',
      url: '/service-desk',
      key: 'service-desk',
    },
    {
      label: 'Dashboard',
      url: '/dashboard',
      key: 'dashboard',
    },

    ...(canBSSView
      ? [
          {
            label: 'Billing',
            url: '/billing',
            key: 'billing',
          },
        ]
      : []),
    {
      label: 'Customers',
      url: '/customers',
      key: 'customers',
    },
    {
      label: 'Devices',
      url: '/devices',
      key: 'devices',
    },
    {
      label: 'Accounts',
      url: '/accounts',
      key: 'accounts',
    },
    ...(canPartnerView
      ? [
          {
            label: 'Partners',
            url: '/partners',
            key: 'partners',
          },
        ]
      : []),

    {
      label: 'Settings',
      url: '/settings',
      key: 'settings',
    },

    {
      label: 'Maintenance',
      url: '/maintenance',
      key: 'maintenance',
    },
  ];

  const menuItems: MenuProps['items'] = menuList.map((item) => ({
    label: <Link href={item.url}>{item.label}</Link>,
    key: item.key,
    onClick: () => router.push(item.url),
  }));

  useEffect(() => {
    const keys = router.pathname.split('/');
    setSelectedKeys(keys);
  }, [router]);

  return (
    <Container>
      <Menu
        items={menuItems}
        className="navMenu"
        mode="horizontal"
        selectedKeys={selectedKeys}
      />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  .ant-menu {
    padding: 0px 3% 0px 3%;
    font-size: 15px;
    color: grey;
    border-bottom: 1px solid #d9d9d9;
  }
  .ant-menu-dark .ant-menu-item:hover {
    opacity: 0.5;
  }
  .navItem:hover {
    opacity: 0.5;
    transition: 0.3s;
  }
  .ant-menu-title-content a {
    text-transform: uppercase;
  }
  .navMenu > .ant-menu-item-active::after,
  .navMenu > .ant-menu-item-selected::after,
  .navMenu > .ant-menu-item-active:hover::after,
  .navMenu > .ant-menu-item-selected:hover::after {
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  }
  .navMenu > .ant-menu-submenu-selected::after {
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  }
  .navMenu > .ant-menu-submenu-active::after {
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary} !important;
  }
`;
