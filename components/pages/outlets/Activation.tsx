import { Button, Tooltip } from 'antd';
import { DslOutlet, useActivateOutletMutation } from 'dsl-admin-base';
import React from 'react';
import { Box, Flex, Text } from 'rebass';

interface Props {
  outlet: DslOutlet;
  reload: () => void;
}

export const Activation: React.FC<Props> = ({ outlet, reload }) => {
  const disabled = !Boolean(outlet.deliveryDays);

  const [activate, { loading }] = useActivateOutletMutation();

  const onClick = async () => {
    try {
      await activate({
        variables: {
          input: {
            outletId: Number(outlet.id),
          },
        },
      });

      reload();
    } catch (ex) {}
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffeef0',
        my: 3,
        px: 4,
        py: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fe5568',
        color: '#fe5568',
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text mr={4}>
          This outlet is not yet activated. Please set the delivery days for this customer and
          activate to enable.
        </Text>
        {disabled ? (
          <Tooltip placement="topLeft" title="Set delivery days first">
            <Button style={{ width: 140 }} disabled={true}>
              Activate
            </Button>
          </Tooltip>
        ) : (
          <Button style={{ width: 140 }} loading={loading} onClick={onClick}>
            Activate
          </Button>
        )}
      </Flex>
    </Box>
  );
};
