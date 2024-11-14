import { Menu } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

interface ISecondaryMenuItems {
  key: string;
  label: string;
  url: string;
  disableLink?: boolean;
  children?: ISecondaryMenuItems[];
}

interface ISecondaryMenuProps {
  active: ISecondaryMenuItems['key'];
  items: ISecondaryMenuItems[];
}

const renderSubMenu = (subMenu: ISecondaryMenuItems): React.ReactNode => {
  if (subMenu.children) {
    return (
      <Menu.SubMenu key={subMenu.key} title={subMenu.label.toUpperCase()}>
        {subMenu.children.map((child) => renderSubMenu(child))}
      </Menu.SubMenu>
    );
  } else {
    return (
      <Menu.Item key={subMenu.key} disabled={subMenu.disableLink}>
        <LinkText href={subMenu.url}>{subMenu.label.toUpperCase()}</LinkText>
      </Menu.Item>
    );
  }
};

const SecondaryMenu = ({ active, items }: ISecondaryMenuProps) => {
  return (
    <MenuContainer>
      <Menu
        mode="horizontal"
        style={{ width: '100%', justifyContent: 'flex-end' }}
      >
        {items.map((item) =>
          item.children ? (
            renderSubMenu(item)
          ) : (
            <Menu.Item key={item.key} disabled={item.disableLink}>
              <LinkText
                href={item.url}
                className={active === item.key ? 'active' : ''}
              >
                {item.label.toUpperCase()}
              </LinkText>
            </Menu.Item>
          )
        )}
      </Menu>
    </MenuContainer>
  );
};

export default SecondaryMenu;

const MenuContainer = styled.div`
  width: 100%;
  flex: 1;
  align-self: flex-end;
  justify-self: flex-end;
  .active {
    border-bottom: ${(p) => `5px solid ${p.theme.colors.primary}`};
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    text-decoration: none; /* Remove the underline */
  }
  .ant-menu-sub .ant-menu-vertical {
    border: 2px solid tomato;
  }
`;

const LinkText = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  padding-bottom: 5px;
  color: ${(p) => p.theme.colors.primary};
`;
