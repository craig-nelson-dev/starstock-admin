import React from 'react';
import { Modal } from 'antd';
import { Box, Text } from 'rebass';

interface Props {
  title?: string; // value for default modal title (optional)
  header?: string; // value for custom modal title
  width?: number | string; // width of modal
  opened: boolean; // opened state of modal
  close: any;
  style?: React.CSSProperties;
  childMaxHeight?: string | number;
  footer?: React.ReactNode;
}

export const GeneralModal: React.FC<Props> = ({
  header,
  title,
  width,
  opened,
  close,
  children,
  style,
  childMaxHeight,
  footer,
}) => {
  return (
    <Modal
      title={title}
      footer={null}
      visible={opened}
      maskClosable={false}
      onCancel={close}
      destroyOnClose={false}
      centered={true}
      width={typeof style?.width !== 'undefined' ? style.width : width ? width : 720}
      style={style}
    >
      {header && (
        <Box sx={{ justifyContent: 'center', display: 'flex', my: 4 }}>
          <Text variant="modalHeading" textAlign="center">
            {header}
          </Text>
        </Box>
      )}

      <Box
        sx={{
          maxHeight: childMaxHeight || 'calc(100vh - 300px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          p: 1,
        }}
        variant="customAntDesign"
      >
        {children}
      </Box>

      {Boolean(footer) && footer}
    </Modal>
  );
};
