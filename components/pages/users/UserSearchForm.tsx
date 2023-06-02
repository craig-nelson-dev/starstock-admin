import React from 'react';
import { Form, Row, Col, Input, DatePicker, Select } from 'antd';
import { useAdvancedForm } from 'dsl-admin-base';
import { Box } from 'rebass';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface Props {}
const UserSearchForm: React.FC<Props> = () => {
  const {
    formInstance,
    // isOpenPicker,
    // setOpenPicker,
    // isOpenSelectedItems,
    // setOpenSelectedItems,
  } = useAdvancedForm();

  return (
    <Box variant="customAntDesign">
      <Form layout="vertical" name="SearchUserForm" ref={formInstance}>
        {/* Input Fields Group */}
        <Row gutter={25}>
          <Col xs={12}>
            <Form.Item label="Search results with" name="searchText">
              <Input />
            </Form.Item>
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
          <Col span={12}>
            <Form.Item label="User Id" name="userid">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Outlet" name="outlet">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last Login" name="lastLogin">
              <RangePicker format="YYYY/MM/DD" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="First Name" name="fname">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last Name" name="lname">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item label="Marketing subscription" name="msubscription">
              <Select allowClear>
                <Option value="">Status</Option>
                <Option value="A">Active</Option>
                <Option value="D">Disabled</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Order Date" name="odate">
              <RangePicker format="YYYY/MM/DD" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Creation Date" name="cdate">
              <RangePicker format="YYYY/MM/DD" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Post Code" name="postcode">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Box>
  );
};

export default UserSearchForm;
