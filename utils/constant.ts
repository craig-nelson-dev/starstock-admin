import { StatusValue } from 'dsl-admin-base';

export const PUBLIC_ROUTES = ['/login'];

const BaseStatus = [
  {
    label: 'Active',
    value: StatusValue.ACTIVE,
  },
  {
    label: 'Disabled',
    value: StatusValue.DISABLED,
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
  {
    label: 'Y',
    value: 1,
  },
  {
    label: 'N',
    value: 0,
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
  TERMS_CONDITIONS = 'terms_conditions',
  PRODUCTS = 'products',
  TAXES = 'taxes',
  USERS = 'users',
  ATTRIBUTES = 'attributes',
  ABANDONED_BASKET = 'abandoned_basket',
  UPSELLS = 'upsells',
  PROMOTIONS = 'promotions',
  BANNERS_ADS = 'banners-ads',
  POD = 'pod',
  CREDITS = 'credits',
}

export const mockFeatures = [
  'Brand Owner',
  'Brand',
  'Origin',

  'Unit Size',

  'Pack size',

  'Container Type',

  'Bottle Size',

  'Region',

  'ABV',

  'Flavours',

  'Vintage',

  'Primary Grape',

  'Secondary Grape',

  'Screwcap',

  'Producer',

  'Vegetarian',

  'Vegan',

  'Gluten Free',
  'Allergens',
  'Tasting Notes',

  'Pairs with',
].map((o, i) => ({
  id: i,
  name: o,
  value: '',
  description: '',
  featured: false,
  filterable: false,
  position: i,
})) as any;
