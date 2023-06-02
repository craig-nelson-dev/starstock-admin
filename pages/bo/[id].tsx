import { convertAdsToModel } from '@utils/ads';
import { Button, notification, Space, Tabs } from 'antd';
import { BOAddForm } from 'components/pages/bo/BOAddForm';
import { AddBannerAdForm, AdsToSave } from 'components/pages/content/AddBannerAdForm';
import {
  Ad,
  AdInput,
  AppBreadcrumb,
  AppSpin,
  BreadcrumbItem,
  RepositoryFactory,
  usePageData,
  useUpdateAdsMutation,
} from 'dsl-admin-base';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Text } from 'rebass';

const DEFAULT_TAB_KEY = '1';

const BODoc = () => {
  const router = useRouter();
  const [submitFormFn, setSubmitFormFn] = useState<undefined | (() => void)>();
  const { loading, data } = usePageData(
    () =>
      RepositoryFactory.get('bo').getById({
        id: router.query.id ? parseInt(router.query.id.toString()) : 1,
      }),
    ['id'],
    [],
  );

  const [updateAds, { loading: adsLoading }] = useUpdateAdsMutation();
  const [activeTabKey, setActiveTabKey] = useState(DEFAULT_TAB_KEY);
  const [adsToUpdate, setAdsToUpdate] = useState<AdsToSave>({});
  const existingAds = convertAdsToModel(data?.owner?.ads as Ad[]);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: `Edit: ${data?.owner.displayName || ''}`,
      href: '',
    },
  ];

  const updateBrandAds = async () => {
    if (!data?.owner.isBrandPartner) {
      return;
    }

    let adsToSave: AdInput[] = [];

    for (let key of Object.keys(adsToUpdate)) {
      for (let ad of adsToUpdate[key]) {
        ad.brandID = data.owner.id;
      }
      adsToSave = adsToSave.concat(...adsToSave, ...adsToUpdate[key]);
    }

    try {
      await updateAds({
        variables: {
          input: adsToSave,
        },
      });
    } catch (ex) {
      notification.error({ message: 'Unable to save ads.' });
    }
  };

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button onClick={() => router.push('/bo')} type="default" className="text-caps">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (submitFormFn) {
                updateBrandAds();
                submitFormFn();
              }
            }}
            type="primary"
            className="text-caps"
          >
            {router.query.id ? 'Save' : 'Add'}
          </Button>
        </Space>
      </Box>
      {loading || (adsLoading && <AppSpin></AppSpin>)}
      {!loading && !adsLoading && (
        <Tabs
          activeKey={activeTabKey}
          defaultActiveKey={DEFAULT_TAB_KEY}
          onChange={(key) => setActiveTabKey(key)}
        >
          <Tabs.TabPane tab="general" key="1" forceRender>
            <BOAddForm brandOwner={data as any} setSubmitFn={(fn) => setSubmitFormFn(() => fn)} />
          </Tabs.TabPane>
          {data?.owner.isBrandPartner && (
            <Tabs.TabPane tab="Ads" key="2" forceRender>
              <Text mb={4}>These ads will appear on the brand partner page.</Text>
              <AddBannerAdForm
                grouping="brand"
                onUpdate={(ads) => setAdsToUpdate(ads)}
                ads={existingAds}
                hideGrouping
              />
            </Tabs.TabPane>
          )}
        </Tabs>
      )}
    </>
  );
};

export default BODoc;
