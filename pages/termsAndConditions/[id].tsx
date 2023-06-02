import { Form, Button, Space, Input, Radio } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  AppSpin,
  useAdminForm,
  RepositoryFactory,
  useInsertTermsConditionsMutation,
  useUpdateTermsConditionsMutation,
  InsertTermsConditions,
  UpdateTermsConditions,
} from 'dsl-admin-base';
import { Box } from 'rebass';
import TextArea from 'antd/lib/input/TextArea';

const statuses = [
  { id: 0, name: 'Active' },
  { id: 3, name: 'Disabled' },
];

const Recomendation = () => {
  const [insertTermsConditions] = useInsertTermsConditionsMutation();
  const [updateTermsConditions] = useUpdateTermsConditionsMutation();
  const {
    loading,
    isAdd,
    router,
    data,
    formInstance,
    id,
    showSuccessMessage,
    showErrorMessage,
  } = useAdminForm(RepositoryFactory.get('termsConditions').getById);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Terms & Conditions',
      href: '/termsAndConditions',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add Terms & Conditions',
      href: '',
    });
  } else if (data) {
    breadcrumbs.push({
      label: data.title,
      href: '',
    });
  }

  const onFinish = async (values: any) => {
    try {
      const data: InsertTermsConditions | UpdateTermsConditions = {
        title: values.title,
        content: values.content,
        statusValue: values.statusId,
      };
      if (isAdd) {
        await insertTermsConditions({
          variables: {
            input: data,
          },
        });
      } else {
        const dataUpdate: any = { ...data };
        dataUpdate.id = id;
        await updateTermsConditions({
          variables: {
            input: dataUpdate,
          },
        });
      }

      showSuccessMessage();
      router.back();
    } catch (err) {
      console.log(err);
      showErrorMessage();
    }
  };

  let initialValues = {};
  if (data) {
    initialValues = {
      ...data,
      statusId: data.status.value,
    };
  }

  const inputIsDisbaled = () => data && data.status.value.toString() == '3';

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button onClick={router.back} type="default">
            Cancel
          </Button>
          <Button
            type="primary"
            loading={loading}
            onClick={() => {
              formInstance.current?.submit();
            }}
          >
            Save
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
              name="title"
              label="Name"
              rules={[{ required: true, message: 'Required Field' }]}
            >
              <Input disabled={inputIsDisbaled()} />
            </Form.Item>

            <Form.Item
              name="content"
              label="Terms And Conditions"
              rules={[{ required: true, message: 'Required Field' }]}
            >
              <TextArea disabled={inputIsDisbaled()} rows={8} size={'large'} />
            </Form.Item>
            <Form.Item name="statusId">
              <Radio.Group disabled={inputIsDisbaled()} className="radio-group-caps">
                {statuses.map((s) => {
                  return (
                    <Radio key={s.id} value={s.id}>
                      {s.name}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Form.Item>
          </Form>
        </Box>
      )}
    </>
  );
};

export default Recomendation;
