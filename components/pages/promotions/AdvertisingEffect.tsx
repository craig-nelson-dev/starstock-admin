import { Box, Text } from 'rebass';
import { Row, Space } from 'antd';
interface Props {}

export const AdvertisingEffect: React.FC<Props> = () => {
  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">Advertising only</Text>
        <Space></Space>
      </Row>
    </Box>
  );
};
