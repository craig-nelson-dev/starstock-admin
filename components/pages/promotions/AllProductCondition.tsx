import { Box, Text } from 'rebass';
import { Row, Space, Menu } from 'antd';
import { Condition, SettingDropdown } from 'dsl-admin-base';

interface Props {
  condition: Condition;
  onRemove: (id: number) => void;
}

export const AllProductCondition: React.FC<Props> = ({ condition, onRemove }) => {
  const onClickMenu = (key: string) => {
    if (key === 'delete') {
      onRemove(condition.id);
    }
  };

  const menu = (
    <Menu onClick={(e) => onClickMenu(e.key as string)}>
      <Menu.Item key="delete">Remove condition</Menu.Item>
    </Menu>
  );

  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">all products</Text>
        <Space>
          <SettingDropdown overlay={menu}></SettingDropdown>
        </Space>
      </Row>
    </Box>
  );
};
