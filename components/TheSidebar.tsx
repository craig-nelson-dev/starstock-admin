import { Menu } from 'antd';
import Logo from 'assets/icons/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from 'rebass';
const { SubMenu } = Menu;

export default function TheSidebar() {
  const router = useRouter();
  const defaultSelected = `/${router.pathname.split('/')[1]}`;

  return (
    <Menu
      style={{ height: '100%', fontWeight: 500, textTransform: 'uppercase', paddingBottom: 40 }}
      defaultSelectedKeys={[defaultSelected]}
      defaultOpenKeys={[defaultSelected]}
      mode="inline"
      className="side-bar"
    >
      <Link href="/">
        <a>
          <Box sx={{ p: 3 }}>
            <Logo width="100%" />
          </Box>
        </a>
      </Link>
      <Menu.Item key="/">
        <Link href="/">
          <a>Dashboard</a>
        </Link>
      </Menu.Item>
      <SubMenu title="Orders" key="/orders">
        <Menu.Item key="/orders">
          <Link href="/orders">
            <a>ORDERS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/abandoned-basket">
          <Link href="/abandoned-basket">
            <a>baskets</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/pod">
          <Link href="/pod">
            <a>POD</a>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/credits">
        <Link href="/credits">
          <a>Credits</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/outlets">
        <Link href="/outlets">
          <a>Outlets</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link href="/users">
          <a>USERS</a>
        </Link>
      </Menu.Item>
      <SubMenu title="Products" key="/products">
        <Menu.Item key="/products">
          <Link href="/products">
            <a>Products</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/upsells">
          <Link href="/upsells">
            <a>upsells</a>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/attributes">
        <Link href="/attributes">
          <a>Attributes</a>
        </Link>
      </Menu.Item>
      <SubMenu title="Brand owner" key="/bo">
        <Menu.Item key="/bo">
          <Link href="/bo">
            <a>BRAND OWNERS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/bo-admin">
          <Link href="/bo-admin">
            <a>ADMINISTRATORS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/recommendations">
          <Link href="/recommendations">
            <a>Messages</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/termsAndConditions">
          <Link href="/termsAndConditions">
            <a>Terms &amp; Conditions</a>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/taxes">
        <Link href="/taxes">
          <a>TAX</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/logistic-fee">
        <Link href="/logistic-fee">
          <a>LOGISTICS FEES</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/promotions">
        <Link href="/promotions">
          <a>Promotions</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/vouchers">
        <Link href="/vouchers">
          <a>vouchers</a>
        </Link>
      </Menu.Item>
      <SubMenu title="Content" key="/content">
        <Menu.Item key="/banners-ads">
          <Link href="/banners-ads">
            <a>Banners &amp; Ads</a>
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu title="Sales Reports" key="/reports">
        <Menu.Item key="/reports">
          <Link href="/reports/sales-by-order">
            <a>By Order</a>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/sage">
        <Link href="/sage">
          <a>sage</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/company-details">
        <Link href="/company-details">
          <a>COMPANY DETAILS</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
