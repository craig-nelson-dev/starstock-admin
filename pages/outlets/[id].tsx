import { Button, Form, Menu, Modal, Space, Typography } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { Activation } from 'components/pages/outlets/Activation';
import { OutletBanner } from 'components/pages/outlets/OutletBanner';
import { OutletForm } from 'components/pages/outlets/OutletForm';
import { OutletUsersTable } from 'components/pages/outlets/OutletUsersTable';
import { Disabled } from 'components/pages/outlets/Disabled';
import {
  AppBreadcrumb,
  AppSpin,
  BreadcrumbItem,
  DslUser,
  extractNestedAddressFormValues,
  parseNestedFormValues,
  RepositoryFactory,
  SettingDropdown,
  StatusValue,
  UpdateAdminOutletInput,
  useAdminForm,
  useUpdateOutletDeliveryDayMutation,
  useUpdateOutletMutation,
} from 'dsl-admin-base';
import React, { useState } from 'react';
import { Box, Text } from 'rebass';

const OutletRepository = RepositoryFactory.get('outlet');

const Outlet: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    data,
    loading,
    id,
    showErrorMessage,
    showSuccessMessage,
    submitForm,
    isAdd,
    formInstance,
    reloadPage,
  } = useAdminForm(OutletRepository.getById);
  const [updateOutlet] = useUpdateOutletMutation();
  const [updateDeliveryDays] = useUpdateOutletDeliveryDayMutation();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Outlets',
      href: '/outlets',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({ label: 'New', href: '#' });
  } else if (data) {
    breadcrumbs.push({ label: data.name, href: '#' });
  }

  const onFinish = async (values: Store) => {
    if (isAdd) {
      // Do nothing
    } else if (data) {
      let deliveryDay: string | null = null;

      if (
        values.delivery_day &&
        deliveryDays?.day.toLowerCase() != values.delivery_day.toLowerCase()
      ) {
        deliveryDay = values.delivery_day;
      }

      await performUpdateOutlet(
        {
          id: id as number,
          statusValue: values.status,
          outlet: {
            name: values.name,
            style: values.style,
            legalStatus: values.legalStatus,
            companyName: values.companyName || '',
            charityNumber: values.charityNumber || '',
            companyNumber: '',
            dropPointDescription: values.dropPointDescription,
            xpoAccountNumber: values.xpoAccountNumber,
          },
          shippingAddress: extractNestedAddressFormValues(values, 'shipping_'),
          billingAddress: extractNestedAddressFormValues(values, 'billing_'),
        },
        deliveryDay,
      );

      reloadPage();
      console.log('reload page');
    }
  };

  const shippingAddress = data?.addressBook.addresses?.find(
    (o) => +o.id === data.addressBook.shippingId,
  );
  const billingAddress = data?.addressBook.addresses?.find(
    (o) => +o.id === data.addressBook.billingId,
  );
  const deliveryDays = data?.deliveryDays?.find((x) => x.type === 'standardDay');

  const initialValues = data
    ? parseNestedFormValues(
        {
          status: data.status.id,
          companyName: data.companyName,
          dropPointDescription: data.dropPointDescription,
          legalStatus: data.legalStatus,
          style: data.style,
          charityNumber: data.charityNumber,
          xpoAccountNumber: data.xpoAccountNumber,
          name: data.name,
        },
        { shipping: shippingAddress, billing: billingAddress, delivery: deliveryDays },
      )
    : undefined;

  const menu = [
    {
      label: 'Close',
      value: StatusValue.CLOSED,
    },
    {
      label: 'Disable',
      value: StatusValue.DISABLED,
    },
    {
      label: 'Enable',
      value: StatusValue.ACTIVE,
    },
  ];

  const onUpdateStatus = (status: number) => {
    if (status === StatusValue.CLOSED) {
      setShowConfirm(true);
      return;
    }

    performUpdateOutlet({ id: id as number, statusValue: status }, null);
  };

  const performUpdateOutlet = async (input: UpdateAdminOutletInput, deliveryDay: string | null) => {
    try {
      await updateOutlet({
        variables: {
          input,
        },
      });

      if (deliveryDay) {
        await updateDeliveryDays({
          variables: {
            input: {
              outletId: input.id,
              deliveryDays: [
                {
                  deliveryDay: deliveryDay as string,
                  leadDays: 2,
                  type: 'standardDay',
                },
              ],
            },
          },
        });
      }
      showSuccessMessage();
      reloadPage();
    } catch (e) {
      console.log(e);
      showErrorMessage();
    }
  };

  const onConfirmCloseOutlet = () => {
    setShowConfirm(false);
    performUpdateOutlet({ id: id as number, statusValue: StatusValue.DISABLED }, null);
  };

  const settingMenu = (
    <Menu>
      {(menu || []).map((item) => {
        return (
          <Menu.Item key={item.value} onClick={() => onUpdateStatus(item.value)}>
            {item.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Box sx={{ px: 2, display: 'flex', alignItems: 'center' }}>
            <SettingDropdown overlay={settingMenu} />
          </Box>
          <Button type="primary" className="text-caps" onClick={submitForm}>
            Save
          </Button>
        </Space>
      </Box>
      {loading ? (
        <AppSpin></AppSpin>
      ) : (
        <>
          {data && data.status.value === StatusValue.PENDING && (
            <Activation outlet={data} reload={reloadPage} />
          )}
          {data && data.status.value === StatusValue.DISABLED && <Disabled />}
          {data && <OutletBanner outlet={data} />}
          <Box variant="card">
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={initialValues}
              ref={formInstance}
            >
              <OutletForm initialValues={initialValues} showXPO={Boolean(id)} />
            </Form>
          </Box>
          <Box variant="card">
            <Text fontSize={16} fontWeight={600} mb="3">
              User Details Information
            </Text>
            <Text fontSize={14}>Following users are associated with this outlet</Text>
            <OutletUsersTable users={(data?.outletUsers || []).map((o) => o.user) as DslUser[]} />
          </Box>
        </>
      )}
      <Modal
        title="Close outlet confirmation"
        visible={showConfirm}
        onOk={onConfirmCloseOutlet}
        onCancel={() => setShowConfirm(false)}
        okText="Confirm"
      >
        <Typography.Text type="danger">
          Warning: The outlet cannot be re-opened one closed.
        </Typography.Text>
      </Modal>
    </>
  );
};

export default Outlet;
