import { Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useState } from 'react';
import { Flex, Text } from 'rebass';

interface Props {
  reasonCode: string;
  setReasonCode: (newReasonCode: string) => void;
}

export const TreviPayReasonCodeInput: React.FC<Props> = ({ reasonCode, setReasonCode }) => {
  const [isTreviPayReason, setIsTreviPayReason] = useState(true);

  return (
    <Flex alignItems="center" mt="4" mb="3" bg="lightGrey" px={4} py={3}>
      <Text mr={2}>Trevipay reason code: </Text>
      <Input
        onChange={(e) => setReasonCode(e.target.value)}
        value={reasonCode}
        disabled={isTreviPayReason}
        style={{ width: 350 }}
      />
      <Flex ml={2}>
        <Checkbox
          checked={isTreviPayReason}
          onChange={(e) => {
            setIsTreviPayReason(e.target.checked);
            if (e.target.checked) setReasonCode('Non Applicable');
          }}
        />
        <Text ml={2}> Non applicable</Text>
      </Flex>
    </Flex>
  );
};
