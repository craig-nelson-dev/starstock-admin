import { Row, Button } from 'antd';
import { Box, Text } from 'rebass';
import { AppBreadcrumb, BreadcrumbItem } from 'dsl-admin-base';
import { PAGES } from '@utils/constant';
import { SettingOutlined } from '@ant-design/icons';
import { CategoriesAddForm } from 'components/pages/categories/CategoriesAddForm';

export default function ProductGeneral() {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Category',
      href: `/${PAGES.CATEGORIES}`,
    },
    {
      label: 'Add Category',
      href: '',
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
          <Row align="middle">
            <Button
              type="primary"
              className="text-caps"
              style={{ padding: '4px 24px', marginRight: 24 }}
            >
              <Text letterSpacing="0.5px">Save</Text>
            </Button>
            <Button className="text-icon">
              <SettingOutlined size={24} />
            </Button>
          </Row>
        </Text>
      </Box>
      <CategoriesAddForm />
    </Box>
  );
}
