import { Box, Text } from 'rebass';
import { Button, notification } from 'antd';
import { BreadcrumbItem, AppBreadcrumb, RepositoryFactory } from 'dsl-admin-base';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'sage',
    href: '/sage',
  },
];

const Sage = () => {
  const onSyncData = async () => {
    try {
      const url = await RepositoryFactory.get('sage').sync();
      window.open(url);
    } catch (e) {
      notification.error({ message: 'Error occured' });
      console.log(e);
    }
  };

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
      </Box>
      <Box>
        <Text sx={{ fontWeight: 500, my: 3 }}>
          To sync orders to Sage, click the button bellow:
        </Text>
        <Button type="primary" onClick={onSyncData} className="text-caps">
          sync orders
        </Button>
      </Box>
    </>
  );
};

export default Sage;
