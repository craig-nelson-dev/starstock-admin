import { Form, Button, Space, Input, Select, Radio } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  DslUser,
  PAGES,
  RepositoryFactory,
  useAdminForm,
  useCreateAdministratorMutation,
  useFetchTableData,
  useUpdateAdminUserMutation,
} from 'dsl-admin-base';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Box } from 'rebass';

const boParams = {
  sortBy: 'id',
  sortOrder: 'asc',
  page: 1,
  perPage: 1000,
};

const BODoc = () => {
  const router = useRouter();
  const boReq = useFetchTableData(RepositoryFactory.get('bo').get, PAGES.BO_ADMIN, boParams);
  const [createAdministrator] = useCreateAdministratorMutation();
  const [updateAdministrator] = useUpdateAdminUserMutation();

  const {
    formInstance,
    isAdd,
    data,
    loading: busy,
    showSuccessMessage,
    showErrorMessage,
  } = useAdminForm(RepositoryFactory.get('user').getById);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Brand Owner',
      href: '/bo',
    },
    {
      label: 'Administrators',
      href: '/bo-admin',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add User',
      href: '',
    });
  } else {
    breadcrumbs.push({
      label: `${data?.firstName} ${data?.lastName}`,
      href: '',
    });
  }

  useEffect(() => {
    if (data) {
      setFormValues(data);
    }
  }, [data]);

  const setFormValues = (admin: DslUser) => {
    formInstance.current?.setFields([
      { name: 'firstName', value: admin.firstName },
      { name: 'lastName', value: admin.lastName },
      { name: 'statusValue', value: admin?.status?.value },
      { name: 'email', value: admin.email },
      { name: 'brandOwnerId', value: admin?.brand?.id },
      ...Object.keys(admin).map((k) => ({ name: k, value: admin[k as keyof DslUser] })),
    ]);
  };

  const onFinish = async (values: any) => {
    try {
      const data = {
        variables: {
          i: {
            user: {
              title: 'Mr',
              middleName: 'a',
              marketing: false,
              phone: '',
              type: 'brandOwner',
              ...values,
            },
          },
        },
      };
      let res = null;
      if (isAdd) {
        res = await createAdministrator(data);
        if (res?.data?.insertAdminUser.id) {
          showSuccessMessage();
          router.push('/bo-admin');
        }
      } else {
        res = await updateAdministrator({ variables: { input: { user: data.variables.i.user } } });
        if (res?.data?.updateAdminUser.id) {
          showSuccessMessage();
          router.push('/bo-admin');
        }
      }
    } catch (e) {
      showErrorMessage();
    }
  };

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button onClick={() => router.back()} disabled={busy} type="default">
            CANCEL
          </Button>
          <Button disabled={busy} onClick={() => formInstance.current?.submit()} type="primary">
            SAVE
          </Button>
        </Space>
      </Box>
      <Box variant="card" sx={{ maxWidth: 400 }}>
        <Form onFinish={onFinish} ref={formInstance} layout="vertical">
          <Form.Item name="brandOwnerId" label="Brand Owner">
            <Select disabled={!isAdd} style={{ width: 200 }}>
              {boReq.data?.brandOwners.map((s) => {
                if (s) {
                  return (
                    <Select.Option key={s.id} value={s.id}>
                      {s.displayName}
                    </Select.Option>
                  );
                } else {
                  return <></>;
                }
              })}
            </Select>
          </Form.Item>
          <Form.Item style={{ display: 'none' }} name="id" label="First Name">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="firstName" label="First Name">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input disabled={!isAdd} type="text" />
          </Form.Item>
          {isAdd && (
            <>
              <Form.Item name="password" label="Password">
                <Input type="password" />
              </Form.Item>
              <Form.Item name="confirmPassword" label="Confirm Password">
                <Input type="password" />
              </Form.Item>
            </>
          )}
          <Form.Item name="statusValue" label="Active Status">
            <Radio.Group>
              <Radio value={0}>Active</Radio>
              <Radio value={3}>Disabled</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Box>
    </>
  );
};

export default BODoc;
