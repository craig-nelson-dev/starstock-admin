import { Form, Input } from 'antd';
import { Box } from 'rebass';

export const ProductSeoTab = () => {
  return (
    <Box sx={{ maxWidth: 765 }}>
      <Form.Item
        name="seoTitle"
        label="Seo Title"
        // rules={[{ required: true, message: 'SEO Title is required' }]}
      >
        <Input style={{ maxWidth: 500 }}></Input>
      </Form.Item>
      <Form.Item
        name="seoDescription"
        label="Seo Description"
        // rules={[{ required: true, message: 'SEO Description is required' }]}
      >
        <Input style={{ maxWidth: 500 }}></Input>
      </Form.Item>
      <Form.Item
        name="seoKeywords"
        label="Seo Keywords"
        // rules={[{ required: true, message: 'SEO Keywords is required' }]}
      >
        <Input style={{ maxWidth: 500 }}></Input>
      </Form.Item>
    </Box>
  );
};
