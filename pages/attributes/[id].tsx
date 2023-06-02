import { Row, Col, Button, Space, Form } from 'antd';
import { Box, Text } from 'rebass';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  useAdminForm,
  RepositoryFactory,
  useUpdateProductFeatureMutation,
  AppSpin,
  StatusValue,
  useInsertProductFeatureMutation,
  ProductFeatureInput,
  ProductFeatureDefaultValueInput,
} from 'dsl-admin-base';
import { PAGES } from '@utils/constant';
import { AddAttributeForm } from 'components/pages/attributes/AddAttributeForm';
import Link from 'next/link';
import { Store } from 'antd/lib/form/interface';

export default function Attributes() {
  const {
    isAdd,
    showErrorMessage,
    showSuccessMessage,
    formInstance,
    submitForm,
    loading,
    data,
    id,
    router,
  } = useAdminForm(RepositoryFactory.get('attribute').getById);

  const [insertProduct, { loading: creating }] = useInsertProductFeatureMutation();
  const [updateProductFeature, { loading: updating }] = useUpdateProductFeatureMutation();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Attributes',
      href: `/${PAGES.ATTRIBUTES}`,
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add Attribute',
      href: '',
    });
  } else if (data) {
    breadcrumbs.push({
      label: data.name,
      href: '',
    });
  }

  const getOptionValues = (values: Store): ProductFeatureDefaultValueInput[] => {
    const items: ProductFeatureDefaultValueInput[] = [];

    for (let [key, value] of Object.entries(values)) {
      if (key.startsWith('values-value-')) {
        const id = key.replace('values-value-', '');

        items.push({
          value: value,
          position: values[`values-position-${id}`],
        });
      }
    }
    return items;
  };

  const onFinish = async (values: Store) => {
    const formData = {
      name: values.name,
      description: values.description,
      featured: false,
      filterable: Boolean(values.filterable),
      position: parseInt(values.position),
      code: values.code || '',
      type: values.type,
      statusValue: values.statusValue,
      storeFrontDisplay: Boolean(values.storeFrontDisplay),
      mandatory: Boolean(values.mandatory),
      brandOwnerDisplay: Boolean(values.brandOwnerDisplay),
      defaultValues: getOptionValues(values),
    };

    try {
      if (isAdd) {
        const afterCreate = await insertProduct({
          variables: {
            input: {
              data: formData,
            },
          },
        });

        router.push(`/attributes/${afterCreate.data?.insertProductFeature?.id}`);
      } else {
        await updateProductFeature({
          variables: {
            input: {
              id: String(id),
              data: {
                ...formData,
              },
            },
          },
        });
      }

      showSuccessMessage();
    } catch (e) {
      showErrorMessage();
    }
  };

  let initialValues: ProductFeatureInput = {
    name: '',
    description: '',
    featured: false,
    filterable: false,
    brandOwnerDisplay: false,
    type: 'freeText',
    position: 0,
    code: '',
    statusValue: StatusValue.ACTIVE,
    defaultValues: [{ value: 'name', position: 1 }],
  };

  if (data) {
    initialValues = {
      name: data.name,
      description: data.description,
      featured: data.featured,
      filterable: data.filterable,
      type: data.type.name,
      position: data.position,
      code: data.code,
      statusValue: data.status.value,
      defaultValues: data.defaultValues,
      mandatory: data.mandatory,
      brandOwnerDisplay: data.brandOwnerDisplay,
      storeFrontDisplay: data.storeFrontDisplay,
    };
  }

  return (
    <Box>
      <Row justify="space-between">
        <Col span={16}>
          <Text variant="pageHeading">
            <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
          </Text>
        </Col>
        <Col span={8}>
          <Row justify="end">
            <Space>
              <Link href="/attributes">
                <Button className="text-caps">Cancel</Button>
              </Link>
              <Button
                type="primary"
                className="text-caps"
                onClick={submitForm}
                loading={creating || updating}
              >
                Save
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
      {loading ? (
        <AppSpin />
      ) : (
        <Box mt="4" sx={{ maxWidth: 700 }}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
            ref={formInstance}
          >
            <AddAttributeForm values={data?.defaultValues || []} type={data?.type.name || ''} />
          </Form>
        </Box>
      )}
    </Box>
  );
}
