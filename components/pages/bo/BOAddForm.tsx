import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, InputNumber, Space } from 'antd';
import {
  AppSpin,
  DslUser,
  GetBrandOwnerByIdQuery,
  ImageUpload,
  PAGES,
  RepositoryFactory,
  useAdminForm,
  useFetchTableData,
  useUpsertBrandOwnerMutation,
} from 'dsl-admin-base';
import LogisticsFeeRepository from 'dsl-admin-base/repositories/LogisticsFeeRepository';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Box, Text } from 'rebass';
import { BOAdminTable } from '../bo-admin/BOAdminTable';

const setFormFields = (bo: any, fees: any) => {
  const dumbFee = { id: 0, fee: 0 };

  const caseFee =
    bo?.logisticsFees?.find(
      (lg: any) => fees?.find((f: any) => f.name == 'CASE').id == lg.logisticsFeeId,
    ) ||
    fees?.find((f: any) => f.name == 'CASE') ||
    dumbFee;

  const kegFee =
    bo?.logisticsFees?.find(
      (lg: any) => fees?.find((f: any) => f.name == 'KEG').id == lg.logisticsFeeId,
    ) ||
    fees?.find((f: any) => f.name == 'KEG') ||
    dumbFee;

  const WSCageFee =
    bo?.logisticsFees?.find(
      (lg: any) => fees?.find((f: any) => f.name == 'W&S CASE').id == lg.logisticsFeeId,
    ) ||
    fees?.find((f: any) => f.name == 'W&S CASE') ||
    dumbFee;

  const bottleFee =
    bo?.logisticsFees?.find(
      (lg: any) => fees?.find((f: any) => f.name == 'BOTTLE').id == lg.logisticsFeeId,
    ) ||
    fees?.find((f: any) => f.name == 'BOTTLE') ||
    dumbFee;

  return [
    { name: 'id', value: bo?.owner?.id || undefined },
    { name: 'name', value: bo?.owner?.displayName || '' },
    { name: 'installation_email', value: bo?.owner?.installEmail || '' },
    { name: 'pumpClip_email', value: bo?.owner?.pumpClipEmail || '' },
    { name: 'nursery', value: bo?.owner?.isBrandNursery || false },
    { name: 'distributor', value: bo?.owner?.isDefaultDistributor || false },
    { name: 'partner', value: bo?.owner?.isBrandPartner || false },
    { name: 'orderEmailAddresses', value: bo?.owner?.orderEmailAddresses || [] },
    { name: 'slug', value: bo?.owner?.slug || '' },

    { name: 'addressId', value: bo?.address?.id || undefined },
    { name: 'address_1', value: bo?.address?.lineOne || '' },
    { name: 'address_2', value: bo?.address?.lineTwo || '' },
    { name: 'address_3', value: bo?.address?.address_3 || '' },
    { name: 'city', value: bo?.address?.city || '' },
    { name: 'postcode', value: bo?.address?.postcode || '' },
    { name: 'county', value: bo?.address?.county || '' },

    {
      name: 'keg_fee',
      value: { ...kegFee, fee: kegFee.fee.toFixed(2) },
    },
    {
      name: 'case_fee',
      value: { ...caseFee, fee: caseFee.fee.toFixed(2) },
    },
    {
      name: 'w_s_case_fee',
      value: { ...WSCageFee, fee: WSCageFee.fee.toFixed(2) },
    },
    {
      name: 'bottle_fee',
      value: { ...bottleFee, fee: bottleFee.fee.toFixed(2) },
    },
  ];
};

const BrandOwnderRepository = RepositoryFactory.get('bo');

type BOAddFormProps = {
  setSubmitFn: (fn: () => void) => void;
  brandOwner?: GetBrandOwnerByIdQuery['getBrandOwnerByID'];
};

