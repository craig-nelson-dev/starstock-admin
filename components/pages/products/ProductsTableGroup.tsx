import React, { useCallback, useState } from 'react';
import { Checkbox, Tooltip, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { Box, Text } from 'rebass';
import { GeneralModal, DslProduct } from 'dsl-admin-base';
import { AddProductModalContent } from './AddProductModalContent';
import ProductsTable from './ProductsTable';

interface Props {
  items: DslProduct[];
  title: string;
  loading: boolean;
  useDefault: boolean;
}

const text = <span>Level above prodcut category, and only products from this brand owner</span>;

const ProductsTableGroup: React.FC<Props> = ({ items, loading, title, useDefault }) => {
  const [isModalOpen, toggleModal] = useState(false);
  const openModal = useCallback(() => toggleModal(true), []);
  const closeModal = useCallback(() => toggleModal(false), []);
  return (
    <>
      <Box mt={4}>
        <Box display="flex" my={3}>
          <Box sx={{ fontSize: 20 }}>
            <Text variant="h4">{title}</Text>
            {useDefault && (
              <Box display="flex" my={3}>
                <Checkbox defaultChecked>Use Default</Checkbox>
                <Tooltip placement="right" title={text}>
                  <InfoCircleFilled twoToneColor="grey" />
                </Tooltip>
              </Box>
            )}
          </Box>
          <Box ml="auto">
            <Button type="primary" onClick={openModal}>
              Add Products
            </Button>
          </Box>
        </Box>
        <ProductsTable
          products={(items as any) || []}
          loading={loading}
          totalItems={items?.length || 0}
        />
      </Box>

      <GeneralModal opened={isModalOpen} close={closeModal} header="Add Linked Products">
        <AddProductModalContent closeModal={closeModal} items={items || []} loading={loading} />
      </GeneralModal>
    </>
  );
};

export default ProductsTableGroup;
