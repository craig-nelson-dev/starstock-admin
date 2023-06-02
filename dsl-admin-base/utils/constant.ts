export const PER_PAGE_OPTIONS = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '20',
    value: 20,
  },
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
  {
    label: '200',
    value: 200,
  },
];

export const DEFAULT_PER_PAGE = 10;

export const PLACEHOLDER_PASSWORD = `        `;

export const PUBLIC_ROUTES = ['/login'];

const BaseStatus = [
  {
    label: 'Active',
    value: 'A',
  },
  {
    label: 'Hidden',
    value: 'H',
  },
  {
    label: 'Disabled',
    value: 'D',
  },
];

export const CATEGORY_STATUSES = [...BaseStatus];
export const ATTRIBUTE_STATUSES = [...BaseStatus];
export const PROMOTION_STATUSES = [...BaseStatus];
export const ATTRIBUTE_DISPLAY = [
  {
    label: 'All',
    value: 'all',
  },
];

export enum USER_STATUS {
  Active = 'active',
  Disabled = 'disabled',
}

// Define page id
export enum PAGES {
  BO = 'bo',
  BO_ADMIN = 'bo_admin',
  BO_DOC = 'bo_doc',
  CATEGORIES = 'categories',
  LOGISTIC_FEE = 'logistic_fee',
  ORDERS = 'orders',
  OUTLETS = 'outlets',
  PRODUCTS = 'products',
  TAXES = 'taxes',
  USERS = 'users',
  ATTRIBUTES = 'attributes',
  ABANDONED_BASKET = 'abandoned_basket',
  UPSELLS = 'upsells',
  PROMOTIONS = 'promotions',
  RECOMMENDATIONS = 'recommendations',
  BANNERS_ADS = 'banners-ads',
}

export const OrderStatus = [
  {
    label: 'Payment Processed',
    value: 'processed',
  },
  {
    label: 'Payment Pending',
    value: 'pending',
  },
  {
    label: 'Payment Succeeded',
    value: 'succeeded',
  },
];

export const CreditReasonCodes = [
  {
    label: 'Undelivered',
    value: 1,
  },
  {
    label: 'Broken',
    value: 2,
  },
  {
    label: 'Rejected',
    value: 3,
  },
];

// These statuses are fixed values, defined in backend
export enum StatusValue {
  ACTIVE = 0,
  HIDDEN = 2,
  DELETED = 1,
  DISABLED = 3,
  PENDING = 5,
  CLOSED = 6,
}

export enum BulKDeleteActions {
  USERS = 'deleteUsers',
  PRODUCTS = 'deleteProducts',
  CATEGORIES = 'deleteCategories',
  BRAND_OWNERS = 'deleteBrandOwners',
  DOCUMENTS = 'deleteSupportDocuments',
  TAX_CODES = 'deleteTaxCodes',
  LOGISTICS_FEE = 'deleteLogisticFees',
  STARSTOCK_ADMINS = 'deleteStarstockAdmins',
  PRODUCT_FEATURES = 'deleteProductFeatures',
}

export const OutletStatuses = [
  {
    label: 'Active',
    value: StatusValue.ACTIVE,
  },
  {
    label: 'Disabled',
    value: StatusValue.DISABLED,
  },
  {
    label: 'Closed',
    value: StatusValue.CLOSED,
  },
];

export const OutletStyles = [
  {
    label: 'Bar',
    value: 'Bar',
  },
  {
    label: 'Bar Restaurant',
    value: 'Bar Restaurant',
  },
  {
    label: 'Casual Dining Restaurant',
    value: 'Casual Dining Restaurant',
  },
  {
    label: 'Community Pub',
    value: 'Community Pub',
  },
  {
    label: 'Food Pub',
    value: 'Food Pub',
  },
  {
    label: 'High Street Pub',
    value: 'High Street Pub',
  },
  {
    label: 'Hotel',
    value: 'Hotel',
  },
  {
    label: 'Large Venue',
    value: 'Large Venue',
  },
  {
    label: 'Nightclub',
    value: 'Nightclub',
  },
  {
    label: 'Restaurant',
    value: 'Restaurant',
  },
  {
    label: 'Sports/Social Club',
    value: 'Sports/Social Club',
  },
];

export const LegalStatus = [
  {
    label: 'Ltd Company',
    value: 'Ltd Company',
  },
  {
    label: 'Sole Trader',
    value: 'Sole Trader',
  },
  {
    label: 'Partnership',
    value: 'Partnership',
  },
  {
    label: 'LLP',
    value: 'LLP',
  },
  {
    label: 'Charity',
    value: 'Charity',
  },
];

export const PROMOTION_TYPES = [
  {
    value: 'glassware',
    label: 'Glassware',
  },
  {
    value: 'freeStock',
    label: 'Free Stock',
  },
  {
    value: 'moneyOff',
    label: 'Money Off',
  },
  {
    value: 'pointOfSale',
    label: 'Point of Sale',
  },
  {
    value: 'discount',
    label: 'Discount',
  },
  {
    value: 'none',
    label: 'None',
  },
];

export enum PromotionEffectType {
  FREE_STOCK = 'freeStock',
  BASKET_DISCOUNT = 'cartDiscountFixed',
  LINE_DISCOUNT = 'productDiscountFixed',
  RANGE = 'rangeDeal',
  ADVERTISER = 'advertiserDeal',
}

export enum PromotionConditionType {
  PRODUCT = 'product',
  MOV = 'orderQty',
  FIRST_ORDER = 'firstOrder',
  BRAND_FIRST_ORDER = 'brandFirstOrder',
  BRAND_PRODUCT = 'brandProduct',
  ANY_PRODUCT = 'anyProduct',
  VOUCHER = 'voucher',
  PRODUCT_QTY = 'productQty',
}

export const PrimaryPromoConditions = [
  PromotionConditionType.PRODUCT,
  PromotionConditionType.ANY_PRODUCT,
  PromotionConditionType.MOV,
  PromotionConditionType.BRAND_PRODUCT,
] as string[];

export enum PromotionLimitType {
  PER_PROMOTION = 'redemptionCount',
  PER_CUSTOMER = 'perCustomer',
  MAX_PER_ORDER = 'max',
}

export const QUALIFYING_CONTIONS = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Any',
    value: 'any',
  },
];

export const PROMOTION_CONTDITION_TYPE = [
  {
    label: 'Product',
    value: 'product',
  },
];

export const DeliveryDays = [
  {
    label: 'Monday',
    value: 'monday',
  },
  {
    label: 'Tuesday',
    value: 'tuesday',
  },
  {
    label: 'Wednesday',
    value: 'wednesday',
  },
  {
    label: 'Thursday',
    value: 'thursday',
  },
  {
    label: 'Friday',
    value: 'friday',
  },
];

export enum ProductAttributeType {
  freeText = 'freeText',
  select = 'select',
  checkbox = 'checkbox',
  radio = 'radio',
}
