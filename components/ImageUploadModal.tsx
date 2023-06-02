import { PlusOutlined } from '@ant-design/icons';
import { Input, Modal, Upload } from 'antd';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from 'rebass';

interface Props {
  existingAltText?: string;
  existingTitleText?: string;
  visible: boolean;
  onClosed(): void;
  onSave(
    fileList: UploadFile[],
    mobileList: UploadFile[],
    altText: string,
    titleText: string,
  ): void;
}

export const ImageUploadModal: React.FC<Props> = ({
  visible = false,
  onClosed,
  onSave,
  existingAltText = '',
  existingTitleText = '',
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [mobileList, setMobileList] = useState<UploadFile[]>([]);
  const [altText, setAltText] = useState<string>(existingAltText);
  const [titleText, setTitleText] = useState<string>(existingTitleText);

  useEffect(() => {
    setAltText(existingAltText);
    setTitleText(existingTitleText);
  }, [existingAltText, existingTitleText]);

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      // message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      // message.error('Image must smaller than 2MB!');
    }
    return false;
  };

  const closeModal = () => {
    setFileList([]);
    setAltText('');
    setTitleText('');
    onClosed();
  };

  const onSaveClick = () => {
    onSave(fileList, mobileList, altText, titleText);
    closeModal();
  };

  return (
    <Modal
      title="Upload Image"
      visible={visible}
      onCancel={closeModal}
      onOk={onSaveClick}
      centered
      okText="Save"
      destroyOnClose
    >
      <Flex>
        <Box>
          <Upload
            name="image"
            listType="picture-card"
            className="image-uploader"
            accept="image/*"
            fileList={fileList}
            onChange={({ fileList }) => {
              setFileList(fileList.slice(-1));
            }}
            showUploadList={{ showPreviewIcon: false }}
            beforeUpload={beforeUpload}
            maxCount={1}
          >
            <div>
              <PlusOutlined />
              <div className="ant-upload-text">ADD IMAGE</div>
            </div>
          </Upload>
        </Box>
        <Box>
          <Upload
            name="mobile"
            listType="picture-card"
            className="image-uploader"
            accept="image/*"
            fileList={mobileList}
            onChange={({ fileList }) => {
              setMobileList(fileList.slice(-1));
            }}
            showUploadList={{ showPreviewIcon: false }}
            beforeUpload={beforeUpload}
            maxCount={1}
          >
            <div>
              <PlusOutlined />
              <div className="ant-upload-text">ADD MOBILE</div>
            </div>
          </Upload>
        </Box>

        <Box ml={4} flex={1}>
          <Text fontSize={16} pb={2}>
            Alt Text
          </Text>
          <Input
            type="text"
            defaultValue={existingAltText}
            onInput={(e) => setAltText(e.currentTarget.value)}
          />

          <Text fontSize={16} pb={2} mt={4}>
            Title Text
          </Text>
          <Input
            type="text"
            defaultValue={existingTitleText}
            onInput={(e) => setTitleText(e.currentTarget.value)}
          />
        </Box>
      </Flex>
    </Modal>
  );
};
