import { Box, Text } from 'rebass';
import { Row, Space, Menu, InputNumber } from 'antd';
import { Condition, SettingDropdown } from 'dsl-admin-base';

interface Props {
  condition: Condition;
  onChange: (condition: Condition) => void;
  onRemove: (id: number) => void;
}

export const MOVConditionControl: React.FC<Props> = ({ condition, onChange, onRemove }) => {
  const value = condition.equalOrGreater / 100;

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

  const onInputChange = (value: number) => {
    onChange({
      ...condition,
      equalOrGreater: value * 100,
    });
  };

  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">MOV</Text>
        <Space>
          <SettingDropdown overlay={menu}></SettingDropdown>
        </Space>
      </Row>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <Text>Customer spend a minimum of</Text>
        <Text sx={{ ml: 4, mr: 3 }}>£</Text>
        <InputNumber value={value} onChange={(e) => onInputChange(e as number)} />
        <Text sx={{ ml: 3 }}>Ex VAT</Text>
      </Box>
    </Box>
  );
};
