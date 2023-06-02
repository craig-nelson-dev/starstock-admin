import { PromotionEffectType, Condition, DslProduct, EffectInput } from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import { Row, Menu, Dropdown, notification } from 'antd';
import { ProductEffectControl } from './ProductEffectControl';
import { BasketDiscountEffect } from './BasketDiscountEffect';
import { LineDiscountEffect } from './LineDiscountEffect';
import { RangeEffect } from './RangeEffect';
import { AdvertisingEffect } from './AdvertisingEffect';
import { useState, useEffect, useMemo } from 'react';

interface Props {
  effects: EffectInput[];
  onChange: (value: EffectInput[]) => void;
  conditions: Condition[];
}

interface ExtendCondition extends Condition {
  products?: DslProduct[];
}

export const Effects: React.FC<Props> = ({ effects, onChange, conditions }) => {
  const [activeEffects, setActiveEffects] = useState(effects);

  const [effectType, setEffectType] = useState<PromotionEffectType | undefined>(
    effects.length ? (effects[0].type as PromotionEffectType) : undefined,
  );

  const menu = (
    <Menu onClick={(e) => addEffect(e.key as PromotionEffectType)}>
      <Menu.Item key={PromotionEffectType.FREE_STOCK}>Free Stock</Menu.Item>
      <Menu.Item key={PromotionEffectType.BASKET_DISCOUNT}>Basket Discount</Menu.Item>
      <Menu.Item key={PromotionEffectType.LINE_DISCOUNT}>Line Discount</Menu.Item>
      <Menu.Item key={PromotionEffectType.RANGE}>Range Reward</Menu.Item>
      <Menu.Item key={PromotionEffectType.ADVERTISER}>Advertising Only</Menu.Item>
    </Menu>
  );

  const productsInPromotion = useMemo(() => {
    return (conditions.find((o) => o.type === 'product') as ExtendCondition)?.products || [];
  }, [conditions]);

  const addEffect = (key: PromotionEffectType) => {
    // TODO: revisit later
    if (!effectType || true) {
      setEffectType(key);

      if (key === PromotionEffectType.BASKET_DISCOUNT) {
        setActiveEffects([
          {
            type: PromotionEffectType.BASKET_DISCOUNT,
            name: 'basket-discount',
            value: 0,
          },
        ]);
      }

      if (key === PromotionEffectType.LINE_DISCOUNT) {
        setActiveEffects([
          {
            type: PromotionEffectType.LINE_DISCOUNT,
            name: 'line-discount',
            value: 0,
          },
        ]);
      }

      if (key === PromotionEffectType.ADVERTISER) {
        setActiveEffects([
          {
            type: PromotionEffectType.ADVERTISER,
            name: 'advertising-only',
            value: 0,
          },
        ]);
      }
    } else {
      notification.warn({ message: 'Can not  change reward type' });
    }
  };

  useEffect(() => {
    onChange(activeEffects);
  }, [activeEffects]);

  return (
    <Box sx={{ mt: 4, pb: 5 }}>
      <Box>
        <Text variant="h4">Reward</Text>
        <Box sx={{ my: 3 }}>
          <Row align="middle">
            <Dropdown overlay={menu} trigger={['click']}>
              <Text
                sx={{
                  textTransform: 'uppercase',
                  ml: 'auto',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Add Reward
              </Text>
            </Dropdown>
          </Row>
        </Box>
      </Box>

      {effectType === PromotionEffectType.FREE_STOCK && (
        <ProductEffectControl effects={activeEffects} onChange={setActiveEffects} />
      )}

      {effectType === PromotionEffectType.BASKET_DISCOUNT && (
        <BasketDiscountEffect effects={activeEffects} onChange={setActiveEffects} />
      )}

      {effectType === PromotionEffectType.LINE_DISCOUNT && (
        <LineDiscountEffect
          effects={activeEffects}
          onChange={setActiveEffects}
          products={productsInPromotion}
        />
      )}

      {effectType === PromotionEffectType.RANGE && (
        <RangeEffect effects={activeEffects} onChange={setActiveEffects} />
      )}

      {effectType === PromotionEffectType.ADVERTISER && <AdvertisingEffect />}
    </Box>
  );
};
