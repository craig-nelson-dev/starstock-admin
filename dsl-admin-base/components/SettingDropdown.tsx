import { Dropdown } from 'antd';
import { Box } from 'rebass';
import { ReactElement } from 'react';
import CogSolidIcon from '../icons/cog-solid.svg';

interface Props {
  overlay: ReactElement;
  big?: boolean;
}

export const SettingDropdown: React.FC<Props> = ({ overlay }) => {
  return (
    <Box onClick={(e) => e.stopPropagation()} sx={{ display: 'inline-block' }}>
      <Dropdown overlay={overlay} trigger={['click']}>
        <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <CogSolidIcon />
        </Box>
      </Dropdown>
    </Box>
  );
};
