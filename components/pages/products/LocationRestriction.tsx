import { Box } from 'rebass';
import { Form, Input } from 'antd';
import { DataSrcType } from 'dsl-admin-base';

interface LocationRestrictionProps {
  dataSrc: DataSrcType[];
  defaultKeys: string;
  name: string;
}

export const LocationRestriction: React.FC<LocationRestrictionProps> = ({ defaultKeys, name }) => {
  return (
    <Box>
      <Form.Item style={{ marginBottom: 0 }} name={name} initialValue={defaultKeys}>
        <Input.TextArea rows={15}></Input.TextArea>
      </Form.Item>
    </Box>
  );
};
