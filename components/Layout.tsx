import { Layout } from 'antd';
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';
import { useRouter } from 'next/router';
import { Box } from 'rebass';
const { Content, Sider } = Layout;

const blankLayout = ['/login', '/unsupported-mobile'];

const AppLayout: React.FC = ({ children }) => {
  const router = useRouter();

  if (blankLayout.includes(router.pathname)) {
    return <>{children}</>;
  }

  let bgColor = 'white';

  if (router.route == '/') {
    bgColor = '#efefef';
  }

  return (
    <Box variant="customAntDesign">
      <Layout className="main-layout" style={{ minHeight: '100vh' }}>
        <Sider
          width={280}
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100vh',
            position: 'sticky',
            backgroundColor: '#1C2638',
            top: 0,
            left: 0,
          }}
        >
          <TheSidebar />
        </Sider>
        <Layout style={{ backgroundColor: bgColor }}>
          <TheHeader />
          <Content className="main-layout-content">{children}</Content>
        </Layout>
      </Layout>
    </Box>
  );
};

export default AppLayout;
