import { Button, Checkbox, Col, Form, Input, Select, Space } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';
import { AppBreadcrumb, BreadcrumbItem } from 'dsl-admin-base';
import Head from 'next/head';
import React, { useMemo, useRef } from 'react';
import { Box, Text } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Users',
    href: '/users',
  },
];

const NewUser: React.FC = () => {
  //const router = useRouter();
  const formInstance = useRef<FormInstance>(null);
  //TODO: FIX when types updated
  //const [createUser, { loading, error }] = useCreateUserMutation();
  const loading = false;

  const breadcrumbsRender: BreadcrumbItem[] = useMemo(() => {
    return [
      ...breadcrumbs,
      {
        label: 'Create User',
        href: '',
      },
    ];
  }, []);

  const submitForm = () => {
    formInstance.current?.submit();
  };

  const onFinish = async (values: Store) => {
    console.log(values);
    /*try {
      const { data } = await createUser({
        variables: {
          input: {
            user: {
              title: values.title,
              firstName: values.firstName,
              middleName: '',
              lastName: values.lastName,
              phone: values.phone,
              email: values.email,
              marketing: values.marketing,
              password: values.password,
              confirmPassword: values.confirmPassword,
              type: values.type,
            },
          },
        },
      });

      if (data?.insertAdminUser) {
        router.replace('/users');
      } else {
        throw new Error('failed');
      }
    } catch (ex) {}*/
  };

  return (
    <>
      <Head>
        <title>Create User</title>
      </Head>

      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbsRender}></AppBreadcrumb>
        <Space>
          <Button type="primary" className="text-caps" onClick={submitForm} loading={loading}>
            Save
          </Button>
        </Space>
      </Box>

      {/*error && (
        <Box mt={2}>
          <Alert
            message="Failed to create user"
            description="There was an error creating the user. Please try again."
            type="error"
          />
        </Box>
      )*/}

      <Box variant="card" sx={{ maxWidth: 500 }}>
        <Form
          layout="vertical"
          initialValues={{ title: 'Mr', marketing: true, type: 'user', phone: '' }}
          onFinish={onFinish}
          ref={formInstance}
        >
          <Col span={14}>
            <Form.Item name="title" label="Title" valuePropName="value">
              <Select>
                <Select.Option value="Mr">MR</Select.Option>
                <Select.Option value="Ms">MS</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: 'Please enter a first name' }]}
          >
            <Input type="text" placeholder="First name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: 'Please enter a last name' }]}
          >
            <Input type="text" placeholder="Last name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true, message: 'Please enter an email address' }]}
          >
            <Input type="text" placeholder="Address" />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input type="text" placeholder="Phone" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <Input type="text" placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[{ required: true, message: 'Please confirm the entered password' }]}
          >
            <Input type="text" placeholder="Confirm password" />
          </Form.Item>

          <Col span={14}>
            <Form.Item name="type" label="User Type" valuePropName="value">
              <Select>
                <Select.Option value="user">User</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Form.Item name="marketing" valuePropName="checked">
            <Checkbox>
              <Text fontSize={16} display="inline-block">
                Subscribed to email marketing and able to order
              </Text>
            </Checkbox>
          </Form.Item>
        </Form>
      </Box>
    </>
  );
};

export default NewUser;
