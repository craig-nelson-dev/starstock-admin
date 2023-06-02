import { Form, Button, Space, Input, Radio } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  useAdminForm,
  RepositoryFactory,
  useCreateDocumentMutation,
  StatusValue,
} from 'dsl-admin-base';
import { Box } from 'rebass';
import { Store } from 'antd/lib/form/interface';

const BODoc = () => {
  const { isAdd, formInstance, submitForm, showErrorMessage, showSuccessMessage } = useAdminForm(
    RepositoryFactory.get('boDoc').getById,
  );
  const [createDocument] = useCreateDocumentMutation();

  const onFinish = async (values: Store) => {
    if (isAdd) {
      try {
        await createDocument({
          variables: {
            input: {
              statusValue: values.status,
              data: {
                name: values.name,
                url: values.url,
              },
            },
          },
        });

        showSuccessMessage();
      } catch (e) {
        console.log(e);
        showErrorMessage();
      }
    }
  };

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Support Documents',
      href: '/bo-doc',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add Document',
      href: '',
    });
  } else {
    breadcrumbs.push({
      label: 'FAQs',
      href: '',
    });
  }

  const inititalValues = { status: StatusValue.ACTIVE };

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
      <Box variant="card" sx={{ maxWidth: 500 }}>
        <Form
          layout="vertical"
          initialValues={inititalValues}
          ref={formInstance}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="url"
            label="URL"
            rules={[{ required: true, message: 'Url is required' }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Radio.Group>
              <Radio value={StatusValue.ACTIVE}>Active</Radio>
              <Radio value={StatusValue.DISABLED}>Disabled</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Box>
    </>
  );
};

export default BODoc;