export const BOAddForm: React.FC<BOAddFormProps> = ({ setSubmitFn, brandOwner }) => {
  const router = useRouter();
  const [formInstance] = Form.useForm();
  const {
    loading: loadingBrandOwnder,
    /*data: productData,
    reloadPage,
    isAdd,*/
    showErrorMessage,
    showSuccessMessage,
    //router,
  } = useAdminForm(BrandOwnderRepository.get as any);
  const userReq = useFetchTableData(RepositoryFactory.get('user').get, PAGES.BO_ADMIN, {
    perPage: 1000,
    brandOwnerId: brandOwner?.owner?.id,
    type: 'brandowner',
  });

  const [createBrandOwnder] = useUpsertBrandOwnerMutation();
  const feesReq = useFetchTableData(LogisticsFeeRepository.getAll, PAGES.BO);

  useEffect(() => {
    setSubmitFn(formInstance.submit);
  }, [formInstance]);

  useEffect(() => {
    const fields = setFormFields(brandOwner, feesReq.data?.fees);
    if (formInstance) {
      formInstance.setFields(fields);
    }
  }, [feesReq.data, brandOwner, formInstance]);

  const onFinish = async (values: any) => {
    let newProductId;

    try {
      const logisticsFees: any[] = [];
      feesReq.data?.fees?.map((f) => {
        if (f.name == 'KEG') {
          logisticsFees.push({ id: f.id, fee: values.keg_fee.fee });
        }

        if (f.name == 'CASE') {
          logisticsFees.push({ id: f.id, fee: values.case_fee.fee });
        }

        if (f.name == 'W&S CASE') {
          logisticsFees.push({ id: f.id, fee: values.w_s_case_fee.fee });
        }

        if (f.name == 'BOTTLE') {
          logisticsFees.push({ id: f.id, fee: values.bottle_fee.fee });
        }
      });

      const portalImage =
        values.portalImage && values.portalImage.length ? values.portalImage[0] : undefined;

      let adminLogo: any;

      if (portalImage?.originFileObj) {
        adminLogo = { image: portalImage.originFileObj };
      }

      if (brandOwner?.owner.adminLogo && !portalImage) {
        adminLogo = { url: '' };
      }

      const data = await createBrandOwnder({
        variables: {
          input: {
            owner: {
              id: values.id,
              name: values.name,
              installEmail: values.installation_email || '',
              pumpClipEmail: values.pumpClip_email || '',
              isBrandNursey: values.nursery || false,
              isDefaultDistributor: values.distributor || false,
              isBrandPartner: values.partner || false,
              orderEmailAddresses: values.orderEmailAddresses,
              slug: values.slug,
            },
            images: {
              adminLogo,
            },
            address: {
              lineOne: values.address_1,
              lineTwo: values.address_2,
              lineThree: '',
              city: values.city,
              postcode: values.postcode,
              country: '',
              title: '',
              firstName: '',
              middleName: '',
              lastName: '',
              county: values.county,
            },
            logisticsFees: logisticsFees,
          },
        },
      });

      newProductId = data.data?.upsertBrandOwner.id;
    } catch (e) {
      console.log(e);
    }

    if (newProductId) {
      showSuccessMessage();
      router.push(`/bo`);
    } else {
      showErrorMessage();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const initialValues = brandOwner
    ? {
        portalImage: brandOwner.owner.adminLogo
          ? [
              {
                uid: brandOwner.owner.id,
                name: '',
                status: 'done',
                url: brandOwner.owner.adminLogo,
                size: 0,
                type: '',
              },
            ]
          : undefined,
      }
    : undefined;

  if (loadingBrandOwnder) return <AppSpin></AppSpin>;

  return (
    <Form
      form={formInstance}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      initialValues={initialValues}
    >
      <Box variant="card" sx={{ maxWidth: 400 }}>
        <Form.Item style={{ display: 'none' }} name="id" label="id">
          <Input type="text" placeholder="Name" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Name is required' }]}
          name="name"
          label="Name"
        >
          <Input type="text" placeholder="Name" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Address 1 is required' }]}
          name="address_1"
          label="Address 1"
        >
          <Input type="text" placeholder="Address" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Address 2 is required' }]}
          name="address_2"
          label="Address 2"
        >
          <Input type="text" placeholder="Address" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'City is required' }]}
          name="city"
          label="City"
        >
          <Input type="text" placeholder="City" />
        </Form.Item>
        <Form.Item name="county" label="County">
          <Input type="text" placeholder="County" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Postcode 1 is required' }]}
          name="postcode"
          label="Postcode"
        >
          <Input type="text" placeholder="Postcode" />
        </Form.Item>
        <Form.Item name="nursery" valuePropName="checked">
          <Checkbox>Enable brand nursery</Checkbox>
        </Form.Item>
        <Form.Item name="distributor" valuePropName="checked">
          <Checkbox>Enable as default distributor</Checkbox>
        </Form.Item>
        <Form.Item name="partner" valuePropName="checked">
          <Checkbox>Enable as brand partner</Checkbox>
        </Form.Item>
        <Form.Item name="slug" label="Slug">
          <Input type="text" placeholder="Slug" />
        </Form.Item>
      </Box>
      <Divider />
      <Form.Item name="fee" label="StarStock Fee">
        <Space>
          <InputNumber />
          <Text style={{ fontSize: 14 }}>{' %'}</Text>
        </Space>
      </Form.Item>
      <Text fontWeight="bold" fontSize={16} mb="3">
        Logistics Fees
      </Text>
      <Box>
        <Form.Item
          name={['keg_fee', 'fee']}
          label="Keg Fee (£) (Per Litre)"
          className="align-horizontal"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={['case_fee', 'fee']}
          label="Case Fee (£) (Per Litre)"
          className="align-horizontal"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={['w_s_case_fee', 'fee']}
          label="W&S Case Fee (£) (Per Litre)"
          className="align-horizontal"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={['bottle_fee', 'fee']}
          label="Bottle Fee (£) (Per Litre)"
          className="align-horizontal"
        >
          <InputNumber />
        </Form.Item>
      </Box>

      <Box variant="card" sx={{ maxWidth: 400 }} mt="5">
        <div className="ant-form-item-label">
          <label className="ant-form-item-label">New Order Email</label>
        </div>
        <Form.List initialValue={['']} name="orderEmailAddresses">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Form.Item required={false} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: 'Please add an email address or delete this field.',
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="Email address" style={{ width: '90%' }} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      onClick={() => remove(field.name)}
                      style={{ fontSize: 24, margin: '0 8px', top: 4, position: 'relative' }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                  Add Another Email Address
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Box>

      <Box variant="card" sx={{ maxWidth: 400 }} mt="5">
        <Form.Item name="installation_email" label="Installation Email">
          <Input type="text" placeholder="Installation Email" />
        </Form.Item>
      </Box>
      <Box variant="card" sx={{ maxWidth: 400 }} mt="5">
        <Form.Item name="pumpClip_email" label="PumpClip Email">
          <Input type="text" placeholder="PumpClip Email" />
        </Form.Item>
      </Box>
      <ImageUpload formItemName="portalImage" label="Portal Image"></ImageUpload>
      {brandOwner && (
        <Box mt="5">
          <BOAdminTable
            hideBrandOwnerColumn={true}
            users={
              (userReq.data?.users
                .filter((u) => u?.brand?.id)
                .filter((u) => u?.brand?.id == brandOwner?.owner.id) as DslUser[]) || []
            }
            totalItems={userReq.data?.totalCount || 1}
            loading={false}
          />
        </Box>
      )}
    </Form>
  );
};
