import { Box } from 'rebass';
import { Form, Input, Col, Select, Radio } from 'antd';

export const CategoriesAddForm: React.FC = () => {
  return (
    <Box mt="4">
      <Form layout="vertical">
        <Col span={8}>
          <Form.Item label="Name" name="product_code">
            <Input placeholder="Product code" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item name="location" label="Location">
            <Select placeholder="Root level" className="select-placeholder-caps">
              <Select.Option value="Mr">MR</Select.Option>
              <Select.Option value="Ms">MS</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Placeholder" rows={4} />
          </Form.Item>
        </Col>
        <Form.Item label="Status" name="status">
          <Radio.Group>
            <Radio value={0}>Active</Radio>
            <Radio value={1}>Hidden</Radio>
            <Radio value={2}>Disabled</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Box>
  );
};
