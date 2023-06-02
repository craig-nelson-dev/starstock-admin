import { Modal, Form, Divider, Button, Space, Input, Row, Col, Spin } from 'antd';
import { Box, Text } from 'rebass';
import { RepositoryFactory } from '../repositories/RepositoryFactory';
import { DslOutlet } from '../graphql/generated/graphql';
import { useEffect, useState, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { FormInstance } from 'antd/lib/form';

const OutletRepository = RepositoryFactory.get('outlet');

interface Props {
  visible?: boolean;
  onCancel?: () => void;
  onSelect: (id: number) => void;
}

export const OutletPicker: React.FC<Props> = ({ visible, onCancel, onSelect }) => {
  const [outlets, setOutlets] = useState<DslOutlet[]>();
  const formInstance = useRef<FormInstance>(null);
  const [formValues, setFormValues] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const onFormchange = useDebouncedCallback(async () => {
    if (formInstance.current) {
      const values = await formInstance.current.validateFields();
      setFormValues(values);
    }
  }, 400).callback;

  const clearSearch = () => {
    formInstance.current?.resetFields();
    onFormchange();
  };

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      try {
        const data = await OutletRepository.exactMatch({
          accountNumber: formValues.accountNumber || '',
          postCode: formValues.postCode || '',
        });
        setOutlets(data ? [data] : []);
      } catch (e) {}
      setLoading(false);
    };

    if (formValues.accountNumber || formValues.postCode) {
      search();
    } else {
      setOutlets([]);
    }
  }, [formValues]);

  const foundOutlet = outlets ? outlets[0] : undefined;

  return (
    <Modal visible={visible} onCancel={onCancel} title="Add Oulet Pricing" footer={null}>
      <Box
        sx={{
          maxHeight: 'calc(100vh - 280px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          p: 1,
          fontSize: 1,
        }}
      >
        <Form layout="vertical" ref={formInstance} onValuesChange={onFormchange}>
          <Row gutter={25}>
            <Col xs={16}>
              <Box sx={{ display: 'flex' }}>
                <Space size={15}>
                  <Form.Item label="Account Number" name="accountNumber">
                    <Input></Input>
                  </Form.Item>
                  <Form.Item label="Postcode" name="postCode">
                    <Input></Input>
                  </Form.Item>
                </Space>
              </Box>
            </Col>
            <Col xs={8}>
              <Form.Item label="&nbsp;">
                <Button type="default" onClick={clearSearch}>
                  Clear
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Divider></Divider>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Spin />
          </Box>
        ) : (
          <>
            {foundOutlet ? (
              <Box>
                <Text sx={{ mb: 3 }}>We have found the following outlet:</Text>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    rowGap: 2,
                    columnGap: 3,
                    fontWeight: 600,
                  }}
                >
                  <Text>Account No:</Text>
                  <Text>{foundOutlet.accountNumber}</Text>
                  <Text>Outlet Name:</Text>
                  <Text>{foundOutlet.name}</Text>
                </Box>
              </Box>
            ) : (
              <Text>No outlet found</Text>
            )}
          </>
        )}
      </Box>
      <Divider></Divider>
      <Box sx={{ justifyContent: 'flex-end', display: 'flex', mt: 4 }}>
        <Space size={10}>
          <Button type="default" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            type="primary"
            disabled={!foundOutlet}
            onClick={() => onSelect(foundOutlet ? +foundOutlet.id : 0)}
          >
            Add Pricing
          </Button>
        </Space>
      </Box>
    </Modal>
  );
};
