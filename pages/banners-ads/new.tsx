import { Button, notification } from 'antd';
import { AddBannerAdForm, AdsToSave } from 'components/pages/content/AddBannerAdForm';
import { AdInput, AppBreadcrumb, BreadcrumbItem, useUpdateAdsMutation } from 'dsl-admin-base';
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
    label: 'New',
    href: '/banners-ads',
  },
];

export const NewBannerAd: React.FC = () => {
  const router = useRouter();

  const [ads, setAds] = useState<AdsToSave>({});
  const [updateAds, { loading }] = useUpdateAdsMutation();

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
        description: 'Your ads have been created.',
      });

      router.push('/banners-ads');
    } catch (ex) {
      notification.error({ message: 'Unable to save ads.' });
    }
  };

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
        <AddBannerAdForm onUpdate={(ads) => setAds(ads)} grouping="" />
      </Box>
    </>
  );
};

export default NewBannerAd;
