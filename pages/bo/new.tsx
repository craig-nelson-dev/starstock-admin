import { Button, Space } from 'antd';
import { AppBreadcrumb, BreadcrumbItem } from 'dsl-admin-base';
import { Box } from 'rebass';
import { BOAddForm } from 'components/pages/bo/BOAddForm';
import { useState } from 'react';
import { useRouter } from 'next/router';

const BODoc = () => {
  const router = useRouter();
  const [submitFormFn, setSubmitFormFn] = useState<undefined | (() => void)>();
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Add Brand Owner',
      href: '',
    },
  ];

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button onClick={() => router.push('/bo')} type="default" className="text-caps">
            Cancel
          </Button>
          <Button
            onClick={() => submitFormFn && submitFormFn()}
            type="primary"
            className="text-caps"
          >
            Add
          </Button>
        </Space>
      </Box>
      <BOAddForm setSubmitFn={(fn) => setSubmitFormFn(() => fn)} />
    </>
  );
};

export default BODoc;
