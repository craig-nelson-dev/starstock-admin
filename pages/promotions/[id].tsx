import { Button, Form, notification, Row, Space, Tabs } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { PromotionForm } from 'components/pages/promotions';
import { Vouchers } from 'components/pages/promotions/Vouchers';
import {
  AppBreadcrumb,
  AppSpin,
  BreadcrumbItem,
  Condition,
  ConditionsInput,
  Effect,
  EffectInput,
  FreeStockEffectInput,
  Limit,
  LimitInput,
  PrimaryPromoConditions,
  ProductDistributor,
  PromotionConditionType,
  PromotionEffectType,
  PromotionLimitType,
  RepositoryFactory,
  UpdatePromotionInput,
  useAdminForm,
  usePageData,
  useUpdatePromotionMutation,
  VoucherCodeInput,
} from 'dsl-admin-base';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Box, Text } from 'rebass';
const { TabPane } = Tabs;

interface PromotionForm {
  conditions: Condition[];
  effects: EffectInput[];
}

const DEFAULT_TAB_KEY = '1';

export default function PromotionDetail() {
  const {
    isAdd,
    formInstance,
    submitForm,
    data,
    loading,
    id,
    showErrorMessage,
    showSuccessMessage,
    router,
    reloadPage,
  } = useAdminForm(RepositoryFactory.get('promotion').getById);
  const [activeTabKey, setActiveTabKey] = useState(DEFAULT_TAB_KEY);
  const isVoucherPage = router.pathname.startsWith('/vouchers');

  const { loading: loadingCategories, data: categories } = usePageData(() =>
    RepositoryFactory.get('category').get(),
  );

  const { loading: loadingBrands, data: brands } = usePageData(() =>
    RepositoryFactory.get('bo').get({ page: 1, perPage: 100, sortBy: 'name', sortOrder: 'asc' }),
  );

  const { loading: loadingTaxcodes, data: taxCodes } = usePageData(() =>
    RepositoryFactory.get('taxCode').get({ page: '1', perPage: '100' }),
  );

  const [updatePromotion, { loading: saving }] = useUpdatePromotionMutation();

  const [conditions, setConditions] = useState<Condition[]>([]);
  const [effects, setEffects] = useState<EffectInput[]>([]);
  const [voucherCodes, setVoucherCodes] = useState<VoucherCodeInput[]>([]);

  const [distributors, setDistributors] = useState<ProductDistributor[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState<number>();

  useEffect(() => {
    RepositoryFactory.get('product')
      .distributors(selectedBrandId)
      .then((distributors) => setDistributors(distributors || []));
  }, [selectedBrandId]);

  useEffect(() => {
    if (data) {
      setSelectedBrandId(data.brandId);
    }
  }, [data]);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: isVoucherPage ? 'vouchers' : 'Promotions',
      href: isVoucherPage ? '/vouchers' : `/promotions`,
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'New',
      href: '#',
    });
  } else if (data) {
    breadcrumbs.push({
      label: data.name,
      href: '#',
    });
  }

  const getInitialConditionValues = (conditions: Condition[]) => {
    const values: any = {};

    const qty = conditions.find((o) => o.type === PromotionConditionType.PRODUCT_QTY)?.multiplesOf;
    values.qty = qty;

    for (let type of [
      PromotionConditionType.FIRST_ORDER,
      PromotionConditionType.BRAND_FIRST_ORDER,
    ]) {
      values[`condition-${type}`] = Boolean(conditions.find((o) => o.type === type));
    }

    const productBrands =
      conditions.find((o) => o.type === PromotionConditionType.BRAND_PRODUCT)?.in || [];
    values[`condition-${PromotionConditionType.BRAND_PRODUCT}`] = productBrands.length
      ? productBrands[0]
      : undefined;

    return values;
  };

  const getInititalLimitValues = (limits: Limit[]) => {
    const values: any = {};

    for (let limit of limits) {
      values[limit.type] = limit.value;
    }

    return values;
  };

  const getSelectedTaxtRate = (effects: Effect[]) => {
    const taxMultiplier = effects.find((o) => typeof o.taxMultiplier === 'number')?.taxMultiplier;

    if (taxMultiplier) {
      return taxMultiplier * 100 - 100;
    }
  };

  const initialValues =
    data && categories
      ? {
          ...data,
          brandId: data.brandId ? data.brandId : undefined,
          starstockOnly: data.hiddenFromAll || false,
          activeFrom: data.activeFrom ? moment(data.activeFrom) : undefined,
          activeTo: data.activeTo ? moment(data.activeTo) : undefined,
          image: data.imagePath
            ? [
                {
                  uid: data.id,
                  name: data.id,
                  status: 'done',
                  url: data.imagePath,
                  size: 0,
                  type: '',
                },
              ]
            : undefined,
          type: data.type.name,
          category: categories
            .filter((o) => data.categoriesInPromotion?.includes(+o.id))
            .map((o) => ({ value: o.id, label: o.name })),
          qualifying: 'all',
          taxRate: getSelectedTaxtRate(data.effects),
          ...getInititalLimitValues(data.limits || []),
          ...getInitialConditionValues(data.conditions || []),
        }
      : { status: 'active', activeFrom: moment() };

  const getLimits = (values: Store): LimitInput[] => {
    const limits: LimitInput[] = [];

    Object.values(PromotionLimitType).forEach((key, i) => {
      if (values[key]) {
        limits.push({
          order: i,
          type: key,
          value: values[key],
        });
      }
    });

    return limits;
  };

  const getConditionsInput = (values: Store): ConditionsInput[] => {
    let items: ConditionsInput[] = [
      ...conditions.map((o) => ({
        type: o.type,
        comparator: o.comparator,
        order: 0,
        values: o.in ? o.in : null,
        value: o.equalOrGreater,
      })),
    ];

    // Filter out conditions before manually add
    items = items.filter(
      (o) =>
        ![
          PromotionConditionType.PRODUCT_QTY,
          PromotionConditionType.FIRST_ORDER,
          PromotionConditionType.BRAND_FIRST_ORDER,
          PromotionConditionType.BRAND_PRODUCT,
        ].includes(o.type as any),
    );

    if (values.qty) {
      items.push({
        type: PromotionConditionType.PRODUCT_QTY,
        comparator: 'multiplesOf',
        value: values.qty,
        order: 1,
      });
    }

    if (voucherCodes.length) {
      items = items.filter((o) => o.type !== PromotionConditionType.VOUCHER);
      items.push({
        type: PromotionConditionType.VOUCHER,
        comparator: 'in',
        order: 0,
        value: 0,
        values: null,
        voucherCodes,
      });
    }

    if (values[`condition-${PromotionConditionType.FIRST_ORDER}`]) {
      items.push({
        type: PromotionConditionType.FIRST_ORDER,
        comparator: 'result',
        order: 1,
        value: 0,
      });
    }

    if (values[`condition-${PromotionConditionType.BRAND_FIRST_ORDER}`]) {
      items.push({
        type: PromotionConditionType.BRAND_FIRST_ORDER,
        comparator: 'in',
        order: 1,
        value: 0,
        values: [values.brandId],
      });
    }

    if (values[`condition-${PromotionConditionType.BRAND_PRODUCT}`]) {
      items.push({
        type: PromotionConditionType.BRAND_PRODUCT,
        comparator: 'in',
        order: 2,
        value: 0,
        values: [values[`condition-${PromotionConditionType.BRAND_PRODUCT}`]],
      });
    }

    return items;
  };

  const getVoucherCodeTodelete = (): number[] => {
    const existedCodes =
      data?.conditions.find((o) => o.type === PromotionConditionType.VOUCHER)?.voucherCodes || [];
    return existedCodes.filter((o) => !voucherCodes.find((i) => i.id === o.id)).map((o) => o.id);
  };

  const validate = (): boolean => {
    if (isVoucherPage && !voucherCodes.length) {
      notification.warning({ message: 'Please enter at least one voucher code' });
      return false;
    }

    if (!effects.length) {
      notification.warning({ message: 'Please setup reward' });
      return false;
    }

    if (effects.find((o) => o.type === PromotionEffectType.LINE_DISCOUNT)) {
      const productsInPromotions =
        conditions.find((o) => o.type === PromotionConditionType.PRODUCT)?.in || [];

      if (!productsInPromotions.length) {
        notification.warning({ message: 'Line discount reward requires products condition' });
        return false;
      }
    }

    if (effects.find((o) => o.type === PromotionEffectType.RANGE)) {
      if (
        conditions.find(
          (o) =>
            PrimaryPromoConditions.includes(o.type) && o.type !== PromotionConditionType.PRODUCT,
        )
      ) {
        notification.warning({ message: 'Range reward requires products condition only' });
        return false;
      }
    }

    return true;
  };

  const getEffectsInput = (effects: EffectInput[], values: Store): EffectInput[] => {
    const taxMultiplier = ((values.taxRate || 0) + 100) / 100;

    return effects.map((o) => {
      let rangeSelect: FreeStockEffectInput[] = [];

      // Map qty setup for range effect
      if (o.type === PromotionEffectType.RANGE) {
        rangeSelect =
          o.rangeSelect?.map((o) => {
            return {
              entityId: o.entityId,
              qty: values[`${PromotionEffectType.RANGE}-${o.entityId}`] || 0,
            };
          }) || [];
      }

      // NK: Hacky fix but this field existing causes problems
      if (o.freeStock && (o.freeStock as any)['__typename']) {
        delete (o.freeStock as any)['__typename'];
      }

      return {
        name: o.name,
        value: o.value,
        freeStock: o.freeStock,
        type: o.type,
        rangeSelect,
        taxMultiplier,
      };
    });
  };

  const onFinish = async (values: Store) => {
    if (!validate()) {
      return;
    }

    const image = values.image && values.image.length ? values.image[0] : undefined;

    const formData: UpdatePromotionInput = {
      image: image?.originFileObj,
      promotion: {
        id: isAdd ? undefined : id,
        activeFrom: values.activeFrom,
        activeTo: values.activeTo,
        name: values.name,
        longDescription: values.longDescription || '',
        shortDescription: values.shortDescription || '',
        status: values.status,
        conditions: getConditionsInput(values),
        effects: getEffectsInput(effects, values),
        limits: getLimits(values),
        type: values.type || 'moneyOff',
        identityCode: values.identityCode,
        priority: values.priority || 0,
        slug: data?.slug || values.identityCode,
        imagePath: data?.imagePath || '',
        terms: values.terms || '',
        starstockOnly: values.hiddenFromAll || false,
        voucherCodesToDelete: getVoucherCodeTodelete(),
        distributorId: values.distributorId,
        brandId: values.hiddenFromAll ? 0 : values.brandId,
      },
    };

    try {
      const data = await updatePromotion({
        variables: {
          input: formData,
        },
      });

      showSuccessMessage();

      if (isAdd) {
        router.push(
          `/${isVoucherPage ? 'vouchers' : 'promotions'}/${
            data.data?.updatePromotion.promotion.id
          }`,
        );
      } else {
        reloadPage();
      }
    } catch (e) {
      showErrorMessage();
    }
  };

  return (
    <Box>
      <Text variant="pageHeading">
        <Row>
          <Box>
            <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
          </Box>
        </Row>
        <Box>
          <Space>
            <Button className="text-caps">Cancel</Button>
            <Button type="primary" className="text-caps" onClick={submitForm} loading={saving}>
              Save
            </Button>
          </Space>
        </Box>
      </Text>
      {loading || loadingCategories || loadingBrands || loadingTaxcodes ? (
        <AppSpin />
      ) : (
        <Box>
          <Form
            layout="vertical"
            ref={formInstance}
            initialValues={initialValues}
            onFinish={onFinish}
          >
            <Tabs
              activeKey={activeTabKey}
              defaultActiveKey={DEFAULT_TAB_KEY}
              onChange={(key) => setActiveTabKey(key)}
            >
              <TabPane tab="general" key="1" forceRender>
                <PromotionForm
                  categories={categories || []}
                  promotion={data || undefined}
                  onChangeConditions={setConditions}
                  onChangeEffects={setEffects}
                  distributors={distributors || []}
                  taxCodes={taxCodes?.taxCodes || []}
                  brands={(brands?.brandOwners as any) || []}
                  onBrandChange={(id) => setSelectedBrandId(id)}
                />
              </TabPane>
              {isVoucherPage && (
                <TabPane tab="codes" key="2" forceRender>
                  <Vouchers conditions={data?.conditions || []} onChange={setVoucherCodes} />
                </TabPane>
              )}
            </Tabs>
          </Form>
        </Box>
      )}
    </Box>
  );
}
