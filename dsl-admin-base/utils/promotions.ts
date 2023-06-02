import { DslOrderItem, DslOrderPromotion, DslOrder } from '../graphql/generated/graphql';
import { RepositoryFactory } from '../repositories/RepositoryFactory';
import _ from 'lodash';

export enum PromotionDiscountTypes {
  ProductDiscountFixed = 'productDiscountFixed',
  ProductDiscountPercentage = 'productDiscountPercentage',
  ProductDisCountAbsoluteFixed = 'productDiscountAbsoluteFixed',
  ProductDiscountAbsolutePercentage = 'productDiscountAbsolutePercentage',
  CarDiscountFixed = 'cartDiscountFixed',
}

const allDiscountTypes = Object.values(PromotionDiscountTypes) as string[];

const productDiscountTypes = [
  PromotionDiscountTypes.ProductDiscountFixed,
  PromotionDiscountTypes.ProductDiscountAbsolutePercentage,
  PromotionDiscountTypes.ProductDiscountPercentage,
  PromotionDiscountTypes.ProductDisCountAbsoluteFixed,
] as string[];

export const getOrderItemLineDiscount = (item: DslOrderItem, applied: DslOrderPromotion[]) => {
  const discountPromotion = applied.find(
    (o) => productDiscountTypes.includes(o.effectType) && o.orderItemId === item.id,
  );

  if (discountPromotion) {
    const newValue = discountPromotion.originalValue - discountPromotion.valueChange;
    const totalTax =
      item.totalTax -
      Math.round(
        discountPromotion.valueChange *
          discountPromotion.qty *
          (discountPromotion.taxMultiplier - 1),
      );

    return {
      unitPrice: newValue,
      totalPrice: newValue * item.qty,
      totalTax,
      promoTaxMultiplier: discountPromotion.taxMultiplier,
    };
  }

  return null;
};

export interface PromoDiscount {
  name: string;
  value: number;
}

const getOrderDiscountDetail = (promotions: DslOrderPromotion[]): PromoDiscount[] => {
  const result: any = {};

  for (let promotion of promotions || []) {
    if (allDiscountTypes.includes(promotion.effectType)) {
      result[promotion.promotionName] =
        (result[promotion.promotionName] || 0) + promotion.valueChange * promotion.qty;
    }
  }

  return Object.entries(result).map((x: any) => ({ name: x[0] as string, value: -x[1] as number }));
};

export interface DslOrderItemExtended extends DslOrderItem {
  discount?: {
    unitPrice: number;
    totalPrice: number;
    totalTax: number;
    promoTaxMultiplier: number;
  };
}

const getOrderFreeStockItems = async (order: DslOrder) => {
  const freeStockItems = await Promise.all(
    (order.promotions || [])
      .filter((o) => o.effectType === 'freeStock')
      .map(async (item) => {
        const product = await RepositoryFactory.get('product').getProductDetail(item.productId);
        if (product) {
          return {
            name: product.name,
            code: product.code,
            qty: item.valueChange,
            mainImage: product.mainImage?.fullSizePath,
            taxRate: 0,
            price: 0,
            total: 0,
            totalTax: 0,
          } as DslOrderItemExtended;
        }
      }),
  );

  return freeStockItems.filter((o) => o) as DslOrderItemExtended[];
};

export const getOrderWithPromotion = async (order: DslOrder) => {
  let items: DslOrderItemExtended[] = [];

  for (let body of order.orderBody || []) {
    for (let item of body.orderItems || []) {
      items.push(item);
    }
  }

  for (let item of items) {
    const itemDiscount = getOrderItemLineDiscount(item, order.promotions || []);

    if (itemDiscount) {
      item.discount = {
        unitPrice: itemDiscount.unitPrice,
        totalPrice: itemDiscount.totalPrice,
        totalTax: itemDiscount.totalTax,
        promoTaxMultiplier: itemDiscount.promoTaxMultiplier,
      };
    }
  }

  items = _.sortBy(items, (o) => o.id);

  const freeStockItems = await getOrderFreeStockItems(order);
  const discountDetail = getOrderDiscountDetail(order.promotions || []);

  return {
    order,
    items,
    freeStockItems,
    discountDetail,
  };
};
