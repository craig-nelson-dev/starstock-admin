import { convertAdsToModel } from '@utils/ads';
import { Button, Form, Menu, notification, Space, Tabs } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { UploadFile } from 'antd/lib/upload/interface';
import { AddBannerAdForm, AdsToSave } from 'components/pages/content/AddBannerAdForm';
import { LocationRestrictionForm } from 'components/pages/products/LocationRestrictionForm';
import { ProductGeneral } from 'components/pages/products/ProductGeneral';
import { ProductsLinked } from 'components/pages/products/ProductLinked';
import {
  Ad,
  AdInput,
  AppBreadcrumb,
  AppSpin,
  BreadcrumbItem,
  DslProductFeature,
  DslProductImage,
  DslProductImageInput,
  getProductFeatureInput,
  InsertProductInput,
  ProductAttributes,
  ProductDistributor,
  ProductSeoTab,
  RepositoryFactory,
  SettingDropdown,
  StatusValue,
  UpdateProductInput,
  useAdminForm,
  useCreateProductMutation,
  usePageData,
  useUpdateProductMutation,
  useUpdateProductPostcodeRestrictionMutation,
} from 'dsl-admin-base';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Box } from 'rebass';
import _ from 'lodash';

const { TabPane } = Tabs;

const ProductRepository = RepositoryFactory.get('product');
const DEFAULT_TAB_KEY = '1';

