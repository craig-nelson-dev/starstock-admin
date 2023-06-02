import { Form, Button, Space, Input, Select, Radio } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  useCreateTaxCodeMutation,
  useUpdateTaxCodeMutation,
  StatusValue,
  AppSpin,
  useAdminForm,
  RepositoryFactory,
} from 'dsl-admin-base';
import { Box } from 'rebass';
import { Store } from 'antd/lib/form/interface';

const Tax = () => {
  const [createTaxCode] = useCreateTaxCodeMutation();
  const [updateTaxCode] = useUpdateTaxCodeMutation();
  const {
    loading,
    isAdd,
    router,
    showErrorMessage,
    showSuccessMessage,
    data,
    formInstance,
    submitForm,
    id,
  } = useAdminForm(RepositoryFactory.get('taxCode').getById);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Tax Rates',
      href: '/taxes',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add Tax Rate',
      href: '',
    });
  } else if (data) {
    breadcrumbs.push({
      label: data.name,
      href: '',
    });
  }

  const onFinish = async (values: Store) => {
    const taxCodeInput = {
      status: values.status,
      data: {
        name: values.name,
        code: values.name,
        rate: values.rate,
        calculationType: values.calculationType,
        priority: 1,
        inclusive: true,
        id,
      },
    };

    try {
      if (isAdd) {
        await createTaxCode({
          variables: {
            input: taxCodeInput,
          },
        });

        router.push('/taxes');
      } else {
        await updateTaxCode({
          variables: {
            input: taxCodeInput,
          },
        });
      }

      showSuccessMessage();
    } catch (e) {
      showErrorMessage(
        e.message && e.message.includes('code already exists')
          ? 'Tax code already exists'
          : undefined,
      );
    }
  };

  let initialValues;

  if (isAdd) {
    initialValues = { type: 'percentage', status: StatusValue.ACTIVE };
  } else if (data) {
    initialValues = {
      ...data,
      status: data.status.value,
    };
  }

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button type="default">CANCEL</Button>
          <Button type="primary" onClick={submitForm}>
            SAVE
          </Button>
        </Space>
      </Box>
      {loading ? (
        <AppSpin></AppSpin>
      ) : (
        <Box variant="card" sx={{ maxWidth: 500 }}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
            ref={formInstance}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="rate"
              label="Tax Rate"
              rules={[{ required: true, message: 'Rate is required' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item name="calculationType" label="Type">
              <Select>
                <Select.Option value={'percentage'}>Percentage(%)</Select.Option>
                <Select.Option value={'amount'}>Amount</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Radio.Group>
                <Radio value={StatusValue.ACTIVE}>Active</Radio>
                <Radio value={StatusValue.DISABLED}>Disabled</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Box>
      )}
    </>
  );
};

export default Tax;
