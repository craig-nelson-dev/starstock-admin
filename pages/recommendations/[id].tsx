import { Form, Button, Space, Select, Input, Radio } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  AppSpin,
  useAdminForm,
  RepositoryFactory,
  useUpsertRecommendationMutation,
  UpsertRecommendationInput,
  useFetchTableData,
  PAGES,
  Date,
} from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import { Store } from 'antd/lib/form/interface';
import TextArea from 'antd/lib/input/TextArea';

const statuses = [
  { id: 1, displayName: 'Active' },
  { id: 7, displayName: 'Closed' },
  { id: 2, displayName: 'Deleted' },
];

const Recomendation = () => {
  const boReq = useFetchTableData(RepositoryFactory.get('bo').get, PAGES.BO, { perPage: 1000 });
  const [upsertRecommendations] = useUpsertRecommendationMutation();
  const {
    loading,
    isAdd,
    router,
    showErrorMessage,
    showSuccessMessage,
    data,
    formInstance,
    id,
  } = useAdminForm(RepositoryFactory.get('recomendations').getById);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Messages',
      href: '/recommendations',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add Message',
      href: '',
    });
  } else if (data) {
    breadcrumbs.push({
      label: data.title,
      href: '',
    });
  }

  const onFinish = async (values: Store) => {
    const i: UpsertRecommendationInput = {
      id: id,
      title: values.title,
      description: values.description,
      statusId: values.status,
      brandOwnerID: values.brandOwnerID,
      close: values.status == 7,
    };

    try {
      await upsertRecommendations({ variables: { i } });
      showSuccessMessage();
      router.back();
    } catch (e) {
      showErrorMessage(e.message);
    }
  };

  let initialValues;

  if (isAdd) {
    initialValues = {
      title: '',
      status: 1,
      description: '',
      bo: '',
    };
  } else if (data) {
    initialValues = {
      ...data,
      status: data.status.id,
      brandOwnerID: data.brandOwner.id,
    };
  }

  const shouldDisableControls = () => {
    return data && data.status.id == '7';
  };
  const disabledBOdropdown = () => isAdd == false;

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button onClick={() => router.back()} type="default">
            Cancel
          </Button>
          <Button
            type="primary"
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
              name="brandOwnerID"
              label="Brand Owner"
              rules={[{ required: true, message: 'Required Field' }]}
            >
              <Select disabled={disabledBOdropdown()}>
                {boReq.data?.brandOwners
                  .sort((a, b) => {
                    const nameA = a?.displayName as string;
                    const nameB = b?.displayName as string;
                    return nameA.localeCompare(nameB);
                  })
                  .map((bo) => {
                    return (
                      <Select.Option key={bo?.id} value={bo?.id || 0}>
                        {bo?.displayName}
                      </Select.Option>
                    );
                  })}
              </Select>
            </Form.Item>

            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Required Field' }]}
            >
              <Input disabled={shouldDisableControls()} />
            </Form.Item>

            <Form.Item
              name="description"
              label="Message Detail"
              rules={[{ required: true, message: 'Required Field' }]}
            >
              <TextArea disabled={shouldDisableControls()} rows={6} />
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Pick a status' }]}
            >
              <Radio.Group disabled={shouldDisableControls()}>
                {statuses.map((bo) => {
                  return (
                    <Radio key={bo.id} value={bo.id}>
                      {bo?.displayName}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Form.Item>
            {data?.createdBy && (
              <Text>Created By: {`${data.createdBy.firstName} ${data.createdBy.lastName}`}</Text>
            )}
            {data?.viewedOn && (
              <Box style={{ display: 'flex' }}>
                <Text style={{ marginRight: 2 }}>Viewed: </Text>
                <Date format={'DD/MM/YYYY hh:mm'} value={data.viewedOn} />
              </Box>
            )}
            {data?.status && (
              <Space>
                <Text>Status: {data.status.displayName}</Text>
                {data?.status.id == '7' && (
                  <>
                    <Text>-</Text>
                    <Date format={'DD/MM/YYYY hh:mm'} value={data.closedOn} />
                  </>
                )}
              </Space>
            )}
          </Form>
        </Box>
      )}
    </>
  );
};

export default Recomendation;
