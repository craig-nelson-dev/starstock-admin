import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Menu,
  Select,
  Space,
  Modal,
  Typography,
  notification,
} from 'antd';
import { Store } from 'antd/lib/form/interface';
import { UserOutletsTable } from 'components/pages/users/UserOutletsTable';
import { UserStatusBanner } from 'components/pages/users/UserStatusBanner';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  RepositoryFactory,
  SettingDropdown,
  useUpdateAdminUserMutation,
  useAdminForm,
  AppSpin,
  DslOutlet,
  StatusValue,
} from 'dsl-admin-base';
import moment from 'moment';
import { Box, Text } from 'rebass';
import { useState } from 'react';

const DateFormat = 'DD/MM/YYYY HH:mm';
const UserRepository = RepositoryFactory.get('user');

const User: React.FC = () => {
  const {
    router,
    formInstance,
    data,
    showErrorMessage,
    showSuccessMessage,
    submitForm,
  } = useAdminForm(UserRepository.getById);
  const [updateUser, { loading }] = useUpdateAdminUserMutation();
  const [currentStatus, setCurrentStatus] = useState<number>();
  const [showConfirm, setShowConfirm] = useState(false);

  const canEnable = !!data?.outlets?.find((o) => o.status.value === StatusValue.ACTIVE);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Users',
      href: '/users',
    },
  ];

  if (data) {
    breadcrumbs.push({
      label: `${data.firstName} ${data.lastName}`,
      href: '',
    });
  }

  const onFinish = async (values: Store) => {
    const statusValue = currentStatus || values.statusValue;

    if (statusValue === StatusValue.ACTIVE && !canEnable) {
      notification.warning({ message: 'Please activate the assigned outlet first' });
      return;
    }

    try {
      const result = await updateUser({
        variables: {
          input: {
            user: {
              id: data?.id,
              title: values.title,
              firstName: values.firstName,
              middleName: '',
              lastName: values.lastName,
              phone: values.phone,
              email: values.email,
              marketing: values.marketing,
              type: data?.type,
              statusValue,
            },
          },
        },
      });

      if (result.data?.updateAdminUser) {
        router.replace('/users');
        showSuccessMessage();
      } else {
        throw new Error('failed');
      }
    } catch (ex) {
      showErrorMessage();
    }

    setCurrentStatus(undefined);
  };

  const menu = [
    {
      label: 'Close Account',
      value: 'close',
    },
    {
      label: 'Disable User',
      value: 'disable',
    },
    {
      label: 'Enable User',
      value: 'enable',
    },
    {
      label: 'Reset Password',
      value: 'reset',
    },
  ];

  const settingMenu = (
    <Menu onClick={(e) => onClickMenu(e.key as string)}>
      {menu.map((item) => {
        return <Menu.Item key={item.value as string}>{item.label}</Menu.Item>;
      })}
    </Menu>
  );

  const onClickMenu = (key: string) => {
    let status: number | undefined = undefined;

    if (key === 'close') {
      setShowConfirm(true);
    }

    if (key === 'enable') {
      status = StatusValue.ACTIVE;
    }

    if (key === 'disable') {
      status = StatusValue.DISABLED;
    }

    if (typeof status !== 'undefined') {
      setCurrentStatus(status);
      submitForm();
    }
  };

  const performClose = () => {
    setCurrentStatus(StatusValue.CLOSED);
    submitForm();
  };

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          {data?.status?.value !== StatusValue.CLOSED && (
            <Box sx={{ mt: 2 }}>
              <SettingDropdown big overlay={settingMenu}></SettingDropdown>
            </Box>
          )}
          <Button type="default" className="text-caps">
            Log in as User
          </Button>
          <Button type="primary" className="text-caps" onClick={submitForm} loading={loading}>
            Save
          </Button>
        </Space>
      </Box>
      {!data ? (
        <AppSpin />
      ) : (
        <Form layout="vertical" initialValues={data} onFinish={onFinish} ref={formInstance}>
          {data && (
            <Box>
              <UserStatusBanner user={data} />
            </Box>
          )}

          <Box variant="card" sx={{ maxWidth: 500 }}>
            <Col span={14}>
              <Form.Item name="title" label="Title">
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
            <Text mb="2">Date Created: {moment(data.createdOn).format(DateFormat)}</Text>
            <Text mb="2">
              Last Login: {data.lastLogin ? moment(data.lastLogin).format(DateFormat) : 'Never'}
            </Text>
            <Text mb="2">
              Last Ordered:{' '}
              {data.lastOrdered ? moment(data.lastOrdered).format(DateFormat) : 'Never'}
            </Text>
            <Form.Item name="marketing" valuePropName="checked">
              <Checkbox>
                <Text fontSize={16} display="inline-block">
                  Subscribed to email marketing and able to order
                </Text>
              </Checkbox>
            </Form.Item>
          </Box>
          <UserOrder outlets={data.outlets || []} />
          <Modal
            title="Close account confirmation"
            visible={showConfirm}
            onOk={performClose}
            onCancel={() => setShowConfirm(false)}
            okText="Confirm"
          >
            <Typography.Text type="danger">
              Warning: The user cannot be re-enabled one closed.
            </Typography.Text>
          </Modal>
        </Form>
      )}
    </>
  );
};

export default User;

export type UserOrderProps = {
  outlets: DslOutlet[];
};

const UserOrder: React.FC<UserOrderProps> = ({ outlets }) => {
  return (
    <Box variant="card">
      <Text fontSize={16} fontWeight={600} mb="3">
        Outlet Information
      </Text>
      <Text fontSize={14}>This user is assigned to the following outlets:</Text>
      <UserOutletsTable outlets={outlets} loading={false} totalItems={0} />
    </Box>
  );
};
