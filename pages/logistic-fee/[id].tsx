import { Form, Button, Space, Input, Select, Radio } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  useAdminForm,
  useCreateLogisticsFeeMutation,
  useUpdateLogisticsFeeMutation,
  StatusValue,
  RepositoryFactory,
  AppSpin,
} from 'dsl-admin-base';
import { Box } from 'rebass';
import { Store } from 'antd/lib/form/interface';
import Link from 'next/link';

const LogisticFee = () => {
  const {
    showErrorMessage,
    showSuccessMessage,
    submitForm,
    isAdd,
    formInstance,
    data,
    loading,
    id,
    router,
  } = useAdminForm(RepositoryFactory.get('logisticFee').getById);

  const [createLogisticsFee, { loading: creating }] = useCreateLogisticsFeeMutation();
  const [updateLogisticsFee, { loading: updating }] = useUpdateLogisticsFeeMutation();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'logistics fees',
      href: '/logistic-fee',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add logistics fee',
      href: '',
    });
  } else if (data) {
    breadcrumbs.push({
      label: data.name,
      href: '',
    });
  }

  const onFinish = async (values: Store) => {
    const formData = {
      name: values.name,
      logisticsTypeId: 5,
      statusValue: values.status,
      fee: values.fee,
    };

    try {
      if (isAdd) {
        const createdLogisticsFee = await createLogisticsFee({
          variables: {
            input: formData,
          },
        });

        router.push(`/logistic-fee/${createdLogisticsFee.data?.insertAdminLogisticsFee.fee.id}`);
      } else {
        await updateLogisticsFee({
          variables: {
            input: {
              id: id as number,
              ...formData,
            },
          },
        });
      }

      showSuccessMessage();
    } catch (e) {
      showErrorMessage();
    }
  };

  const initialValues = data
    ? { status: data.status.value, name: data.name, type: 'litre_charge', fee: data.fee }
    : {
        status: StatusValue.ACTIVE,
        type: 'litre_charge',
      };

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Link href="/logistic-fee">
            <Button type="default">CANCEL</Button>
          </Link>
          <Button type="primary" onClick={submitForm} loading={creating || updating}>
            SAVE
          </Button>
        </Space>
      </Box>
      {loading ? (
        <AppSpin />
      ) : (
        <Box variant="card" sx={{ maxWidth: 500 }}>
          <Form
            layout="vertical"
            ref={formInstance}
            onFinish={onFinish}
            initialValues={initialValues}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="fee"
              label="Default Fee (GBP)"
              rules={[{ required: true, message: 'Fee is required' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item name="type" label="Type">
              <Select>
                <Select.Option value={'litre_charge'}>Per Litre Charge</Select.Option>
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

export default LogisticFee;
