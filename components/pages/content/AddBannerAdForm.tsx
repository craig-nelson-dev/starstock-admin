import { DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Row, Select, Space } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { ImageUploadModal } from 'components/ImageUploadModal';
import { AdInput, useDeleteAdMutation } from 'dsl-admin-base';
import React, { useEffect, useState } from 'react';
import { Box, Image, Text } from 'rebass';

const AD_TYPES = [
  { label: 'Homepage Banner', value: 'homepageBanner' },
  { label: 'Homepage CTA', value: 'homepageCTA' },
  { label: 'Product Ad', value: 'productAd' },
  { label: 'Brand (Square)', value: 'brandSquare' },
  { label: 'Brand (Banner)', value: 'brandBanner' },
  { label: 'Brand (Side Ad)', value: 'brandSideAd' },
  { label: 'Featured Category', value: 'featuredCategory' },
  { label: 'Navigation Ad', value: 'navigationAd' },
  { label: 'Cart Ad', value: 'cartAd' },
  { label: 'Category Partner', value: 'categoryPartner' },
  { label: 'Category (Banner)', value: 'categoryBanner' },
  { label: 'Category (Side Ad)', value: 'categorySideAd' },
  { label: 'Standard Ad', value: 'standardAd' },
];

const placeholder: AdInput = {
  statusValue: 0,
  type: '',
  image: {
    statusValue: 0,
    type: 'adImage',
    url: '',
    mobileUrl: '',
    thumbnail: '',
    altText: '',
    titleText: '',
    name: '',
  },
  targetUrl: '',
  identifier: '',
  grouping: '',
  position: 1,
  titleText: '',
};

export type AdsToSave = {
  [type: string]: AdInput[];
};

type Props = {
  grouping: string;
  onUpdate: (ads: AdsToSave) => void;
  ads?: AdsToSave;
  hideGrouping?: boolean;
};