const ProductDetail: React.FC = () => {
  const {
    id,
    loading: loadingProduct,
    data: productData,
    isAdd,
    formInstance,
    showErrorMessage,
    showSuccessMessage,
    router,
    submitForm,
  } = useAdminForm(ProductRepository.getProductDetail);

  const product = productData;
  const existingAds = convertAdsToModel(product?.ads as Ad[]);
  const [logFee, setLogFee] = useState<number>(0);
  const [saving, setSaving] = useState(false);
  const [adsToUpdate, setAdsToUpdate] = useState<AdsToSave>({});
  const { loading: loadingCategories, data: categories } = usePageData(() =>
    RepositoryFactory.get('category').get(),
  );

  const { loading: loadingBrands, data: brands } = usePageData(() =>
    RepositoryFactory.get('bo').get({ page: 1, perPage: 100, sortBy: 'name', sortOrder: 'asc' }),
  );

  const { loading: loadingLogisticFee, data: logisticsFees } = usePageData(() =>
    RepositoryFactory.get('logisticFee').get({ page: '1', perPage: '100' }),
  );
  const { loading: loadingTaxcodes, data: taxCodes } = usePageData(() =>
    RepositoryFactory.get('taxCode').get({ page: '1', perPage: '100' }),
  );

  const { data: postcodes, loading: loadingPostCodes } = usePageData(() => {
    return RepositoryFactory.get('product').getProductPostCodeRestriction(id?.toString() || '0');
  });

  const { loading: loadingFeatures, data: productFeatures } = usePageData(() => {
    return RepositoryFactory.get('attribute').get({
      page: '1',
      perPage: '1000',
      status: String(StatusValue.ACTIVE),
    });
  });

  const [distributors, setDistributors] = useState<ProductDistributor[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState<number>();

  useEffect(() => {
    if (productData) {
      setActiveTabKey('1');
      setSelectedBrandId(productData.associations?.vendor?.id || 0);
    }
  }, [productData]);

  useEffect(() => {
    if (selectedBrandId) {
      RepositoryFactory.get('product')
        .distributors(selectedBrandId)
        .then((distributors) => setDistributors(distributors || []));
    }
  }, [selectedBrandId]);

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [updatePostcodeRestriction] = useUpdateProductPostcodeRestrictionMutation();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Products',
      href: '/products',
    },
  ];

  if (isAdd) {
    breadcrumbs.push({
      label: 'Add Product ',
      href: '',
    });
  } else if (product) {
    breadcrumbs.push({
      label: product.name,
      href: '',
    });
  }

  const [activeTabKey, setActiveTabKey] = useState(DEFAULT_TAB_KEY);
  const [submitTriggerValueForLinkedProducts, toggleSumbitTriggerLinkedProducts] = useState(false);

  const getImageInput = (
    productImages: DslProductImage[],
    uploadedImages: UploadFile[],
    singleImage = false,
  ): DslProductImageInput[] => {
    const toBeDelete: DslProductImageInput[] = productImages
      .filter((o) => !uploadedImages.find((image) => image.uid === o.id))
      .map((o) => ({ delete: true, id: +o.id, key: o.key, url: '' }));

    const toBeCreate: DslProductImageInput[] = uploadedImages
      .filter((o) => o.originFileObj)
      .map((o) => ({ upload: o.originFileObj, id: 0, key: '', url: '', delete: false }));

    if (singleImage && toBeCreate.length && toBeDelete.length) {
      // this is the case of updating image
      return [
        {
          id: toBeDelete[0].id,
          key: toBeCreate[0].key,
          url: '',
          delete: false,
          upload: toBeCreate[0].upload,
        },
      ];
    }

    return [...toBeDelete, ...toBeCreate];
  };

  const getFormData = (values: Store): UpdateProductInput | InsertProductInput => {
    const categories = Array.isArray(values.category)
      ? values.category.map((o) => o.value)
      : [values.category];
    const categoryId = categories[categories.length - 1];

    const input: UpdateProductInput | InsertProductInput = {
      categoryId,
      taxCodeId: values.taxCodeId,
      vendorId: values.vendorId,
      distributorId: values.distributorId,
      statusValue: values.statusValue,
      product: {
        boxHeight: 0,
        boxWidth: 0,
        weight: 0,
        boxLength: 0,
        mrrp: values.mrrp || 0,
        code: values.code,
        featured: values.options?.includes('featured') || false,
        hideLoggedOut: values.options?.includes('hideLoggedOut') || false,
        name: values.name,
        shortDescription: values.name,
        longDescription: values.longDescription || '',
        popularity: values.popularity || 0,
        searchWords: values.searchWords || '',
        seoTitle: values.seoTitle || '',
        seoDescription: values.seoDescription || '',
        seoKeywords: values.seoKeywords || '',
        seoSlug: '',
        flaggedPrice: values.flaggedPrice || false,
        features: getProductFeatureInput(
          values,
          (productFeatures?.features || []) as DslProductFeature[],
        ),
        options: values.options
          ?.filter((name: string) => name !== 'featured' && name !== 'hideLoggedOut')
          ?.map((name: string, i: number) => ({
            id: i,
            name,
            description: '',
            icon: '',
          })),
        volume: +values.volume || 0,
        mainImage: getImageInput(
          product?.mainImage ? [product.mainImage] : [],
          values.mainImage || [],
          true,
        )[0],
        additionalImages: getImageInput(
          product?.additionalImages || [],
          values.additionalImages || [],
        ),
        adminPricing: {
          pricing: [
            {
              logisticsFee: logFee,
              starStockFee: parseFloat(values.starStockFee),
              inputPrice: parseFloat(values.price),
              logisticsFeeID: values.logisticsFee,
              dateFrom: '',
              dateTo: '',
            },
          ],
        },
      },
    };

    return input;
  };

  const createProductCb = async (input: UpdateProductInput | InsertProductInput) => {
    const data = await createProduct({
      variables: {
        input: {
          ...input,
          categoryId: input.categoryId as number,
        },
      },
    });

    const newProductId = data.data?.insertProduct.product.id;

    if (newProductId) {
      return +newProductId;
    } else {
      return 0;
    }
  };

  const onFinish = async (values: Store) => {
    const input = getFormData(values);

    setSaving(true);
    try {
      let productId: number | undefined;

      // Add/Update product
      if (isAdd) {
        productId = await createProductCb(input);
      } else {
        let ads: AdInput[] = [];

        for (let key of Object.keys(adsToUpdate)) {
          for (let ad of adsToUpdate[key]) {
            ad.productID = id;
          }

          ads = ads.concat(...ads, ...adsToUpdate[key]);
        }

        await updateProduct({
          variables: {
            input: {
              ...input,
              id: String(id),
            },
            ads,
          },
        });

        productId = id;
      }

      // Save postcode restrictions
      if (productId) {
        await savePostcodeRestriction(productId, values);
      }

      router.push(`/products`);

      showSuccessMessage();
    } catch (e) {
      showErrorMessage();
    }
    setSaving(false);
  };

  const onClickSave = () => {
    switch (
      activeTabKey // general tab
    ) {
      case '5': // linked Products
        toggleSumbitTriggerLinkedProducts((t) => !t);
        break;
      default:
        submitForm();
        break;
    }
  };

  const getPostcodeIds = (value: string | undefined): number[] => {
    const idMap: any = {};

    for (let postcode of postcodes || []) {
      idMap[postcode.postcode.postcode] = postcode.postcode.id;
    }
    const result = (value || '')
      .split(',')
      .map((o) => o.trim())
      .filter((o) => o)
      .map((o) => +idMap[o])
      .filter((o) => o);

    return _.uniq(result);
  };

  const savePostcodeRestriction = async (productId: number, values: Store) => {
    const adminPostcodes = getPostcodeIds(values.adminPostcodeRestriction);
    let boPostcodes = getPostcodeIds(values.boPostcodeRestriction);

    if (!postcodes?.length) {
      throw new Error('error update postcode restriction');
    }

    // set postcode as admin postcode if it exists in both inputs
    boPostcodes = boPostcodes.filter((o) => !adminPostcodes.includes(o));

    // update admin records
    const dataAdmin = await updatePostcodeRestriction({
      variables: {
        input: {
          productIds: [productId],
          postcodeIds: adminPostcodes.length ? adminPostcodes : null, // pass null to clear all postcode
          brandId: 0,
          brandLocked: true,
          replace: true,
        },
      },
    });

    // update bo records
    const dataBO = await updatePostcodeRestriction({
      variables: {
        input: {
          productIds: [productId],
          postcodeIds: boPostcodes.length ? boPostcodes : null, // pass null to clear all postcode
          brandId: values.vendorId,
          brandLocked: false,
          replace: true,
        },
      },
    });

    if (
      !dataAdmin.data?.updateProductPostcodeRestrictions ||
      !dataBO.data?.updateProductPostcodeRestrictions
    ) {
      throw new Error('error update postcode restriction');
    }
  };

  const formatInitalImageUpload = (images: DslProductImage[]) => {
    return images.map((image) => ({
      uid: image.id,
      name: image.key,
      status: 'done',
      url: image.fullSizePath,
      size: 0,
      type: '',
    }));
  };

  const initialValues = useMemo(() => {
    const values: any = product
      ? {
          name: product.name,
          statusValue: product.status.value,
          code: product.code,
          longDescription: product.longDescription || '',
          // TODO: assume product has only 1 taxCode assigned, change later
          taxCodeId: product?.adminPricing?.pricing?.length
            ? product.adminPricing.pricing[0].taxCodeId
            : undefined,
          vendorId: product?.associations?.vendor?.id,
          distributorId: product?.associations?.distributor?.id,
          category: product.categories?.map((o) => ({ value: o.id, label: o.name })) || [],
          mainImage: formatInitalImageUpload(product.mainImage ? [product.mainImage] : []),
          additionalImages: formatInitalImageUpload(product.additionalImages || []),
          searchWords: product.searchWords,
          options: (product.options?.map((o) => o.name) || []).concat(
            product.featured ? ['featured'] : [],
            product.hideLoggedOut ? ['hideLoggedOut'] : [],
          ),
          seoTitle: product?.seoTitle || '',
          seoDescription: product?.seoDescription || '',
          seoKeywords: product?.seoKeywords || '',
          popularity: product?.popularity || 0,
          mrrp: product?.mrrp || 0,
          flaggedPrice: product?.flaggedPrice || false,
        }
      : { statusValue: StatusValue.ACTIVE };

    return values;
  }, [product]);

  const loading =
    loadingProduct ||
    loadingCategories ||
    loadingLogisticFee ||
    loadingTaxcodes ||
    loadingBrands ||
    loadingFeatures ||
    loadingPostCodes;

  const menu = [
    {
      label: 'Clone Product',
      value: 'edit',
      onClick: () => {
        let fields = formInstance.current?.getFieldsValue();
        if (!fields) return;

        const suffix = 'Clone';

        fields = {
          ...fields,
          name: `${fields.name} - ${suffix} - ${moment().format('DD-MM-YYYY HH:mm:ss')}`,
          seoTitle: `${fields.seoTitle} - ${suffix}`,
        };
        fields = getFormData(fields);
        createProductCb(fields).then((productId) => {
          router.push(`/products/${productId}`);
          notification.success({
            message: 'A clone of your product has been created',
          });
        });
      },
    },
  ];

  const settingMenu = (
    <Menu>
      {(menu || []).map((item) => {
        return (
          <Menu.Item key={item.value as string} onClick={item.onClick}>
            {item.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <SettingDropdown big overlay={settingMenu}></SettingDropdown>
          <Button type="primary" onClick={onClickSave} loading={saving}>
            SAVE
          </Button>
        </Space>
      </Box>
      {loading ? (
        <AppSpin></AppSpin>
      ) : (
        <Box variant="card" sx={{}}>
          <Form
            layout="vertical"
            ref={formInstance}
            onFinishFailed={(errInfo) => {
              const onlyAttriuteErrors = errInfo.errorFields.every((field) =>
                field.name[0].toString().startsWith('feature_'),
              );
              if (onlyAttriuteErrors) {
                setActiveTabKey('2');
              }
            }}
            onFinish={onFinish}
            initialValues={initialValues}
          >
            <Tabs
              activeKey={activeTabKey}
              defaultActiveKey={DEFAULT_TAB_KEY}
              onChange={(key) => setActiveTabKey(key)}
            >
              <TabPane tab="general" key="1" forceRender>
                <ProductGeneral
                  product={product}
                  onChangeLogFee={setLogFee}
                  categories={categories || []}
                  taxCodes={taxCodes?.taxCodes || []}
                  logisticsFees={logisticsFees?.fees || []}
                  distributors={distributors || []}
                  brands={(brands?.brandOwners as any) || []}
                  onBrandChange={(id) => setSelectedBrandId(id)}
                ></ProductGeneral>
              </TabPane>
              <TabPane tab="attributes" key="2" forceRender>
                <ProductAttributes
                  features={(productFeatures?.features || []) as DslProductFeature[]}
                  existedFeatures={product?.features || []}
                />
              </TabPane>
              <TabPane tab="location restrictions" key="3" forceRender>
                <LocationRestrictionForm postcodes={postcodes || []} />
              </TabPane>
              <TabPane tab="outlet pricing" key="4" forceRender></TabPane>
              <TabPane tab="linked products" key="5" forceRender>
                {activeTabKey === '5' && (
                  <ProductsLinked callSubmitFunction={submitTriggerValueForLinkedProducts} />
                )}
              </TabPane>
              {product && product.id && (
                <TabPane tab="ads" key="6" forceRender>
                  <AddBannerAdForm
                    grouping="product"
                    onUpdate={(ads) => setAdsToUpdate(ads)}
                    ads={existingAds}
                    hideGrouping
                  />
                </TabPane>
              )}
              <TabPane tab="seo" key="7" forceRender>
                <ProductSeoTab />
              </TabPane>
            </Tabs>
          </Form>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              borderTop: 'standard',
              pt: 2,
              mt: 3,
            }}
          >
            <Button type="primary" onClick={onClickSave} loading={saving}>
              SAVE
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ProductDetail;
