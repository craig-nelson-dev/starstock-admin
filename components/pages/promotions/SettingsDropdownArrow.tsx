import { Dropdown } from 'antd';
import { Box } from 'rebass';
import { ReactElement } from 'react';
import CogSolidIcon from 'assets/icons/cog-solid.svg';
import { DownOutlined } from '@ant-design/icons';

interface Props {
  overlay: ReactElement;
  big?: boolean;
}

export const SettingsDropdownArrow: React.FC<Props> = ({ overlay }) => {
  return (
    <Box onClick={(e) => e.stopPropagation()} sx={{ display: 'inline-block' }}>
      <Dropdown overlay={overlay} trigger={['click']}>
        <Box sx={{ cursor: 'pointer', alignItems: 'center' }} display="flex">
          <CogSolidIcon />
          <DownOutlined />
        </Box>
      </Dropdown>
    </Box>
  );
};
