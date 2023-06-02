import { Button, Form, Input, notification } from 'antd';
import { Store } from 'antd/es/form/interface';
import { useLoginMutation } from 'dsl-admin-base';
import { AppContextComponent } from 'dsl-admin-base/lib/context';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Box } from 'rebass';

const Login: React.FC = () => {
  const { dispatch } = useContext(AppContextComponent);
  const router = useRouter();
  const [login] = useLoginMutation();
  const onFinish = async (values: Store) => {
    try {
      const loginData = await login({
        variables: { email: values.email, password: values.password, context: 'admin' },
      });

      if (loginData.data?.dslLogin.result) {
        dispatch({ type: 'set-loggedIn', payload: true });
        dispatch({ type: 'set-user', payload: loginData.data?.dslLogin.user });
        router.push('/');
        return;
      }
    } catch (e) {
      console.log(e);
    }

    notification.error({
      message: 'Loggin error',
      description: 'Invalid user name or password',
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Box
      sx={{
        justifyContent: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/images/login-bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flexDirection: 'column',
      }}
    >
      <img src="/images/white-logo.png"></img>
      <Box
        width={330}
        sx={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bg: 'white',
          padding: '40px',
          borderRadius: '2px',
          mt: 3,
        }}
      >
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </Box>
  );
};

export default Login;
