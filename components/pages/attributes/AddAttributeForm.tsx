import { Form, Input, Radio, Select, Checkbox } from 'antd';
import { Text } from 'rebass';
import { StatusValue, ProductFeatureDefaultValue, ProductAttributeType } from 'dsl-admin-base';
import { Box } from 'rebass';
import { useState } from 'react';
import { ValuesTable } from './ValuesTable';
const { Option } = Select;

interface Props {
  values: ProductFeatureDefaultValue[];
  type: string;
}

export const AddAttributeForm: React.FC<Props> = ({ values, type }) => {
  const [currentType, setCurrentType] = useState<string>(type);
  const typeOptions = [
    {
      label: 'Free text',
      value: ProductAttributeType.freeText,
    },
    {
      label: 'Select',
      value: ProductAttributeType.select,
    },
    {
      label: 'Checkbox',
      value: ProductAttributeType.checkbox,
    },
    {
      label: 'Radio',
      value: ProductAttributeType.radio,
    },
  ];

  const shouldShowValuesTable =
    currentType == ProductAttributeType.checkbox ||
    currentType == ProductAttributeType.select ||
    currentType == ProductAttributeType.radio;

  return (
    <>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Name is required' }]}>
        <Input></Input>
      </Form.Item>
      <Form.Item name="code" label="Code">
        <Input></Input>
      </Form.Item>
      <Form.Item
        name="position"
        label="Position"
        rules={[{ required: true, message: 'Position is required' }]}
      >
        <Input type="number" style={{ width: 150 }}></Input>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Description is required' }]}
      >
        <Input.TextArea rows={4}></Input.TextArea>
      </Form.Item>
      <Form.Item name="type" label="Type">
        <Select
          placeholder="Select"
          style={{ width: '100%' }}
          onChange={(e) => setCurrentType(e as string)}
        >
          {typeOptions.map((option) => {
            return (
              <Option key={option.label} value={option.value}>
                {option.label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      {shouldShowValuesTable && <ValuesTable values={values} />}
      <Form.Item name="statusValue" label="Status">
        <Radio.Group className="radio-group-caps">
          <Radio value={StatusValue.ACTIVE}>Active</Radio>
          <Radio value={StatusValue.DISABLED}>Disabled</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Options">
        <Box sx={{ label: { display: 'block', ml: '0 !important', mb: 2 } }}>
          <Form.Item name="storeFrontDisplay" valuePropName="checked" noStyle>
            <Checkbox>
              <Text sx={{ fontSize: 2, userSelect: 'none' }} as="span">
                Display on storefront
              </Text>
            </Checkbox>
          </Form.Item>
          <Form.Item name="mandatory" valuePropName="checked" noStyle>
            <Checkbox>
              <Text sx={{ fontSize: 2, userSelect: 'none' }} as="span">
                Mandatory
              </Text>
            </Checkbox>
          </Form.Item>
          <Form.Item name="filterable" valuePropName="checked" noStyle>
            <Checkbox>
              <Text sx={{ fontSize: 2, userSelect: 'none' }} as="span">
                Filterable
              </Text>
            </Checkbox>
          </Form.Item>
          <Form.Item name="brandOwnerDisplay" valuePropName="checked" noStyle>
            <Checkbox>
              <Text sx={{ fontSize: 2, userSelect: 'none' }} as="span">
                Brand Owners Display
              </Text>
            </Checkbox>
          </Form.Item>
        </Box>
      </Form.Item>
    </>
  );
};
