import { Box, Text } from 'rebass';
import { Row, Space, Menu, Select, Form } from 'antd';
import {
  Condition,
  SettingDropdown,
  PromotionConditionType,
  usePageData,
  RepositoryFactory,
} from 'dsl-admin-base';

const { Option } = Select;

interface Props {
  condition: Condition;
  onRemove: (id: number) => void;
}

export const BrandOwnerProductCondition: React.FC<Props> = ({ condition, onRemove }) => {
  const { data: brands } = usePageData(() =>
    RepositoryFactory.get('bo').get({ page: 1, perPage: 1000, sortBy: 'name', sortOrder: 'asc' }),
  );

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
        <Text variant="h4">brand owner - all products</Text>
        <Space>
          <SettingDropdown overlay={menu}></SettingDropdown>
        </Space>
      </Row>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <Text sx={{ mr: 3 }}>Apply this promotion to all products from brand owner: </Text>
        <Form.Item name={`condition-${PromotionConditionType.BRAND_PRODUCT}`} noStyle>
          <Select style={{ width: 300 }} placeholder="Select">
            {brands?.brandOwners.map((bo) => {
              return <Option value={bo?.id as number}>{bo?.displayName}</Option>;
            })}
          </Select>
        </Form.Item>
      </Box>
    </Box>
  );
};
