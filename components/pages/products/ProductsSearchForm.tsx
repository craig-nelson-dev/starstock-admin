import { Box, Text } from 'rebass';
import { Form, Input, Row, Col, Divider, Checkbox, Select, Button } from 'antd';
import { useAdvancedForm, ManageSelectedItems, SelectedItem } from 'dsl-admin-base';
// import { OrderPicker } from 'components/app/OrderPicker';
// import { RepositoryFactory } from 'repositories/RepositoryFactory';
import { useEffect, useState } from 'react';
// import { CategoryTree } from 'components/app/CategoryTree';

const { Option } = Select;

// const ProductRepository = RepositoryFactory.get('product');

export const ProductsSearchForm: React.FC = () => {
  // const [productData, setProductData] = useState<>();
  const {
    formInstance,
    setOpenPicker,
    isOpenSelectedItems,
    setOpenSelectedItems,
  } = useAdvancedForm();

  const [selectedOrders, setSelectedOrders] = useState<SelectedItem[]>([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const [dataProduct] = await Promise.all([ProductRepository.get({ perPage: 1 })]);
    //   setProductData(dataProduct);
    // };
    // fetchData();
  }, []);

  useEffect(() => {
    formInstance.current?.setFieldsValue({
      inOrders: selectedOrders.map((o) => o.id).join(','),
    });
  }, [selectedOrders]);

  return (
    <Box>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ category: '', searchIn: [] }}
        ref={formInstance}
      >
        <Row gutter={25}>
          <Col xs={12}>
            <Form.Item label="Search results with" name="searchText">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Row gutter={15}>
              <Col span={12}>
                <Form.Item label="Price from (£)" name="priceFrom">
                  <Input type="number"></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="priceTo" label="Price to (£)">
                  <Input type="number"></Input>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Form.Item label="Status" name="status">
              <Select allowClear>
                <Option value="">Status</Option>
                <Option value="A">Active</Option>
                <Option value="D">Disabled</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={12}>
            {/* <CategoryTree data={productData?.categories} label="Category"></CategoryTree> */}
          </Col>
        </Row>
        <Divider style={{ marginTop: 0 }}></Divider>
        <Form.Item label="Search in" name="searchIn">
          <Checkbox.Group>
            <Row gutter={18}>
              <Col>
                <Checkbox value="pname">Product name</Checkbox>
              </Col>
              <Col>
                <Checkbox value="pshort">Short description</Checkbox>
              </Col>
              <Col>
                <Checkbox value="pfull">Full description</Checkbox>
              </Col>
              <Col>
                <Checkbox value="pkeywords">Keywords</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Divider></Divider>
        <Row gutter={25}>
          <Col xs={6}>
            <Form.Item label="Product code" name="code">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={6}>
            <Form.Item label="Tag" name="tag">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item label="Sort">
              <Row gutter={25}>
                <Col span={12}>
                  <Form.Item name="sortBy">
                    <Select>
                      <Option value="list_price">List price</Option>
                      <Option value="product">Name</Option>
                      <Option value="price">Price</Option>
                      <Option value="code">CODE</Option>
                      <Option value="amount">Quantity</Option>
                      <Option value="status">Status</Option>
                      <Option value="bestsellers">Bestsellers</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="sortOrder">
                    <Select>
                      <Option value="desc">DESC</Option>
                      <Option value="asc">ASC</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Subcategories" name="subCategory" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label="Purchased in orders">
          <Row align="middle" gutter={[25, 17]}>
            <Col xs={10}>
              <Text
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setOpenSelectedItems(true);
                }}
              >
                <Text color="primary" sx={{ display: 'inline-block', mr: 2 }}>
                  {selectedOrders.length}
                </Text>
                items selected
              </Text>
              <ManageSelectedItems
                visible={isOpenSelectedItems}
                onCancel={() => {
                  setOpenSelectedItems(false);
                }}
                onChange={setSelectedOrders}
                items={selectedOrders}
              ></ManageSelectedItems>
            </Col>
            <Col xs={14}>
              <Button
                type="default"
                onClick={() => {
                  setOpenPicker(true);
                }}
              >
                <Text color="primary">Add</Text>
              </Button>
              {/* <OrderPicker
                onChange={setSelectedOrders}
                selectedOrders={selectedOrders}
                visible={isOpenPicker}
                onCancel={() => {
                  setOpenPicker(false);
                }}
              ></OrderPicker> */}
            </Col>
          </Row>
        </Form.Item>
        <Form.Item style={{ display: 'none' }} hidden name="inOrders">
          <Input></Input>
        </Form.Item>
      </Form>
    </Box>
  );
};
