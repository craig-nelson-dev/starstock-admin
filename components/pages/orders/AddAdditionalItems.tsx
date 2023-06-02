import { Select, Input, Row, Col } from 'antd';
import { Currency, BrandOwner, RepositoryFactory } from 'dsl-admin-base';
import { useEffect, useState } from 'react';
import { Flex, Box, Text } from 'rebass';

interface Props {
  data: any[];
  setFn: (value: any) => void;
  text: string;
  onPriceClick: (id: number) => void;
}

const { Option } = Select;

export const AddAdditionalItems: React.FC<Props> = ({ data, setFn, text, onPriceClick }) => {
  const [brandOwners, setBrandOwners] = useState<BrandOwner[]>([]);

  useEffect(() => {
    RepositoryFactory.get('bo')
      .get({
        page: 1,
        perPage: 100,
        sortBy: 'created',
        sortOrder: 'asc',
      })
      .then((result) => {
        setBrandOwners((result?.brandOwners as BrandOwner[]) || []);
      });
  }, []);

  const onChangeAdditional = (fieldName: string, index: number, value: any) => {
    setFn((prev: any) => {
      const data = prev?.map((item: any) => item);
      data[index] = {
        ...data[index],
        [fieldName]: value,
      };
      return data;
    });
  };

  const addNewItem = () => {
    setFn((c: any) => [
      ...c,
      {
        price: 0,
        name: '',
        tax: 20,
      },
    ]);
  };
  const removeLastItem = () => {
    setFn((c: any) => c.slice(0, -1));
  };

  return (
    <>
      {data?.map((item, index) => (
        <Box sx={{ my: 2 }} key={index}>
          <Row>
            <Col xs={8}>
              <Input
                name="name"
                onChange={(e) => onChangeAdditional('name', index, e.target.value)}
              ></Input>
            </Col>
            <Col xs={8}>
              <Flex sx={{ placeContent: 'center', height: '100%', px: 2 }}>
                <Select
                  style={{ minWidth: 150, width: '100%' }}
                  onChange={(value) => onChangeAdditional('brandOwner', index, value)}
                >
                  {brandOwners.map((option) => {
                    return (
                      <Option key={option.id} value={option.id}>
                        {option.displayName}
                      </Option>
                    );
                  })}
                </Select>
              </Flex>
            </Col>
            <Col xs={4}>
              <Flex
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  span: { textDecoration: 'underline', cursor: 'pointer' },
                }}
                onClick={() => onPriceClick(index)}
              >
                <Currency value={item.price * 100 || 0} />
              </Flex>
            </Col>
            <Col xs={4}>
              <Flex sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Currency value={item.price * (100 + item.taxRate) || 0} />
              </Flex>
            </Col>
          </Row>
        </Box>
      ))}
      <Flex sx={{ my: 2 }}>
        <Text
          onClick={addNewItem}
          sx={{ textDecoration: 'underline', cursor: 'pointer', width: 'fit-content' }}
        >
          {text}
        </Text>
        {data?.length ? (
          <Text
            onClick={removeLastItem}
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              width: 'fit-content',
              ml: 'auto',
            }}
          >
            Remove
          </Text>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
};