export const AddBannerAdForm: React.FC<Props> = ({
  onUpdate,
  grouping: groupName = '',
  ads: existingAds,
  hideGrouping = false,
}) => {
  const [ads, setAds] = useState<AdsToSave>(existingAds || {});
  const [grouping, setGrouping] = useState<string>(groupName);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedIdxType, setSelectedIdxType] = useState('');
  const [selectedAltText, setSelectedAltText] = useState('');
  const [selectedTitleText, setSelectedTitleText] = useState('');
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [deleteAd, { loading }] = useDeleteAdMutation();

  const adsByType = Object.keys(ads);

  const updateGrouping = (e: React.FormEvent<HTMLInputElement>) => {
    for (let key of Object.keys(ads)) {
      for (let ad of ads[key]) {
        ad.grouping = e.currentTarget.value;
      }
    }

    setGrouping(e.currentTarget.value);
    setAds({ ...ads });
  };

  const addType = () => {
    setAds({
      ...ads,
      [selectedType]: [
        {
          ...placeholder,
          image: {
            ...placeholder.image,
            type: selectedType,
          },
          grouping,
          type: selectedType,
        },
      ],
    });
  };

  const addAnotherAd = (type: string) => {
    if (ads[type] && ads[type].length) {
      ads[type].push({
        ...placeholder,
        image: {
          ...placeholder.image,
          type: type,
        },
        grouping,
        type: type,
        position: ads[type].length + 1,
      });

      setAds({ ...ads });
    } else {
      setAds({
        ...ads,
        [type]: [
          {
            ...placeholder,
            image: {
              ...placeholder.image,
              type: type,
            },
            grouping,
            type: type,
          },
        ],
      });
    }
  };

  const updateAddInput = (type: string, idx: number, field: keyof AdInput, value: any) => {
    const adType = ads[type];

    if (adType && adType[idx]) {
      const newAd = {
        ...adType[idx],
        [field]: value,
      };

      adType[idx] = newAd;

      setAds({
        ...ads,
        [type]: ads[type],
      });
    }
  };

  const onModalSave = (
    files: UploadFile[],
    mobileFiles: UploadFile[],
    altText: string,
    titleText: string,
  ) => {
    console.log(files);
    if (files.length) {
      ads[selectedIdxType][selectedIdx].image = {
        ...ads[selectedIdxType][selectedIdx].image,
        altText,
        titleText,
        upload: files[0].originFileObj,
        url: files[0].thumbUrl || '',
      };

      if (!ads[selectedIdxType][selectedIdx].image.url.includes(files[0].name)) {
        // This is a different image being uploaded, force a new binding
        ads[selectedIdxType][selectedIdx].image.id = 0;
      }
    } else {
      ads[selectedIdxType][selectedIdx].image = {
        ...ads[selectedIdxType][selectedIdx].image,
        altText,
        titleText,
      };
    }

    if (mobileFiles.length && ads[selectedIdxType][selectedIdx].image) {
      ads[selectedIdxType][selectedIdx].image = {
        ...ads[selectedIdxType][selectedIdx].image,
        altText,
        titleText,
        mobile: mobileFiles[0].originFileObj,
      };
    }

    setSelectedAltText('');
    setSelectedTitleText('');
    setAds({ ...ads });
  };

  const onDelete = async (ad: AdInput, type: string, idx: number) => {
    if (ad.id) {
      await deleteAd({ variables: { id: ad.id } });
    }

    ads[type].splice(idx, 1);

    if (!ads[type].length) {
      delete ads[type];
    }

    setAds({ ...ads });
  };

  useEffect(() => onUpdate(ads), [ads]);

  return (
    <Box>
      {!hideGrouping && (
        <>
          <Box variant="card" sx={{ maxWidth: 400 }}>
            <Text fontSize={16} pb={2}>
              Group
            </Text>
            <Input
              type="text"
              placeholder="Group"
              defaultValue={groupName}
              onInput={updateGrouping}
            />
          </Box>
          <Box sx={{ borderBottom: '1px solid black', my: 4 }} />
        </>
      )}

      <Box mb="4" p="3">
        <Row justify="space-between" align="middle">
          <Text variant="h4">Types</Text>
          <Space>
            <Select
              placeholder="Select..."
              style={{ minWidth: 300 }}
              onChange={(e) => setSelectedType(e.toString())}
            >
              {AD_TYPES.map((item) => (
                <Select.Option value={item.value} key={item.value}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
            <Button type="primary" onClick={addType} disabled={!grouping}>
              Add Type
            </Button>
            {/* <SettingDropdown overlay={{}}></SettingDropdown> */}
          </Space>
        </Row>
      </Box>

      {Boolean(adsByType.length) &&
        adsByType.map((type) => (
          <Box mb="4" p="3" bg="lightGrey" key={type}>
            <Row justify="space-between" align="middle">
              <Text variant="h4">{type}</Text>
              <Space>
                <Button type="primary" onClick={() => addAnotherAd(type)}>
                  Add Ad
                </Button>
                {/* <SettingDropdown overlay={{}}></SettingDropdown> */}
              </Space>
            </Row>
            {ads[type].map((x, idx) => (
              <Box key={idx}>
                {idx > 0 && <Box sx={{ borderBottom: '1px solid darkGrey', my: 2 }} />}
                <Row style={{ marginTop: 24 }}>
                  {x.image.url ? (
                    <Image
                      src={x.image.url}
                      width={180}
                      onClick={() => {
                        setSelectedIdx(idx);
                        setSelectedIdxType(type);
                        setSelectedAltText(x.image.altText || '');
                        setSelectedTitleText(x.image.titleText || '');
                        setIsImageModalVisible(true);
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <Button
                      onClick={() => {
                        setSelectedIdx(idx);
                        setSelectedIdxType(type);
                        setIsImageModalVisible(true);
                      }}
                      style={{ alignSelf: 'flex-end', width: 180 }}
                    >
                      Upload Image
                    </Button>
                  )}

                  {x.image.mobileUrl && (
                    <Image
                      src={x.image.mobileUrl}
                      height={100}
                      onClick={() => {
                        setSelectedIdx(idx);
                        setSelectedIdxType(type);
                        setSelectedAltText(x.image.altText || '');
                        setSelectedTitleText(x.image.titleText || '');
                        setIsImageModalVisible(true);
                      }}
                      style={{ cursor: 'pointer', marginLeft: 8 }}
                    />
                  )}

                  <Box style={{ marginLeft: 24, minWidth: 150 }}>
                    <Text fontSize={16} pb={2}>
                      Target URL
                    </Text>
                    <Input
                      type="text"
                      defaultValue={x.targetUrl}
                      onInput={(e) => updateAddInput(type, idx, 'targetUrl', e.currentTarget.value)}
                    />
                  </Box>
                  <Box style={{ marginLeft: 24, minWidth: 150 }}>
                    <Text fontSize={16} pb={2}>
                      Title Text
                    </Text>
                    <Input
                      type="text"
                      defaultValue={x.titleText}
                      onInput={(e) => updateAddInput(type, idx, 'titleText', e.currentTarget.value)}
                    />
                  </Box>
                  <Box style={{ marginLeft: 24, minWidth: 100 }}>
                    <Text fontSize={16} pb={2}>
                      Identifier
                    </Text>
                    <Input
                      type="text"
                      defaultValue={x.identifier}
                      onInput={(e) =>
                        updateAddInput(type, idx, 'identifier', e.currentTarget.value)
                      }
                    />
                  </Box>
                  <Box style={{ marginLeft: 24, minWidth: 100 }}>
                    <Text fontSize={16} pb={2}>
                      Position
                    </Text>
                    <Input
                      type="number"
                      defaultValue={x.position}
                      style={{ width: 100 }}
                      onInput={(e) =>
                        updateAddInput(type, idx, 'position', parseInt(e.currentTarget.value))
                      }
                    />
                  </Box>
                  <Button
                    style={{ marginLeft: 'auto', alignSelf: 'flex-end' }}
                    onClick={() => onDelete(x, type, idx)}
                    loading={loading}
                  >
                    <DeleteOutlined />
                  </Button>
                </Row>
              </Box>
            ))}
          </Box>
        ))}

      <ImageUploadModal
        visible={isImageModalVisible}
        onClosed={() => setIsImageModalVisible(false)}
        onSave={onModalSave}
        existingAltText={selectedAltText}
        existingTitleText={selectedTitleText}
      />
    </Box>
  );
};
