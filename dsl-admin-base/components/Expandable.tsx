import { motion } from 'framer-motion';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Box, Text } from 'rebass';

interface Props {
  title: string;
}

export const Expandable: React.FC<Props> = ({ children, title }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', pb: 3, cursor: 'pointer' }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Text color="headingGrey" fontWeight="bold" sx={{ px: 3 }}>
          {title}
        </Text>
        <motion.div
          initial={false}
          animate={{ rotate: open ? -180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <DownOutlined></DownOutlined>
        </motion.div>
      </Box>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: 'hidden' }}
      >
        <Box sx={{ px: 3, pb: 3 }}>{children}</Box>
      </motion.div>
    </Box>
  );
};
