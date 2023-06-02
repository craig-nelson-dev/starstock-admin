import { Layout, Menu, Space, Dropdown } from 'antd';
import { Box, Text } from 'rebass';
import { useContext } from 'react';
import { AppContextComponent } from 'dsl-admin-base/lib/context';
import { LogoutOutlined } from '@ant-design/icons';
import UserIcon from 'assets/icons/user.svg';
import Link from 'next/link';

const { Header } = Layout;

export default function TheHeader() {
  const {
    state: { currentUser },
  } = useContext(AppContextComponent);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/login">
          <Space size={10}>
            <LogoutOutlined></LogoutOutlined> Logout
          </Space>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ backgroundColor: '#fff' }}>
      <Box
        sx={{
          lineHeight: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          height: '100%',
          alignItems: 'center',
          px: 5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Dropdown overlay={menu} trigger={['click']}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', ml: 3 }}>
              <UserIcon />
              <Text sx={{ lineHeight: 1.6, ml: 2, fontWeight: 400 }}>
                {currentUser?.firstName} {currentUser?.lastName}
              </Text>
            </Box>
          </Dropdown>
        </Box>
      </Box>
    </Header>
  );
}
