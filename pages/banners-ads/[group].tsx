import { convertAdsToModel } from '@utils/ads';
import { Button, notification } from 'antd';
import { AddBannerAdForm, AdsToSave } from 'components/pages/content/AddBannerAdForm';
import {
  Ad,
  AdInput,
  AppBreadcrumb,
  AppSpin,
  BreadcrumbItem,
  useGetAdsForGroupQuery,
  useUpdateAdsMutation,
} from 'dsl-admin-base';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Text } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Banners & Ads',
    href: '/banners-ads',
  },
  {
    label: 'Edit',
    href: '/banners-ads',
  },
];

export const BannerAdGroup: React.FC = () => {
  const router = useRouter();
  const groupName = router.query.group || '';

  const { data, loading: loadingFetch } = useGetAdsForGroupQuery({
    variables: { groupName: groupName as string },
  });

  const [ads, setAds] = useState<AdsToSave>({});
  const [updateAds, { loading }] = useUpdateAdsMutation();
  let existingAds: AdsToSave | undefined = {};

  const onSaveClick = async () => {
    let adsToSave: AdInput[] = [];

    for (let key of Object.keys(ads)) {
      adsToSave = adsToSave.concat(...adsToSave, ...ads[key]);
    }

    try {
      await updateAds({
        variables: {
          input: adsToSave,
        },
      });

      notification.success({
        message: 'Saved',
        description: 'Your changes have been saved.',
      });

      router.push('/banners-ads');
    } catch (ex) {
      notification.error({ message: 'Unable to save ads.' });
    }
  };

  if (data?.getAdsForGroup && data.getAdsForGroup.length) {
    existingAds = convertAdsToModel(data.getAdsForGroup as Ad[]);
  }

  if (loadingFetch) {
    return <AppSpin />;
  }

  console.log(ads);

  return (
    <>
      <Head>
        <title>New Banner / Ad</title>
      </Head>
      <Box>
        <Box>
          <Text variant="pageHeading">
            <AppBreadcrumb items={breadcrumbs} />
            <Box>
              <Button
                type="primary"
                className="text-caps"
                style={{ padding: '4px 24px' }}
                onClick={onSaveClick}
                loading={loading}
                disabled={Object.keys(ads).length === 0}
              >
                Save
              </Button>
            </Box>
          </Text>
        </Box>
        <AddBannerAdForm
          onUpdate={(ads) => setAds(ads)}
          grouping={groupName as string}
          ads={existingAds}
        />
      </Box>
    </>
  );
};

export default BannerAdGroup;
