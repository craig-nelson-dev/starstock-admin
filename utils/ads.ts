import { AdsToSave } from 'components/pages/content/AddBannerAdForm';
import { Ad } from 'dsl-admin-base/graphql/generated/graphql';

export const convertAdsToModel = (ads: Ad[] | null): AdsToSave | undefined => {
  if (!ads) {
    return undefined;
  }

  const response: AdsToSave = {};

  for (let ad of ads) {
    const adInput = {
      id: ad.id,
      statusValue: ad.status.value,
      type: ad.type,
      image: {
        id: ad.image?.id || 0,
        statusValue: ad.image?.status.value || 0,
        type: 'adImage',
        url: ad.image?.url || '',
        mobileUrl: ad.image?.mobileUrl || '',
        thumbnail: ad.image?.thumbnail || '',
        altText: ad.image?.altText || '',
        titleText: ad.image?.titleText || '',
        name: ad.image?.name || '',
      },
      targetUrl: ad.targetUrl,
      identifier: ad.identifier,
      grouping: ad.grouping,
      position: ad.position,
      titleText: ad.titleText,
    };

    if (!response[ad.type]) {
      response[ad.type] = [adInput];
    } else {
      response[ad.type].push(adInput);
    }
  }

  return response;
};
