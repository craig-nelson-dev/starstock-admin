import React, { useCallback, useState } from 'react';
import { Button, Space, Tooltip } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { Box, Text } from 'rebass';
import DslProductsTable from './DslProductsTable';
import { ProductPicker, DslProduct, ResolveErrorMessageFn } from 'dsl-admin-base';

interface Props {
  items: DslProduct[];
  title: string;
  loading: boolean;
  useDefault: boolean;
  actor: any; // set variable function
  maxSelectedProducts?: number;
  resolveErrorMessage?: ResolveErrorMessageFn;
}

const text = (
  <span>
    Default products are taken from the level above product category for this product, and will only
    products from this brand owner
  </span>
);

const DslProductsTableGroup: React.FC<Props> = ({
  items,
  loading,
  title,
  actor,
  useDefault,
  maxSelectedProducts,
  resolveErrorMessage,
}) => {
  const [isModalOpen, toggleModal] = useState(false);
  const openModal = useCallback(() => toggleModal(true), []);
  const closeModal = useCallback(() => toggleModal(false), []);

  return (
    <>
      <Box mt={4}>
        <Box display="flex" my={3}>
          <Box sx={{ fontSize: 20 }}>
            <Text style={{ textTransform: 'uppercase' }} variant="h4">
              {title}
            </Text>
            {useDefault && (
              <Space>
                <Text fontSize={13}>
                  Default products will be applied if no linked products assigned below
                </Text>
                <Tooltip placement="right" title={text}>
                  <InfoCircleFilled twoToneColor="grey" />
                </Tooltip>
              </Space>
            )}
          </Box>
          <Box ml="auto">
            <Button className="text-caps" type="primary" onClick={openModal}>
              Add Products
            </Button>
          </Box>
        </Box>
        <DslProductsTable
          products={items}
          loading={loading}
          totalItems={items?.length || 0}
          actor={actor}
        />
      </Box>

      <ProductPicker
        resolveErrorMessage={resolveErrorMessage}
        maxSelectedProducts={maxSelectedProducts}
        onChange={actor}
        selectedProducts={items}
        visible={isModalOpen}
        onCancel={closeModal}
      />
    </>
  );
};

export default DslProductsTableGroup;
