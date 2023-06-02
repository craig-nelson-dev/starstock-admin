import { Form, Button, Space, Input } from 'antd';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  RepositoryFactory,
  useAdminForm,
  AppSpin,
  useUpdateCompanyDetailsMutation,
  StarStockCompanyDetailsInput,
} from 'dsl-admin-base';
import { Box, Text } from 'rebass';

import { Store } from 'antd/lib/form/interface';
import Link from 'next/link';

const CompanyDetails = () => {
  const {
    loading,
    data,
    showErrorMessage,
    showSuccessMessage,
    submitForm,
    formInstance,
  } = useAdminForm(RepositoryFactory.get('company').get);
  const [updateCompanyDetails] = useUpdateCompanyDetailsMutation();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Company Details',
      href: '/company-details',
    },
  ];

  const formHeadingStyle = {
    fontSize: 2,
    mb: 3,
  };

  const onFinish = async (values: Store) => {
    try {
      await updateCompanyDetails({
        variables: {
          input: {
            data: values as StarStockCompanyDetailsInput,
          },
        },
      });
      showSuccessMessage();
    } catch (e) {
      showErrorMessage();
    }
  };

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Link href="/">
            <Button type="default">CANCEL</Button>
          </Link>
          <Button type="primary" onClick={submitForm}>
            SAVE
          </Button>
        </Space>
      </Box>
      {loading ? (
        <AppSpin></AppSpin>
      ) : (
        <Form layout="vertical" onFinish={onFinish} initialValues={data} ref={formInstance}>
          <Box variant="card" sx={{ maxWidth: 500 }}>
            <Text sx={formHeadingStyle}>General</Text>
            <Box sx={{ pl: 4, mb: 3 }}>
              <Form.Item name="companyName" label="Company Name">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="address1" label="Address 1">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="address2" label="Address 2">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="city" label="City">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="county" label="County">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="postcode" label="Postcode">
                <Input type="text" />
              </Form.Item>
            </Box>
            <Text sx={formHeadingStyle}>Other Details</Text>
            <Box sx={{ pl: 4 }}>
              <Form.Item name="vatNumber" label="VAT Number">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="awrs" label="AWRS">
                <Input type="text" />
              </Form.Item>
            </Box>
          </Box>
        </Form>
      )}
    </>
  );
};

export default CompanyDetails;
