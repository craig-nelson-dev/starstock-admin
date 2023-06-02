import React from 'react';
import { Input, Form, Row, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
  TermsConditions,
} from 'dsl-admin-base';
import Link from 'next/link';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';
import { TermsAndConditionsTable } from 'components/pages/termsAndConditions/TermsAndConditionsTable';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const { loading, data } = useFetchTableData(
    RepositoryFactory.get('termsConditions').get,
    PAGES.TERMS_CONDITIONS,
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Terms & Conditions',
      href: '/termsAndConditions',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <Row>
            <Box>
              <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
            </Box>
          </Row>
          <Box>
            <Link href={`${router.pathname}/new`}>
              <Button type="primary" className="text-caps">
                Add Terms & Conditions
              </Button>
            </Link>
          </Box>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: '', style: '' }}>
        <Form.Item name="search" label="&nbsp;">
          <Input
            style={{ width: 200 }}
            placeholder="SEARCH TERMS & CONDITIONS"
            prefix={<SearchOutlined />}
          />
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <TermsAndConditionsTable
          items={(data?.termsConditions as TermsConditions[]) || []}
          loading={loading}
          totalItems={data?.totalCount || 1}
        />
      </Box>
    </Box>
  );
}
