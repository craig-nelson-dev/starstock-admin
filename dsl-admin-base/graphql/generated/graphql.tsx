import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a multipart file upload. */
  Upload: any;
};




export type CartProductSupplementInput = {
  productId: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  selected: Scalars['Boolean'];
};

export type AdminUserFilter = {
  statusValue?: Maybe<Scalars['Int']>;
  brandOwner?: Maybe<Scalars['Int']>;
};

export type CreditNoteCreateResponse = {
  __typename?: 'CreditNoteCreateResponse';
  success: Scalars['Boolean'];
  note?: Maybe<CreditNote>;
};

export type DslProduct = {
  __typename?: 'DslProduct';
  id: Scalars['ID'];
  status: Status;
  type: Scalars['String'];
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  mrrp: Scalars['Float'];
  popularity: Scalars['Float'];
  searchWords: Scalars['String'];
  seoTitle: Scalars['String'];
  seoDescription: Scalars['String'];
  seoKeywords: Scalars['String'];
  seoSlug: Scalars['String'];
  volume: Scalars['Float'];
  weight: Scalars['Float'];
  boxLength: Scalars['Float'];
  boxWidth: Scalars['Float'];
  boxHeight: Scalars['Float'];
  featured: Scalars['Boolean'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  features?: Maybe<Array<DslProductFeature>>;
  options?: Maybe<Array<DslProductOption>>;
  price: Price;
  adminPricing?: Maybe<ProductAdminPricing>;
  promotions?: Maybe<Array<Promotion>>;
  mainImage?: Maybe<DslProductImage>;
  additionalImages?: Maybe<Array<DslProductImage>>;
  onWishlist: Scalars['Boolean'];
  variations?: Maybe<Array<ProductVariation>>;
  taxCode?: Maybe<TaxCode>;
  associations?: Maybe<ProductAssociations>;
  categories?: Maybe<Array<DslCategory>>;
  showInstallationRequest?: Maybe<Scalars['Boolean']>;
  displayType: Scalars['String'];
  totalSales: Scalars['Int'];
  hideLoggedOut: Scalars['Boolean'];
  flaggedPrice: Scalars['Boolean'];
  ads?: Maybe<Array<Ad>>;
};

export type CreditNoteFilters = {
  search?: Maybe<Scalars['String']>;
  pagination: Pagination;
  date?: Maybe<DateFilter>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  outletId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: Maybe<Scalars['String']>;
  lineThree?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  type: Scalars['String'];
  brandOwnerId?: Maybe<Scalars['Int']>;
};

export type CreditNotesResponse = {
  __typename?: 'CreditNotesResponse';
  totalCount: Scalars['Int'];
  notes?: Maybe<Array<CreditNote>>;
};

export type UpdateSimilarProductsResponse = {
  __typename?: 'UpdateSimilarProductsResponse';
  products?: Maybe<Array<DslProduct>>;
};

/**
 * A UrlRewrite contains the type of resource this url points to, plus the id of the resource itself
 * TypeNames:
 *     productUrlRewrite: resourceId = productId
 *     categoryUrlRewrite: resourceId = categoryId
 *     urlRedirect301: path = redirect path
 */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  id: Scalars['Int'];
  typeName: Scalars['String'];
  slug: Scalars['String'];
  canonical: Scalars['Boolean'];
  resourceId: Scalars['Int'];
  path: Scalars['String'];
};

export type ProductAdminPricingInput = {
  pricing?: Maybe<Array<ProductAdminPriceInput>>;
};

export type UpdateAddress = {
  id: Scalars['Int'];
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName: Scalars['String'];
  lastName: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo: Scalars['String'];
  lineThree: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
};

export type BasicAdminListInput = {
  search?: Maybe<Scalars['String']>;
  sort: Sort;
  pagination: DslAdminPagination;
};

export type StarStockCompanyDetailsAdminParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<Array<Maybe<DslAdminFilter>>>;
  sort?: Maybe<Sort>;
};

export type CalculateOrderTotalInput = {
  selectedDeliveryDate?: Maybe<Scalars['String']>;
};

/**
 * This filter requires at least one value to be present
 * excluded values will be defined as infinite
 * min = 2, max = 5  ===  filter.value >= 2 AND filter.value <= 5
 * min = 12, max = null  ===  filter.value >= min
 * min = null, max = 25  ===  filter.value <= 25
 * min = null, max = null  ===  no filter
 */
export type MinMaxIntFilter = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};

export type OutletDeliveryDayOverride = {
  __typename?: 'OutletDeliveryDayOverride';
  id: Scalars['Int'];
  outletId: Scalars['Int'];
  day: Scalars['Int'];
  month: Scalars['Int'];
  year: Scalars['Int'];
  isBlocked: Scalars['Boolean'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DslProductPrice = {
  __typename?: 'DslProductPrice';
  productId: Scalars['Int'];
  subtotal: Scalars['Float'];
  vat: Scalars['Float'];
  discount: Scalars['Float'];
  total: Scalars['Float'];
};

export type AdInput = {
  id?: Maybe<Scalars['Int']>;
  statusValue: Scalars['Int'];
  type: Scalars['String'];
  productID?: Maybe<Scalars['Int']>;
  brandID?: Maybe<Scalars['Int']>;
  image: ImageInput;
  targetUrl: Scalars['String'];
  identifier: Scalars['String'];
  grouping?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  titleText: Scalars['String'];
};

export type NotificationMessage = {
  __typename?: 'NotificationMessage';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  status: Status;
  name: Scalars['String'];
  title: Scalars['String'];
  message: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  createdBy: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  readOn?: Maybe<Scalars['String']>;
};

export type ReportsResponse = {
  __typename?: 'ReportsResponse';
  total: Scalars['Int'];
  reports?: Maybe<Array<Report>>;
};

export type ProductAssociation = {
  __typename?: 'ProductAssociation';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type DslCategoryInput = {
  parentId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  seoSlug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type CreditNote = {
  __typename?: 'CreditNote';
  id: Scalars['Int'];
  creditNumber: Scalars['String'];
  orderId: Scalars['Int'];
  orderReference: Scalars['String'];
  subtotal: Scalars['Int'];
  discount: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  createdBy: DslUser;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  items?: Maybe<Array<CreditNoteItem>>;
  providerReferences?: Maybe<Array<CreditNoteReference>>;
  outletName: Scalars['String'];
};

export type UpdateOutletResponse = {
  __typename?: 'UpdateOutletResponse';
  outlet: DslOutlet;
};

export type Limit = {
  __typename?: 'Limit';
  id: Scalars['Int'];
  type: Scalars['String'];
  value: Scalars['Float'];
  order: Scalars['Int'];
};

export type OutletProductPricingParams = {
  outletId: Scalars['Int'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<DslAdminPagination>;
  /** Optionally provide an array of product id's to limit the response to only matching products */
  productIdFilter?: Maybe<Array<Scalars['Int']>>;
};

export type UpdateOutletBillingResponse = {
  __typename?: 'updateOutletBillingResponse';
  address?: Maybe<Address>;
};

export type EffectData = {
  __typename?: 'EffectData';
  types?: Maybe<Array<Scalars['String']>>;
  entities?: Maybe<Array<Scalars['String']>>;
};

export type UpdateProductPostcodeRestrictionsInput = {
  productIds?: Maybe<Array<Scalars['Int']>>;
  brandId: Scalars['Int'];
  postcodeIds?: Maybe<Array<Scalars['Int']>>;
  replace: Scalars['Boolean'];
  brandLocked: Scalars['Boolean'];
};

export type DeliveryDay = {
  deliveryDay: Scalars['String'];
  leadDays: Scalars['Int'];
  type: Scalars['String'];
};

export type DslAdminFilter = {
  name: Scalars['String'];
  values: Array<Maybe<Scalars['String']>>;
};

/**
 * Set `activeOnly` to `true` to see only active promotions or `expiredOnly` for
 * expired ones. Setting a `statusValue` will attempt to filter on the provided
 * value, defaulting to `active` status if the value doesn't map.
 */
export type PromotionsListParams = {
  activeOnly: Scalars['Boolean'];
  expiredOnly: Scalars['Boolean'];
  statusValue?: Maybe<Scalars['Int']>;
};

export type AdminOrderWeeklyStats = {
  __typename?: 'AdminOrderWeeklyStats';
  dateTime: Scalars['String'];
  ordersCount: Scalars['Int'];
  orderAmount: Scalars['Int'];
};

/** Represents a selectable product attrribute */
export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  feature: DslProductFeature;
};

export type UserIdentity = {
  __typename?: 'UserIdentity';
  id: Scalars['Int'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type PromotionVouchersParams = {
  id: Scalars['Int'];
};

export type BrandOwnerTopProduct = {
  __typename?: 'BrandOwnerTopProduct';
  id: Scalars['ID'];
  status: Status;
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  totalSales: Scalars['Int'];
  thumbnailPath: Scalars['String'];
};

export type BulkActionError = {
  __typename?: 'BulkActionError';
  id?: Maybe<Array<Scalars['Int']>>;
  error: Scalars['String'];
};

export type AdminOrdersOverviewResponse = {
  __typename?: 'AdminOrdersOverviewResponse';
  ordersStats?: Maybe<AdminOrdersStats>;
  orderLines: Scalars['Int'];
};

export type DslOutlet = {
  __typename?: 'DslOutlet';
  id: Scalars['ID'];
  accountNumber: Scalars['String'];
  status: Status;
  name: Scalars['String'];
  style: Scalars['String'];
  legalStatus: Scalars['String'];
  companyName: Scalars['String'];
  companyNumber: Scalars['String'];
  charityNumber: Scalars['String'];
  dropPointDescription: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  addressBook: OutletAddressBook;
  outletUsers?: Maybe<Array<OutletUser>>;
  lastOrdered?: Maybe<Scalars['String']>;
  outletType: Scalars['String'];
  features: DslOutletFeatures;
  deliveryDays?: Maybe<Array<OutletDeliveryDay>>;
  userRole?: Maybe<Scalars['String']>;
  bdmUser?: Maybe<DslUser>;
  activeOnline: Scalars['Boolean'];
  productsWithPricingCount?: Maybe<Scalars['Int']>;
  shippingPostcode: Scalars['String'];
  primaryUser?: Maybe<OutletUser>;
  xpoAccountNumber?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['Boolean']>;
  activatedOn?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  status: Status;
  type: Scalars['String'];
  url: Scalars['String'];
  mobileUrl: Scalars['String'];
  thumbnail: Scalars['String'];
  altText: Scalars['String'];
  titleText: Scalars['String'];
  name: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type VoucherCode = {
  __typename?: 'VoucherCode';
  id: Scalars['Int'];
  promotionId: Scalars['Int'];
  code: Scalars['String'];
  entityId: Scalars['Int'];
  redemptionCount: Scalars['Int'];
  maxRedemptionCount: Scalars['Int'];
  enabled: Scalars['Boolean'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type LogisticsFeesParams = {
  query?: Maybe<Scalars['String']>;
  statusValue?: Maybe<Scalars['Int']>;
  sort?: Maybe<Sort>;
  pagination: DslAdminPagination;
  brandOwnerId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
};

export type UpdateProductInput = {
  id: Scalars['ID'];
  product: InsertProduct;
  categoryId?: Maybe<Scalars['Int']>;
  taxCodeId?: Maybe<Scalars['Int']>;
  statusValue?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  distributorId?: Maybe<Scalars['Int']>;
};

export type RecommendationsListFilters = {
  status?: Maybe<Scalars['Int']>;
  brandOwner?: Maybe<Scalars['Int']>;
};

export type UpdateDeliveryChargeInput = {
  id: Scalars['Int'];
  code: Scalars['String'];
};

export type ProductAdminOutletPriceInput = {
  productId: Scalars['Int'];
  inputPrice: Scalars['Float'];
  starStockFee: Scalars['Float'];
  logisticsFee: Scalars['Float'];
  dateFrom: Scalars['String'];
  dateTo: Scalars['String'];
  delete?: Maybe<Scalars['Boolean']>;
};

export type OrderItemSupplement = {
  __typename?: 'OrderItemSupplement';
  id: Scalars['Int'];
  orderItemId: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  selected: Scalars['Boolean'];
};

export type UpsellProductsResponse = {
  __typename?: 'UpsellProductsResponse';
  order?: Maybe<Array<DslProduct>>;
  basket?: Maybe<Array<DslProduct>>;
  home?: Maybe<Array<DslProduct>>;
};

export type BrandOwnerListResponse = {
  __typename?: 'BrandOwnerListResponse';
  brandOwners: Array<Maybe<BrandOwner>>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns a list of categories and sub categories if requested. */
  dslCategories?: Maybe<Array<DslCategory>>;
  /** Returns a category matching the supplied id or `null` if none is found. */
  dslCategoryById?: Maybe<DslCategory>;
  /** Returns a category matching the supplied path or `null` if none is found. */
  dslCategoryByPath?: Maybe<DslCategory>;
  /** Returns a list of products for the supplied category `id`. */
  dslCategoryProducts: DslProductsResponse;
  /** Returns a list of products for the supplied brand `slug`. */
  dslBrandPartnerProducts: DslProductsResponse;
  /** Returns a list of products which match the supplied search string. */
  dslProductSearch: DslProductsResponse;
  /** Returns a single product matching the supplied id or `null` if none is found. */
  dslProductById?: Maybe<DslProduct>;
  /**
   * Returns the price of a product given the product ID
   * This method will also apply the current context, and return the most relevant price for the context
   */
  dslProductPrice?: Maybe<Array<DslProductPrice>>;
  /**
   * Returns a list of related products for the supplied product slug and will fallback to category products if there are
   * not enough specified.
   */
  dslRelatedProducts?: Maybe<Array<DslProduct>>;
  /**
   * Returns a list of cross sell products as per the specified type. Type can be something like `homepage`, `cart`,
   * `forgotten`, etc.
   */
  dslCrossSellProducts?: Maybe<Array<DslProduct>>;
  /** Returns a list of restricted postcodes for the provided product id. */
  productPostcodeRestrictions?: Maybe<Array<Postcode>>;
  /** Returns any recently ordered products. */
  dslRecentlyOrderedProducts: DslProductsResponse;
  /** Returns the cart for the current user or guest as per any attached `access_token`. */
  dslCart?: Maybe<DslCart>;
  /** Returns the current user if one is found in the session. */
  dslCurrentUser: AuthDslResponse;
  /** Returns a list of orders for the currently logged in user. */
  dslUserOrders: DslOrderResponse;
  /** Returns an order for the supplied id if it exists. */
  dslOrderByReference?: Maybe<DslOrder>;
  /** This will return the credit information for Admiral outlet based on the current context */
  creditEnquiry: CreditEnquiryResponse;
  /** Will fetch CMS managed content depending on the supplied params. */
  content?: Maybe<Array<Content>>;
  /** Will return a list of the user's wishlists. */
  wishlists?: Maybe<Array<Wishlist>>;
  /** Will return the detail of a user's wishlist. */
  wishlistDetail?: Maybe<Wishlist>;
  /** Returns a list of available promotions. */
  promotions?: Maybe<Array<Promotion>>;
  /** Returns a list of available promotion types that can be used for filtering. */
  promotionTypes?: Maybe<Array<PromotionType>>;
  /**
   * Returns a list of promotions mataching the supplied `type`. This should be the `name` field of the `PromotionType`
   * object.
   */
  getPromotionsByType?: Maybe<Array<Maybe<Promotion>>>;
  /**
   * Takes the current url path and returns route information
   * If this is null the route does not exist
   */
  route?: Maybe<Route>;
  /**
   * Returns a list of enabled payment proividers
   * The provider should be used when calling paymentIntent & checkPaymentIntentSuccess
   */
  getPaymentProviders: Array<Scalars['String']>;
  /** Returns only active product id's given a list of product id's */
  activeProductCheck: Array<Scalars['Int']>;
  /** Returns a list of credit notes for the currently logged in user. */
  creditNotes: CreditNotesResponse;
  /** Returns a credit note for the current user if the supplied `id` matches. */
  creditNoteById?: Maybe<CreditNote>;
  /**
   * Returns the credit sign up URL if this user / outlet has not already signed`
   * up. It will return `null` otherwise.
   */
  getCreditSignup?: Maybe<Scalars['String']>;
  /**
   * This returns a list of adds sorted by type and position for the provided
   * group.
   */
  getAdsForGroup?: Maybe<Array<Ad>>;
  /** Returns the account details and balance for an associated TreviPay account */
  treviPayAccountBalance: TreviPayAccountData;
  /** Make a payment */
  makePayment: MakePaymentResponse;
  /**
   * Returns a product given the id for use in admin areas
   * May return null if the product exists but is not available to the users current context
   */
  getProductById?: Maybe<DslProduct>;
  getAdminProducts: DslAdminProductsResponse;
  getAdminOutletByID: DslOutlet;
  getAdminOutlets?: Maybe<OutletsResponse>;
  findOutlet?: Maybe<DslOutlet>;
  getAdminCategories?: Maybe<Array<DslCategory>>;
  getEntityByName: Entity;
  getEntityTypeByName: EntityType;
  getTaxCodeById: TaxCode;
  getTaxCodeByCode: TaxCode;
  getTaxCodes?: Maybe<Array<TaxCode>>;
  getAdminTaxCodes: TaxCodesResponse;
  getAdminUsers: AdminUsersListResponse;
  getAdminSupportDocuments: SupportDocumentsResponse;
  getStarStockCompanyDetails: StarStockCompanyDetails;
  getAdminLogisticsFees?: Maybe<LogisticsFeesResponse>;
  getAdminLogisticsFeeById: LogisticsFee;
  getAdminLinkedProducts: LinkedProductsResponse;
  getSimilarProducts: GetSimilarProductsResponse;
  getYouMightAlsoLikeProducts: GetYouMightAlsoLikeProductsResponse;
  getAdminAbandonedCarts: AdminAbandonedCartsResponse;
  getProductFeaturesList: ProductFeaturesListOutput;
  getAdminDistributors?: Maybe<Array<BrandOwner>>;
  updateDistributor: Scalars['Boolean'];
  getAdminUserById?: Maybe<DslUser>;
  getAdminOrders: AdminOrdersResponse;
  getAdminOrderById: DslOrder;
  getBrandOwner: BrandOwnerListResponse;
  /**
   * Returns a list of promotions for an admin. This will be filtered by brand
   * for `brandOwner` users.
   */
  getAdminPromotions?: Maybe<Array<Promotion>>;
  /**
   * Returns all the currently available static data required for creating or
   * updating promotions.
   */
  getAdminPromotionStaticData: PromotionStaticData;
  getAdminPromotionVouchers?: Maybe<Array<VoucherCode>>;
  getAdminNotificationMessages: GetAdminNotificationMessagesResponse;
  /** OutletDeliveryDateOverride related endpoints */
  getOutletDeliveryDateOverrides: GetOutletDeliveryDateOverridesResponse;
  getAdminTypes: GetAdminTypesResponse;
  /** Returns the startstock fee assigned to the tenant in the current context */
  getStarStockFee: Scalars['Float'];
  /** Returns a list of outlet product pricing (override pricing) */
  getOutletProductPricing: OutletProductPricingResponse;
  getAdminNotificationMessageById: GetAdminNotificationMessageResponse;
  getProductPostcodeRestrictions?: Maybe<PostCodeRestrictionResponse>;
  /** Brand Owner admin functionality to get brand owner(s) */
  getBrandOwnerByID?: Maybe<BrandOwnerDetails>;
  getAdminBrandOwners?: Maybe<Array<BrandOwner>>;
  /** Returns a list of available distributors to be associated with this product. */
  getAvailableProductDistributors?: Maybe<Array<ProductDistributor>>;
  /** Returns a list of created reports for the current context. */
  getReports?: Maybe<ReportsResponse>;
  /** Returns a specific report by their `id`. */
  getReportById?: Maybe<Report>;
  getBrandOwnerOverview: BrandOwnerOverviewResponse;
  getBrandOwnerTopProducts?: Maybe<Array<BrandOwnerTopProduct>>;
  getBrandOwnerOrdersWeeklyStats?: Maybe<Array<BrandOwnerOrderWeeklyStats>>;
  getBrandOwnerTopPromotions?: Maybe<Array<BrandOwnerTopPromotion>>;
  getAdminUpsellProducts: UpsellProductsResponse;
  getAdminOrdersOverview: AdminOrdersOverviewResponse;
  getAdminTopProducts?: Maybe<Array<AdminTopProduct>>;
  getAdminOrdersWeeklyStats?: Maybe<Array<AdminOrderWeeklyStats>>;
  getAdminTopPromotions?: Maybe<Array<AdminTopPromotion>>;
  getAdminOverview: AdminOverviewResponse;
  /** Returns a product feature given the product feature ID */
  getProductFeatureById: DslProductFeature;
  /** Returns a list of product attributes with default values */
  getProductAttributeSelection?: Maybe<Array<ProductAttribute>>;
  getRecommendations: RecommendationListResponse;
  getRecommendationByID: Recommendation;
  getAdminAbandonedCartDetails: DslCart;
  getTermsConditionsByID: TermsConditions;
  getTermsConditionsList: TermsConditionsListResponse;
  /** Returns a list of created credit notes. */
  getCreditNotes: CreditNotesResponse;
  /** Returns a credit note by id. */
  getCreditNoteById?: Maybe<CreditNote>;
  /** TEMP */
  getSalesReportByOrder: SalesReportByOrder;
  getAdGroups: AdGroupsResponse;
  /** Reqeust Sage 200 data sync - returns the Sage login redirect URL */
  syncSageData: Scalars['String'];
  /**
   * ETL Specific categories query
   * This returns all categories so the they can be mapped in the ETL via their `code`
   * This is required as there is no category setup information available from Nav
   */
  getETLCategories?: Maybe<Array<DslCategory>>;
  /**
   * ETL Specific tax codes query
   * This returns all tax codes so they can be mapped in the ETL via their `id`
   * This is required as there is no tax code setup information available from Nav
   */
  getETLTaxCodes?: Maybe<Array<TaxCode>>;
  /** Returns order data given the order ID */
  getETLOrder: GetEtlOrderResponse;
  /** Returns a user by id */
  getETLUser: DslUser;
  /** Returns an outlet by id */
  getETLOutlet: DslOutlet;
  /** Returns orders for the ETL */
  getETLOrders?: Maybe<Array<DslOrder>>;
  /** Returns credit notes for the ETL */
  getETLCreditNotesByDate?: Maybe<Array<CreditNote>>;
};


export type QueryDslCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDslCategoryByPathArgs = {
  path: Scalars['String'];
};


export type QueryDslCategoryProductsArgs = {
  id: Scalars['ID'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
};


export type QueryDslBrandPartnerProductsArgs = {
  slug: Scalars['String'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
};


export type QueryDslProductSearchArgs = {
  searchQuery: Scalars['String'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
};


export type QueryDslProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDslProductPriceArgs = {
  productIds: Array<Scalars['Int']>;
};


export type QueryDslRelatedProductsArgs = {
  id: Scalars['Int'];
  categoryId: Scalars['Int'];
  limit?: Scalars['Int'];
};


export type QueryDslCrossSellProductsArgs = {
  type: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProductPostcodeRestrictionsArgs = {
  id: Scalars['Int'];
};


export type QueryDslRecentlyOrderedProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDslUserOrdersArgs = {
  sort?: Maybe<Sort>;
  filters?: Maybe<OrderFilters>;
  pagination?: Maybe<Pagination>;
};


export type QueryDslOrderByReferenceArgs = {
  reference: Scalars['String'];
};


export type QueryContentArgs = {
  params?: Maybe<ContentFilterParams>;
  pagination?: Maybe<Pagination>;
};


export type QueryWishlistDetailArgs = {
  id: Scalars['String'];
};


export type QueryGetPromotionsByTypeArgs = {
  type?: Maybe<Array<Scalars['String']>>;
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};


export type QueryActiveProductCheckArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryCreditNotesArgs = {
  input?: CreditNoteFilters;
};


export type QueryCreditNoteByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAdsForGroupArgs = {
  name: Scalars['String'];
};


export type QueryMakePaymentArgs = {
  input: MakePaymentInput;
};


export type QueryGetProductByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAdminProductsArgs = {
  params?: Maybe<DslProductAdminParams>;
};


export type QueryGetAdminOutletByIdArgs = {
  outletId: Scalars['Int'];
};


export type QueryGetAdminOutletsArgs = {
  params?: Maybe<OutletAdminParams>;
};


export type QueryFindOutletArgs = {
  input: FindOutletParams;
};


export type QueryGetEntityByNameArgs = {
  name: Scalars['String'];
  typeId: Scalars['Int'];
};


export type QueryGetEntityTypeByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetTaxCodeByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetTaxCodeByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetAdminTaxCodesArgs = {
  params?: Maybe<TaxCodesAdminParams>;
};


export type QueryGetAdminUsersArgs = {
  params: AdminUsersParams;
};


export type QueryGetAdminSupportDocumentsArgs = {
  params?: Maybe<SupportDocumentAdminParams>;
};


export type QueryGetAdminLogisticsFeesArgs = {
  params?: LogisticsFeesParams;
};


export type QueryGetAdminLogisticsFeeByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAdminLinkedProductsArgs = {
  productId: Scalars['Int'];
};


export type QueryGetSimilarProductsArgs = {
  productId: Scalars['Int'];
};


export type QueryGetYouMightAlsoLikeProductsArgs = {
  productId: Scalars['Int'];
};


export type QueryGetAdminAbandonedCartsArgs = {
  params?: Maybe<AdminAbandonedCartsInput>;
};


export type QueryGetProductFeaturesListArgs = {
  params?: Maybe<ProductFeaturesListInput>;
};


export type QueryGetAdminDistributorsArgs = {
  params?: Maybe<BasicAdminListInput>;
};


export type QueryUpdateDistributorArgs = {
  params: UpdateDistributorInput;
};


export type QueryGetAdminUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAdminOrdersArgs = {
  params: AdminOrdersParams;
};


export type QueryGetAdminOrderByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetBrandOwnerArgs = {
  params?: Maybe<BrandOwnerListParams>;
};


export type QueryGetAdminPromotionsArgs = {
  params: PromotionsListParams;
};


export type QueryGetAdminPromotionVouchersArgs = {
  params: PromotionVouchersParams;
};


export type QueryGetAdminNotificationMessagesArgs = {
  params?: Maybe<GetAdminNotificationMessagesParams>;
};


export type QueryGetOutletDeliveryDateOverridesArgs = {
  input: GetOutletDeliveryDateOverridesInput;
};


export type QueryGetOutletProductPricingArgs = {
  params: OutletProductPricingParams;
};


export type QueryGetAdminNotificationMessageByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetProductPostcodeRestrictionsArgs = {
  productId?: Scalars['Int'];
  brandId?: Scalars['Int'];
};


export type QueryGetBrandOwnerByIdArgs = {
  brandId: Scalars['Int'];
};


export type QueryGetAdminBrandOwnersArgs = {
  params: BasicAdminListInput;
};


export type QueryGetAvailableProductDistributorsArgs = {
  params: AvailableDistributorParams;
};


export type QueryGetReportsArgs = {
  params: BasicAdminListInput;
};


export type QueryGetReportByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetBrandOwnerOverviewArgs = {
  input: BrandOwnerOverviewInput;
};


export type QueryGetBrandOwnerTopProductsArgs = {
  input: BrandOwnerOverviewInput;
};


export type QueryGetAdminUpsellProductsArgs = {
  limit?: Scalars['Int'];
};


export type QueryGetAdminOrdersOverviewArgs = {
  input: AdminOverviewInput;
};


export type QueryGetAdminTopProductsArgs = {
  input: AdminOverviewInput;
};


export type QueryGetAdminTopPromotionsArgs = {
  input: AdminOverviewInput;
};


export type QueryGetAdminOverviewArgs = {
  input: AdminOverviewInput;
};


export type QueryGetProductFeatureByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetProductAttributeSelectionArgs = {
  productId?: Maybe<Scalars['Int']>;
};


export type QueryGetRecommendationsArgs = {
  input: RecommendationsListParams;
};


export type QueryGetRecommendationByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAdminAbandonedCartDetailsArgs = {
  id: Scalars['Int'];
};


export type QueryGetTermsConditionsByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetTermsConditionsListArgs = {
  input: TermsConditionsListParams;
};


export type QueryGetCreditNotesArgs = {
  input: CreditNoteFilters;
};


export type QueryGetCreditNoteByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetSalesReportByOrderArgs = {
  input: SalesReportInput;
};


export type QueryGetAdGroupsArgs = {
  input?: BasicAdminListInput;
};


export type QueryGetEtlOrderArgs = {
  input?: Maybe<GetEtlOrderInput>;
};


export type QueryGetEtlUserArgs = {
  id: Scalars['Int'];
};


export type QueryGetEtlOutletArgs = {
  id: Scalars['Int'];
};


export type QueryGetEtlOrdersArgs = {
  distributorId?: Maybe<Scalars['Int']>;
  statusValue?: Maybe<Scalars['Int']>;
  fromDate?: Maybe<Scalars['String']>;
};


export type QueryGetEtlCreditNotesByDateArgs = {
  fromDate: Scalars['String'];
};

export type PaymentIntentResponse = {
  __typename?: 'PaymentIntentResponse';
  /** The key provided by the payment provider to be used to make payment requests from the browser */
  key: Scalars['String'];
};

export type Pagination = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
};

export type CreateAdminNotificationMessageResponse = {
  __typename?: 'CreateAdminNotificationMessageResponse';
  message: NotificationMessage;
};

export type UpdateOutletInput = {
  id: Scalars['Int'];
  outletName: Scalars['String'];
  dropPointDescription: Scalars['String'];
  billingAddress?: Maybe<UpdateAddress>;
};

export type OutletAdminParams = {
  accountNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters: OutletFilters;
  sort?: Maybe<Sort>;
  bdmUserId?: Maybe<Scalars['Int']>;
  orderedOnly: Scalars['Boolean'];
};

export type UpdateUserInput = {
  user: DslUserInput;
  outletId?: Maybe<Scalars['Int']>;
};

export type DslCart = {
  __typename?: 'DslCart';
  id: Scalars['ID'];
  userId: Scalars['Int'];
  OutletId: Scalars['Int'];
  guestId: Scalars['Int'];
  totalProducts: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  products?: Maybe<Array<DslCartProduct>>;
  totals: DslCartTotal;
  qualifiedPromotions?: Maybe<Array<Maybe<PromotionResult>>>;
  user?: Maybe<DslUser>;
  outlet?: Maybe<DslOutlet>;
  canCheckout: Scalars['Boolean'];
  messages?: Maybe<Array<NotificationMessage>>;
  vouchers?: Maybe<Array<CartVoucher>>;
};

export type EntityType = {
  __typename?: 'EntityType';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  created: Scalars['String'];
};

export type TreviPayAccountData = {
  __typename?: 'TreviPayAccountData';
  active: Scalars['Boolean'];
  balance: Scalars['Int'];
};

export type UpdateOutletDeliveryDaysInput = {
  outletId?: Maybe<Scalars['Int']>;
  deliveryDays?: Maybe<Array<DeliveryDay>>;
};

export type RegisterUser = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  marketing?: Maybe<Scalars['Boolean']>;
  referralSource?: Maybe<Scalars['String']>;
  currentSupplierInfo?: Maybe<Scalars['String']>;
  landline?: Maybe<Scalars['String']>;
};

export type InsertUserInput = {
  user: DslUserInput;
};

export type Ad = {
  __typename?: 'Ad';
  id: Scalars['Int'];
  status: Status;
  type: Scalars['String'];
  image?: Maybe<Image>;
  targetUrl: Scalars['String'];
  identifier: Scalars['String'];
  grouping?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  titleText: Scalars['String'];
  viewCount: Scalars['Int'];
  clickCount: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type BrandOwnerDetails = {
  __typename?: 'BrandOwnerDetails';
  owner: BrandOwner;
  address?: Maybe<Address>;
  logisticsFees: Array<Maybe<LogisticsFeeOverride>>;
};

export type ProductFeatureValue = {
  __typename?: 'ProductFeatureValue';
  id: Scalars['Int'];
  value: Scalars['String'];
  productId: Scalars['Int'];
  featureId: Scalars['Int'];
};

export type LogisticsFeesResponse = {
  __typename?: 'LogisticsFeesResponse';
  fees: Array<LogisticsFee>;
  totalCount: Scalars['Int'];
};

export type SendUserLoginRequestInput = {
  outletId: Scalars['Int'];
  userIds?: Maybe<Array<Scalars['Int']>>;
};

export type ReportDataCol = {
  __typename?: 'ReportDataCol';
  name: Scalars['String'];
  value: Scalars['String'];
  position: Scalars['Int'];
};

export type PromotionType = {
  __typename?: 'PromotionType';
  name: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CategoryStructureInput = {
  category: DslCategoryInput;
  statusID?: Maybe<Scalars['Int']>;
  subCategories?: Maybe<Array<CategoryStructureInput>>;
};

export type UpdateProductVariationsInput = {
  productId: Scalars['Int'];
};

export type UpdateOutletDeliveryDaysOutput = {
  __typename?: 'UpdateOutletDeliveryDaysOutput';
  deliveryDays?: Maybe<Array<OutletDeliveryDay>>;
};

export type SupportDocument = {
  __typename?: 'SupportDocument';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
  status: Status;
};

export type CartProductSupplement = {
  __typename?: 'CartProductSupplement';
  id: Scalars['Int'];
  cartProductId: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  selected: Scalars['Boolean'];
};

export type OutletsResponse = {
  __typename?: 'OutletsResponse';
  totalCount: Scalars['Int'];
  outlets?: Maybe<Array<DslOutlet>>;
};

export type DslProductImage = {
  __typename?: 'DslProductImage';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  type: Scalars['String'];
  fullSizePath: Scalars['String'];
  thumbnailPath: Scalars['String'];
  key: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

/**
 * Represents the availability of delivery against a postcode. The
 * `deliveryAvailable` field determines this. The `id` field will be `0` if no
 * overriding restriction is found and therefore the default values are returned
 * for the given `postcode`.
 */
export type PostcodeRestriction = {
  __typename?: 'PostcodeRestriction';
  id: Scalars['Int'];
  postcode: Postcode;
  deliveryAvailable: Scalars['Boolean'];
  brandLocked: Scalars['Boolean'];
};

export type OutletUser = {
  __typename?: 'OutletUser';
  role: Scalars['String'];
  user: DslUser;
};

export type InsertProductFeatureInput = {
  data?: Maybe<ProductFeatureInput>;
};

/** The `UploadFile` type, represents the request for uploading a file with certain payload. */
export type UploadFile = {
  key: Scalars['String'];
  upload: Scalars['Upload'];
};

export type InsertOutletResponse = {
  __typename?: 'InsertOutletResponse';
  outlet: DslOutlet;
};

export type PromotionResultChange = {
  __typename?: 'PromotionResultChange';
  id: Scalars['Int'];
  entityId: Scalars['Int'];
  entityType: Scalars['String'];
  originalValue: Scalars['Float'];
  valueChange: Scalars['Float'];
  newValue: Scalars['Float'];
  qty: Scalars['Int'];
};

export type InsertTermsConditions = {
  title: Scalars['String'];
  content: Scalars['String'];
  statusValue: Scalars['Int'];
};

export type CreateReportInput = {
  type: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  name: Scalars['String'];
};

export type AdditionalDataInvoice = {
  __typename?: 'AdditionalDataInvoice';
  paymentId: Scalars['Int'];
  data?: Maybe<SettlementInvoice>;
};

export type GetSimilarProductsResponse = {
  __typename?: 'GetSimilarProductsResponse';
  products?: Maybe<Array<DslProduct>>;
};

export type UpdateLogisticFeeResponse = {
  __typename?: 'UpdateLogisticFeeResponse';
  fee: LogisticsFee;
};

export type LimitData = {
  __typename?: 'LimitData';
  types?: Maybe<Array<Scalars['String']>>;
};

export type InsertProductInput = {
  product: InsertProduct;
  categoryId: Scalars['Int'];
  taxCodeId?: Maybe<Scalars['Int']>;
  statusValue?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  distributorId?: Maybe<Scalars['Int']>;
  relatedEntities?: Maybe<Array<InsertEntityRelationshipInput>>;
};

export type AdminAbandonedCartsResponse = {
  __typename?: 'AdminAbandonedCartsResponse';
  totalCount: Scalars['Int'];
  carts?: Maybe<Array<DslCart>>;
};

export type GetEtlOrderResponse = {
  __typename?: 'GetETLOrderResponse';
  order?: Maybe<DslOrder>;
};

export type FreeStockEffect = {
  __typename?: 'FreeStockEffect';
  entityId: Scalars['Int'];
  qty: Scalars['Int'];
};

export type AdGroupsResponse = {
  __typename?: 'AdGroupsResponse';
  groups?: Maybe<Array<AdGroup>>;
  totalCount: Scalars['Int'];
};

export type DslOrderPaymentInput = {
  orderId: Scalars['Int'];
  payment: OrderPaymentInput;
};

export type UsersFilter = {
  statusId?: Maybe<Scalars['Int']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
};

export type ProductFeatureDefaultValue = {
  __typename?: 'ProductFeatureDefaultValue';
  value: Scalars['String'];
  position: Scalars['Int'];
};

export type GetEtlOrderInput = {
  reference: Scalars['String'];
};

export type DeletePromotionInput = {
  promotionID: Scalars['Int'];
};

export type UserManagement = {
  __typename?: 'UserManagement';
  relationships?: Maybe<Array<UserRelationship>>;
};

export type CreditNoteItem = {
  __typename?: 'CreditNoteItem';
  id: Scalars['Int'];
  brandOwnerId?: Maybe<Scalars['Int']>;
  orderItemId?: Maybe<Scalars['Int']>;
  qty: Scalars['Int'];
  subtotal: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  taxRate?: Maybe<Scalars['Int']>;
  taxCalculationType: Scalars['String'];
  reasons?: Maybe<Array<Scalars['String']>>;
};

export type UpdateProductResponse = {
  __typename?: 'UpdateProductResponse';
  product: DslProduct;
};

export type UpdateAdminUserPasswordInput = {
  userId: Scalars['Int'];
  newPassword: Scalars['String'];
};

export type ProductFilter = {
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type PaymentIntentSuccessResponse = {
  __typename?: 'PaymentIntentSuccessResponse';
  /** Indicates if the payment was successful */
  paymentSuccess: Scalars['Boolean'];
  /** Message relevant to the paymentSuccess */
  message: Scalars['String'];
  /** Status string returned by the payment provider */
  status: Scalars['String'];
};

export type UpdateOutletDeliveryDateOverrideInput = {
  id?: Maybe<Scalars['Int']>;
  day: Scalars['Int'];
  month: Scalars['Int'];
  year: Scalars['Int'];
  isBlocked: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateLogisticsFeeInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  statusValue: Scalars['Int'];
  logisticsTypeId: Scalars['Int'];
  fee: Scalars['Float'];
  code?: Maybe<Scalars['String']>;
};

export type SalesReportInput = {
  brandId?: Maybe<Scalars['Int']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type CreditNoteItemInput = {
  brandOwnerId?: Maybe<Scalars['Int']>;
  orderItemId?: Maybe<Scalars['Int']>;
  qty: Scalars['Int'];
  subtotal: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  taxRate?: Maybe<Scalars['Int']>;
  taxCalculationType?: Maybe<Scalars['String']>;
  reasons: Array<CreditNoteReasonsInput>;
};

export type DslUser = {
  __typename?: 'DslUser';
  id: Scalars['Int'];
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  landline?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  marketing: Scalars['Boolean'];
  identities?: Maybe<Array<Maybe<UserIdentity>>>;
  status?: Maybe<Status>;
  outlets?: Maybe<Array<DslOutlet>>;
  createdOn: Scalars['String'];
  lastLogin: Scalars['String'];
  lastOrdered: Scalars['String'];
  brand?: Maybe<BrandOwner>;
  referralSource?: Maybe<Scalars['String']>;
  currentSupplierInfo?: Maybe<Scalars['String']>;
};

export type UpdatePromotionResponse = {
  __typename?: 'UpdatePromotionResponse';
  promotion: Promotion;
};

export type DslOrder = {
  __typename?: 'DslOrder';
  id: Scalars['Int'];
  reference: Scalars['String'];
  userId: Scalars['Int'];
  outletId: Scalars['Int'];
  status: Status;
  subtotal: Scalars['Int'];
  discount: Scalars['Int'];
  delivery: Scalars['Int'];
  total: Scalars['Int'];
  totalTax: Scalars['Int'];
  notes: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company: Scalars['String'];
  email: Scalars['String'];
  billingFirstName: Scalars['String'];
  billingLastName: Scalars['String'];
  billingLine1: Scalars['String'];
  billingLine2: Scalars['String'];
  billingLine3: Scalars['String'];
  billingCity: Scalars['String'];
  billingCounty: Scalars['String'];
  billingPostcode: Scalars['String'];
  billingCountry: Scalars['String'];
  shippingFirstName: Scalars['String'];
  shippingLastName: Scalars['String'];
  shippingLine1: Scalars['String'];
  shippingLine2: Scalars['String'];
  shippingLine3: Scalars['String'];
  shippingCity: Scalars['String'];
  shippingCounty: Scalars['String'];
  shippingPostcode: Scalars['String'];
  shippingCountry: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  orderBody?: Maybe<Array<OrderBody>>;
  payments?: Maybe<Array<OrderPayment>>;
  promotions?: Maybe<Array<DslOrderPromotion>>;
  additionalData?: Maybe<DslOrderAdditionalData>;
  outletName: Scalars['String'];
  userName: Scalars['String'];
  telephone: Scalars['String'];
};

export type InsertProductVariationsInput = {
  productId: Scalars['Int'];
};

export type BrandOwnerOverviewResponse = {
  __typename?: 'BrandOwnerOverviewResponse';
  totalOrders: Scalars['Int'];
  activeProducts: Scalars['Int'];
  ordersValue: Scalars['Int'];
  orderingAccounts: Scalars['Int'];
  activePromotions: Scalars['Int'];
  productsVolume: Scalars['Float'];
};

export type ContentServiceProviderDetail = {
  __typename?: 'ContentServiceProviderDetail';
  name: Scalars['String'];
  detail: Scalars['String'];
};

export type ProductVariation = {
  __typename?: 'ProductVariation';
  product_id: Scalars['ID'];
  features?: Maybe<Array<ProductVariationFeature>>;
};

export type ProductAdminPricing = {
  __typename?: 'ProductAdminPricing';
  productId: Scalars['Int'];
  pricing?: Maybe<Array<ProductAdminPrice>>;
};

export type BrandOwnerImagesInput = {
  storefrontLogo?: Maybe<ImageUpload>;
  adminLogo?: Maybe<ImageUpload>;
};

export type ProductAdminParamsFilter = {
  statusValue?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  distributorId?: Maybe<Scalars['Int']>;
  brandOwnerID?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
};

export type ContentBrandStoreDetail = {
  __typename?: 'ContentBrandStoreDetail';
  name: Scalars['String'];
  detail: Scalars['String'];
};

export type MediaSizes = {
  __typename?: 'MediaSizes';
  medium?: Maybe<MediaSize>;
  large?: Maybe<MediaSize>;
  thumbnail?: Maybe<MediaSize>;
  mediumLarge?: Maybe<MediaSize>;
  postThumbnail?: Maybe<MediaSize>;
  full?: Maybe<MediaSize>;
};

export type DslOrderPromotion = {
  __typename?: 'DslOrderPromotion';
  promotionId: Scalars['Int'];
  orderItemId?: Maybe<Scalars['Int']>;
  effectType: Scalars['String'];
  promotionName: Scalars['String'];
  description: Scalars['String'];
  originalValue: Scalars['Int'];
  valueChange: Scalars['Int'];
  taxChange: Scalars['Int'];
  newValue: Scalars['Int'];
  productId: Scalars['Int'];
  qty: Scalars['Int'];
  taxDescription: Scalars['String'];
  hiddenFromBrandOwner: Scalars['Boolean'];
  taxMultiplier: Scalars['Float'];
};

export type OutletProductPricingResponse = {
  __typename?: 'OutletProductPricingResponse';
  pricing?: Maybe<Array<ProductAdminOverridePrice>>;
};

export type PromotionStaticData = {
  __typename?: 'PromotionStaticData';
  promotion: PromotionData;
  condition: ConditionData;
  effect: EffectData;
  limit: LimitData;
};

export type ByOrderRows = {
  __typename?: 'ByOrderRows';
  accountNumber: Scalars['String'];
  outletName: Scalars['String'];
  orderNumber: Scalars['String'];
  orderDate: Scalars['String'];
  deliveryDate: Scalars['String'];
  podDate: Scalars['String'];
  processedOn: Scalars['String'];
  brandOwner: Scalars['String'];
  productCode: Scalars['String'];
  productName: Scalars['String'];
  price: Scalars['String'];
  inputPrice: Scalars['String'];
  platformFee: Scalars['String'];
  logisticsFee: Scalars['String'];
  qty: Scalars['Int'];
  lineTotal: Scalars['String'];
  inputTotal: Scalars['String'];
  platformTotal: Scalars['String'];
  logisticsTotal: Scalars['String'];
};

export type InsertEntityTypeInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ImageInput = {
  id?: Maybe<Scalars['Int']>;
  statusValue: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
  mobileUrl?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  titleText?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  upload?: Maybe<Scalars['Upload']>;
  mobile?: Maybe<Scalars['Upload']>;
};

export type UpdateOutletDeliveryDateOverrideResponse = {
  __typename?: 'updateOutletDeliveryDateOverrideResponse';
  item: OutletDeliveryDayOverride;
};

export type Type = {
  __typename?: 'Type';
  id: Scalars['Int'];
  name: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type AdminUsersParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<AdminUserFilter>;
  sort?: Maybe<Sort>;
  type: Scalars['String'];
};

export type UpdateBrandOwnerRecommendationInput = {
  id: Scalars['Int'];
  viewed?: Maybe<Scalars['Boolean']>;
  close?: Maybe<Scalars['Boolean']>;
};

export type TermsConditionsListParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<TermsConditionsListFilters>;
  sort?: Maybe<Sort>;
};

export type DslUserListItem = {
  __typename?: 'DslUserListItem';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  marketing: Scalars['Boolean'];
  type: Scalars['String'];
  status: Status;
  outlet?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  lastLogin: Scalars['String'];
  lastOrdered: Scalars['String'];
  brand?: Maybe<BrandOwner>;
};

export type RecommendationListResponse = {
  __typename?: 'RecommendationListResponse';
  totalCount: Scalars['Int'];
  recommendations?: Maybe<Array<Recommendation>>;
};

export type AdminAbandonedCartsInput = {
  search?: Maybe<Scalars['String']>;
  filters?: Maybe<AbandonedCartsFilter>;
  sort: Sort;
  pagination: DslAdminPagination;
};

export type UpdateEtlOrderStatusInput = {
  reference: Scalars['String'];
  statusValue: Scalars['Int'];
};

export type BrandOwnerListParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<BrandOwnerListFilters>;
  sort?: Maybe<Sort>;
};

export type InsertProduct = {
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  statusId?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  mrrp: Scalars['Float'];
  popularity: Scalars['Float'];
  searchWords: Scalars['String'];
  seoTitle: Scalars['String'];
  seoDescription: Scalars['String'];
  seoKeywords: Scalars['String'];
  seoSlug: Scalars['String'];
  volume?: Maybe<Scalars['Float']>;
  weight: Scalars['Float'];
  boxLength: Scalars['Float'];
  boxWidth: Scalars['Float'];
  boxHeight: Scalars['Float'];
  featured: Scalars['Boolean'];
  features?: Maybe<Array<DslProductFeatureInput>>;
  options?: Maybe<Array<DslProductOptionInput>>;
  pricing?: Maybe<Array<Maybe<DslProductPriceInput>>>;
  adminPricing?: Maybe<ProductAdminPricingInput>;
  mainImage?: Maybe<DslProductImageInput>;
  additionalImages?: Maybe<Array<DslProductImageInput>>;
  shipping?: Maybe<ProductShippingInput>;
  hideLoggedOut: Scalars['Boolean'];
  flaggedPrice?: Maybe<Scalars['Boolean']>;
};

export type MediaSize = {
  __typename?: 'MediaSize';
  file: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mimeType: Scalars['String'];
  url: Scalars['String'];
};

export type OrderItemAssociation = {
  __typename?: 'OrderItemAssociation';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SalesReportByOrder = {
  __typename?: 'SalesReportByOrder';
  rows?: Maybe<Array<ByOrderRows>>;
};

export type AdminOverviewInput = {
  filters: AdminOverviewFilters;
};

export type TaxCountry = {
  __typename?: 'TaxCountry';
  id: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
};

export type BrandOwnerLogisticsFee = {
  id: Scalars['Int'];
  fee: Scalars['Float'];
};

export type InsertSupportDocumentInput = {
  data?: Maybe<SupportDocumentData>;
  statusValue: Scalars['Int'];
};

export type DslProductOptionInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  icon: Scalars['String'];
};

export type DeleteOutletProductPricingInput = {
  outletId: Scalars['Int'];
  productIds?: Maybe<Array<Scalars['Int']>>;
};

export type TaxCodeInput = {
  data: TaxCodeData;
  status: Scalars['Int'];
};

export type ContentCustomFieldGroup = {
  __typename?: 'ContentCustomFieldGroup';
  groupName: Scalars['String'];
  items?: Maybe<Array<ContentCustomFieldGroupItem>>;
  subGroupItems?: Maybe<Array<ContentCustomFieldGroupItem>>;
};

export type AdminTopProduct = {
  __typename?: 'AdminTopProduct';
  id: Scalars['ID'];
  status: Status;
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  totalSales: Scalars['Int'];
  thumbnailPath: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Can be used to register a new user on the system. This is tenant specific and may not be enabled for all tenants. You
   * will receive an error message if you try to register a new user for a tenant with this functionality turned off.
   */
  dslRegisterUser: AuthDslResponse;
  /** Registers an outlet. */
  registerOutlet: InsertOutletResponse;
  /**
   * Provide new details for an already existing user. This is an absolute change so if no details for the given user in
   * the UserUpdate object are changing, then the initial values **still need to be supplied**, otherwise they will be set
   * to `null`.
   */
  dslUpdateUser: UpdateUserResponse;
  /** Udpates the outlet. Currently, only the name can be changed. */
  updateOutlet: UpdateOutletResponse;
  /** Sets the current user's outlet to the one supplied. */
  setUserOutlet: SetUserOutletResponse;
  /** Attempts to log in the user with the supplied credentials. Will return a result if successful or `false` if not. */
  dslLogin: AuthDslResponse;
  /** Logs out the user and will destroy their `access_token`. */
  logout: Scalars['Boolean'];
  /** This will refresh the current user's session if one is found. */
  dslRefresh: Scalars['Boolean'];
  /** Triggers the password reset process if an identity is found. */
  dslPasswordRecovery: Scalars['Boolean'];
  /** Allows resetting of a password with a token. This will *not* log the user in. */
  resetPasswordWithToken: Scalars['Boolean'];
  /** Allows the user to update their password. */
  dslUpdateUserPassword: Scalars['Boolean'];
  /**
   * Can be used to add, update or remove products from a cart. The supplied array of DslCartProductInput items are
   * processed in place; so adding, updating and removing can all be sent as part of a single request if desired. It does
   * not matter if a cart for the current user context exists or not.
   */
  dslUpdateCart?: Maybe<DslCart>;
  /** Can be used to update cart products supplements, for example a pump clip. */
  dslUpdateSupplement?: Maybe<CartProductSupplement>;
  /** This calculates the expected order total based on the input provided. */
  calculateOrderTotal?: Maybe<OrderTotal>;
  /**
   * Determines if the current state is acceptable for placing an order. It will
   * validate the delivery date, billing and shipping addresses provided.
   */
  dslCanPlaceOrder: Scalars['Boolean'];
  /** Will place an order for the current user. Will fail if no user is currently logged in or doesn't have a cart. */
  dslPlaceOrder: DslOrder;
  /** Will create an order payment for an existing order, if successful it will return the payment id */
  dslCreateOrderPayment: Scalars['Int'];
  /** This will queue an installation request email for the current user to the brand owner of the given product id. */
  dslInstallationRequest: Scalars['Boolean'];
  /** Creates a new wishlist. */
  newWishlist: Wishlist;
  /** Deletes the supplied wishlist. */
  deleteWishlist: Scalars['Boolean'];
  /** Adds an item to the wishlist. */
  addItemToWishlist?: Maybe<Wishlist>;
  /** Removes an item from a wishlist. */
  deleteItemFromWishlist?: Maybe<Wishlist>;
  /** This will mark all messages for the current cart context as read. */
  markCartMessagesRead: Scalars['Boolean'];
  /**
   * Request an intent to complete an order by making a payment
   * This indicates that the current cart total is about to be paid for
   * This should be called whenever a customer goes to checkout
   * Changes in price between checkout visits will be updated for an existing payment intent if it exists
   */
  paymentIntent: PaymentIntentResponse;
  /**
   * Indicates that the storefront believes the payment was taken successfully
   * The DSL will check with the payment provider directly to see if the payment intent was completed
   */
  checkPaymentIntentSuccess: PaymentIntentSuccessResponse;
  /**
   * Will attempt to apply the supplied voucer code to the cart. If successful,
   * this will appear inside the cart response. Note: a code can be applied
   * whilst still not qualifying for the promotion effect (e.g. because there
   * isn't the right qty of product in the cart, etc).
   */
  applyVoucherCode: DslCart;
  /** Will remove the supplied voucher code or be a no-op if it doesn't exist. */
  removeVoucherCode: DslCart;
  /**
   * Will attempt to update the qualified range promotion selection using the
   * provided values.
   */
  updatePromotionRangeSelection: DslCart;
  insertProduct: InsertProductResponse;
  updateProduct: UpdateProductResponse;
  deleteProductByID: Scalars['Boolean'];
  insertProductVariations: InsertProductVariationsResponse;
  updateProductVariations: UpdateProductVariationsResponse;
  deleteProductVariations: Scalars['Boolean'];
  insertAdminUser: DslUser;
  updateAdminUser: DslUser;
  deleteAdminUser: Scalars['Boolean'];
  /**
   * This will trigger the password recovery process on behalf of a user. They
   * will receive an email with a reset link within.
   */
  sendUserPasswordRecovery: Scalars['Boolean'];
  updateAdminUserPassword: Scalars['Boolean'];
  setUserOutletRole: Scalars['Boolean'];
  calculatePricing: Scalars['Boolean'];
  insertDistributor: Entity;
  deleteDistributor: Scalars['Boolean'];
  insertCustomer: Entity;
  deleteCustomer: Scalars['Boolean'];
  insertEntity: Entity;
  insertEntityType: EntityType;
  insertAdminOutlet: InsertOutletResponse;
  updateAdminOutlet: UpdateOutletResponse;
  activateOutlet: UpdateOutletResponse;
  insertCategory: CategoryInputResponse;
  insertCategoryStructure?: Maybe<Array<DslCategory>>;
  insertTaxCode: TaxCode;
  insertTaxCodes?: Maybe<Array<TaxCode>>;
  updateTaxCode: TaxCode;
  deleteTaxCodeById: Scalars['Boolean'];
  deleteTaxCodeByCode: Scalars['Boolean'];
  insertAdminSupportDocument: SupportDocument;
  updateAdminSupportDocument: SupportDocument;
  deleteAdminSupportDocumentByID: Scalars['Boolean'];
  updateStarStockCompanyDetails: StarStockCompanyDetails;
  insertAdminLogisticsFee: InsertLogisticFeeResponse;
  updateAdminLogisticsFee: UpdateLogisticFeeResponse;
  deleteAdminLogisticsFeeByID: Scalars['Boolean'];
  updateDeliveryCharge: LogisticsFee;
  updateAdminSimilarProducts: UpdateSimilarProductsResponse;
  updateAdminYouMightAlsoLikeProducts: UpdateYouMightAlsoLikeProductsResponse;
  bulkActionDelete: BulkActionResponse;
  insertProductFeature: DslProductFeature;
  updateProductFeature: DslProductFeature;
  sendUserLoginRequest: SendUserLoginRequestResponse;
  updateOutletDeliveryDays: UpdateOutletDeliveryDaysOutput;
  /**
   * This takes an entire promotion object and will attempt to perform an insert
   * if no id is present or an update if one is.
   */
  updatePromotion: UpdatePromotionResponse;
  /**
   * This will delete the promotion matching the supplied `promotionId` and
   * remove any active session results.
   */
  deletePromotion: Scalars['Boolean'];
  /** This will cause a recalculation of all products prices for the current tenant */
  recalculateAllProductPricing: Scalars['Boolean'];
  insertAdminNotificationMessage: CreateAdminNotificationMessageResponse;
  updateAdminNotificationMessage: UpdateAdminNotificationMessageResponse;
  deleteAdminNotificationMessage: Scalars['Boolean'];
  /** Will insert/update/delete product prices overrides for an outlet */
  updateOutletProductPricing: Scalars['Boolean'];
  /** Will delete product price overrides for an outlet */
  deleteOutletProductPricing: Scalars['Boolean'];
  /**
   * This updates a set of postcode restrictions for either a collection of
   * products or for a particular brand owner.
   */
  updateProductPostcodeRestrictions: Scalars['Boolean'];
  /** This operation will fail if a brand owner already exists with the same name for the current tenant */
  insertBrandOwner: BrandOwner;
  updateBrandOwner: BrandOwner;
  deleteBrandOwnerByID: Scalars['Boolean'];
  upsertBrandOwner: BrandOwner;
  /** Allows the user to create a report from the admin area. */
  createReport: CreateReportResponse;
  updateAdminUpsellProducts: Array<DslProduct>;
  /**
   * This will generate all url rewrites for categories and products
   * This is performed in a separate goroutine and will report back if the process has started: Boolean!
   */
  generateRouting: Scalars['Boolean'];
  upsertRecommendation: Recommendation;
  updateBrandOwnerRecommendation: Recommendation;
  /**
   * This will attempt to update the status of the supplied entity. It can be
   * used across different types for a reduced and easier method of toggling
   * status values.
   */
  updateEntityStatus: Scalars['Boolean'];
  /** This will attempt to create new terms and conditions and related operations */
  insertTermsConditions: TermsConditions;
  acceptTermsConditions: Scalars['Boolean'];
  updateTermsConditions: TermsConditions;
  /** Will create a credit note against an order. */
  createCreditNote: CreditNoteCreateResponse;
  /**
   * Will create or update an ad. Supply an `id` to perform an update instead
   * of an insert.
   */
  updateAd: UpdateAdResponse;
  updateAds: UpdateAdResponse;
  /** Deletes the add with the associated id. */
  deleteAd: Scalars['Boolean'];
  /** Prodocut data */
  insertETLProduct: InsertProductResponse;
  updateETLProduct: UpdateProductResponse;
  deleteETLProductByID: Scalars['Boolean'];
  /** Used to set customer pricing against a product */
  insertETLProductPriceOverride: InsertProductPriceOverrideResponse;
  deleteETLOutletProductPriceOverrides: Scalars['Boolean'];
  /** Used to define vendor & distributor product associations */
  updateETLProductAssociations: Scalars['Boolean'];
  /** User Roles are imported as entities */
  insertETLUserRole: Entity;
  /** Depots are imported as entities */
  insertETLDepot: Entity;
  deleteETLDepot: Scalars['Boolean'];
  /** Vendors are imported as brand owners */
  insertETLVendor: BrandOwner;
  deleteETLVendor: Scalars['Boolean'];
  /** Distributors are imported as brand owners */
  insertETLDistributor: BrandOwner;
  deleteETLDistributor: Scalars['Boolean'];
  /** Insert distribution depots */
  insertETLDistributionDepots: Scalars['Boolean'];
  /** Nav Customers are imported as Outlets */
  insertETLOutlet: InsertOutletResponse;
  updateETLOutlet: UpdateOutletResponse;
  /** Nav Users are imported as Users */
  insertETLUser: DslUser;
  updateETLUser: DslUser;
  /**
   * This assigns entity relationships
   * The ETL requires this to relate entities together for the distribution matrix
   */
  insertETLEntityRelationship: Scalars['Boolean'];
  /**
   * This will remove relationships based on type for the specified entity
   * The ETL uses this to clear outlet relationships
   */
  deleteETLEntityRelationships: Scalars['Boolean'];
  /**
   * Update an orders status
   * The ETL will call this mutation when an order status is updated in Nav
   */
  updateETLOrderStatus: Scalars['Boolean'];
  /**
   * Update the status of a list of distributor orders and the items within
   * This does not affect the parent (reference) order status
   */
  updateETLDistributorOrderStatus: Scalars['Boolean'];
};


export type MutationDslRegisterUserArgs = {
  input: UserRegistrationInput;
};


export type MutationRegisterOutletArgs = {
  input: InsertOutletInput;
};


export type MutationDslUpdateUserArgs = {
  input: UserUpdateInput;
};


export type MutationUpdateOutletArgs = {
  input: UpdateOutletInput;
};


export type MutationSetUserOutletArgs = {
  input: SetUserOutletInput;
};


export type MutationDslLoginArgs = {
  authRequest: AuthRequest;
};


export type MutationDslPasswordRecoveryArgs = {
  identity: Scalars['String'];
};


export type MutationResetPasswordWithTokenArgs = {
  input: ResetPasswordInput;
};


export type MutationDslUpdateUserPasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationDslUpdateCartArgs = {
  products: Array<DslCartProductInput>;
};


export type MutationDslUpdateSupplementArgs = {
  input: CartProductSupplementInput;
};


export type MutationCalculateOrderTotalArgs = {
  input: CalculateOrderTotalInput;
};


export type MutationDslCanPlaceOrderArgs = {
  input: DslOrderInput;
};


export type MutationDslPlaceOrderArgs = {
  input: DslOrderInput;
};


export type MutationDslCreateOrderPaymentArgs = {
  input: DslOrderPaymentInput;
};


export type MutationDslInstallationRequestArgs = {
  productId: Scalars['ID'];
};


export type MutationNewWishlistArgs = {
  wishlist: NewWishlist;
};


export type MutationDeleteWishlistArgs = {
  id: Scalars['String'];
};


export type MutationAddItemToWishlistArgs = {
  item: AddItemToWishlist;
};


export type MutationDeleteItemFromWishlistArgs = {
  listId: Scalars['String'];
  itemId: Scalars['Int'];
};


export type MutationPaymentIntentArgs = {
  input: PaymentIntentInput;
};


export type MutationApplyVoucherCodeArgs = {
  code: Scalars['String'];
};


export type MutationRemoveVoucherCodeArgs = {
  code: Scalars['String'];
};


export type MutationUpdatePromotionRangeSelectionArgs = {
  promotionID: Scalars['Int'];
  entityID: Scalars['Int'];
};


export type MutationInsertProductArgs = {
  input: InsertProductInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationDeleteProductByIdArgs = {
  id: Scalars['Int'];
};


export type MutationInsertProductVariationsArgs = {
  input?: Maybe<InsertProductVariationsInput>;
};


export type MutationUpdateProductVariationsArgs = {
  input?: Maybe<UpdateProductVariationsInput>;
};


export type MutationDeleteProductVariationsArgs = {
  productId: Scalars['Int'];
};


export type MutationInsertAdminUserArgs = {
  input: InsertUserInput;
};


export type MutationUpdateAdminUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteAdminUserArgs = {
  userId: Scalars['Int'];
};


export type MutationSendUserPasswordRecoveryArgs = {
  userId: Scalars['Int'];
};


export type MutationUpdateAdminUserPasswordArgs = {
  input: UpdateAdminUserPasswordInput;
};


export type MutationSetUserOutletRoleArgs = {
  input: InsertUserOutletRoleInput;
};


export type MutationCalculatePricingArgs = {
  productId: Scalars['Int'];
};


export type MutationInsertDistributorArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteDistributorArgs = {
  distributorId: Scalars['Int'];
};


export type MutationInsertCustomerArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteCustomerArgs = {
  customerId: Scalars['Int'];
};


export type MutationInsertEntityArgs = {
  input: InsertEntityInput;
};


export type MutationInsertEntityTypeArgs = {
  input: InsertEntityTypeInput;
};


export type MutationInsertAdminOutletArgs = {
  input: InsertOutletInput;
};


export type MutationUpdateAdminOutletArgs = {
  input: UpdateAdminOutletInput;
};


export type MutationActivateOutletArgs = {
  input: ActivateOutletInput;
};


export type MutationInsertCategoryArgs = {
  input: CategoryInput;
};


export type MutationInsertCategoryStructureArgs = {
  categories?: Maybe<Array<Maybe<CategoryStructureInput>>>;
};


export type MutationInsertTaxCodeArgs = {
  input: TaxCodeInput;
};


export type MutationInsertTaxCodesArgs = {
  input?: Maybe<Array<TaxCodeInput>>;
};


export type MutationUpdateTaxCodeArgs = {
  input: TaxCodeInput;
};


export type MutationDeleteTaxCodeByIdArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTaxCodeByCodeArgs = {
  code: Scalars['String'];
};


export type MutationInsertAdminSupportDocumentArgs = {
  input?: Maybe<InsertSupportDocumentInput>;
};


export type MutationUpdateAdminSupportDocumentArgs = {
  input?: Maybe<UpdateSupportDocumentInput>;
};


export type MutationDeleteAdminSupportDocumentByIdArgs = {
  supportDocumentID: Scalars['Int'];
};


export type MutationUpdateStarStockCompanyDetailsArgs = {
  input?: Maybe<UpdateStarStockCompanyDetailsInput>;
};


export type MutationInsertAdminLogisticsFeeArgs = {
  input: InsertLogisticsFeeInput;
};


export type MutationUpdateAdminLogisticsFeeArgs = {
  input: UpdateLogisticsFeeInput;
};


export type MutationDeleteAdminLogisticsFeeByIdArgs = {
  logisticsFeeId: Scalars['Int'];
};


export type MutationUpdateDeliveryChargeArgs = {
  input?: Maybe<UpdateDeliveryChargeInput>;
};


export type MutationUpdateAdminSimilarProductsArgs = {
  input: UpdateSimilarProductsInput;
};


export type MutationUpdateAdminYouMightAlsoLikeProductsArgs = {
  input: UpdateYouMightAlsoLikeProductsInput;
};


export type MutationBulkActionDeleteArgs = {
  input?: Maybe<BulkActionInput>;
};


export type MutationInsertProductFeatureArgs = {
  input?: Maybe<InsertProductFeatureInput>;
};


export type MutationUpdateProductFeatureArgs = {
  input?: Maybe<UpdateProductFeatureInput>;
};


export type MutationSendUserLoginRequestArgs = {
  input?: Maybe<SendUserLoginRequestInput>;
};


export type MutationUpdateOutletDeliveryDaysArgs = {
  input?: Maybe<UpdateOutletDeliveryDaysInput>;
};


export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput;
};


export type MutationDeletePromotionArgs = {
  input: DeletePromotionInput;
};


export type MutationInsertAdminNotificationMessageArgs = {
  params: CreateAdminNotificationMessageParams;
};


export type MutationUpdateAdminNotificationMessageArgs = {
  id: Scalars['Int'];
  params: UpdateAdminNotificationMessageParams;
};


export type MutationDeleteAdminNotificationMessageArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateOutletProductPricingArgs = {
  input: UpdateOutletProductPricingInput;
};


export type MutationDeleteOutletProductPricingArgs = {
  input: DeleteOutletProductPricingInput;
};


export type MutationUpdateProductPostcodeRestrictionsArgs = {
  input: UpdateProductPostcodeRestrictionsInput;
};


export type MutationInsertBrandOwnerArgs = {
  input: BrandOwnerInsert;
};


export type MutationUpdateBrandOwnerArgs = {
  input: BrandOwnerUpdate;
};


export type MutationDeleteBrandOwnerByIdArgs = {
  brandID: Scalars['Int'];
};


export type MutationUpsertBrandOwnerArgs = {
  input: UpsertBrandOwnerInput;
};


export type MutationCreateReportArgs = {
  input: CreateReportInput;
};


export type MutationUpdateAdminUpsellProductsArgs = {
  input: UpdateUpsellProductsInput;
};


export type MutationUpsertRecommendationArgs = {
  input: UpsertRecommendationInput;
};


export type MutationUpdateBrandOwnerRecommendationArgs = {
  input: UpdateBrandOwnerRecommendationInput;
};


export type MutationUpdateEntityStatusArgs = {
  input?: Maybe<UpdateStatusInput>;
};


export type MutationInsertTermsConditionsArgs = {
  input: InsertTermsConditions;
};


export type MutationAcceptTermsConditionsArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateTermsConditionsArgs = {
  input: UpdateTermsConditions;
};


export type MutationCreateCreditNoteArgs = {
  input: CreditNoteInput;
};


export type MutationUpdateAdArgs = {
  input: AdInput;
};


export type MutationUpdateAdsArgs = {
  input?: Maybe<Array<AdInput>>;
};


export type MutationDeleteAdArgs = {
  id: Scalars['Int'];
};


export type MutationInsertEtlProductArgs = {
  input: InsertProductInput;
};


export type MutationUpdateEtlProductArgs = {
  input: UpdateProductInput;
};


export type MutationDeleteEtlProductByIdArgs = {
  id: Scalars['Int'];
};


export type MutationInsertEtlProductPriceOverrideArgs = {
  input: InsertProductPriceOverrideInput;
};


export type MutationDeleteEtlOutletProductPriceOverridesArgs = {
  input: DeleteOutletProductPriceOverrides;
};


export type MutationUpdateEtlProductAssociationsArgs = {
  input?: Maybe<Array<ProductAssociationInput>>;
};


export type MutationInsertEtlUserRoleArgs = {
  input: InsertEntityInput;
};


export type MutationInsertEtlDepotArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteEtlDepotArgs = {
  depotId: Scalars['Int'];
};


export type MutationInsertEtlVendorArgs = {
  input: InsertBrandOwnerInput;
};


export type MutationDeleteEtlVendorArgs = {
  vendorId: Scalars['Int'];
};


export type MutationInsertEtlDistributorArgs = {
  input: InsertBrandOwnerInput;
};


export type MutationDeleteEtlDistributorArgs = {
  distributorId: Scalars['Int'];
};


export type MutationInsertEtlDistributionDepotsArgs = {
  input: InsertDistributionDepotsInput;
};


export type MutationInsertEtlOutletArgs = {
  input: InsertOutletInput;
};


export type MutationUpdateEtlOutletArgs = {
  input: UpdateAdminOutletInput;
};


export type MutationInsertEtlUserArgs = {
  input: InsertUserInput;
};


export type MutationUpdateEtlUserArgs = {
  input: UpdateUserInput;
};


export type MutationInsertEtlEntityRelationshipArgs = {
  input: InsertEntityRelationshipInput;
};


export type MutationDeleteEtlEntityRelationshipsArgs = {
  input: DeleteEntityRelationshipInput;
};


export type MutationUpdateEtlOrderStatusArgs = {
  input: UpdateEtlOrderStatusInput;
};


export type MutationUpdateEtlDistributorOrderStatusArgs = {
  orders: Array<UpdateEtlDistributorOrderStatusInput>;
};

export type LogisticsFee = {
  __typename?: 'LogisticsFee';
  id: Scalars['Int'];
  name: Scalars['String'];
  logisticsType: Scalars['String'];
  status: Status;
  fee: Scalars['Float'];
  code?: Maybe<Scalars['String']>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  value: Scalars['Float'];
  calculationType: Scalars['String'];
};

export type DeliveredOrderItem = {
  __typename?: 'DeliveredOrderItem';
  id: Scalars['Int'];
  orderBodyId: Scalars['Int'];
  code?: Maybe<Scalars['String']>;
  qtyOrdered?: Maybe<Scalars['Int']>;
  qtyAccepted?: Maybe<Scalars['Int']>;
  qtyDelivered?: Maybe<Scalars['Int']>;
  rejectionCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductAdminPriceInput = {
  inputPrice: Scalars['Float'];
  starStockFee: Scalars['Float'];
  logisticsFee: Scalars['Float'];
  logisticsFeeID?: Maybe<Scalars['Int']>;
  dateFrom: Scalars['String'];
  dateTo: Scalars['String'];
};

export type CategoryInputResponse = {
  __typename?: 'CategoryInputResponse';
  category: DslCategory;
};

export type CreditEnquiryResponse = {
  __typename?: 'CreditEnquiryResponse';
  credit: CreditEnquiry;
  orderManaged: Scalars['Boolean'];
  cashWithOrder: Scalars['Boolean'];
};

export type CreditNoteReference = {
  __typename?: 'CreditNoteReference';
  id: Scalars['Int'];
  creditNoteId: Scalars['Int'];
  reference: Scalars['String'];
  paymentProvider: Scalars['String'];
};

export type UpdateAdminNotificationMessageResponse = {
  __typename?: 'UpdateAdminNotificationMessageResponse';
  message: NotificationMessage;
};

export type OrderItemStatusUpdateInput = {
  code: Scalars['String'];
  description: Scalars['String'];
  quantityOrdered?: Maybe<Scalars['Int']>;
  quantityAccepted?: Maybe<Scalars['Int']>;
  quantityDelivered?: Maybe<Scalars['Int']>;
  rejectionCode?: Maybe<Scalars['String']>;
};

export type SendUserLoginRequestResponse = {
  __typename?: 'SendUserLoginRequestResponse';
  outletId: Scalars['Int'];
  userIds?: Maybe<Array<Scalars['Int']>>;
};

export type BrandOwner = {
  __typename?: 'BrandOwner';
  id: Scalars['Int'];
  status: Status;
  displayName: Scalars['String'];
  slug: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  mainEmail?: Maybe<Scalars['String']>;
  ccEmail?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  installEmail?: Maybe<Scalars['String']>;
  pumpClipEmail?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  description: Scalars['String'];
  storefrontLogo: Scalars['String'];
  adminLogo: Scalars['String'];
  isBrandNursery: Scalars['Boolean'];
  isDefaultDistributor: Scalars['Boolean'];
  isBrandPartner: Scalars['Boolean'];
  orderEmailAddresses?: Maybe<Array<Scalars['String']>>;
  termsConditions?: Maybe<TermsConditions>;
  ads?: Maybe<Array<Ad>>;
};

export type ContentCustomFieldImage = {
  __typename?: 'ContentCustomFieldImage';
  image: ContentImage;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

export type DslOrderResponse = {
  __typename?: 'DslOrderResponse';
  totalCount: Scalars['Int'];
  orders?: Maybe<Array<DslOrder>>;
  filters?: Maybe<Array<DslFilter>>;
};

export type DslOrderItem = {
  __typename?: 'DslOrderItem';
  id: Scalars['Int'];
  orderBodyId: Scalars['Int'];
  productId: Scalars['Int'];
  status: Status;
  rejectionCode: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  code: Scalars['String'];
  weight: Scalars['Float'];
  boxLength: Scalars['Float'];
  boxWidth: Scalars['Float'];
  boxHeight: Scalars['Float'];
  price: Scalars['Int'];
  qty: Scalars['Int'];
  /** The quantity received for this item - can be null to differentiate between an unknown value and zero */
  receivedQty?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  totalTax: Scalars['Int'];
  taxRate: Scalars['Float'];
  taxCalculationType: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  mainImage?: Maybe<Scalars['String']>;
  associations?: Maybe<OrderItemAssociations>;
  supplements?: Maybe<Array<OrderItemSupplement>>;
  pricing?: Maybe<Array<OrderItemPricing>>;
};

export type ProductVariationFeature = {
  __typename?: 'ProductVariationFeature';
  feature_id: Scalars['ID'];
  value: Scalars['String'];
};

export type BrandOwnerListFilters = {
  status?: Maybe<Scalars['Int']>;
};

export type StarStockCompanyDetailsInput = {
  companyName: Scalars['String'];
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  vatNumber: Scalars['String'];
  awrs: Scalars['String'];
};

export type NewWishlist = {
  name: Scalars['String'];
};

export type ContentBrandStore = {
  __typename?: 'ContentBrandStore';
  name: Scalars['String'];
  slug: Scalars['String'];
  image: ContentImage;
  featured?: Maybe<Scalars['Boolean']>;
};

export type BrandOwnerUpdate = {
  id: Scalars['Int'];
  statusValue: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  language: Scalars['String'];
  mainEmail: Scalars['String'];
  ccEmail: Scalars['String'];
  phone: Scalars['String'];
  installEmail: Scalars['String'];
  pumpClipEmail: Scalars['String'];
  description: Scalars['String'];
  images?: Maybe<BrandOwnerImagesInput>;
  orderEmailAddresses?: Maybe<Array<Scalars['String']>>;
};

export type InsertOutletInput = {
  outlet: InsertOutlet;
  shippingAddress: InsertAddress;
  billingAddress?: Maybe<InsertAddress>;
  statusValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Scalars['String']>>;
};

export type UpdateAdminOutletInput = {
  id: Scalars['Int'];
  outlet?: Maybe<InsertOutlet>;
  statusValue?: Maybe<Scalars['Int']>;
  shippingAddress?: Maybe<InsertAddress>;
  billingAddress?: Maybe<InsertAddress>;
  typeName?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Scalars['String']>>;
};

export type ProductAssociationInput = {
  productId: Scalars['Int'];
  vendorId?: Maybe<Scalars['Int']>;
  distributorId?: Maybe<Scalars['Int']>;
};

export type ContentCustomFields = {
  __typename?: 'ContentCustomFields';
  group?: Maybe<Array<ContentCustomFieldGroup>>;
  images?: Maybe<Array<ContentCustomFieldImage>>;
  navigationAds?: Maybe<Array<ContentCustomFieldGroup>>;
  heroCta?: Maybe<ContentHeroCta>;
  brands?: Maybe<Array<ContentBrandStore>>;
  brandDetail?: Maybe<Array<ContentBrandStoreDetail>>;
  serviceCategory?: Maybe<ContentServiceCategory>;
  serviceProvider?: Maybe<ContentServiceProvider>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  id: Scalars['ID'];
  userId: Scalars['Int'];
  name: Scalars['String'];
  canDelete: Scalars['Boolean'];
  active: Scalars['Boolean'];
  created: Scalars['String'];
  items?: Maybe<Array<Scalars['Int']>>;
};

export type CategoryInput = {
  category: DslCategoryInput;
  statusID?: Maybe<Scalars['Int']>;
};

export type InsertLogisticFeeResponse = {
  __typename?: 'InsertLogisticFeeResponse';
  fee: LogisticsFee;
};

export type Promotion = {
  __typename?: 'Promotion';
  id: Scalars['Int'];
  type: PromotionType;
  name: Scalars['String'];
  slug: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  imagePath: Scalars['String'];
  priority: Scalars['Int'];
  status: Scalars['String'];
  identityCode: Scalars['String'];
  terms: Scalars['String'];
  activeFrom: Scalars['String'];
  activeTo?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  productsInPromotion?: Maybe<Array<Scalars['Int']>>;
  categoriesInPromotion?: Maybe<Array<Scalars['Int']>>;
  rangeRewards?: Maybe<Array<FreeStockEffect>>;
  conditions: Array<Condition>;
  effects: Array<Effect>;
  limits: Array<Limit>;
  containsVoucherCode: Scalars['Boolean'];
  hiddenFromAll: Scalars['Boolean'];
  brandId: Scalars['Int'];
  distributorId: Scalars['Int'];
};

export type ProductFeatureDefaultValueInput = {
  value: Scalars['String'];
  position: Scalars['Int'];
};

export type DslProductAdminParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<ProductAdminParamsFilter>;
  sort?: Maybe<Sort>;
};

export type ProductFeatureInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  featured: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  position: Scalars['Int'];
  code: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  statusValue?: Maybe<Scalars['Int']>;
  storeFrontDisplay?: Maybe<Scalars['Boolean']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  brandOwnerDisplay?: Maybe<Scalars['Boolean']>;
  defaultValues?: Maybe<Array<ProductFeatureDefaultValueInput>>;
};

export type InsertDistributionDepotsInput = {
  distributorId: Scalars['Int'];
  depots?: Maybe<Array<Depot>>;
};

export type TermsConditionsListFilters = {
  statusValue?: Maybe<Scalars['Int']>;
};

export type TaxCodesFilter = {
  statusValue?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Float']>;
  calculationType?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  id: Scalars['ID'];
  slug: Scalars['String'];
  type: Scalars['String'];
  title: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  media?: Maybe<Array<ContentMedia>>;
  custom?: Maybe<ContentCustomFields>;
};

export type DslProductFeature = {
  __typename?: 'DslProductFeature';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
  values?: Maybe<Array<ProductFeatureValue>>;
  description: Scalars['String'];
  featured: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  position: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  readOnly: Scalars['Boolean'];
  code: Scalars['String'];
  type: Type;
  status: Status;
  storeFrontDisplay: Scalars['Boolean'];
  mandatory: Scalars['Boolean'];
  brandOwnerDisplay: Scalars['Boolean'];
  multipleValueSelection: Scalars['Boolean'];
  defaultValues: Array<ProductFeatureDefaultValue>;
};

export type OutletFilters = {
  statusValue?: Maybe<Scalars['Int']>;
  style?: Maybe<Scalars['String']>;
  productsCount?: Maybe<MinMaxIntFilter>;
  accountNumber?: Maybe<Scalars['String']>;
};

/**
 * A Route provides information relating to the current url:
 * `urlRewrite` contains info on the main resource to load
 * `components` contains an ordered list of components e.g. `category1/category2/product`:
 *     urlRewrite = product
 *     components[0] = category1
 *     components[1] = category2
 */
export type Route = {
  __typename?: 'Route';
  urlRewrite: UrlRewrite;
  components: Array<Maybe<UrlRewrite>>;
};

export type DslProductImageInput = {
  id: Scalars['Int'];
  key: Scalars['String'];
  url: Scalars['String'];
  delete: Scalars['Boolean'];
  upload?: Maybe<Scalars['Upload']>;
};

export type InsertEntityInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  entityTypeId?: Maybe<Scalars['Int']>;
};

export type OrderFilters = {
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  price?: Maybe<PriceFilter>;
  date?: Maybe<DateFilter>;
  deliveryDate?: Maybe<DateFilter>;
  delivered?: Maybe<Scalars['Boolean']>;
  brandOwner?: Maybe<Scalars['Int']>;
};

/** We could use this to add custom rewrites e.g. 301 redirects from the admin */
export type UrlRewriteUpdate = {
  id?: Maybe<Scalars['Int']>;
  typeName: Scalars['String'];
  Slug: Scalars['String'];
  Canonical: Scalars['Boolean'];
  ResourceId: Scalars['Int'];
  Path: Scalars['String'];
};

export type BrandOwnerOrderWeeklyStats = {
  __typename?: 'BrandOwnerOrderWeeklyStats';
  dateTime: Scalars['String'];
  orderAmount: Scalars['Int'];
  ordersCount: Scalars['Int'];
};

export type ContentImage = {
  __typename?: 'ContentImage';
  url: Scalars['String'];
  focalPoint?: Maybe<ContentImageFocalPoint>;
};

export type MakePaymentResponse = {
  __typename?: 'MakePaymentResponse';
  /** Indicates if the payment was successful */
  paymentSuccess: Scalars['Boolean'];
  /** Message relevant to the paymentSuccess */
  message: Scalars['String'];
  /** Status string returned by the payment provider */
  status: Scalars['String'];
};

/**
 * Holds information relating to the products shipping data
 * If this is null no shipping entry will be set for this product
 */
export type ProductShippingInput = {
  /** This is used for display purposes only in case the counts_as_type is different */
  containerType: Scalars['String'];
  /** The amount of volume this product counts as */
  valuePerQty: Scalars['Float'];
  /**
   * The type name of the container type for which this product should be counted against.
   * For example, a keg would be containerKeg. A bottle would also be containerKeg because this is what their volume counts as in the distribution rule
   */
  countsAsType: Scalars['String'];
};

export type TermsConditions = {
  __typename?: 'TermsConditions';
  id: Scalars['ID'];
  status: Status;
  title: Scalars['String'];
  content: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  createdBy: DslUser;
  accepted: Scalars['Boolean'];
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['Int'];
  type: Scalars['String'];
  Status: Status;
  name: Scalars['String'];
  createdBy: DslUser;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  data?: Maybe<Array<ReportRow>>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type UpdateSupportDocumentInput = {
  id: Scalars['Int'];
  statusValue: Scalars['Int'];
  data: SupportDocumentData;
};

export type SupportDocumentAdminParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<SupportDocumentFilters>;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type Depot = {
  customerId: Scalars['ID'];
  depotCode: Scalars['String'];
};

export type GetAdminNotificationMessagesResponse = {
  __typename?: 'GetAdminNotificationMessagesResponse';
  messages?: Maybe<Array<NotificationMessage>>;
};

export type GetAdminNotificationMessageResponse = {
  __typename?: 'GetAdminNotificationMessageResponse';
  message: NotificationMessage;
};

export type InsertProductVariationsResponse = {
  __typename?: 'InsertProductVariationsResponse';
  temp: Scalars['String'];
};

export type BrandOwnerOverviewInput = {
  filters: BrandOwnerOverviewFilters;
};

export type GetOutletDeliveryDateOverridesInput = {
  pagination: DslAdminPagination;
};

export type ProductPriceOverrideInput = {
  type: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type UpdateUser = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  confirmEmail: Scalars['String'];
  marketing: Scalars['Boolean'];
  statusValue?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  landline: Scalars['String'];
};

export type FindOutletParams = {
  postCode: Scalars['String'];
  accountNumber: Scalars['String'];
};

export type BrandOwnerInsert = {
  statusValue: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  language: Scalars['String'];
  mainEmail: Scalars['String'];
  ccEmail: Scalars['String'];
  phone: Scalars['String'];
  installEmail: Scalars['String'];
  pumpClipEmail: Scalars['String'];
  description: Scalars['String'];
  images?: Maybe<BrandOwnerImagesInput>;
  orderEmailAddresses?: Maybe<Array<Scalars['String']>>;
};

export type AbandonedCartsFilter = {
  created?: Maybe<DateFilter>;
  updated?: Maybe<DateFilter>;
};

export type UserUpdateInput = {
  user: UpdateUser;
};

export type OutletAddressBook = {
  __typename?: 'OutletAddressBook';
  id: Scalars['Int'];
  addresses?: Maybe<Array<Address>>;
  billingId?: Maybe<Scalars['Int']>;
  shippingId?: Maybe<Scalars['Int']>;
};

export type LogisticsFeeOverride = {
  __typename?: 'LogisticsFeeOverride';
  id: Scalars['Int'];
  logisticsFeeId: Scalars['Int'];
  fee: Scalars['Float'];
};

export type InsertBrandOwnerInput = {
  statusValue: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  language: Scalars['String'];
  mainEmail: Scalars['String'];
  ccEmail: Scalars['String'];
  phone: Scalars['String'];
  installEmail: Scalars['String'];
  pumpClipEmail: Scalars['String'];
  description: Scalars['String'];
  usesDeliveryDays: Scalars['Boolean'];
  orderEmailAddresses?: Maybe<Array<Scalars['String']>>;
};

export type CreditNoteReasonsInput = {
  reasonId?: Maybe<Scalars['Int']>;
  reason: Scalars['String'];
};

export type PaymentIntentSuccessInput = {
  /** Payment provider identification string e.g. 'stripe' */
  provider: Scalars['String'];
};

export type LimitInput = {
  type: Scalars['String'];
  value: Scalars['Float'];
  order: Scalars['Int'];
};

export type UpdatePromotionInput = {
  promotion: PromotionInput;
  image?: Maybe<Scalars['Upload']>;
};

export type StarStockCompanyDetails = {
  __typename?: 'StarStockCompanyDetails';
  companyName: Scalars['String'];
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  vatNumber: Scalars['String'];
  awrs: Scalars['String'];
  fee?: Maybe<Scalars['Float']>;
};

export type UpdateBrandOwnerInput = {
  id: Scalars['Int'];
  statusValue: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  language: Scalars['String'];
  mainEmail: Scalars['String'];
  ccEmail: Scalars['String'];
  phone: Scalars['String'];
  installEmail: Scalars['String'];
  pumpClipEmail: Scalars['String'];
  description: Scalars['String'];
  usesDeliveryDays: Scalars['Boolean'];
  orderEmailAddresses?: Maybe<Array<Scalars['String']>>;
};

export type InsertProductPrice = {
  type: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type MakePaymentInput = {
  /** Payment provider identification string e.g. 'trevipay' */
  provider: Scalars['String'];
};

export type PromotionInput = {
  id?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  imagePath: Scalars['String'];
  priority: Scalars['Int'];
  status: Scalars['String'];
  identityCode: Scalars['String'];
  terms: Scalars['String'];
  activeFrom: Scalars['String'];
  activeTo?: Maybe<Scalars['String']>;
  conditions: Array<ConditionsInput>;
  effects: Array<EffectInput>;
  limits?: Maybe<Array<LimitInput>>;
  voucherCodesToDelete?: Maybe<Array<Scalars['Int']>>;
  distributorId: Scalars['Int'];
  starstockOnly: Scalars['Boolean'];
  brandId: Scalars['Int'];
};

export type OrderPayment = {
  __typename?: 'OrderPayment';
  id: Scalars['Int'];
  provider: Scalars['String'];
  orderId: Scalars['Int'];
  status: Status;
  paymentType: Scalars['String'];
  reference: Scalars['String'];
  method: Scalars['String'];
  value: Scalars['Int'];
  invoiceNumber: Scalars['String'];
};

export type UpdateUserResponse = {
  __typename?: 'UpdateUserResponse';
  user?: Maybe<DslUser>;
  notification?: Maybe<Scalars['String']>;
};

export type Postcode = {
  __typename?: 'Postcode';
  id: Scalars['Int'];
  postcode: Scalars['String'];
  defaultAvailable: Scalars['Boolean'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type PromotionData = {
  __typename?: 'PromotionData';
  types?: Maybe<Array<Scalars['String']>>;
};

export type RecommendationsListParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<RecommendationsListFilters>;
  sort?: Maybe<Sort>;
};

export type TaxCodesAdminParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<TaxCodesFilter>;
  sort?: Maybe<Sort>;
};

export type ContentServiceProvider = {
  __typename?: 'ContentServiceProvider';
  name: Scalars['String'];
  logo: ContentImage;
  national: Scalars['Boolean'];
  location: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  number: Scalars['String'];
  address: Scalars['String'];
  heroImage: ContentImage;
  details?: Maybe<Array<ContentServiceProviderDetail>>;
};

export type SetUserOutletResponse = {
  __typename?: 'SetUserOutletResponse';
  success: Scalars['Boolean'];
  dslCart?: Maybe<DslCart>;
};

export type OutletDeliveryDay = {
  __typename?: 'OutletDeliveryDay';
  id: Scalars['Int'];
  fullDate: Scalars['String'];
  day: Scalars['String'];
  price: Scalars['Int'];
  isAvailable: Scalars['Boolean'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  type: Scalars['String'];
  leadDays: Scalars['Int'];
  cutoffTime: Scalars['String'];
};

/** This holds additional product information so override pricing can be displayed standalone */
export type ProductAdminOverridePrice = {
  __typename?: 'ProductAdminOverridePrice';
  productId: Scalars['Int'];
  productCode: Scalars['String'];
  ProductName: Scalars['String'];
  price: ProductAdminPrice;
};

export type DslAdminPagination = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
};

export type UpsertRecommendationInput = {
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  description: Scalars['String'];
  statusId: Scalars['Int'];
  brandOwnerID: Scalars['Int'];
  close?: Maybe<Scalars['Boolean']>;
};

export type CreditEnquiry = {
  __typename?: 'CreditEnquiry';
  requestTime: Scalars['String'];
  customerID: Scalars['String'];
  name: Scalars['String'];
  creditLimit: Scalars['Float'];
  accountCreditBalance: Scalars['Float'];
  overdueRent: Scalars['Float'];
  overdueOther: Scalars['Float'];
  overdueBalance: Scalars['Float'];
  settlementInvoices?: Maybe<Array<SettlementInvoice>>;
  balanceInvoices?: Maybe<Array<BalanceInvoice>>;
};

export type BulkActionInput = {
  id?: Maybe<Array<Scalars['Int']>>;
  action: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UpdateDistributorInput = {
  distributorId: Scalars['Int'];
  description: Scalars['String'];
};

export type UpdateUpsellProductsInput = {
  typeArg: Scalars['String'];
  relatedProductsIDs?: Maybe<Array<Scalars['Int']>>;
};

export type EntityMap = {
  id: Scalars['Int'];
  dataType: Scalars['String'];
};

export type CartVoucher = {
  __typename?: 'CartVoucher';
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type InsertAddress = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName: Scalars['String'];
  lastName: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo: Scalars['String'];
  lineThree: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
};

/**
 * Role is an enum containing the possible user roles. This can the be used to
 * define which GQL endpoints or fields are accessible to the different user types.
 * For now, this is hardcoded as part of the GQL schema but we can eventually move
 * this out into the DB for dynamic role -> permission setup.
 */
export enum Role {
  User = 'USER',
  Brandowner = 'BRANDOWNER',
  Telesales = 'TELESALES',
  Starstockadmin = 'STARSTOCKADMIN',
  Apiuser = 'APIUSER'
}

export type UserRelationship = {
  __typename?: 'UserRelationship';
  name: Scalars['String'];
  entities?: Maybe<Array<UserEntity>>;
};

export type Entity = {
  __typename?: 'Entity';
  id: Scalars['Int'];
  name: Scalars['String'];
  typeID: Scalars['Int'];
  parentEntityTypeID: Scalars['Int'];
  created: Scalars['String'];
};

export type InsertUserOutletRoleInput = {
  userId: Scalars['Int'];
  outletId: Scalars['Int'];
  role: Scalars['String'];
};

/**
 * To insert a new image simple provide the new `image` data
 * To replace an existing image, provide the `existingKey` and the new `image` data to replace it
 * To delete an image provide the `existingKey` and `url = ""`
 * To insert a new full image url just pass `url = "https://image.url/image.type"`
 * To replace an existing image with a full image url provide the `existingKey` and `url = "https://image.url/image.type"`
 */
export type ImageUpload = {
  url?: Maybe<Scalars['String']>;
  existingKey?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
};

export type SettlementInvoice = {
  __typename?: 'SettlementInvoice';
  postingDate: Scalars['String'];
  documentType: Scalars['String'];
  documentNumber: Scalars['String'];
  amount: Scalars['Float'];
  remainingAmount: Scalars['Float'];
  dueDate: Scalars['String'];
  entryNumber: Scalars['String'];
  settlementPlanNumber: Scalars['String'];
  settlementPlanRegistered: Scalars['Boolean'];
  settlementPlanType: Scalars['String'];
};

export type AdminOrdersStats = {
  __typename?: 'AdminOrdersStats';
  totalOrders: Scalars['Int'];
  ordersValue: Scalars['Int'];
  ordersItems: Scalars['Int'];
  orderingCustomers: Scalars['Int'];
  productsVolume: Scalars['Float'];
};

export type GetOutletDeliveryDateOverridesResponse = {
  __typename?: 'getOutletDeliveryDateOverridesResponse';
  dates?: Maybe<Array<OutletDeliveryDayOverride>>;
};

export type UpdateTermsConditions = {
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  statusValue: Scalars['Int'];
};

export type UpdateAdminNotificationMessageParams = {
  userId?: Maybe<Scalars['Int']>;
  statusValue: Scalars['Int'];
  name: Scalars['String'];
  title: Scalars['String'];
  message: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
};

export type BalanceInvoice = {
  __typename?: 'BalanceInvoice';
  postingDate: Scalars['String'];
  documentType: Scalars['String'];
  documentNumber: Scalars['String'];
  amount: Scalars['Float'];
  remainingAmount: Scalars['Float'];
  dueDate: Scalars['String'];
  description: Scalars['String'];
  entryNumber: Scalars['String'];
};

export type UpdateProductVariationsResponse = {
  __typename?: 'UpdateProductVariationsResponse';
  temp: Scalars['String'];
};

export type DslUserInput = {
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  marketing: Scalars['Boolean'];
  password?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  statusValue?: Maybe<Scalars['Int']>;
  brandOwnerId?: Maybe<Scalars['Int']>;
};

export type BrandOwnerOverviewFilters = {
  days?: Maybe<Scalars['Int']>;
};

export type UpdateOutletProductPricingInput = {
  outletId: Scalars['Int'];
  pricing?: Maybe<Array<ProductAdminOutletPriceInput>>;
};

export type AuthDslResponse = {
  __typename?: 'AuthDslResponse';
  result: Scalars['Boolean'];
  notification?: Maybe<Scalars['String']>;
  user?: Maybe<DslUser>;
  dslCart?: Maybe<DslCart>;
  management?: Maybe<UserManagement>;
  outlets?: Maybe<Array<DslOutlet>>;
  currentOutlet?: Maybe<DslOutlet>;
  messages?: Maybe<Array<NotificationMessage>>;
  deliveryDate?: Maybe<Scalars['String']>;
};

export type InsertSupportDocumentResponse = {
  __typename?: 'InsertSupportDocumentResponse';
  document?: Maybe<SupportDocument>;
};

export type DslCartProduct = {
  __typename?: 'DslCartProduct';
  id: Scalars['ID'];
  cartId: Scalars['Int'];
  productId: Scalars['Int'];
  qty: Scalars['Int'];
  lastKnownPrice: Scalars['Float'];
  product: DslProduct;
  supplements?: Maybe<Array<CartProductSupplement>>;
};

export type ProductPriceOverride = {
  __typename?: 'ProductPriceOverride';
  productId: Scalars['ID'];
  entityId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  status: Status;
};

export type OrderPaymentInput = {
  provider: Scalars['String'];
  statusValue: Scalars['Int'];
  paymentType: Scalars['String'];
  reference: Scalars['String'];
  method: Scalars['String'];
  value: Scalars['Int'];
  /** Provide invoices here so they will be assigned to the payment */
  invoices?: Maybe<Array<OrderInvoiceInput>>;
};

export type UpdateProductFeatureInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductFeatureInput>;
};

export type PaymentIntentInput = {
  /** Payment provider identification string e.g. 'stripe' */
  provider: Scalars['String'];
};

export type ContentMedia = {
  __typename?: 'ContentMedia';
  id: Scalars['ID'];
  altText?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<MediaDetails>;
};

export type SupportDocumentsResponse = {
  __typename?: 'SupportDocumentsResponse';
  totalCount: Scalars['Int'];
  documents?: Maybe<Array<SupportDocument>>;
};

export type AdminOverviewResponse = {
  __typename?: 'AdminOverviewResponse';
  activeProducts: Scalars['Int'];
  orderingAccounts: Scalars['Int'];
  activePromotions: Scalars['Int'];
  inactiveMarketingUsers: Scalars['Int'];
  brandOwners: Scalars['Int'];
  registeredCustomers: Scalars['Int'];
  noWeekOrderCustomers: Scalars['Int'];
};

export type GetAdminTypesResponse = {
  __typename?: 'GetAdminTypesResponse';
  types?: Maybe<Array<Type>>;
};

export type ProductAdminPrice = {
  __typename?: 'ProductAdminPrice';
  inputPrice: Scalars['Float'];
  starStockFee: Scalars['Float'];
  logisticsFee: Scalars['Float'];
  logisticsFeeId?: Maybe<Scalars['Int']>;
  taxCodeId?: Maybe<Scalars['Int']>;
  dateFrom: Scalars['String'];
  dateTo: Scalars['String'];
};

export type UpdateYouMightAlsoLikeProductsInput = {
  productID: Scalars['Int'];
  relatedProductsIDs?: Maybe<Array<Scalars['Int']>>;
};

export type TaxCode = {
  __typename?: 'TaxCode';
  id: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  priority: Scalars['Int'];
  status: Status;
  calculationType: Scalars['String'];
  inclusive: Scalars['Boolean'];
  rate: Scalars['Float'];
};

export type AvailableDistributorParams = {
  brandId?: Maybe<Scalars['Int']>;
};

/**
 * VoucherCode is a voucher code to be applied to a condition. These will only be
 * created if the parent `ConditionsInput` has a `type` of `voucher`.
 */
export type VoucherCodeInput = {
  id?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  maxRedemptionCount: Scalars['Int'];
  enabled: Scalars['Boolean'];
};

export type BrandOwnerTopPromotion = {
  __typename?: 'BrandOwnerTopPromotion';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AdminUsersResponse = {
  __typename?: 'AdminUsersResponse';
  users?: Maybe<Array<DslUser>>;
  totalCount: Scalars['Int'];
};

export type CreateReportResponse = {
  __typename?: 'CreateReportResponse';
  report?: Maybe<Report>;
};

export type UpdateStarStockCompanyDetailsInput = {
  data: StarStockCompanyDetailsInput;
};

export type UpdateSimilarProductsInput = {
  productID: Scalars['Int'];
  relatedProductsIDs?: Maybe<Array<Scalars['Int']>>;
};

export type DslCategory = {
  __typename?: 'DslCategory';
  id: Scalars['ID'];
  parentId?: Maybe<Scalars['Int']>;
  status: Status;
  name: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  seoSlug?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  code: Scalars['String'];
  subCategories?: Maybe<Array<Maybe<DslCategory>>>;
  totalProducts: Scalars['Int'];
};

export type MediaDetails = {
  __typename?: 'MediaDetails';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  sizes?: Maybe<MediaSizes>;
};

export type OrderTotal = {
  __typename?: 'OrderTotal';
  deliveryDate?: Maybe<Scalars['String']>;
  priceChangeFromCart: Scalars['Boolean'];
  totals: DslCartTotal;
};

export type DslFilter = {
  __typename?: 'DslFilter';
  id: Scalars['ID'];
  name: Scalars['String'];
  options?: Maybe<Array<Scalars['String']>>;
};

export type UpdateYouMightAlsoLikeProductsResponse = {
  __typename?: 'UpdateYouMightAlsoLikeProductsResponse';
  products?: Maybe<Array<DslProduct>>;
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['ID'];
  value: Scalars['Int'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type TermsConditionsListResponse = {
  __typename?: 'TermsConditionsListResponse';
  totalCount: Scalars['Int'];
  termsConditions?: Maybe<Array<TermsConditions>>;
};

export type SupportDocumentFilters = {
  statusValue?: Maybe<Scalars['Int']>;
};


export type AdGroup = {
  __typename?: 'AdGroup';
  name: Scalars['String'];
  adCount: Scalars['Int'];
};

export type ContentCustomFieldGroupItem = {
  __typename?: 'ContentCustomFieldGroupItem';
  image?: Maybe<ContentImage>;
  url?: Maybe<Scalars['String']>;
  internal?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AdminTopPromotion = {
  __typename?: 'AdminTopPromotion';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DslProductFeatureInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  featured: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  position: Scalars['Int'];
};

export type UserRegistrationInput = {
  user: RegisterUser;
  outlet: InsertOutletInput;
  marketingCommunication: Scalars['Boolean'];
};

/**
 * Provide the name and type. Depending on the `type`, you will also need to
 * provide either the `value` or `freeStock`. If the type is some kind of discount,
 * then populate the `value` field but if the type is a free item, populate the
 * `freeStock` field.
 */
export type EffectInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
  freeStock?: Maybe<FreeStockEffectInput>;
  rangeSelect?: Maybe<Array<FreeStockEffectInput>>;
  taxMultiplier?: Maybe<Scalars['Float']>;
  taxDescription?: Maybe<Scalars['String']>;
};

export type Sort = {
  by: Scalars['String'];
  direction: Scalars['String'];
};

export type UpdateAddressInput = {
  address: UpdateAddress;
};

export type DslCartProductInput = {
  productId: Scalars['Int'];
  qty: Scalars['Int'];
};

export type AdminOrdersParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<OrderFilters>;
  sort?: Maybe<Sort>;
};

export type DateFilter = {
  period?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type AdminUsersListResponse = {
  __typename?: 'AdminUsersListResponse';
  users: Array<Maybe<DslUserListItem>>;
  totalCount: Scalars['Int'];
};

export type DslCartTotal = {
  __typename?: 'DslCartTotal';
  subtotal: Scalars['Int'];
  discount: Scalars['Int'];
  delivery: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
};

export type PromotionResult = {
  __typename?: 'PromotionResult';
  promotionId: Scalars['Int'];
  promotionName: Scalars['String'];
  name: Scalars['String'];
  effectType: Scalars['String'];
  changes?: Maybe<Array<PromotionResultChange>>;
};

export type UpdateStatusInput = {
  entityType: Scalars['String'];
  entityId: Scalars['Int'];
  statusValue: Scalars['Int'];
};

export type InsertProductPriceOverrideInput = {
  productId: Scalars['ID'];
  userId?: Maybe<Scalars['Int']>;
  outletId?: Maybe<Scalars['Int']>;
  pricing?: Maybe<Array<ProductPriceOverrideInput>>;
};

export type AdminOverviewFilters = {
  days?: Maybe<Scalars['Int']>;
};

export type TaxCodeData = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  code: Scalars['String'];
  priority: Scalars['Int'];
  calculationType: Scalars['String'];
  inclusive: Scalars['Boolean'];
  rate: Scalars['Float'];
};

/** The `File` type, represents the response of uploading a file. */
export type File = {
  __typename?: 'File';
  id: Scalars['Int'];
  name: Scalars['String'];
  content: Scalars['String'];
  contentType: Scalars['String'];
};

export type CreditNoteInput = {
  orderId: Scalars['Int'];
  items: Array<CreditNoteItemInput>;
  reason: Scalars['String'];
};

export type BulkActionResponse = {
  __typename?: 'BulkActionResponse';
  id?: Maybe<Array<Scalars['Int']>>;
  error?: Maybe<BulkActionError>;
};

export type ContentServiceCategory = {
  __typename?: 'ContentServiceCategory';
  description?: Maybe<Scalars['String']>;
  visible: Scalars['Boolean'];
  icon: Scalars['String'];
};

export type CreateAdminNotificationMessageParams = {
  userId?: Maybe<Scalars['Int']>;
  statusValue: Scalars['Int'];
  name: Scalars['String'];
  title: Scalars['String'];
  message: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
};

export type InsertOutlet = {
  name: Scalars['String'];
  style: Scalars['String'];
  legalStatus: Scalars['String'];
  companyName: Scalars['String'];
  companyNumber: Scalars['String'];
  charityNumber: Scalars['String'];
  dropPointDescription: Scalars['String'];
  xpoAccountNumber: Scalars['String'];
  biiMembershipNumber?: Maybe<Scalars['String']>;
};

export type PriceFilter = {
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type InsertLogisticsFeeInput = {
  name: Scalars['String'];
  statusValue: Scalars['Int'];
  logisticsTypeId: Scalars['Int'];
  fee: Scalars['Float'];
  code?: Maybe<Scalars['String']>;
};

/**
 * ConditionsInput takes the conditions of the promotion. You will need to supply
 * a type, comparator and order (which is the order the conditions are evaluated
 * in). A single value must be provided against the `value` field but a list of
 * values (for example, a list of `productIds`) must be provided in the `values`
 * field.
 */
export type ConditionsInput = {
  type: Scalars['String'];
  comparator: Scalars['String'];
  order: Scalars['Int'];
  value?: Maybe<Scalars['Float']>;
  values?: Maybe<Array<Scalars['Float']>>;
  voucherCodes?: Maybe<Array<VoucherCodeInput>>;
};

export type DslOrderAdditionalData = {
  __typename?: 'DslOrderAdditionalData';
  invoices?: Maybe<Array<AdditionalDataInvoice>>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
};

export type OrderItemAssociations = {
  __typename?: 'OrderItemAssociations';
  vendor?: Maybe<OrderItemAssociation>;
  distributor?: Maybe<OrderItemAssociation>;
  depot: Scalars['String'];
};

export type ProductFeaturesListOutput = {
  __typename?: 'ProductFeaturesListOutput';
  totalCount: Scalars['Int'];
  features?: Maybe<Array<DslProductFeature>>;
};

export type AuthRequest = {
  username: Scalars['String'];
  password: Scalars['String'];
  context: Scalars['String'];
  guestID?: Maybe<Scalars['Int']>;
  vendorID?: Maybe<Scalars['Int']>;
  outletID?: Maybe<Scalars['Int']>;
  roleID?: Maybe<Scalars['Int']>;
};

export type SetUserOutletInput = {
  outletId: Scalars['Int'];
};

export type ProductFeaturesListInput = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  sort?: Maybe<Sort>;
  statusValue?: Maybe<Scalars['Int']>;
  display?: Maybe<Scalars['Boolean']>;
};

export type DeleteEntityRelationshipInput = {
  entity: EntityMap;
  relationshipType: Scalars['String'];
};

export type PostCodeRestrictionResponse = {
  __typename?: 'PostCodeRestrictionResponse';
  postcodes: Array<Maybe<PostcodeRestriction>>;
};

export type Condition = {
  __typename?: 'Condition';
  id: Scalars['Int'];
  promotionId: Scalars['Int'];
  type: Scalars['String'];
  comparator: Scalars['String'];
  order: Scalars['Int'];
  equalOrLess: Scalars['Float'];
  equalOrGreater: Scalars['Float'];
  greaterThan: Scalars['Float'];
  in: Array<Scalars['Float']>;
  lessThan: Scalars['Float'];
  multiplesOf: Scalars['Float'];
  notIn: Array<Scalars['Float']>;
  result: Scalars['Float'];
  voucherCodes?: Maybe<Array<VoucherCode>>;
};

export type SupportDocumentData = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DslProductsResponse = {
  __typename?: 'DslProductsResponse';
  totalCount: Scalars['Int'];
  products?: Maybe<Array<DslProduct>>;
  filters?: Maybe<Array<DslFilter>>;
};

export type InsertProductPriceOverrideResponse = {
  __typename?: 'InsertProductPriceOverrideResponse';
  productId: Scalars['ID'];
  userId?: Maybe<Scalars['Int']>;
  entityId?: Maybe<Scalars['Int']>;
  pricing?: Maybe<Array<ProductPriceOverride>>;
};

export type DslProductOption = {
  __typename?: 'DslProductOption';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  icon: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type GetYouMightAlsoLikeProductsResponse = {
  __typename?: 'GetYouMightAlsoLikeProductsResponse';
  products?: Maybe<Array<DslProduct>>;
};

export type TaxCodeFilter = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export type OrderInvoiceInput = {
  postingDate: Scalars['String'];
  documentType: Scalars['String'];
  documentNumber: Scalars['String'];
  amount: Scalars['Float'];
  remainingAmount: Scalars['Float'];
  dueDate: Scalars['String'];
  settlementPlanNumber: Scalars['String'];
  settlementPlanRegistered: Scalars['Boolean'];
  settlementPlanType: Scalars['String'];
};

export type UpdateEtlDistributorOrderStatusInput = {
  /** The id of the distributor order (order_body) */
  id: Scalars['Int'];
  updateType: Scalars['String'];
  orderType: Scalars['String'];
  messageId: Scalars['String'];
  customerOrderNumber: Scalars['String'];
  statusValue: Scalars['Int'];
  rejectionCode: Scalars['String'];
  actualDeliveryDate: Scalars['String'];
  xpoAccountNumber: Scalars['String'];
  supplierOrderId: Scalars['String'];
  items?: Maybe<Array<OrderItemStatusUpdateInput>>;
};

export type ProductPricingInput = {
  productPrices?: Maybe<Array<Maybe<ProductPricing>>>;
};

/**
 * If an effect is a free item, you need to include this object with the associated
 * id of the item (e.g. a `productId` *NOT* `entityId`) and the quantity to award.
 */
export type FreeStockEffectInput = {
  entityId: Scalars['Int'];
  qty: Scalars['Int'];
};

export type ContentButton = {
  __typename?: 'ContentButton';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CreditNoteReasons = {
  __typename?: 'CreditNoteReasons';
  id: Scalars['Int'];
  status: Status;
  code: Scalars['String'];
  description: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type OrderItemPricing = {
  __typename?: 'OrderItemPricing';
  id: Scalars['Int'];
  type: Scalars['String'];
  identifier: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax: Scalars['Boolean'];
};

export type UpsertBrandOwnerInput = {
  owner: UpsertBrandOwner;
  address: InsertAddress;
  logisticsFees: Array<Maybe<BrandOwnerLogisticsFee>>;
  images?: Maybe<BrandOwnerImagesInput>;
};

export type Recommendation = {
  __typename?: 'Recommendation';
  id: Scalars['ID'];
  status: Status;
  title: Scalars['String'];
  description: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  closedOn: Scalars['String'];
  viewedOn: Scalars['String'];
  brandOwner: BrandOwner;
  createdBy: DslUser;
};

export type Effect = {
  __typename?: 'Effect';
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['Float'];
  freeStock?: Maybe<FreeStockEffect>;
  rangeSelect?: Maybe<Array<FreeStockEffect>>;
  taxMultiplier: Scalars['Float'];
  taxDescription: Scalars['String'];
};

export type DslProductPriceInput = {
  type: Scalars['String'];
  value: Scalars['Float'];
  override?: Maybe<Scalars['Float']>;
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type OrderBody = {
  __typename?: 'OrderBody';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  distributorId: Scalars['Int'];
  distributorName: Scalars['String'];
  status: Status;
  rejectionCode: Scalars['String'];
  subtotal: Scalars['Int'];
  discount: Scalars['Int'];
  delivery: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  updatedOn: Scalars['String'];
  cutoffDeliveryDate: Scalars['String'];
  selectedDeliveryDate: Scalars['String'];
  orderItems?: Maybe<Array<DslOrderItem>>;
  deliveryType: Scalars['String'];
  actualDeliveryDate: Scalars['String'];
  /** Will return the item delivery information for this order body */
  deliveredItems?: Maybe<Array<DeliveredOrderItem>>;
};

export type DeleteOutletProductPricingResponse = {
  __typename?: 'DeleteOutletProductPricingResponse';
  errors?: Maybe<Array<Scalars['String']>>;
};

export type UpsertBrandOwner = {
  id?: Maybe<Scalars['Int']>;
  statusValue?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  installEmail: Scalars['String'];
  pumpClipEmail: Scalars['String'];
  isBrandNursey: Scalars['Boolean'];
  isDefaultDistributor: Scalars['Boolean'];
  isBrandPartner: Scalars['Boolean'];
  orderEmailAddresses?: Maybe<Array<Scalars['String']>>;
  slug: Scalars['String'];
};

export type InsertEntityRelationshipInput = {
  entity: EntityMap;
  relatedEntity: EntityMap;
  relatedParentEntity?: Maybe<EntityMap>;
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type AddItemToWishlist = {
  listId: Scalars['String'];
  productId: Scalars['Int'];
};

export type UpdateAdResponse = {
  __typename?: 'UpdateAdResponse';
  ad?: Maybe<Ad>;
  ads?: Maybe<Array<Ad>>;
};

export type ProductAssociations = {
  __typename?: 'ProductAssociations';
  vendor?: Maybe<ProductAssociation>;
  distributor?: Maybe<ProductAssociation>;
};

export type LinkedProductsResponse = {
  __typename?: 'LinkedProductsResponse';
  youMightAlsoLike?: Maybe<Array<DslProduct>>;
  similar?: Maybe<Array<DslProduct>>;
};

export type ConditionData = {
  __typename?: 'ConditionData';
  types?: Maybe<Array<Scalars['String']>>;
  comparators?: Maybe<Array<Scalars['String']>>;
};

export type ProductPricing = {
  productId: Scalars['ID'];
  pricing?: Maybe<Array<InsertProductPrice>>;
};

export type TaxCodesResponse = {
  __typename?: 'TaxCodesResponse';
  totalCount: Scalars['Int'];
  taxCodes?: Maybe<Array<Maybe<TaxCode>>>;
};

export type ReportRow = {
  __typename?: 'ReportRow';
  columns?: Maybe<Array<ReportDataCol>>;
};

export type DslOrderInput = {
  notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  billingFirstName: Scalars['String'];
  billingLastName: Scalars['String'];
  billingLine1: Scalars['String'];
  billingLine2?: Maybe<Scalars['String']>;
  billingLine3?: Maybe<Scalars['String']>;
  billingCity: Scalars['String'];
  billingCounty?: Maybe<Scalars['String']>;
  billingPostcode: Scalars['String'];
  billingCountry: Scalars['String'];
  shippingFirstName: Scalars['String'];
  shippingLastName: Scalars['String'];
  shippingLine1: Scalars['String'];
  shippingLine2?: Maybe<Scalars['String']>;
  shippingLine3?: Maybe<Scalars['String']>;
  shippingCity: Scalars['String'];
  shippingCounty?: Maybe<Scalars['String']>;
  shippingPostcode: Scalars['String'];
  shippingCountry: Scalars['String'];
  payments?: Maybe<Array<OrderPaymentInput>>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
  /** Indicates the user has chosen to pass this order to credit control */
  creditControl: Scalars['Boolean'];
};

export type GetAdminNotificationMessagesParams = {
  statusId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
};

export type ContentImageFocalPoint = {
  __typename?: 'ContentImageFocalPoint';
  top: Scalars['Float'];
  bottom: Scalars['Float'];
  right: Scalars['Float'];
  left: Scalars['Float'];
};

export type AdminOrdersResponse = {
  __typename?: 'AdminOrdersResponse';
  totalCount: Scalars['Int'];
  adminOrders?: Maybe<Array<DslOrder>>;
};

export type ContentFilterParams = {
  contentType: Scalars['String'];
  slug: Scalars['String'];
  metaKey: Scalars['String'];
  metaValue: Scalars['String'];
  search: Scalars['String'];
  serviceCategory: Scalars['Int'];
};

export type UpdateOutletBillingInput = {
  address: InsertAddress;
};

export type DeleteOutletProductPriceOverrides = {
  outletId: Scalars['Int'];
};

export type UserInsert = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  marketing: Scalars['Boolean'];
};

export type ProductDistributor = {
  __typename?: 'ProductDistributor';
  id: Scalars['Int'];
  name: Scalars['String'];
  isDefault: Scalars['Boolean'];
};

export type ContentHeroCta = {
  __typename?: 'ContentHeroCta';
  image: ContentImage;
  title: Scalars['String'];
  description: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  primaryButton: ContentButton;
  secondaryButton: ContentButton;
};

export type DslAdminProductsResponse = {
  __typename?: 'DslAdminProductsResponse';
  totalCount: Scalars['Int'];
  products?: Maybe<Array<DslProduct>>;
};

export type InsertProductResponse = {
  __typename?: 'InsertProductResponse';
  product: DslProduct;
};

export type ActivateOutletInput = {
  outletId: Scalars['Int'];
};

export type WishlistItem = {
  __typename?: 'WishlistItem';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  position: Scalars['Int'];
  created: Scalars['String'];
  lastUpdated: Scalars['String'];
};

export type DslOutletFeatures = {
  __typename?: 'DslOutletFeatures';
  cashWithOrder: Scalars['Boolean'];
};

export type Price = {
  __typename?: 'Price';
  id: Scalars['Int'];
  subtotal: Scalars['Float'];
  vat: Scalars['Float'];
  discount: Scalars['Float'];
  total: Scalars['Float'];
};

export type UpdateOutletProductPricingResponse = {
  __typename?: 'UpdateOutletProductPricingResponse';
  errors?: Maybe<Array<Scalars['String']>>;
};

export type AddressFieldsFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'title' | 'firstName' | 'middleName' | 'lastName' | 'lineOne' | 'lineTwo' | 'lineThree' | 'city' | 'county' | 'postcode' | 'country'>
);

export type DslProductFeatureFieldsFragment = (
  { __typename?: 'DslProductFeature' }
  & Pick<DslProductFeature, 'id' | 'name' | 'description' | 'value' | 'featured' | 'filterable' | 'position' | 'createdOn' | 'updatedOn'>
  & { values?: Maybe<Array<(
    { __typename?: 'ProductFeatureValue' }
    & Pick<ProductFeatureValue, 'id' | 'value'>
  )>> }
);

export type DslProductImageFieldsFragment = (
  { __typename?: 'DslProductImage' }
  & Pick<DslProductImage, 'id' | 'productId' | 'type' | 'key' | 'fullSizePath' | 'thumbnailPath' | 'createdOn' | 'updatedOn'>
);

export type DslProductFieldsFragment = (
  { __typename?: 'DslProduct' }
  & Pick<DslProduct, 'id' | 'type' | 'name' | 'shortDescription' | 'longDescription' | 'code' | 'mrrp' | 'popularity' | 'searchWords' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'seoSlug' | 'weight' | 'boxLength' | 'boxWidth' | 'boxHeight' | 'featured' | 'createdOn' | 'updatedOn' | 'volume' | 'hideLoggedOut' | 'flaggedPrice' | 'onWishlist'>
  & { status: (
    { __typename?: 'Status' }
    & StatusFieldsFragment
  ), features?: Maybe<Array<(
    { __typename?: 'DslProductFeature' }
    & DslProductFeatureFieldsFragment
  )>>, options?: Maybe<Array<(
    { __typename?: 'DslProductOption' }
    & Pick<DslProductOption, 'id' | 'productId' | 'name' | 'description' | 'icon' | 'createdOn' | 'updatedOn'>
  )>>, adminPricing?: Maybe<(
    { __typename?: 'ProductAdminPricing' }
    & Pick<ProductAdminPricing, 'productId'>
    & { pricing?: Maybe<Array<(
      { __typename?: 'ProductAdminPrice' }
      & Pick<ProductAdminPrice, 'inputPrice' | 'starStockFee' | 'logisticsFee' | 'logisticsFeeId' | 'taxCodeId' | 'dateFrom' | 'dateTo'>
    )>> }
  )>, price: (
    { __typename?: 'Price' }
    & PriceFieldsFragment
  ), taxCode?: Maybe<(
    { __typename?: 'TaxCode' }
    & Pick<TaxCode, 'id' | 'name'>
  )>, mainImage?: Maybe<(
    { __typename?: 'DslProductImage' }
    & DslProductImageFieldsFragment
  )>, categories?: Maybe<Array<(
    { __typename?: 'DslCategory' }
    & Pick<DslCategory, 'id' | 'name'>
  )>>, associations?: Maybe<(
    { __typename?: 'ProductAssociations' }
    & { vendor?: Maybe<(
      { __typename?: 'ProductAssociation' }
      & Pick<ProductAssociation, 'id' | 'name'>
    )>, distributor?: Maybe<(
      { __typename?: 'ProductAssociation' }
      & Pick<ProductAssociation, 'id' | 'name'>
    )> }
  )>, additionalImages?: Maybe<Array<(
    { __typename?: 'DslProductImage' }
    & DslProductImageFieldsFragment
  )>> }
);

export type DslUserListItemFieldsFragment = (
  { __typename?: 'DslUserListItem' }
  & Pick<DslUserListItem, 'id' | 'title' | 'firstName' | 'email' | 'middleName' | 'lastName' | 'phone' | 'marketing' | 'type' | 'outlet' | 'createdOn' | 'lastLogin' | 'lastOrdered'>
  & { brand?: Maybe<(
    { __typename?: 'BrandOwner' }
    & Pick<BrandOwner, 'id' | 'displayName'>
  )>, status: (
    { __typename?: 'Status' }
    & StatusFieldsFragment
  ) }
);

export type DslUserFieldsFragment = (
  { __typename?: 'DslUser' }
  & Pick<DslUser, 'id' | 'type' | 'title' | 'firstName' | 'middleName' | 'lastName' | 'phone' | 'email' | 'marketing' | 'createdOn' | 'lastLogin' | 'lastOrdered'>
  & { brand?: Maybe<(
    { __typename?: 'BrandOwner' }
    & Pick<BrandOwner, 'id'>
  )>, identities?: Maybe<Array<Maybe<(
    { __typename?: 'UserIdentity' }
    & Pick<UserIdentity, 'id' | 'type' | 'value'>
  )>>>, status?: Maybe<(
    { __typename?: 'Status' }
    & Pick<Status, 'id' | 'value' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
  )>, outlets?: Maybe<Array<(
    { __typename?: 'DslOutlet' }
    & Pick<DslOutlet, 'id' | 'name' | 'style' | 'legalStatus' | 'companyName' | 'companyNumber' | 'charityNumber' | 'dropPointDescription' | 'createdOn' | 'updatedOn' | 'lastOrdered' | 'outletType' | 'userRole' | 'activeOnline'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'value' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
    ), addressBook: (
      { __typename?: 'OutletAddressBook' }
      & Pick<OutletAddressBook, 'id' | 'shippingId'>
      & { addresses?: Maybe<Array<(
        { __typename?: 'Address' }
        & Pick<Address, 'id' | 'postcode'>
      )>> }
    ), outletUsers?: Maybe<Array<(
      { __typename?: 'OutletUser' }
      & Pick<OutletUser, 'role'>
      & { user: (
        { __typename?: 'DslUser' }
        & Pick<DslUser, 'id' | 'firstName' | 'lastName'>
      ) }
    )>>, features: (
      { __typename?: 'DslOutletFeatures' }
      & Pick<DslOutletFeatures, 'cashWithOrder'>
    ), deliveryDays?: Maybe<Array<(
      { __typename?: 'OutletDeliveryDay' }
      & Pick<OutletDeliveryDay, 'id' | 'fullDate' | 'day' | 'price' | 'isAvailable' | 'createdOn' | 'updatedOn' | 'type' | 'leadDays'>
    )>>, bdmUser?: Maybe<(
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'id' | 'firstName' | 'lastName'>
    )> }
  )>> }
);

export type DslOrderListFieldsFragment = (
  { __typename?: 'DslOrder' }
  & Pick<DslOrder, 'id' | 'reference' | 'userName' | 'telephone' | 'subtotal' | 'discount' | 'delivery' | 'total' | 'totalTax' | 'notes' | 'firstname' | 'lastname' | 'company' | 'email' | 'createdOn' | 'updatedOn' | 'outletName'>
  & { status: (
    { __typename?: 'Status' }
    & Pick<Status, 'value' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
  ), orderBody?: Maybe<Array<(
    { __typename?: 'OrderBody' }
    & Pick<OrderBody, 'id' | 'orderId' | 'distributorName' | 'subtotal' | 'discount' | 'delivery' | 'tax' | 'total' | 'cutoffDeliveryDate' | 'selectedDeliveryDate' | 'actualDeliveryDate' | 'updatedOn'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
    ), deliveredItems?: Maybe<Array<(
      { __typename?: 'DeliveredOrderItem' }
      & Pick<DeliveredOrderItem, 'id' | 'orderBodyId' | 'code' | 'name' | 'qtyOrdered' | 'qtyAccepted' | 'qtyDelivered' | 'rejectionCode'>
    )>> }
  )>> }
);

export type DslOrderFieldsFragment = (
  { __typename?: 'DslOrder' }
  & Pick<DslOrder, 'id' | 'reference' | 'userId' | 'outletId' | 'userName' | 'telephone' | 'subtotal' | 'discount' | 'delivery' | 'total' | 'totalTax' | 'notes' | 'firstname' | 'lastname' | 'company' | 'email' | 'billingLine1' | 'billingLine2' | 'billingLine3' | 'billingCity' | 'billingCounty' | 'billingPostcode' | 'billingCountry' | 'shippingLine1' | 'shippingLine2' | 'shippingLine3' | 'shippingCity' | 'shippingCounty' | 'shippingPostcode' | 'shippingCountry' | 'createdOn' | 'updatedOn' | 'outletName'>
  & { status: (
    { __typename?: 'Status' }
    & Pick<Status, 'value' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
  ), orderBody?: Maybe<Array<(
    { __typename?: 'OrderBody' }
    & Pick<OrderBody, 'id' | 'distributorName' | 'subtotal' | 'discount' | 'delivery' | 'tax' | 'total' | 'cutoffDeliveryDate' | 'selectedDeliveryDate' | 'actualDeliveryDate' | 'updatedOn'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
    ), deliveredItems?: Maybe<Array<(
      { __typename?: 'DeliveredOrderItem' }
      & Pick<DeliveredOrderItem, 'id' | 'orderBodyId' | 'code' | 'name' | 'qtyOrdered' | 'qtyAccepted' | 'qtyDelivered' | 'rejectionCode'>
    )>>, orderItems?: Maybe<Array<(
      { __typename?: 'DslOrderItem' }
      & Pick<DslOrderItem, 'id' | 'orderBodyId' | 'productId' | 'name' | 'type' | 'code' | 'weight' | 'boxLength' | 'boxWidth' | 'boxHeight' | 'price' | 'qty' | 'total' | 'totalTax' | 'taxRate' | 'taxCalculationType' | 'createdOn' | 'updatedOn' | 'mainImage'>
      & { pricing?: Maybe<Array<(
        { __typename?: 'OrderItemPricing' }
        & Pick<OrderItemPricing, 'id' | 'type' | 'identifier' | 'value' | 'position' | 'isTax'>
      )>>, associations?: Maybe<(
        { __typename?: 'OrderItemAssociations' }
        & { vendor?: Maybe<(
          { __typename?: 'OrderItemAssociation' }
          & Pick<OrderItemAssociation, 'id' | 'name'>
        )>, distributor?: Maybe<(
          { __typename?: 'OrderItemAssociation' }
          & Pick<OrderItemAssociation, 'id' | 'name'>
        )> }
      )>, supplements?: Maybe<Array<(
        { __typename?: 'OrderItemSupplement' }
        & Pick<OrderItemSupplement, 'id' | 'orderItemId' | 'name' | 'description' | 'selected'>
      )>> }
    )>> }
  )>>, payments?: Maybe<Array<(
    { __typename?: 'OrderPayment' }
    & Pick<OrderPayment, 'id' | 'orderId' | 'invoiceNumber' | 'paymentType' | 'reference' | 'method' | 'value'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'value'>
    ) }
  )>>, promotions?: Maybe<Array<(
    { __typename?: 'DslOrderPromotion' }
    & Pick<DslOrderPromotion, 'promotionId' | 'orderItemId' | 'effectType' | 'promotionName' | 'description' | 'originalValue' | 'valueChange' | 'taxChange' | 'newValue' | 'productId' | 'taxMultiplier' | 'qty' | 'taxDescription' | 'hiddenFromBrandOwner'>
  )>> }
);

export type PriceFieldsFragment = (
  { __typename?: 'Price' }
  & Pick<Price, 'subtotal' | 'vat' | 'discount' | 'total'>
);

export type StatusFieldsFragment = (
  { __typename?: 'Status' }
  & Pick<Status, 'id' | 'value' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
);

export type AcceptTermsConditionsMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AcceptTermsConditionsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'acceptTermsConditions'>
);

export type ActivateOutletMutationVariables = Exact<{
  input: ActivateOutletInput;
}>;


export type ActivateOutletMutation = (
  { __typename?: 'Mutation' }
  & { activateOutlet: (
    { __typename?: 'UpdateOutletResponse' }
    & { outlet: (
      { __typename?: 'DslOutlet' }
      & Pick<DslOutlet, 'id'>
    ) }
  ) }
);

export type BulkDeleteMutationVariables = Exact<{
  input?: Maybe<BulkActionInput>;
}>;


export type BulkDeleteMutation = (
  { __typename?: 'Mutation' }
  & { bulkActionDelete: (
    { __typename?: 'BulkActionResponse' }
    & { error?: Maybe<(
      { __typename?: 'BulkActionError' }
      & Pick<BulkActionError, 'id'>
    )> }
  ) }
);

export type CreateAdministratorMutationVariables = Exact<{
  i: InsertUserInput;
}>;


export type CreateAdministratorMutation = (
  { __typename?: 'Mutation' }
  & { insertAdminUser: (
    { __typename?: 'DslUser' }
    & Pick<DslUser, 'id'>
  ) }
);

export type UpsertBrandOwnerMutationVariables = Exact<{
  input: UpsertBrandOwnerInput;
}>;


export type UpsertBrandOwnerMutation = (
  { __typename?: 'Mutation' }
  & { upsertBrandOwner: (
    { __typename?: 'BrandOwner' }
    & Pick<BrandOwner, 'id'>
  ) }
);

export type CreateCreditMutationVariables = Exact<{
  input: CreditNoteInput;
}>;


export type CreateCreditMutation = (
  { __typename?: 'Mutation' }
  & { createCreditNote: (
    { __typename?: 'CreditNoteCreateResponse' }
    & Pick<CreditNoteCreateResponse, 'success'>
    & { note?: Maybe<(
      { __typename?: 'CreditNote' }
      & Pick<CreditNote, 'id' | 'orderId' | 'subtotal' | 'discount' | 'tax' | 'total' | 'createdOn' | 'updatedOn'>
      & { createdBy: (
        { __typename?: 'DslUser' }
        & Pick<DslUser, 'id' | 'email'>
      ), items?: Maybe<Array<(
        { __typename?: 'CreditNoteItem' }
        & Pick<CreditNoteItem, 'id' | 'brandOwnerId' | 'orderItemId' | 'subtotal' | 'tax' | 'total' | 'taxRate' | 'taxCalculationType' | 'reasons'>
      )>> }
    )> }
  ) }
);

export type CreateDocumentMutationVariables = Exact<{
  input?: Maybe<InsertSupportDocumentInput>;
}>;


export type CreateDocumentMutation = (
  { __typename?: 'Mutation' }
  & { insertAdminSupportDocument: (
    { __typename?: 'SupportDocument' }
    & Pick<SupportDocument, 'id'>
  ) }
);

export type CreateLogisticsFeeMutationVariables = Exact<{
  input: InsertLogisticsFeeInput;
}>;


export type CreateLogisticsFeeMutation = (
  { __typename?: 'Mutation' }
  & { insertAdminLogisticsFee: (
    { __typename?: 'InsertLogisticFeeResponse' }
    & { fee: (
      { __typename?: 'LogisticsFee' }
      & Pick<LogisticsFee, 'id'>
    ) }
  ) }
);

export type CreateOutletMutationVariables = Exact<{
  input: InsertOutletInput;
}>;


export type CreateOutletMutation = (
  { __typename?: 'Mutation' }
  & { insertAdminOutlet: (
    { __typename?: 'InsertOutletResponse' }
    & { outlet: (
      { __typename?: 'DslOutlet' }
      & Pick<DslOutlet, 'id' | 'name'>
    ) }
  ) }
);

export type CreateProductFeatureMutationVariables = Exact<{
  input?: Maybe<InsertProductFeatureInput>;
}>;


export type CreateProductFeatureMutation = (
  { __typename?: 'Mutation' }
  & { insertProductFeature: (
    { __typename?: 'DslProductFeature' }
    & Pick<DslProductFeature, 'id'>
  ) }
);

export type CreateProductMutationVariables = Exact<{
  input: InsertProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { insertProduct: (
    { __typename?: 'InsertProductResponse' }
    & { product: (
      { __typename?: 'DslProduct' }
      & Pick<DslProduct, 'id'>
    ) }
  ) }
);

export type CreateTaxCodeMutationVariables = Exact<{
  input: TaxCodeInput;
}>;


export type CreateTaxCodeMutation = (
  { __typename?: 'Mutation' }
  & { insertTaxCode: (
    { __typename?: 'TaxCode' }
    & Pick<TaxCode, 'id'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: InsertUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { insertAdminUser: (
    { __typename?: 'DslUser' }
    & DslUserFieldsFragment
  ) }
);

export type DeleteAdMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAd'>
);

export type DeleteLogisticsFeeByIdMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteLogisticsFeeByIdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAdminLogisticsFeeByID'>
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProductByID'>
);

export type DeletePromotionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePromotionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePromotion'>
);

export type DeleteTaxCodeByIdMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTaxCodeByIdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTaxCodeById'>
);

export type InsertProductFeatureMutationVariables = Exact<{
  input?: Maybe<InsertProductFeatureInput>;
}>;


export type InsertProductFeatureMutation = (
  { __typename?: 'Mutation' }
  & { insertProductFeature: (
    { __typename?: 'DslProductFeature' }
    & Pick<DslProductFeature, 'id'>
  ) }
);

export type InsertTermsConditionsMutationVariables = Exact<{
  input: InsertTermsConditions;
}>;


export type InsertTermsConditionsMutation = (
  { __typename?: 'Mutation' }
  & { insertTermsConditions: (
    { __typename?: 'TermsConditions' }
    & Pick<TermsConditions, 'id'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  context: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { dslLogin: (
    { __typename?: 'AuthDslResponse' }
    & Pick<AuthDslResponse, 'result'>
    & { user?: Maybe<(
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'id' | 'title' | 'firstName' | 'lastName' | 'phone' | 'email' | 'type'>
      & { brand?: Maybe<(
        { __typename?: 'BrandOwner' }
        & Pick<BrandOwner, 'id' | 'displayName' | 'adminLogo'>
        & { termsConditions?: Maybe<(
          { __typename?: 'TermsConditions' }
          & Pick<TermsConditions, 'id' | 'content' | 'accepted'>
        )> }
      )> }
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateOutletDeliveryDayMutationVariables = Exact<{
  input: UpdateOutletDeliveryDaysInput;
}>;


export type UpdateOutletDeliveryDayMutation = (
  { __typename?: 'Mutation' }
  & { updateOutletDeliveryDays: (
    { __typename?: 'UpdateOutletDeliveryDaysOutput' }
    & { deliveryDays?: Maybe<Array<(
      { __typename?: 'OutletDeliveryDay' }
      & Pick<OutletDeliveryDay, 'id' | 'fullDate' | 'day' | 'price' | 'isAvailable' | 'createdOn' | 'updatedOn' | 'type' | 'leadDays'>
    )>> }
  ) }
);

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'dslRefresh'>
);

export type UpdateAdMutationVariables = Exact<{
  input: AdInput;
}>;


export type UpdateAdMutation = (
  { __typename?: 'Mutation' }
  & { updateAd: (
    { __typename?: 'UpdateAdResponse' }
    & { ad?: Maybe<(
      { __typename?: 'Ad' }
      & Pick<Ad, 'id' | 'type' | 'targetUrl' | 'identifier' | 'grouping' | 'position' | 'viewCount' | 'clickCount' | 'createdOn' | 'updatedOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'value'>
      ), image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'type' | 'url' | 'mobileUrl'>
      )> }
    )> }
  ) }
);

export type UpdateAdminUpsellProductsMutationVariables = Exact<{
  input: UpdateUpsellProductsInput;
}>;


export type UpdateAdminUpsellProductsMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminUpsellProducts: Array<(
    { __typename?: 'DslProduct' }
    & Pick<DslProduct, 'id'>
  )> }
);

export type UpdateAdminUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateAdminUserMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminUser: (
    { __typename?: 'DslUser' }
    & DslUserFieldsFragment
  ) }
);

export type UpdateAdsMutationVariables = Exact<{
  input?: Maybe<Array<AdInput>>;
}>;


export type UpdateAdsMutation = (
  { __typename?: 'Mutation' }
  & { updateAds: (
    { __typename?: 'UpdateAdResponse' }
    & { ads?: Maybe<Array<(
      { __typename?: 'Ad' }
      & Pick<Ad, 'id' | 'type' | 'targetUrl' | 'identifier' | 'grouping' | 'position' | 'viewCount' | 'clickCount' | 'createdOn' | 'updatedOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'value'>
      ), image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'type' | 'url' | 'mobileUrl'>
      )> }
    )>> }
  ) }
);

export type UpdateBoProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateBoProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct: (
    { __typename?: 'UpdateProductResponse' }
    & { product: (
      { __typename?: 'DslProduct' }
      & Pick<DslProduct, 'id'>
    ) }
  ) }
);

export type UpdateBrandOwnerRecommendationMutationVariables = Exact<{
  input: UpdateBrandOwnerRecommendationInput;
}>;


export type UpdateBrandOwnerRecommendationMutation = (
  { __typename?: 'Mutation' }
  & { updateBrandOwnerRecommendation: (
    { __typename?: 'Recommendation' }
    & Pick<Recommendation, 'id'>
  ) }
);

export type UpdateCompanyDetailsMutationVariables = Exact<{
  input?: Maybe<UpdateStarStockCompanyDetailsInput>;
}>;


export type UpdateCompanyDetailsMutation = (
  { __typename?: 'Mutation' }
  & { updateStarStockCompanyDetails: (
    { __typename?: 'StarStockCompanyDetails' }
    & Pick<StarStockCompanyDetails, 'companyName'>
  ) }
);

export type UpdateLogisticsFeeMutationVariables = Exact<{
  input: UpdateLogisticsFeeInput;
}>;


export type UpdateLogisticsFeeMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminLogisticsFee: (
    { __typename?: 'UpdateLogisticFeeResponse' }
    & { fee: (
      { __typename?: 'LogisticsFee' }
      & Pick<LogisticsFee, 'id'>
    ) }
  ) }
);

export type UpdateMyAccountMutationVariables = Exact<{
  input: UserUpdateInput;
}>;


export type UpdateMyAccountMutation = (
  { __typename?: 'Mutation' }
  & { dslUpdateUser: (
    { __typename?: 'UpdateUserResponse' }
    & { user?: Maybe<(
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'id'>
    )> }
  ) }
);

export type UpdateMyPasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdateMyPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'dslUpdateUserPassword'>
);

export type UpdateOutletProductPricingMutationVariables = Exact<{
  input: UpdateOutletProductPricingInput;
}>;


export type UpdateOutletProductPricingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateOutletProductPricing'>
);

export type UpdateOutletMutationVariables = Exact<{
  input: UpdateAdminOutletInput;
}>;


export type UpdateOutletMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminOutlet: (
    { __typename?: 'UpdateOutletResponse' }
    & { outlet: (
      { __typename?: 'DslOutlet' }
      & Pick<DslOutlet, 'id'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'displayName'>
      ) }
    ) }
  ) }
);

export type UpdateProductFeatureMutationVariables = Exact<{
  input?: Maybe<UpdateProductFeatureInput>;
}>;


export type UpdateProductFeatureMutation = (
  { __typename?: 'Mutation' }
  & { updateProductFeature: (
    { __typename?: 'DslProductFeature' }
    & Pick<DslProductFeature, 'id'>
  ) }
);

export type UpdateProductPostcodeRestrictionMutationVariables = Exact<{
  input: UpdateProductPostcodeRestrictionsInput;
}>;


export type UpdateProductPostcodeRestrictionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateProductPostcodeRestrictions'>
);

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
  ads?: Maybe<Array<AdInput>>;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct: (
    { __typename?: 'UpdateProductResponse' }
    & { product: (
      { __typename?: 'DslProduct' }
      & Pick<DslProduct, 'id'>
    ) }
  ), updateAds: (
    { __typename?: 'UpdateAdResponse' }
    & { ads?: Maybe<Array<(
      { __typename?: 'Ad' }
      & Pick<Ad, 'id' | 'type' | 'targetUrl' | 'identifier' | 'grouping' | 'position' | 'viewCount' | 'clickCount' | 'createdOn' | 'updatedOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'value'>
      ), image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'type' | 'url'>
      )> }
    )>> }
  ) }
);

export type UpdatePromotionMutationVariables = Exact<{
  input: UpdatePromotionInput;
}>;


export type UpdatePromotionMutation = (
  { __typename?: 'Mutation' }
  & { updatePromotion: (
    { __typename?: 'UpdatePromotionResponse' }
    & { promotion: (
      { __typename?: 'Promotion' }
      & Pick<Promotion, 'id'>
    ) }
  ) }
);

export type UpdateAdminSimilarProductsMutationVariables = Exact<{
  input: UpdateSimilarProductsInput;
}>;


export type UpdateAdminSimilarProductsMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminSimilarProducts: (
    { __typename?: 'UpdateSimilarProductsResponse' }
    & { products?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>> }
  ) }
);

export type UpdateEntityStatusMutationVariables = Exact<{
  input?: Maybe<UpdateStatusInput>;
}>;


export type UpdateEntityStatusMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateEntityStatus'>
);

export type UpdateTaxCodeMutationVariables = Exact<{
  input: TaxCodeInput;
}>;


export type UpdateTaxCodeMutation = (
  { __typename?: 'Mutation' }
  & { updateTaxCode: (
    { __typename?: 'TaxCode' }
    & Pick<TaxCode, 'id'>
  ) }
);

export type UpdateTermsConditionsMutationVariables = Exact<{
  input: UpdateTermsConditions;
}>;


export type UpdateTermsConditionsMutation = (
  { __typename?: 'Mutation' }
  & { updateTermsConditions: (
    { __typename?: 'TermsConditions' }
    & Pick<TermsConditions, 'id'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminUser: (
    { __typename?: 'DslUser' }
    & DslUserFieldsFragment
  ) }
);

export type UpdateAdminYouMightAlsoLikeProductsMutationVariables = Exact<{
  input: UpdateYouMightAlsoLikeProductsInput;
}>;


export type UpdateAdminYouMightAlsoLikeProductsMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminYouMightAlsoLikeProducts: (
    { __typename?: 'UpdateYouMightAlsoLikeProductsResponse' }
    & { products?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>> }
  ) }
);

export type UpsertRecommendationMutationVariables = Exact<{
  i: UpsertRecommendationInput;
}>;


export type UpsertRecommendationMutation = (
  { __typename?: 'Mutation' }
  & { upsertRecommendation: (
    { __typename?: 'Recommendation' }
    & Pick<Recommendation, 'id'>
  ) }
);

export type GetAdminAbandonedCartDetailsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAdminAbandonedCartDetailsQuery = (
  { __typename?: 'Query' }
  & { getAdminAbandonedCartDetails: (
    { __typename?: 'DslCart' }
    & Pick<DslCart, 'id' | 'userId' | 'OutletId' | 'guestId' | 'totalProducts' | 'createdOn' | 'updatedOn' | 'canCheckout'>
    & { products?: Maybe<Array<(
      { __typename?: 'DslCartProduct' }
      & Pick<DslCartProduct, 'id' | 'cartId' | 'productId' | 'qty'>
      & { product: (
        { __typename?: 'DslProduct' }
        & DslProductFieldsFragment
      ) }
    )>>, outlet?: Maybe<(
      { __typename?: 'DslOutlet' }
      & Pick<DslOutlet, 'name'>
    )>, user?: Maybe<(
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'title' | 'firstName' | 'middleName' | 'lastName'>
    )>, totals: (
      { __typename?: 'DslCartTotal' }
      & Pick<DslCartTotal, 'subtotal' | 'discount' | 'delivery' | 'tax' | 'total'>
    ) }
  ) }
);

export type GetAbandonedCartsQueryVariables = Exact<{
  params?: Maybe<AdminAbandonedCartsInput>;
}>;


export type GetAbandonedCartsQuery = (
  { __typename?: 'Query' }
  & { getAdminAbandonedCarts: (
    { __typename?: 'AdminAbandonedCartsResponse' }
    & Pick<AdminAbandonedCartsResponse, 'totalCount'>
    & { carts?: Maybe<Array<(
      { __typename?: 'DslCart' }
      & Pick<DslCart, 'id' | 'userId' | 'OutletId' | 'guestId' | 'totalProducts' | 'createdOn' | 'updatedOn'>
      & { products?: Maybe<Array<(
        { __typename?: 'DslCartProduct' }
        & Pick<DslCartProduct, 'id' | 'cartId' | 'productId' | 'qty' | 'lastKnownPrice'>
      )>>, user?: Maybe<(
        { __typename?: 'DslUser' }
        & Pick<DslUser, 'id' | 'title' | 'firstName' | 'middleName' | 'lastName' | 'phone' | 'email' | 'marketing'>
        & { identities?: Maybe<Array<Maybe<(
          { __typename?: 'UserIdentity' }
          & Pick<UserIdentity, 'id' | 'type' | 'value'>
        )>>> }
      )>, outlet?: Maybe<(
        { __typename?: 'DslOutlet' }
        & Pick<DslOutlet, 'id' | 'name' | 'style' | 'legalStatus' | 'companyName' | 'charityNumber' | 'dropPointDescription' | 'createdOn' | 'updatedOn' | 'lastOrdered'>
      )> }
    )>> }
  ) }
);

export type GetAdminUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAdminUserByIdQuery = (
  { __typename?: 'Query' }
  & { getAdminUserById?: Maybe<(
    { __typename?: 'DslUser' }
    & DslUserFieldsFragment
  )> }
);

export type GetBrandOwnersQueryVariables = Exact<{
  searchText?: Maybe<Scalars['String']>;
  sortBy: Scalars['String'];
  sortOrder: Scalars['String'];
  page: Scalars['Int'];
  perPage?: Scalars['Int'];
  status?: Maybe<Scalars['Int']>;
}>;


export type GetBrandOwnersQuery = (
  { __typename?: 'Query' }
  & { getBrandOwner: (
    { __typename?: 'BrandOwnerListResponse' }
    & Pick<BrandOwnerListResponse, 'totalCount'>
    & { brandOwners: Array<Maybe<(
      { __typename?: 'BrandOwner' }
      & Pick<BrandOwner, 'id' | 'displayName' | 'createdOn' | 'isBrandNursery' | 'isDefaultDistributor' | 'isBrandPartner'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'displayName'>
      ) }
    )>> }
  ) }
);

export type GetBrandOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandOwnerQuery = (
  { __typename?: 'Query' }
  & { getBrandOwner: (
    { __typename?: 'BrandOwnerListResponse' }
    & { brandOwners: Array<Maybe<(
      { __typename?: 'BrandOwner' }
      & Pick<BrandOwner, 'id' | 'displayName' | 'isBrandNursery' | 'isDefaultDistributor' | 'isBrandPartner'>
    )>> }
  ) }
);

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = (
  { __typename?: 'Query' }
  & { getAdminCategories?: Maybe<Array<(
    { __typename?: 'DslCategory' }
    & Pick<DslCategory, 'id' | 'parentId' | 'name' | 'shortDescription' | 'longDescription' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'seoSlug' | 'createdOn' | 'updatedOn'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'value' | 'displayName' | 'description'>
    ), subCategories?: Maybe<Array<Maybe<(
      { __typename?: 'DslCategory' }
      & Pick<DslCategory, 'id' | 'parentId' | 'name' | 'shortDescription' | 'longDescription' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'seoSlug' | 'createdOn' | 'updatedOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'value' | 'displayName' | 'description'>
      ), subCategories?: Maybe<Array<Maybe<(
        { __typename?: 'DslCategory' }
        & Pick<DslCategory, 'id' | 'parentId' | 'name' | 'shortDescription' | 'longDescription' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'seoSlug' | 'createdOn' | 'updatedOn'>
        & { status: (
          { __typename?: 'Status' }
          & Pick<Status, 'id' | 'value' | 'displayName' | 'description'>
        ) }
      )>>> }
    )>>> }
  )>> }
);

export type GetCompanyDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyDetailsQuery = (
  { __typename?: 'Query' }
  & { getStarStockCompanyDetails: (
    { __typename?: 'StarStockCompanyDetails' }
    & Pick<StarStockCompanyDetails, 'companyName' | 'address1' | 'address2' | 'city' | 'county' | 'postcode' | 'vatNumber' | 'awrs' | 'fee'>
  ) }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { dslCurrentUser: (
    { __typename?: 'AuthDslResponse' }
    & Pick<AuthDslResponse, 'result'>
    & { user?: Maybe<(
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'id' | 'firstName' | 'lastName' | 'type' | 'email' | 'phone' | 'title' | 'marketing'>
      & { brand?: Maybe<(
        { __typename?: 'BrandOwner' }
        & Pick<BrandOwner, 'id' | 'displayName' | 'adminLogo'>
        & { termsConditions?: Maybe<(
          { __typename?: 'TermsConditions' }
          & Pick<TermsConditions, 'id' | 'content' | 'accepted'>
        )> }
      )> }
    )> }
  ) }
);

export type GetDocumentsQueryVariables = Exact<{
  params?: Maybe<SupportDocumentAdminParams>;
}>;


export type GetDocumentsQuery = (
  { __typename?: 'Query' }
  & { getAdminSupportDocuments: (
    { __typename?: 'SupportDocumentsResponse' }
    & Pick<SupportDocumentsResponse, 'totalCount'>
    & { documents?: Maybe<Array<(
      { __typename?: 'SupportDocument' }
      & Pick<SupportDocument, 'id' | 'name' | 'url'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'value' | 'displayName'>
      ) }
    )>> }
  ) }
);

export type FindOutletQueryVariables = Exact<{
  input: FindOutletParams;
}>;


export type FindOutletQuery = (
  { __typename?: 'Query' }
  & { findOutlet?: Maybe<(
    { __typename?: 'DslOutlet' }
    & Pick<DslOutlet, 'id' | 'name' | 'accountNumber'>
  )> }
);

export type GetAdGroupsQueryVariables = Exact<{
  input: BasicAdminListInput;
}>;


export type GetAdGroupsQuery = (
  { __typename?: 'Query' }
  & { getAdGroups: (
    { __typename?: 'AdGroupsResponse' }
    & Pick<AdGroupsResponse, 'totalCount'>
    & { groups?: Maybe<Array<(
      { __typename?: 'AdGroup' }
      & Pick<AdGroup, 'name' | 'adCount'>
    )>> }
  ) }
);

export type GetCurrentAdminFeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentAdminFeesQuery = (
  { __typename?: 'Query' }
  & { getAdminLogisticsFees?: Maybe<(
    { __typename?: 'LogisticsFeesResponse' }
    & { fees: Array<(
      { __typename?: 'LogisticsFee' }
      & Pick<LogisticsFee, 'id' | 'name' | 'logisticsType' | 'fee'>
    )> }
  )> }
);

export type GetAdminOrdersOverviewQueryVariables = Exact<{
  i: AdminOverviewInput;
}>;


export type GetAdminOrdersOverviewQuery = (
  { __typename?: 'Query' }
  & { getAdminOrdersOverview: (
    { __typename?: 'AdminOrdersOverviewResponse' }
    & Pick<AdminOrdersOverviewResponse, 'orderLines'>
    & { ordersStats?: Maybe<(
      { __typename?: 'AdminOrdersStats' }
      & Pick<AdminOrdersStats, 'totalOrders' | 'ordersValue' | 'ordersItems' | 'orderingCustomers' | 'productsVolume'>
    )> }
  ) }
);

export type GetAdminOrdersWeeklyStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminOrdersWeeklyStatsQuery = (
  { __typename?: 'Query' }
  & { getAdminOrdersWeeklyStats?: Maybe<Array<(
    { __typename?: 'AdminOrderWeeklyStats' }
    & Pick<AdminOrderWeeklyStats, 'dateTime' | 'ordersCount' | 'orderAmount'>
  )>> }
);

export type GetAdminOverviewQueryVariables = Exact<{
  i: AdminOverviewInput;
}>;


export type GetAdminOverviewQuery = (
  { __typename?: 'Query' }
  & { getAdminOverview: (
    { __typename?: 'AdminOverviewResponse' }
    & Pick<AdminOverviewResponse, 'inactiveMarketingUsers' | 'activeProducts' | 'orderingAccounts' | 'activePromotions' | 'brandOwners' | 'registeredCustomers' | 'noWeekOrderCustomers'>
  ) }
);

export type GetAdminTopProductsQueryVariables = Exact<{
  i: AdminOverviewInput;
}>;


export type GetAdminTopProductsQuery = (
  { __typename?: 'Query' }
  & { getAdminTopProducts?: Maybe<Array<(
    { __typename?: 'AdminTopProduct' }
    & Pick<AdminTopProduct, 'id' | 'name' | 'code' | 'thumbnailPath'>
  )>> }
);

export type GetAdminTopPromotionsQueryVariables = Exact<{
  i: AdminOverviewInput;
}>;


export type GetAdminTopPromotionsQuery = (
  { __typename?: 'Query' }
  & { getAdminTopPromotions?: Maybe<Array<(
    { __typename?: 'AdminTopPromotion' }
    & Pick<AdminTopPromotion, 'id' | 'name'>
  )>> }
);

export type GetAdminUpsellProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminUpsellProductsQuery = (
  { __typename?: 'Query' }
  & { getAdminUpsellProducts: (
    { __typename?: 'UpsellProductsResponse' }
    & { order?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>>, basket?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>>, home?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>> }
  ) }
);

export type GetAdsForGroupQueryVariables = Exact<{
  groupName: Scalars['String'];
}>;


export type GetAdsForGroupQuery = (
  { __typename?: 'Query' }
  & { getAdsForGroup?: Maybe<Array<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'type' | 'targetUrl' | 'identifier' | 'grouping' | 'position' | 'titleText'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'value'>
    ), image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'type' | 'url' | 'mobileUrl' | 'thumbnail' | 'altText' | 'titleText' | 'name' | 'createdOn' | 'updatedOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'value'>
      ) }
    )> }
  )>> }
);

export type GetBrandOwnerByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBrandOwnerByIdQuery = (
  { __typename?: 'Query' }
  & { getBrandOwnerByID?: Maybe<(
    { __typename?: 'BrandOwnerDetails' }
    & { owner: (
      { __typename?: 'BrandOwner' }
      & Pick<BrandOwner, 'id' | 'displayName' | 'slug' | 'language' | 'mainEmail' | 'ccEmail' | 'phone' | 'installEmail' | 'pumpClipEmail' | 'createdOn' | 'updatedOn' | 'description' | 'storefrontLogo' | 'adminLogo' | 'isBrandNursery' | 'isDefaultDistributor' | 'isBrandPartner' | 'orderEmailAddresses'>
      & { ads?: Maybe<Array<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'type' | 'targetUrl' | 'identifier' | 'grouping' | 'position' | 'titleText'>
        & { status: (
          { __typename?: 'Status' }
          & Pick<Status, 'value'>
        ), image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'type' | 'url' | 'mobileUrl' | 'thumbnail' | 'altText' | 'titleText' | 'name' | 'createdOn' | 'updatedOn'>
          & { status: (
            { __typename?: 'Status' }
            & Pick<Status, 'value'>
          ) }
        )> }
      )>> }
    ), address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'outletId' | 'title' | 'firstName' | 'middleName' | 'lastName' | 'lineOne' | 'lineTwo' | 'lineThree' | 'city' | 'county' | 'postcode' | 'country' | 'type' | 'brandOwnerId'>
    )>, logisticsFees: Array<Maybe<(
      { __typename?: 'LogisticsFeeOverride' }
      & Pick<LogisticsFeeOverride, 'id' | 'logisticsFeeId' | 'fee'>
    )>> }
  )> }
);

export type GetBrandOwnerOrdersWeeklyStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandOwnerOrdersWeeklyStatsQuery = (
  { __typename?: 'Query' }
  & { getBrandOwnerOrdersWeeklyStats?: Maybe<Array<(
    { __typename?: 'BrandOwnerOrderWeeklyStats' }
    & Pick<BrandOwnerOrderWeeklyStats, 'dateTime' | 'ordersCount' | 'orderAmount'>
  )>> }
);

export type GetBrandOwnerOverviewQueryVariables = Exact<{
  i: BrandOwnerOverviewInput;
}>;


export type GetBrandOwnerOverviewQuery = (
  { __typename?: 'Query' }
  & { getBrandOwnerOverview: (
    { __typename?: 'BrandOwnerOverviewResponse' }
    & Pick<BrandOwnerOverviewResponse, 'totalOrders' | 'activeProducts' | 'ordersValue' | 'orderingAccounts' | 'activePromotions' | 'productsVolume'>
  ) }
);

export type GetBrandOwnerTopProductsQueryVariables = Exact<{
  i: BrandOwnerOverviewInput;
}>;


export type GetBrandOwnerTopProductsQuery = (
  { __typename?: 'Query' }
  & { getBrandOwnerTopProducts?: Maybe<Array<(
    { __typename?: 'BrandOwnerTopProduct' }
    & Pick<BrandOwnerTopProduct, 'id' | 'name' | 'shortDescription' | 'longDescription' | 'code' | 'totalSales' | 'thumbnailPath'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'displayName'>
    ) }
  )>> }
);

export type GetBrandOwnerTopPromotionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandOwnerTopPromotionsQuery = (
  { __typename?: 'Query' }
  & { getBrandOwnerTopPromotions?: Maybe<Array<(
    { __typename?: 'BrandOwnerTopPromotion' }
    & Pick<BrandOwnerTopPromotion, 'id' | 'name'>
  )>> }
);

export type GetCreditNoteByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCreditNoteByIdQuery = (
  { __typename?: 'Query' }
  & { getCreditNoteById?: Maybe<(
    { __typename?: 'CreditNote' }
    & Pick<CreditNote, 'id' | 'creditNumber' | 'orderId' | 'orderReference' | 'outletName' | 'subtotal' | 'discount' | 'tax' | 'total' | 'createdOn' | 'updatedOn'>
    & { providerReferences?: Maybe<Array<(
      { __typename?: 'CreditNoteReference' }
      & Pick<CreditNoteReference, 'id' | 'creditNoteId' | 'reference' | 'paymentProvider'>
    )>>, createdBy: (
      { __typename?: 'DslUser' }
      & DslUserFieldsFragment
    ), items?: Maybe<Array<(
      { __typename?: 'CreditNoteItem' }
      & Pick<CreditNoteItem, 'brandOwnerId' | 'orderItemId' | 'subtotal' | 'tax' | 'qty' | 'total' | 'taxRate' | 'taxCalculationType' | 'reasons'>
    )>> }
  )> }
);

export type GetCreditNotesQueryVariables = Exact<{
  input: CreditNoteFilters;
}>;


export type GetCreditNotesQuery = (
  { __typename?: 'Query' }
  & { getCreditNotes: (
    { __typename?: 'CreditNotesResponse' }
    & Pick<CreditNotesResponse, 'totalCount'>
    & { notes?: Maybe<Array<(
      { __typename?: 'CreditNote' }
      & Pick<CreditNote, 'id' | 'creditNumber' | 'orderId' | 'orderReference' | 'outletName' | 'subtotal' | 'discount' | 'tax' | 'total' | 'createdOn' | 'updatedOn'>
      & { providerReferences?: Maybe<Array<(
        { __typename?: 'CreditNoteReference' }
        & Pick<CreditNoteReference, 'id' | 'creditNoteId' | 'reference' | 'paymentProvider'>
      )>>, items?: Maybe<Array<(
        { __typename?: 'CreditNoteItem' }
        & Pick<CreditNoteItem, 'id' | 'brandOwnerId' | 'orderItemId' | 'subtotal' | 'qty' | 'tax' | 'total' | 'taxRate' | 'taxCalculationType' | 'reasons'>
      )>>, createdBy: (
        { __typename?: 'DslUser' }
        & DslUserFieldsFragment
      ) }
    )>> }
  ) }
);

export type GetAdminDistributorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminDistributorsQuery = (
  { __typename?: 'Query' }
  & { getAdminDistributors?: Maybe<Array<(
    { __typename?: 'BrandOwner' }
    & Pick<BrandOwner, 'id' | 'displayName'>
  )>> }
);

export type GetProductAttributeSelectionQueryVariables = Exact<{
  productId?: Maybe<Scalars['Int']>;
}>;


export type GetProductAttributeSelectionQuery = (
  { __typename?: 'Query' }
  & { getProductAttributeSelection?: Maybe<Array<(
    { __typename?: 'ProductAttribute' }
    & { feature: (
      { __typename?: 'DslProductFeature' }
      & Pick<DslProductFeature, 'id' | 'name' | 'position' | 'multipleValueSelection' | 'readOnly' | 'mandatory' | 'value'>
      & { type: (
        { __typename?: 'Type' }
        & Pick<Type, 'name'>
      ), status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'displayName'>
      ), defaultValues: Array<(
        { __typename?: 'ProductFeatureDefaultValue' }
        & Pick<ProductFeatureDefaultValue, 'value' | 'position'>
      )>, values?: Maybe<Array<(
        { __typename?: 'ProductFeatureValue' }
        & Pick<ProductFeatureValue, 'value'>
      )>> }
    ) }
  )>> }
);

export type GetProductDistributorsQueryVariables = Exact<{
  params: AvailableDistributorParams;
}>;


export type GetProductDistributorsQuery = (
  { __typename?: 'Query' }
  & { getAvailableProductDistributors?: Maybe<Array<(
    { __typename?: 'ProductDistributor' }
    & Pick<ProductDistributor, 'id' | 'name' | 'isDefault'>
  )>> }
);

export type GetProductFeatureByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductFeatureByIdQuery = (
  { __typename?: 'Query' }
  & { getProductFeatureById: (
    { __typename?: 'DslProductFeature' }
    & Pick<DslProductFeature, 'id' | 'name' | 'value' | 'description' | 'featured' | 'filterable' | 'position' | 'createdOn' | 'updatedOn' | 'readOnly' | 'code' | 'storeFrontDisplay' | 'mandatory' | 'brandOwnerDisplay' | 'multipleValueSelection'>
    & { values?: Maybe<Array<(
      { __typename?: 'ProductFeatureValue' }
      & Pick<ProductFeatureValue, 'id' | 'value'>
    )>>, type: (
      { __typename?: 'Type' }
      & Pick<Type, 'id' | 'name' | 'createdOn' | 'updatedOn'>
    ), status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'value' | 'displayName'>
    ), defaultValues: Array<(
      { __typename?: 'ProductFeatureDefaultValue' }
      & Pick<ProductFeatureDefaultValue, 'value' | 'position'>
    )> }
  ) }
);

export type GetProductFeaturesListQueryVariables = Exact<{
  i?: Maybe<ProductFeaturesListInput>;
}>;


export type GetProductFeaturesListQuery = (
  { __typename?: 'Query' }
  & { getProductFeaturesList: (
    { __typename?: 'ProductFeaturesListOutput' }
    & Pick<ProductFeaturesListOutput, 'totalCount'>
    & { features?: Maybe<Array<(
      { __typename?: 'DslProductFeature' }
      & Pick<DslProductFeature, 'id' | 'name' | 'position' | 'description' | 'featured' | 'filterable' | 'createdOn' | 'updatedOn' | 'readOnly' | 'code' | 'multipleValueSelection' | 'storeFrontDisplay' | 'mandatory' | 'brandOwnerDisplay'>
      & { type: (
        { __typename?: 'Type' }
        & Pick<Type, 'id' | 'name'>
      ), status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'displayName'>
      ), defaultValues: Array<(
        { __typename?: 'ProductFeatureDefaultValue' }
        & Pick<ProductFeatureDefaultValue, 'value' | 'position'>
      )> }
    )>> }
  ) }
);

export type GetRecommendationByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetRecommendationByIdQuery = (
  { __typename?: 'Query' }
  & { getRecommendationByID: (
    { __typename?: 'Recommendation' }
    & Pick<Recommendation, 'id' | 'title' | 'description' | 'closedOn' | 'createdOn' | 'viewedOn' | 'updatedOn'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'displayName'>
    ), createdBy: (
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'firstName' | 'lastName'>
    ), brandOwner: (
      { __typename?: 'BrandOwner' }
      & Pick<BrandOwner, 'id' | 'displayName'>
    ) }
  ) }
);

export type GetRecommendationsQueryVariables = Exact<{
  i: RecommendationsListParams;
}>;


export type GetRecommendationsQuery = (
  { __typename?: 'Query' }
  & { getRecommendations: (
    { __typename?: 'RecommendationListResponse' }
    & Pick<RecommendationListResponse, 'totalCount'>
    & { recommendations?: Maybe<Array<(
      { __typename?: 'Recommendation' }
      & Pick<Recommendation, 'id' | 'title' | 'description' | 'closedOn' | 'createdOn' | 'updatedOn' | 'viewedOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'displayName'>
      ), brandOwner: (
        { __typename?: 'BrandOwner' }
        & Pick<BrandOwner, 'id' | 'displayName'>
      ) }
    )>> }
  ) }
);

export type GetTermsConditionsByIdQueryVariables = Exact<{
  i: Scalars['Int'];
}>;


export type GetTermsConditionsByIdQuery = (
  { __typename?: 'Query' }
  & { getTermsConditionsByID: (
    { __typename?: 'TermsConditions' }
    & Pick<TermsConditions, 'id' | 'title' | 'content' | 'accepted'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'value' | 'displayName'>
    ) }
  ) }
);

export type GetTermsConditionsListQueryVariables = Exact<{
  i: TermsConditionsListParams;
}>;


export type GetTermsConditionsListQuery = (
  { __typename?: 'Query' }
  & { getTermsConditionsList: (
    { __typename?: 'TermsConditionsListResponse' }
    & Pick<TermsConditionsListResponse, 'totalCount'>
    & { termsConditions?: Maybe<Array<(
      { __typename?: 'TermsConditions' }
      & Pick<TermsConditions, 'id' | 'content' | 'title' | 'accepted' | 'createdOn'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'displayName'>
      ) }
    )>> }
  ) }
);

export type GetAdminLinkedProductsQueryVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type GetAdminLinkedProductsQuery = (
  { __typename?: 'Query' }
  & { getAdminLinkedProducts: (
    { __typename?: 'LinkedProductsResponse' }
    & { youMightAlsoLike?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>>, similar?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>> }
  ) }
);

export type GetLogisticsFeeByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetLogisticsFeeByIdQuery = (
  { __typename?: 'Query' }
  & { getAdminLogisticsFeeById: (
    { __typename?: 'LogisticsFee' }
    & Pick<LogisticsFee, 'id' | 'name' | 'logisticsType' | 'fee'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'value' | 'displayName'>
    ) }
  ) }
);

export type GetLogisticsFeesQueryVariables = Exact<{
  params: LogisticsFeesParams;
}>;


export type GetLogisticsFeesQuery = (
  { __typename?: 'Query' }
  & { getAdminLogisticsFees?: Maybe<(
    { __typename?: 'LogisticsFeesResponse' }
    & Pick<LogisticsFeesResponse, 'totalCount'>
    & { fees: Array<(
      { __typename?: 'LogisticsFee' }
      & Pick<LogisticsFee, 'id' | 'name' | 'logisticsType' | 'fee'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'value' | 'displayName'>
      ) }
    )> }
  )> }
);

export type GetOrderDetailsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOrderDetailsQuery = (
  { __typename?: 'Query' }
  & { getAdminOrderById: (
    { __typename?: 'DslOrder' }
    & DslOrderFieldsFragment
  ) }
);

export type GetOrdersQueryVariables = Exact<{
  prams: AdminOrdersParams;
}>;


export type GetOrdersQuery = (
  { __typename?: 'Query' }
  & { getAdminOrders: (
    { __typename?: 'AdminOrdersResponse' }
    & Pick<AdminOrdersResponse, 'totalCount'>
    & { adminOrders?: Maybe<Array<(
      { __typename?: 'DslOrder' }
      & DslOrderListFieldsFragment
    )>> }
  ) }
);

export type GetOutletByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOutletByIdQuery = (
  { __typename?: 'Query' }
  & { getAdminOutletByID: (
    { __typename?: 'DslOutlet' }
    & Pick<DslOutlet, 'id' | 'name' | 'style' | 'legalStatus' | 'companyName' | 'accountNumber' | 'charityNumber' | 'dropPointDescription' | 'productsWithPricingCount' | 'createdOn' | 'lastOrdered' | 'xpoAccountNumber'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'value' | 'displayName' | 'id'>
    ), deliveryDays?: Maybe<Array<(
      { __typename?: 'OutletDeliveryDay' }
      & Pick<OutletDeliveryDay, 'id' | 'fullDate' | 'day' | 'price' | 'isAvailable' | 'createdOn' | 'updatedOn' | 'type' | 'leadDays'>
    )>>, primaryUser?: Maybe<(
      { __typename?: 'OutletUser' }
      & { user: (
        { __typename?: 'DslUser' }
        & Pick<DslUser, 'id' | 'lastLogin' | 'lastOrdered' | 'email'>
      ) }
    )>, addressBook: (
      { __typename?: 'OutletAddressBook' }
      & Pick<OutletAddressBook, 'billingId' | 'shippingId'>
      & { addresses?: Maybe<Array<(
        { __typename?: 'Address' }
        & AddressFieldsFragment
      )>> }
    ), outletUsers?: Maybe<Array<(
      { __typename?: 'OutletUser' }
      & Pick<OutletUser, 'role'>
      & { user: (
        { __typename?: 'DslUser' }
        & DslUserFieldsFragment
      ) }
    )>> }
  ) }
);

export type GetOutletProductPricingQueryVariables = Exact<{
  params: OutletProductPricingParams;
}>;


export type GetOutletProductPricingQuery = (
  { __typename?: 'Query' }
  & { getOutletProductPricing: (
    { __typename?: 'OutletProductPricingResponse' }
    & { pricing?: Maybe<Array<(
      { __typename?: 'ProductAdminOverridePrice' }
      & Pick<ProductAdminOverridePrice, 'productId' | 'productCode' | 'ProductName'>
      & { price: (
        { __typename?: 'ProductAdminPrice' }
        & Pick<ProductAdminPrice, 'inputPrice' | 'starStockFee' | 'logisticsFee' | 'dateFrom' | 'dateTo'>
      ) }
    )>> }
  ) }
);

export type GetOutletsQueryVariables = Exact<{
  params?: Maybe<OutletAdminParams>;
}>;


export type GetOutletsQuery = (
  { __typename?: 'Query' }
  & { getAdminOutlets?: Maybe<(
    { __typename?: 'OutletsResponse' }
    & Pick<OutletsResponse, 'totalCount'>
    & { outlets?: Maybe<Array<(
      { __typename?: 'DslOutlet' }
      & Pick<DslOutlet, 'id' | 'name' | 'style' | 'createdOn' | 'lastOrdered' | 'companyNumber' | 'accountNumber' | 'productsWithPricingCount'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'displayName'>
      ), deliveryDays?: Maybe<Array<(
        { __typename?: 'OutletDeliveryDay' }
        & Pick<OutletDeliveryDay, 'day' | 'isAvailable' | 'price' | 'type'>
      )>>, addressBook: (
        { __typename?: 'OutletAddressBook' }
        & Pick<OutletAddressBook, 'billingId' | 'shippingId'>
        & { addresses?: Maybe<Array<(
          { __typename?: 'Address' }
          & AddressFieldsFragment
        )>> }
      ), outletUsers?: Maybe<Array<(
        { __typename?: 'OutletUser' }
        & Pick<OutletUser, 'role'>
        & { user: (
          { __typename?: 'DslUser' }
          & Pick<DslUser, 'id' | 'firstName' | 'lastName'>
        ) }
      )>> }
    )>> }
  )> }
);

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ProductByIdQuery = (
  { __typename?: 'Query' }
  & { getProductById?: Maybe<(
    { __typename?: 'DslProduct' }
    & { ads?: Maybe<Array<(
      { __typename?: 'Ad' }
      & Pick<Ad, 'id' | 'type' | 'targetUrl' | 'identifier' | 'grouping' | 'position' | 'titleText'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'value'>
      ), image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'type' | 'url' | 'mobileUrl' | 'thumbnail' | 'altText' | 'titleText' | 'name' | 'createdOn' | 'updatedOn'>
        & { status: (
          { __typename?: 'Status' }
          & Pick<Status, 'value'>
        ) }
      )> }
    )>> }
    & DslProductFieldsFragment
  )> }
);

export type GetProductFeaturesQueryVariables = Exact<{
  params?: Maybe<ProductFeaturesListInput>;
}>;


export type GetProductFeaturesQuery = (
  { __typename?: 'Query' }
  & { getProductFeaturesList: (
    { __typename?: 'ProductFeaturesListOutput' }
    & Pick<ProductFeaturesListOutput, 'totalCount'>
    & { features?: Maybe<Array<(
      { __typename?: 'DslProductFeature' }
      & Pick<DslProductFeature, 'id' | 'name' | 'description' | 'value' | 'filterable' | 'position' | 'storeFrontDisplay' | 'brandOwnerDisplay' | 'mandatory'>
      & { type: (
        { __typename?: 'Type' }
        & Pick<Type, 'name'>
      ), status: (
        { __typename?: 'Status' }
        & Pick<Status, 'value' | 'displayName'>
      ) }
    )>> }
  ) }
);

export type GetProductPostcodeRestrictionQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductPostcodeRestrictionQuery = (
  { __typename?: 'Query' }
  & { getProductPostcodeRestrictions?: Maybe<(
    { __typename?: 'PostCodeRestrictionResponse' }
    & { postcodes: Array<Maybe<(
      { __typename?: 'PostcodeRestriction' }
      & Pick<PostcodeRestriction, 'id' | 'deliveryAvailable' | 'brandLocked'>
      & { postcode: (
        { __typename?: 'Postcode' }
        & Pick<Postcode, 'id' | 'postcode' | 'defaultAvailable'>
      ) }
    )>> }
  )> }
);

export type GetProductsQueryVariables = Exact<{
  params?: Maybe<DslProductAdminParams>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { getAdminProducts: (
    { __typename?: 'DslAdminProductsResponse' }
    & Pick<DslAdminProductsResponse, 'totalCount'>
    & { products?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>> }
  ) }
);

export type GetPromotionsQueryVariables = Exact<{
  params: PromotionsListParams;
}>;


export type GetPromotionsQuery = (
  { __typename?: 'Query' }
  & { getAdminPromotions?: Maybe<Array<(
    { __typename?: 'Promotion' }
    & Pick<Promotion, 'id' | 'name' | 'status' | 'createdOn' | 'identityCode' | 'longDescription' | 'shortDescription' | 'activeFrom' | 'activeTo' | 'categoriesInPromotion' | 'productsInPromotion' | 'terms' | 'containsVoucherCode' | 'imagePath' | 'hiddenFromAll' | 'brandId' | 'distributorId' | 'priority'>
    & { conditions: Array<(
      { __typename?: 'Condition' }
      & Pick<Condition, 'type' | 'comparator' | 'order' | 'promotionId' | 'in' | 'id' | 'result' | 'multiplesOf' | 'equalOrLess' | 'equalOrGreater' | 'greaterThan' | 'lessThan' | 'notIn'>
      & { voucherCodes?: Maybe<Array<(
        { __typename?: 'VoucherCode' }
        & Pick<VoucherCode, 'id' | 'code' | 'redemptionCount' | 'maxRedemptionCount' | 'enabled'>
      )>> }
    )>, effects: Array<(
      { __typename?: 'Effect' }
      & Pick<Effect, 'id' | 'name' | 'type' | 'value' | 'taxMultiplier'>
      & { freeStock?: Maybe<(
        { __typename?: 'FreeStockEffect' }
        & Pick<FreeStockEffect, 'entityId' | 'qty'>
      )>, rangeSelect?: Maybe<Array<(
        { __typename?: 'FreeStockEffect' }
        & Pick<FreeStockEffect, 'entityId' | 'qty'>
      )>> }
    )>, limits: Array<(
      { __typename?: 'Limit' }
      & Pick<Limit, 'value' | 'id' | 'type' | 'order'>
    )>, type: (
      { __typename?: 'PromotionType' }
      & Pick<PromotionType, 'name' | 'displayName'>
    ) }
  )>> }
);

export type GetReportByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetReportByIdQuery = (
  { __typename?: 'Query' }
  & { getReportById?: Maybe<(
    { __typename?: 'Report' }
    & Pick<Report, 'id' | 'name' | 'type' | 'createdOn' | 'updatedOn'>
    & { data?: Maybe<Array<(
      { __typename?: 'ReportRow' }
      & { columns?: Maybe<Array<(
        { __typename?: 'ReportDataCol' }
        & Pick<ReportDataCol, 'name' | 'value'>
      )>> }
    )>>, createdBy: (
      { __typename?: 'DslUser' }
      & Pick<DslUser, 'id' | 'firstName' | 'lastName'>
    ) }
  )> }
);

export type GetReportsQueryVariables = Exact<{
  params: BasicAdminListInput;
}>;


export type GetReportsQuery = (
  { __typename?: 'Query' }
  & { getReports?: Maybe<(
    { __typename?: 'ReportsResponse' }
    & Pick<ReportsResponse, 'total'>
    & { reports?: Maybe<Array<(
      { __typename?: 'Report' }
      & Pick<Report, 'id' | 'name' | 'type' | 'createdOn' | 'updatedOn'>
      & { data?: Maybe<Array<(
        { __typename?: 'ReportRow' }
        & { columns?: Maybe<Array<(
          { __typename?: 'ReportDataCol' }
          & Pick<ReportDataCol, 'name' | 'value'>
        )>> }
      )>>, createdBy: (
        { __typename?: 'DslUser' }
        & Pick<DslUser, 'id' | 'firstName' | 'lastName'>
      ) }
    )>> }
  )> }
);

export type GetSalesByOrderQueryVariables = Exact<{
  input: SalesReportInput;
}>;


export type GetSalesByOrderQuery = (
  { __typename?: 'Query' }
  & { getSalesReportByOrder: (
    { __typename?: 'SalesReportByOrder' }
    & { rows?: Maybe<Array<(
      { __typename?: 'ByOrderRows' }
      & Pick<ByOrderRows, 'accountNumber' | 'outletName' | 'orderNumber' | 'orderDate' | 'deliveryDate' | 'podDate' | 'processedOn' | 'brandOwner' | 'productCode' | 'productName' | 'price' | 'inputPrice' | 'platformFee' | 'logisticsFee' | 'qty' | 'lineTotal' | 'inputTotal' | 'platformTotal' | 'logisticsTotal'>
    )>> }
  ) }
);

export type SyncSageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SyncSageDataQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'syncSageData'>
);

export type GetTaxCodeByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaxCodeByIdQuery = (
  { __typename?: 'Query' }
  & { getTaxCodeById: (
    { __typename?: 'TaxCode' }
    & Pick<TaxCode, 'id' | 'name' | 'code' | 'rate' | 'calculationType'>
    & { status: (
      { __typename?: 'Status' }
      & Pick<Status, 'id' | 'value' | 'displayName'>
    ) }
  ) }
);

export type GetTaxCodesQueryVariables = Exact<{
  params?: Maybe<TaxCodesAdminParams>;
}>;


export type GetTaxCodesQuery = (
  { __typename?: 'Query' }
  & { getAdminTaxCodes: (
    { __typename?: 'TaxCodesResponse' }
    & Pick<TaxCodesResponse, 'totalCount'>
    & { taxCodes?: Maybe<Array<Maybe<(
      { __typename?: 'TaxCode' }
      & Pick<TaxCode, 'id' | 'name' | 'calculationType' | 'rate'>
      & { status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'value' | 'displayName'>
      ) }
    )>>> }
  ) }
);

export type GetUsersQueryVariables = Exact<{
  params: AdminUsersParams;
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getAdminUsers: (
    { __typename?: 'AdminUsersListResponse' }
    & Pick<AdminUsersListResponse, 'totalCount'>
    & { users: Array<Maybe<(
      { __typename?: 'DslUserListItem' }
      & DslUserListItemFieldsFragment
    )>> }
  ) }
);

export const AddressFieldsFragmentDoc = gql`
    fragment AddressFields on Address {
  id
  title
  firstName
  middleName
  lastName
  lineOne
  lineTwo
  lineThree
  city
  county
  postcode
  country
}
    `;
export const StatusFieldsFragmentDoc = gql`
    fragment StatusFields on Status {
  id
  value
  displayName
  description
  createdOn
  updatedOn
}
    `;
export const DslProductFeatureFieldsFragmentDoc = gql`
    fragment DslProductFeatureFields on DslProductFeature {
  id
  name
  description
  value
  values {
    id
    value
  }
  featured
  filterable
  position
  createdOn
  updatedOn
}
    `;
export const PriceFieldsFragmentDoc = gql`
    fragment PriceFields on Price {
  subtotal
  vat
  discount
  total
}
    `;
export const DslProductImageFieldsFragmentDoc = gql`
    fragment DslProductImageFields on DslProductImage {
  id
  productId
  type
  key
  fullSizePath
  thumbnailPath
  createdOn
  updatedOn
}
    `;
export const DslProductFieldsFragmentDoc = gql`
    fragment DslProductFields on DslProduct {
  id
  status {
    ...StatusFields
  }
  type
  name
  shortDescription
  longDescription
  code
  mrrp
  popularity
  searchWords
  seoTitle
  seoDescription
  seoKeywords
  seoSlug
  weight
  boxLength
  boxWidth
  boxHeight
  featured
  createdOn
  updatedOn
  volume
  hideLoggedOut
  flaggedPrice
  features {
    ...DslProductFeatureFields
  }
  options {
    id
    productId
    name
    description
    icon
    createdOn
    updatedOn
  }
  adminPricing {
    productId
    pricing {
      inputPrice
      starStockFee
      logisticsFee
      logisticsFeeId
      taxCodeId
      dateFrom
      dateTo
    }
  }
  price {
    ...PriceFields
  }
  taxCode {
    id
    name
  }
  mainImage {
    ...DslProductImageFields
  }
  categories {
    id
    name
  }
  associations {
    vendor {
      id
      name
    }
    distributor {
      id
      name
    }
  }
  additionalImages {
    ...DslProductImageFields
  }
  onWishlist
}
    ${StatusFieldsFragmentDoc}
${DslProductFeatureFieldsFragmentDoc}
${PriceFieldsFragmentDoc}
${DslProductImageFieldsFragmentDoc}`;
export const DslUserListItemFieldsFragmentDoc = gql`
    fragment DslUserListItemFields on DslUserListItem {
  brand {
    id
    displayName
  }
  id
  title
  firstName
  email
  middleName
  lastName
  phone
  marketing
  type
  status {
    ...StatusFields
  }
  outlet
  brand {
    id
    displayName
  }
  createdOn
  lastLogin
  lastOrdered
}
    ${StatusFieldsFragmentDoc}`;
export const DslUserFieldsFragmentDoc = gql`
    fragment DslUserFields on DslUser {
  id
  type
  title
  firstName
  middleName
  lastName
  phone
  email
  marketing
  brand {
    id
  }
  identities {
    id
    type
    value
  }
  status {
    id
    value
    displayName
    description
    createdOn
    updatedOn
  }
  outlets {
    id
    status {
      id
      value
      displayName
      description
      createdOn
      updatedOn
    }
    name
    style
    legalStatus
    companyName
    companyNumber
    charityNumber
    dropPointDescription
    createdOn
    updatedOn
    addressBook {
      id
      shippingId
      addresses {
        id
        postcode
      }
    }
    outletUsers {
      role
      user {
        id
        firstName
        lastName
      }
    }
    lastOrdered
    outletType
    features {
      cashWithOrder
    }
    deliveryDays {
      id
      fullDate
      day
      price
      isAvailable
      createdOn
      updatedOn
      type
      leadDays
    }
    userRole
    bdmUser {
      id
      firstName
      lastName
    }
    activeOnline
  }
  createdOn
  lastLogin
  lastOrdered
}
    `;
export const DslOrderListFieldsFragmentDoc = gql`
    fragment DslOrderListFields on DslOrder {
  id
  reference
  status {
    value
    displayName
    description
    createdOn
    updatedOn
  }
  userName
  telephone
  subtotal
  discount
  delivery
  total
  totalTax
  notes
  firstname
  lastname
  company
  email
  createdOn
  updatedOn
  orderBody {
    id
    orderId
    status {
      id
      displayName
      description
      createdOn
      updatedOn
    }
    distributorName
    subtotal
    discount
    delivery
    tax
    total
    cutoffDeliveryDate
    selectedDeliveryDate
    actualDeliveryDate
    updatedOn
    deliveredItems {
      id
      orderBodyId
      code
      name
      qtyOrdered
      qtyAccepted
      qtyDelivered
      rejectionCode
    }
  }
  outletName
}
    `;
export const DslOrderFieldsFragmentDoc = gql`
    fragment DslOrderFields on DslOrder {
  id
  reference
  userId
  outletId
  status {
    value
    displayName
    description
    createdOn
    updatedOn
  }
  userName
  telephone
  subtotal
  discount
  delivery
  total
  totalTax
  notes
  firstname
  lastname
  company
  email
  billingLine1
  billingLine2
  billingLine3
  billingCity
  billingCounty
  billingPostcode
  billingCountry
  shippingLine1
  shippingLine2
  shippingLine3
  shippingCity
  shippingCounty
  shippingPostcode
  shippingCountry
  createdOn
  updatedOn
  orderBody {
    id
    status {
      id
      displayName
      description
      createdOn
      updatedOn
    }
    distributorName
    subtotal
    discount
    delivery
    tax
    total
    cutoffDeliveryDate
    selectedDeliveryDate
    actualDeliveryDate
    deliveredItems {
      id
      orderBodyId
      code
      name
      qtyOrdered
      qtyAccepted
      qtyDelivered
      rejectionCode
    }
    updatedOn
    orderItems {
      id
      orderBodyId
      productId
      pricing {
        id
        type
        identifier
        value
        position
        isTax
      }
      name
      type
      code
      weight
      boxLength
      boxWidth
      boxHeight
      price
      qty
      total
      totalTax
      taxRate
      taxCalculationType
      createdOn
      updatedOn
      mainImage
      associations {
        vendor {
          id
          name
        }
        distributor {
          id
          name
        }
      }
      supplements {
        id
        orderItemId
        name
        description
        selected
      }
    }
  }
  payments {
    id
    orderId
    invoiceNumber
    status {
      value
    }
    paymentType
    reference
    method
    value
  }
  promotions {
    promotionId
    orderItemId
    effectType
    promotionName
    description
    originalValue
    valueChange
    taxChange
    newValue
    productId
    taxMultiplier
    qty
    taxDescription
    hiddenFromBrandOwner
  }
  outletName
}
    `;
export const AcceptTermsConditionsDocument = gql`
    mutation AcceptTermsConditions($id: Int!) {
  acceptTermsConditions(id: $id)
}
    `;
export type AcceptTermsConditionsMutationFn = ApolloReactCommon.MutationFunction<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables>;
export type AcceptTermsConditionsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables>, 'mutation'>;

    export const AcceptTermsConditionsComponent = (props: AcceptTermsConditionsComponentProps) => (
      <ApolloReactComponents.Mutation<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables> mutation={AcceptTermsConditionsDocument} {...props} />
    );
    
export type AcceptTermsConditionsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables>
    } & TChildProps;
export function withAcceptTermsConditions<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AcceptTermsConditionsMutation,
  AcceptTermsConditionsMutationVariables,
  AcceptTermsConditionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables, AcceptTermsConditionsProps<TChildProps, TDataName>>(AcceptTermsConditionsDocument, {
      alias: 'acceptTermsConditions',
      ...operationOptions
    });
};

/**
 * __useAcceptTermsConditionsMutation__
 *
 * To run a mutation, you first call `useAcceptTermsConditionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptTermsConditionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptTermsConditionsMutation, { data, loading, error }] = useAcceptTermsConditionsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptTermsConditionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables>) {
        return ApolloReactHooks.useMutation<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables>(AcceptTermsConditionsDocument, baseOptions);
      }
export type AcceptTermsConditionsMutationHookResult = ReturnType<typeof useAcceptTermsConditionsMutation>;
export type AcceptTermsConditionsMutationResult = ApolloReactCommon.MutationResult<AcceptTermsConditionsMutation>;
export type AcceptTermsConditionsMutationOptions = ApolloReactCommon.BaseMutationOptions<AcceptTermsConditionsMutation, AcceptTermsConditionsMutationVariables>;
export const ActivateOutletDocument = gql`
    mutation ActivateOutlet($input: ActivateOutletInput!) {
  activateOutlet(input: $input) {
    outlet {
      id
    }
  }
}
    `;
export type ActivateOutletMutationFn = ApolloReactCommon.MutationFunction<ActivateOutletMutation, ActivateOutletMutationVariables>;
export type ActivateOutletComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ActivateOutletMutation, ActivateOutletMutationVariables>, 'mutation'>;

    export const ActivateOutletComponent = (props: ActivateOutletComponentProps) => (
      <ApolloReactComponents.Mutation<ActivateOutletMutation, ActivateOutletMutationVariables> mutation={ActivateOutletDocument} {...props} />
    );
    
export type ActivateOutletProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ActivateOutletMutation, ActivateOutletMutationVariables>
    } & TChildProps;
export function withActivateOutlet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ActivateOutletMutation,
  ActivateOutletMutationVariables,
  ActivateOutletProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ActivateOutletMutation, ActivateOutletMutationVariables, ActivateOutletProps<TChildProps, TDataName>>(ActivateOutletDocument, {
      alias: 'activateOutlet',
      ...operationOptions
    });
};

/**
 * __useActivateOutletMutation__
 *
 * To run a mutation, you first call `useActivateOutletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateOutletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateOutletMutation, { data, loading, error }] = useActivateOutletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActivateOutletMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ActivateOutletMutation, ActivateOutletMutationVariables>) {
        return ApolloReactHooks.useMutation<ActivateOutletMutation, ActivateOutletMutationVariables>(ActivateOutletDocument, baseOptions);
      }
export type ActivateOutletMutationHookResult = ReturnType<typeof useActivateOutletMutation>;
export type ActivateOutletMutationResult = ApolloReactCommon.MutationResult<ActivateOutletMutation>;
export type ActivateOutletMutationOptions = ApolloReactCommon.BaseMutationOptions<ActivateOutletMutation, ActivateOutletMutationVariables>;
export const BulkDeleteDocument = gql`
    mutation BulkDelete($input: BulkActionInput) {
  bulkActionDelete(input: $input) {
    error {
      id
    }
  }
}
    `;
export type BulkDeleteMutationFn = ApolloReactCommon.MutationFunction<BulkDeleteMutation, BulkDeleteMutationVariables>;
export type BulkDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<BulkDeleteMutation, BulkDeleteMutationVariables>, 'mutation'>;

    export const BulkDeleteComponent = (props: BulkDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<BulkDeleteMutation, BulkDeleteMutationVariables> mutation={BulkDeleteDocument} {...props} />
    );
    
export type BulkDeleteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<BulkDeleteMutation, BulkDeleteMutationVariables>
    } & TChildProps;
export function withBulkDelete<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BulkDeleteMutation,
  BulkDeleteMutationVariables,
  BulkDeleteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, BulkDeleteMutation, BulkDeleteMutationVariables, BulkDeleteProps<TChildProps, TDataName>>(BulkDeleteDocument, {
      alias: 'bulkDelete',
      ...operationOptions
    });
};

/**
 * __useBulkDeleteMutation__
 *
 * To run a mutation, you first call `useBulkDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkDeleteMutation, { data, loading, error }] = useBulkDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BulkDeleteMutation, BulkDeleteMutationVariables>) {
        return ApolloReactHooks.useMutation<BulkDeleteMutation, BulkDeleteMutationVariables>(BulkDeleteDocument, baseOptions);
      }
export type BulkDeleteMutationHookResult = ReturnType<typeof useBulkDeleteMutation>;
export type BulkDeleteMutationResult = ApolloReactCommon.MutationResult<BulkDeleteMutation>;
export type BulkDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<BulkDeleteMutation, BulkDeleteMutationVariables>;
export const CreateAdministratorDocument = gql`
    mutation CreateAdministrator($i: InsertUserInput!) {
  insertAdminUser(input: $i) {
    id
  }
}
    `;
export type CreateAdministratorMutationFn = ApolloReactCommon.MutationFunction<CreateAdministratorMutation, CreateAdministratorMutationVariables>;
export type CreateAdministratorComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAdministratorMutation, CreateAdministratorMutationVariables>, 'mutation'>;

    export const CreateAdministratorComponent = (props: CreateAdministratorComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAdministratorMutation, CreateAdministratorMutationVariables> mutation={CreateAdministratorDocument} {...props} />
    );
    
export type CreateAdministratorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateAdministratorMutation, CreateAdministratorMutationVariables>
    } & TChildProps;
export function withCreateAdministrator<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAdministratorMutation,
  CreateAdministratorMutationVariables,
  CreateAdministratorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAdministratorMutation, CreateAdministratorMutationVariables, CreateAdministratorProps<TChildProps, TDataName>>(CreateAdministratorDocument, {
      alias: 'createAdministrator',
      ...operationOptions
    });
};

/**
 * __useCreateAdministratorMutation__
 *
 * To run a mutation, you first call `useCreateAdministratorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdministratorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdministratorMutation, { data, loading, error }] = useCreateAdministratorMutation({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useCreateAdministratorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAdministratorMutation, CreateAdministratorMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAdministratorMutation, CreateAdministratorMutationVariables>(CreateAdministratorDocument, baseOptions);
      }
export type CreateAdministratorMutationHookResult = ReturnType<typeof useCreateAdministratorMutation>;
export type CreateAdministratorMutationResult = ApolloReactCommon.MutationResult<CreateAdministratorMutation>;
export type CreateAdministratorMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAdministratorMutation, CreateAdministratorMutationVariables>;
export const UpsertBrandOwnerDocument = gql`
    mutation UpsertBrandOwner($input: UpsertBrandOwnerInput!) {
  upsertBrandOwner(input: $input) {
    id
  }
}
    `;
export type UpsertBrandOwnerMutationFn = ApolloReactCommon.MutationFunction<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables>;
export type UpsertBrandOwnerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables>, 'mutation'>;

    export const UpsertBrandOwnerComponent = (props: UpsertBrandOwnerComponentProps) => (
      <ApolloReactComponents.Mutation<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables> mutation={UpsertBrandOwnerDocument} {...props} />
    );
    
export type UpsertBrandOwnerProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables>
    } & TChildProps;
export function withUpsertBrandOwner<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpsertBrandOwnerMutation,
  UpsertBrandOwnerMutationVariables,
  UpsertBrandOwnerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables, UpsertBrandOwnerProps<TChildProps, TDataName>>(UpsertBrandOwnerDocument, {
      alias: 'upsertBrandOwner',
      ...operationOptions
    });
};

/**
 * __useUpsertBrandOwnerMutation__
 *
 * To run a mutation, you first call `useUpsertBrandOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertBrandOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertBrandOwnerMutation, { data, loading, error }] = useUpsertBrandOwnerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertBrandOwnerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables>(UpsertBrandOwnerDocument, baseOptions);
      }
export type UpsertBrandOwnerMutationHookResult = ReturnType<typeof useUpsertBrandOwnerMutation>;
export type UpsertBrandOwnerMutationResult = ApolloReactCommon.MutationResult<UpsertBrandOwnerMutation>;
export type UpsertBrandOwnerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpsertBrandOwnerMutation, UpsertBrandOwnerMutationVariables>;
export const CreateCreditDocument = gql`
    mutation CreateCredit($input: CreditNoteInput!) {
  createCreditNote(input: $input) {
    success
    note {
      id
      orderId
      subtotal
      discount
      tax
      total
      createdBy {
        id
        email
      }
      createdOn
      updatedOn
      items {
        id
        brandOwnerId
        orderItemId
        subtotal
        tax
        total
        taxRate
        taxCalculationType
        reasons
      }
    }
  }
}
    `;
export type CreateCreditMutationFn = ApolloReactCommon.MutationFunction<CreateCreditMutation, CreateCreditMutationVariables>;
export type CreateCreditComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCreditMutation, CreateCreditMutationVariables>, 'mutation'>;

    export const CreateCreditComponent = (props: CreateCreditComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCreditMutation, CreateCreditMutationVariables> mutation={CreateCreditDocument} {...props} />
    );
    
export type CreateCreditProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateCreditMutation, CreateCreditMutationVariables>
    } & TChildProps;
export function withCreateCredit<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCreditMutation,
  CreateCreditMutationVariables,
  CreateCreditProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCreditMutation, CreateCreditMutationVariables, CreateCreditProps<TChildProps, TDataName>>(CreateCreditDocument, {
      alias: 'createCredit',
      ...operationOptions
    });
};

/**
 * __useCreateCreditMutation__
 *
 * To run a mutation, you first call `useCreateCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCreditMutation, { data, loading, error }] = useCreateCreditMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCreditMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCreditMutation, CreateCreditMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCreditMutation, CreateCreditMutationVariables>(CreateCreditDocument, baseOptions);
      }
export type CreateCreditMutationHookResult = ReturnType<typeof useCreateCreditMutation>;
export type CreateCreditMutationResult = ApolloReactCommon.MutationResult<CreateCreditMutation>;
export type CreateCreditMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCreditMutation, CreateCreditMutationVariables>;
export const CreateDocumentDocument = gql`
    mutation createDocument($input: InsertSupportDocumentInput) {
  insertAdminSupportDocument(input: $input) {
    id
  }
}
    `;
export type CreateDocumentMutationFn = ApolloReactCommon.MutationFunction<CreateDocumentMutation, CreateDocumentMutationVariables>;
export type CreateDocumentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDocumentMutation, CreateDocumentMutationVariables>, 'mutation'>;

    export const CreateDocumentComponent = (props: CreateDocumentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateDocumentMutation, CreateDocumentMutationVariables> mutation={CreateDocumentDocument} {...props} />
    );
    
export type CreateDocumentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateDocumentMutation, CreateDocumentMutationVariables>
    } & TChildProps;
export function withCreateDocument<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateDocumentMutation,
  CreateDocumentMutationVariables,
  CreateDocumentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateDocumentMutation, CreateDocumentMutationVariables, CreateDocumentProps<TChildProps, TDataName>>(CreateDocumentDocument, {
      alias: 'createDocument',
      ...operationOptions
    });
};

/**
 * __useCreateDocumentMutation__
 *
 * To run a mutation, you first call `useCreateDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocumentMutation, { data, loading, error }] = useCreateDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDocumentMutation, CreateDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDocumentMutation, CreateDocumentMutationVariables>(CreateDocumentDocument, baseOptions);
      }
export type CreateDocumentMutationHookResult = ReturnType<typeof useCreateDocumentMutation>;
export type CreateDocumentMutationResult = ApolloReactCommon.MutationResult<CreateDocumentMutation>;
export type CreateDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDocumentMutation, CreateDocumentMutationVariables>;
export const CreateLogisticsFeeDocument = gql`
    mutation CreateLogisticsFee($input: InsertLogisticsFeeInput!) {
  insertAdminLogisticsFee(input: $input) {
    fee {
      id
    }
  }
}
    `;
export type CreateLogisticsFeeMutationFn = ApolloReactCommon.MutationFunction<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables>;
export type CreateLogisticsFeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables>, 'mutation'>;

    export const CreateLogisticsFeeComponent = (props: CreateLogisticsFeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables> mutation={CreateLogisticsFeeDocument} {...props} />
    );
    
export type CreateLogisticsFeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables>
    } & TChildProps;
export function withCreateLogisticsFee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateLogisticsFeeMutation,
  CreateLogisticsFeeMutationVariables,
  CreateLogisticsFeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables, CreateLogisticsFeeProps<TChildProps, TDataName>>(CreateLogisticsFeeDocument, {
      alias: 'createLogisticsFee',
      ...operationOptions
    });
};

/**
 * __useCreateLogisticsFeeMutation__
 *
 * To run a mutation, you first call `useCreateLogisticsFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogisticsFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogisticsFeeMutation, { data, loading, error }] = useCreateLogisticsFeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLogisticsFeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables>(CreateLogisticsFeeDocument, baseOptions);
      }
export type CreateLogisticsFeeMutationHookResult = ReturnType<typeof useCreateLogisticsFeeMutation>;
export type CreateLogisticsFeeMutationResult = ApolloReactCommon.MutationResult<CreateLogisticsFeeMutation>;
export type CreateLogisticsFeeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLogisticsFeeMutation, CreateLogisticsFeeMutationVariables>;
export const CreateOutletDocument = gql`
    mutation CreateOutlet($input: InsertOutletInput!) {
  insertAdminOutlet(input: $input) {
    outlet {
      id
      name
    }
  }
}
    `;
export type CreateOutletMutationFn = ApolloReactCommon.MutationFunction<CreateOutletMutation, CreateOutletMutationVariables>;
export type CreateOutletComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOutletMutation, CreateOutletMutationVariables>, 'mutation'>;

    export const CreateOutletComponent = (props: CreateOutletComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOutletMutation, CreateOutletMutationVariables> mutation={CreateOutletDocument} {...props} />
    );
    
export type CreateOutletProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateOutletMutation, CreateOutletMutationVariables>
    } & TChildProps;
export function withCreateOutlet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOutletMutation,
  CreateOutletMutationVariables,
  CreateOutletProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOutletMutation, CreateOutletMutationVariables, CreateOutletProps<TChildProps, TDataName>>(CreateOutletDocument, {
      alias: 'createOutlet',
      ...operationOptions
    });
};

/**
 * __useCreateOutletMutation__
 *
 * To run a mutation, you first call `useCreateOutletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOutletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOutletMutation, { data, loading, error }] = useCreateOutletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOutletMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOutletMutation, CreateOutletMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOutletMutation, CreateOutletMutationVariables>(CreateOutletDocument, baseOptions);
      }
export type CreateOutletMutationHookResult = ReturnType<typeof useCreateOutletMutation>;
export type CreateOutletMutationResult = ApolloReactCommon.MutationResult<CreateOutletMutation>;
export type CreateOutletMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOutletMutation, CreateOutletMutationVariables>;
export const CreateProductFeatureDocument = gql`
    mutation CreateProductFeature($input: InsertProductFeatureInput) {
  insertProductFeature(input: $input) {
    id
  }
}
    `;
export type CreateProductFeatureMutationFn = ApolloReactCommon.MutationFunction<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>;
export type CreateProductFeatureComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>, 'mutation'>;

    export const CreateProductFeatureComponent = (props: CreateProductFeatureComponentProps) => (
      <ApolloReactComponents.Mutation<CreateProductFeatureMutation, CreateProductFeatureMutationVariables> mutation={CreateProductFeatureDocument} {...props} />
    );
    
export type CreateProductFeatureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>
    } & TChildProps;
export function withCreateProductFeature<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductFeatureMutation,
  CreateProductFeatureMutationVariables,
  CreateProductFeatureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductFeatureMutation, CreateProductFeatureMutationVariables, CreateProductFeatureProps<TChildProps, TDataName>>(CreateProductFeatureDocument, {
      alias: 'createProductFeature',
      ...operationOptions
    });
};

/**
 * __useCreateProductFeatureMutation__
 *
 * To run a mutation, you first call `useCreateProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductFeatureMutation, { data, loading, error }] = useCreateProductFeatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductFeatureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>(CreateProductFeatureDocument, baseOptions);
      }
export type CreateProductFeatureMutationHookResult = ReturnType<typeof useCreateProductFeatureMutation>;
export type CreateProductFeatureMutationResult = ApolloReactCommon.MutationResult<CreateProductFeatureMutation>;
export type CreateProductFeatureMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: InsertProductInput!) {
  insertProduct(input: $input) {
    product {
      id
    }
  }
}
    `;
export type CreateProductMutationFn = ApolloReactCommon.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;
export type CreateProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProductMutation, CreateProductMutationVariables>, 'mutation'>;

    export const CreateProductComponent = (props: CreateProductComponentProps) => (
      <ApolloReactComponents.Mutation<CreateProductMutation, CreateProductMutationVariables> mutation={CreateProductDocument} {...props} />
    );
    
export type CreateProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateProductMutation, CreateProductMutationVariables>
    } & TChildProps;
export function withCreateProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductMutation,
  CreateProductMutationVariables,
  CreateProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductMutation, CreateProductMutationVariables, CreateProductProps<TChildProps, TDataName>>(CreateProductDocument, {
      alias: 'createProduct',
      ...operationOptions
    });
};

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = ApolloReactCommon.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateTaxCodeDocument = gql`
    mutation CreateTaxCode($input: TaxCodeInput!) {
  insertTaxCode(input: $input) {
    id
  }
}
    `;
export type CreateTaxCodeMutationFn = ApolloReactCommon.MutationFunction<CreateTaxCodeMutation, CreateTaxCodeMutationVariables>;
export type CreateTaxCodeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTaxCodeMutation, CreateTaxCodeMutationVariables>, 'mutation'>;

    export const CreateTaxCodeComponent = (props: CreateTaxCodeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTaxCodeMutation, CreateTaxCodeMutationVariables> mutation={CreateTaxCodeDocument} {...props} />
    );
    
export type CreateTaxCodeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateTaxCodeMutation, CreateTaxCodeMutationVariables>
    } & TChildProps;
export function withCreateTaxCode<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTaxCodeMutation,
  CreateTaxCodeMutationVariables,
  CreateTaxCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTaxCodeMutation, CreateTaxCodeMutationVariables, CreateTaxCodeProps<TChildProps, TDataName>>(CreateTaxCodeDocument, {
      alias: 'createTaxCode',
      ...operationOptions
    });
};

/**
 * __useCreateTaxCodeMutation__
 *
 * To run a mutation, you first call `useCreateTaxCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaxCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaxCodeMutation, { data, loading, error }] = useCreateTaxCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaxCodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaxCodeMutation, CreateTaxCodeMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTaxCodeMutation, CreateTaxCodeMutationVariables>(CreateTaxCodeDocument, baseOptions);
      }
export type CreateTaxCodeMutationHookResult = ReturnType<typeof useCreateTaxCodeMutation>;
export type CreateTaxCodeMutationResult = ApolloReactCommon.MutationResult<CreateTaxCodeMutation>;
export type CreateTaxCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaxCodeMutation, CreateTaxCodeMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: InsertUserInput!) {
  insertAdminUser(input: $input) {
    ...DslUserFields
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteAdDocument = gql`
    mutation DeleteAd($id: Int!) {
  deleteAd(id: $id)
}
    `;
export type DeleteAdMutationFn = ApolloReactCommon.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;
export type DeleteAdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAdMutation, DeleteAdMutationVariables>, 'mutation'>;

    export const DeleteAdComponent = (props: DeleteAdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAdMutation, DeleteAdMutationVariables> mutation={DeleteAdDocument} {...props} />
    );
    
export type DeleteAdProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>
    } & TChildProps;
export function withDeleteAd<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAdMutation,
  DeleteAdMutationVariables,
  DeleteAdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAdMutation, DeleteAdMutationVariables, DeleteAdProps<TChildProps, TDataName>>(DeleteAdDocument, {
      alias: 'deleteAd',
      ...operationOptions
    });
};

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, baseOptions);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = ApolloReactCommon.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const DeleteLogisticsFeeByIdDocument = gql`
    mutation DeleteLogisticsFeeById($id: Int!) {
  deleteAdminLogisticsFeeByID(logisticsFeeId: $id)
}
    `;
export type DeleteLogisticsFeeByIdMutationFn = ApolloReactCommon.MutationFunction<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables>;
export type DeleteLogisticsFeeByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables>, 'mutation'>;

    export const DeleteLogisticsFeeByIdComponent = (props: DeleteLogisticsFeeByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables> mutation={DeleteLogisticsFeeByIdDocument} {...props} />
    );
    
export type DeleteLogisticsFeeByIdProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables>
    } & TChildProps;
export function withDeleteLogisticsFeeById<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteLogisticsFeeByIdMutation,
  DeleteLogisticsFeeByIdMutationVariables,
  DeleteLogisticsFeeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables, DeleteLogisticsFeeByIdProps<TChildProps, TDataName>>(DeleteLogisticsFeeByIdDocument, {
      alias: 'deleteLogisticsFeeById',
      ...operationOptions
    });
};

/**
 * __useDeleteLogisticsFeeByIdMutation__
 *
 * To run a mutation, you first call `useDeleteLogisticsFeeByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLogisticsFeeByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLogisticsFeeByIdMutation, { data, loading, error }] = useDeleteLogisticsFeeByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLogisticsFeeByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables>(DeleteLogisticsFeeByIdDocument, baseOptions);
      }
export type DeleteLogisticsFeeByIdMutationHookResult = ReturnType<typeof useDeleteLogisticsFeeByIdMutation>;
export type DeleteLogisticsFeeByIdMutationResult = ApolloReactCommon.MutationResult<DeleteLogisticsFeeByIdMutation>;
export type DeleteLogisticsFeeByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteLogisticsFeeByIdMutation, DeleteLogisticsFeeByIdMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  deleteProductByID(id: $id)
}
    `;
export type DeleteProductMutationFn = ApolloReactCommon.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;
export type DeleteProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteProductMutation, DeleteProductMutationVariables>, 'mutation'>;

    export const DeleteProductComponent = (props: DeleteProductComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteProductMutation, DeleteProductMutationVariables> mutation={DeleteProductDocument} {...props} />
    );
    
export type DeleteProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>
    } & TChildProps;
export function withDeleteProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductMutation,
  DeleteProductMutationVariables,
  DeleteProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductMutation, DeleteProductMutationVariables, DeleteProductProps<TChildProps, TDataName>>(DeleteProductDocument, {
      alias: 'deleteProduct',
      ...operationOptions
    });
};

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = ApolloReactCommon.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DeletePromotionDocument = gql`
    mutation DeletePromotion($id: Int!) {
  deletePromotion(input: {promotionID: $id})
}
    `;
export type DeletePromotionMutationFn = ApolloReactCommon.MutationFunction<DeletePromotionMutation, DeletePromotionMutationVariables>;
export type DeletePromotionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeletePromotionMutation, DeletePromotionMutationVariables>, 'mutation'>;

    export const DeletePromotionComponent = (props: DeletePromotionComponentProps) => (
      <ApolloReactComponents.Mutation<DeletePromotionMutation, DeletePromotionMutationVariables> mutation={DeletePromotionDocument} {...props} />
    );
    
export type DeletePromotionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeletePromotionMutation, DeletePromotionMutationVariables>
    } & TChildProps;
export function withDeletePromotion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePromotionMutation,
  DeletePromotionMutationVariables,
  DeletePromotionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePromotionMutation, DeletePromotionMutationVariables, DeletePromotionProps<TChildProps, TDataName>>(DeletePromotionDocument, {
      alias: 'deletePromotion',
      ...operationOptions
    });
};

/**
 * __useDeletePromotionMutation__
 *
 * To run a mutation, you first call `useDeletePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePromotionMutation, { data, loading, error }] = useDeletePromotionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePromotionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePromotionMutation, DeletePromotionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePromotionMutation, DeletePromotionMutationVariables>(DeletePromotionDocument, baseOptions);
      }
export type DeletePromotionMutationHookResult = ReturnType<typeof useDeletePromotionMutation>;
export type DeletePromotionMutationResult = ApolloReactCommon.MutationResult<DeletePromotionMutation>;
export type DeletePromotionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePromotionMutation, DeletePromotionMutationVariables>;
export const DeleteTaxCodeByIdDocument = gql`
    mutation DeleteTaxCodeById($id: Int!) {
  deleteTaxCodeById(id: $id)
}
    `;
export type DeleteTaxCodeByIdMutationFn = ApolloReactCommon.MutationFunction<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables>;
export type DeleteTaxCodeByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables>, 'mutation'>;

    export const DeleteTaxCodeByIdComponent = (props: DeleteTaxCodeByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables> mutation={DeleteTaxCodeByIdDocument} {...props} />
    );
    
export type DeleteTaxCodeByIdProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables>
    } & TChildProps;
export function withDeleteTaxCodeById<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaxCodeByIdMutation,
  DeleteTaxCodeByIdMutationVariables,
  DeleteTaxCodeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables, DeleteTaxCodeByIdProps<TChildProps, TDataName>>(DeleteTaxCodeByIdDocument, {
      alias: 'deleteTaxCodeById',
      ...operationOptions
    });
};

/**
 * __useDeleteTaxCodeByIdMutation__
 *
 * To run a mutation, you first call `useDeleteTaxCodeByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaxCodeByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaxCodeByIdMutation, { data, loading, error }] = useDeleteTaxCodeByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaxCodeByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables>(DeleteTaxCodeByIdDocument, baseOptions);
      }
export type DeleteTaxCodeByIdMutationHookResult = ReturnType<typeof useDeleteTaxCodeByIdMutation>;
export type DeleteTaxCodeByIdMutationResult = ApolloReactCommon.MutationResult<DeleteTaxCodeByIdMutation>;
export type DeleteTaxCodeByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTaxCodeByIdMutation, DeleteTaxCodeByIdMutationVariables>;
export const InsertProductFeatureDocument = gql`
    mutation InsertProductFeature($input: InsertProductFeatureInput) {
  insertProductFeature(input: $input) {
    id
  }
}
    `;
export type InsertProductFeatureMutationFn = ApolloReactCommon.MutationFunction<InsertProductFeatureMutation, InsertProductFeatureMutationVariables>;
export type InsertProductFeatureComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertProductFeatureMutation, InsertProductFeatureMutationVariables>, 'mutation'>;

    export const InsertProductFeatureComponent = (props: InsertProductFeatureComponentProps) => (
      <ApolloReactComponents.Mutation<InsertProductFeatureMutation, InsertProductFeatureMutationVariables> mutation={InsertProductFeatureDocument} {...props} />
    );
    
export type InsertProductFeatureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<InsertProductFeatureMutation, InsertProductFeatureMutationVariables>
    } & TChildProps;
export function withInsertProductFeature<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertProductFeatureMutation,
  InsertProductFeatureMutationVariables,
  InsertProductFeatureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, InsertProductFeatureMutation, InsertProductFeatureMutationVariables, InsertProductFeatureProps<TChildProps, TDataName>>(InsertProductFeatureDocument, {
      alias: 'insertProductFeature',
      ...operationOptions
    });
};

/**
 * __useInsertProductFeatureMutation__
 *
 * To run a mutation, you first call `useInsertProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductFeatureMutation, { data, loading, error }] = useInsertProductFeatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertProductFeatureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertProductFeatureMutation, InsertProductFeatureMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertProductFeatureMutation, InsertProductFeatureMutationVariables>(InsertProductFeatureDocument, baseOptions);
      }
export type InsertProductFeatureMutationHookResult = ReturnType<typeof useInsertProductFeatureMutation>;
export type InsertProductFeatureMutationResult = ApolloReactCommon.MutationResult<InsertProductFeatureMutation>;
export type InsertProductFeatureMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertProductFeatureMutation, InsertProductFeatureMutationVariables>;
export const InsertTermsConditionsDocument = gql`
    mutation InsertTermsConditions($input: InsertTermsConditions!) {
  insertTermsConditions(input: $input) {
    id
  }
}
    `;
export type InsertTermsConditionsMutationFn = ApolloReactCommon.MutationFunction<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables>;
export type InsertTermsConditionsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables>, 'mutation'>;

    export const InsertTermsConditionsComponent = (props: InsertTermsConditionsComponentProps) => (
      <ApolloReactComponents.Mutation<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables> mutation={InsertTermsConditionsDocument} {...props} />
    );
    
export type InsertTermsConditionsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables>
    } & TChildProps;
export function withInsertTermsConditions<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertTermsConditionsMutation,
  InsertTermsConditionsMutationVariables,
  InsertTermsConditionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables, InsertTermsConditionsProps<TChildProps, TDataName>>(InsertTermsConditionsDocument, {
      alias: 'insertTermsConditions',
      ...operationOptions
    });
};

/**
 * __useInsertTermsConditionsMutation__
 *
 * To run a mutation, you first call `useInsertTermsConditionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTermsConditionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTermsConditionsMutation, { data, loading, error }] = useInsertTermsConditionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertTermsConditionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables>(InsertTermsConditionsDocument, baseOptions);
      }
export type InsertTermsConditionsMutationHookResult = ReturnType<typeof useInsertTermsConditionsMutation>;
export type InsertTermsConditionsMutationResult = ApolloReactCommon.MutationResult<InsertTermsConditionsMutation>;
export type InsertTermsConditionsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTermsConditionsMutation, InsertTermsConditionsMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!, $context: String!) {
  dslLogin(
    authRequest: {username: $email, password: $password, context: $context}
  ) {
    result
    user {
      id
      title
      firstName
      lastName
      phone
      email
      type
      brand {
        id
        displayName
        adminLogo
        termsConditions {
          id
          content
          accepted
        }
      }
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      context: // value for 'context'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>
    } & TChildProps;
export function withLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps, TDataName>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateOutletDeliveryDayDocument = gql`
    mutation UpdateOutletDeliveryDay($input: UpdateOutletDeliveryDaysInput!) {
  updateOutletDeliveryDays(input: $input) {
    deliveryDays {
      id
      fullDate
      day
      price
      isAvailable
      createdOn
      updatedOn
      type
      leadDays
    }
  }
}
    `;
export type UpdateOutletDeliveryDayMutationFn = ApolloReactCommon.MutationFunction<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables>;
export type UpdateOutletDeliveryDayComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables>, 'mutation'>;

    export const UpdateOutletDeliveryDayComponent = (props: UpdateOutletDeliveryDayComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables> mutation={UpdateOutletDeliveryDayDocument} {...props} />
    );
    
export type UpdateOutletDeliveryDayProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables>
    } & TChildProps;
export function withUpdateOutletDeliveryDay<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateOutletDeliveryDayMutation,
  UpdateOutletDeliveryDayMutationVariables,
  UpdateOutletDeliveryDayProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables, UpdateOutletDeliveryDayProps<TChildProps, TDataName>>(UpdateOutletDeliveryDayDocument, {
      alias: 'updateOutletDeliveryDay',
      ...operationOptions
    });
};

/**
 * __useUpdateOutletDeliveryDayMutation__
 *
 * To run a mutation, you first call `useUpdateOutletDeliveryDayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOutletDeliveryDayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOutletDeliveryDayMutation, { data, loading, error }] = useUpdateOutletDeliveryDayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOutletDeliveryDayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables>(UpdateOutletDeliveryDayDocument, baseOptions);
      }
export type UpdateOutletDeliveryDayMutationHookResult = ReturnType<typeof useUpdateOutletDeliveryDayMutation>;
export type UpdateOutletDeliveryDayMutationResult = ApolloReactCommon.MutationResult<UpdateOutletDeliveryDayMutation>;
export type UpdateOutletDeliveryDayMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOutletDeliveryDayMutation, UpdateOutletDeliveryDayMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh {
  dslRefresh
}
    `;
export type RefreshMutationFn = ApolloReactCommon.MutationFunction<RefreshMutation, RefreshMutationVariables>;
export type RefreshComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RefreshMutation, RefreshMutationVariables>, 'mutation'>;

    export const RefreshComponent = (props: RefreshComponentProps) => (
      <ApolloReactComponents.Mutation<RefreshMutation, RefreshMutationVariables> mutation={RefreshDocument} {...props} />
    );
    
export type RefreshProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RefreshMutation, RefreshMutationVariables>
    } & TChildProps;
export function withRefresh<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RefreshMutation,
  RefreshMutationVariables,
  RefreshProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RefreshMutation, RefreshMutationVariables, RefreshProps<TChildProps, TDataName>>(RefreshDocument, {
      alias: 'refresh',
      ...operationOptions
    });
};

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        return ApolloReactHooks.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, baseOptions);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = ApolloReactCommon.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = ApolloReactCommon.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const UpdateAdDocument = gql`
    mutation UpdateAd($input: AdInput!) {
  updateAd(input: $input) {
    ad {
      id
      status {
        value
      }
      type
      image {
        id
        type
        url
        mobileUrl
      }
      targetUrl
      identifier
      grouping
      position
      viewCount
      clickCount
      createdOn
      updatedOn
    }
  }
}
    `;
export type UpdateAdMutationFn = ApolloReactCommon.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>;
export type UpdateAdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAdMutation, UpdateAdMutationVariables>, 'mutation'>;

    export const UpdateAdComponent = (props: UpdateAdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAdMutation, UpdateAdMutationVariables> mutation={UpdateAdDocument} {...props} />
    );
    
export type UpdateAdProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>
    } & TChildProps;
export function withUpdateAd<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAdMutation,
  UpdateAdMutationVariables,
  UpdateAdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAdMutation, UpdateAdMutationVariables, UpdateAdProps<TChildProps, TDataName>>(UpdateAdDocument, {
      alias: 'updateAd',
      ...operationOptions
    });
};

/**
 * __useUpdateAdMutation__
 *
 * To run a mutation, you first call `useUpdateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdMutation, { data, loading, error }] = useUpdateAdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdMutation, UpdateAdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAdMutation, UpdateAdMutationVariables>(UpdateAdDocument, baseOptions);
      }
export type UpdateAdMutationHookResult = ReturnType<typeof useUpdateAdMutation>;
export type UpdateAdMutationResult = ApolloReactCommon.MutationResult<UpdateAdMutation>;
export type UpdateAdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAdMutation, UpdateAdMutationVariables>;
export const UpdateAdminUpsellProductsDocument = gql`
    mutation UpdateAdminUpsellProducts($input: UpdateUpsellProductsInput!) {
  updateAdminUpsellProducts(input: $input) {
    id
  }
}
    `;
export type UpdateAdminUpsellProductsMutationFn = ApolloReactCommon.MutationFunction<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables>;
export type UpdateAdminUpsellProductsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables>, 'mutation'>;

    export const UpdateAdminUpsellProductsComponent = (props: UpdateAdminUpsellProductsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables> mutation={UpdateAdminUpsellProductsDocument} {...props} />
    );
    
export type UpdateAdminUpsellProductsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables>
    } & TChildProps;
export function withUpdateAdminUpsellProducts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAdminUpsellProductsMutation,
  UpdateAdminUpsellProductsMutationVariables,
  UpdateAdminUpsellProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables, UpdateAdminUpsellProductsProps<TChildProps, TDataName>>(UpdateAdminUpsellProductsDocument, {
      alias: 'updateAdminUpsellProducts',
      ...operationOptions
    });
};

/**
 * __useUpdateAdminUpsellProductsMutation__
 *
 * To run a mutation, you first call `useUpdateAdminUpsellProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminUpsellProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminUpsellProductsMutation, { data, loading, error }] = useUpdateAdminUpsellProductsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdminUpsellProductsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables>(UpdateAdminUpsellProductsDocument, baseOptions);
      }
export type UpdateAdminUpsellProductsMutationHookResult = ReturnType<typeof useUpdateAdminUpsellProductsMutation>;
export type UpdateAdminUpsellProductsMutationResult = ApolloReactCommon.MutationResult<UpdateAdminUpsellProductsMutation>;
export type UpdateAdminUpsellProductsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAdminUpsellProductsMutation, UpdateAdminUpsellProductsMutationVariables>;
export const UpdateAdminUserDocument = gql`
    mutation UpdateAdminUser($input: UpdateUserInput!) {
  updateAdminUser(input: $input) {
    ...DslUserFields
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type UpdateAdminUserMutationFn = ApolloReactCommon.MutationFunction<UpdateAdminUserMutation, UpdateAdminUserMutationVariables>;
export type UpdateAdminUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAdminUserMutation, UpdateAdminUserMutationVariables>, 'mutation'>;

    export const UpdateAdminUserComponent = (props: UpdateAdminUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAdminUserMutation, UpdateAdminUserMutationVariables> mutation={UpdateAdminUserDocument} {...props} />
    );
    
export type UpdateAdminUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAdminUserMutation, UpdateAdminUserMutationVariables>
    } & TChildProps;
export function withUpdateAdminUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAdminUserMutation,
  UpdateAdminUserMutationVariables,
  UpdateAdminUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAdminUserMutation, UpdateAdminUserMutationVariables, UpdateAdminUserProps<TChildProps, TDataName>>(UpdateAdminUserDocument, {
      alias: 'updateAdminUser',
      ...operationOptions
    });
};

/**
 * __useUpdateAdminUserMutation__
 *
 * To run a mutation, you first call `useUpdateAdminUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminUserMutation, { data, loading, error }] = useUpdateAdminUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdminUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdminUserMutation, UpdateAdminUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAdminUserMutation, UpdateAdminUserMutationVariables>(UpdateAdminUserDocument, baseOptions);
      }
export type UpdateAdminUserMutationHookResult = ReturnType<typeof useUpdateAdminUserMutation>;
export type UpdateAdminUserMutationResult = ApolloReactCommon.MutationResult<UpdateAdminUserMutation>;
export type UpdateAdminUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAdminUserMutation, UpdateAdminUserMutationVariables>;
export const UpdateAdsDocument = gql`
    mutation UpdateAds($input: [AdInput!]) {
  updateAds(input: $input) {
    ads {
      id
      status {
        value
      }
      type
      image {
        id
        type
        url
        mobileUrl
      }
      targetUrl
      identifier
      grouping
      position
      viewCount
      clickCount
      createdOn
      updatedOn
    }
  }
}
    `;
export type UpdateAdsMutationFn = ApolloReactCommon.MutationFunction<UpdateAdsMutation, UpdateAdsMutationVariables>;
export type UpdateAdsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAdsMutation, UpdateAdsMutationVariables>, 'mutation'>;

    export const UpdateAdsComponent = (props: UpdateAdsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAdsMutation, UpdateAdsMutationVariables> mutation={UpdateAdsDocument} {...props} />
    );
    
export type UpdateAdsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAdsMutation, UpdateAdsMutationVariables>
    } & TChildProps;
export function withUpdateAds<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAdsMutation,
  UpdateAdsMutationVariables,
  UpdateAdsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAdsMutation, UpdateAdsMutationVariables, UpdateAdsProps<TChildProps, TDataName>>(UpdateAdsDocument, {
      alias: 'updateAds',
      ...operationOptions
    });
};

/**
 * __useUpdateAdsMutation__
 *
 * To run a mutation, you first call `useUpdateAdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdsMutation, { data, loading, error }] = useUpdateAdsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdsMutation, UpdateAdsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAdsMutation, UpdateAdsMutationVariables>(UpdateAdsDocument, baseOptions);
      }
export type UpdateAdsMutationHookResult = ReturnType<typeof useUpdateAdsMutation>;
export type UpdateAdsMutationResult = ApolloReactCommon.MutationResult<UpdateAdsMutation>;
export type UpdateAdsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAdsMutation, UpdateAdsMutationVariables>;
export const UpdateBoProductDocument = gql`
    mutation UpdateBOProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    product {
      id
    }
  }
}
    `;
export type UpdateBoProductMutationFn = ApolloReactCommon.MutationFunction<UpdateBoProductMutation, UpdateBoProductMutationVariables>;
export type UpdateBoProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateBoProductMutation, UpdateBoProductMutationVariables>, 'mutation'>;

    export const UpdateBoProductComponent = (props: UpdateBoProductComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateBoProductMutation, UpdateBoProductMutationVariables> mutation={UpdateBoProductDocument} {...props} />
    );
    
export type UpdateBoProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBoProductMutation, UpdateBoProductMutationVariables>
    } & TChildProps;
export function withUpdateBoProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBoProductMutation,
  UpdateBoProductMutationVariables,
  UpdateBoProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBoProductMutation, UpdateBoProductMutationVariables, UpdateBoProductProps<TChildProps, TDataName>>(UpdateBoProductDocument, {
      alias: 'updateBoProduct',
      ...operationOptions
    });
};

/**
 * __useUpdateBoProductMutation__
 *
 * To run a mutation, you first call `useUpdateBoProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoProductMutation, { data, loading, error }] = useUpdateBoProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBoProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBoProductMutation, UpdateBoProductMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBoProductMutation, UpdateBoProductMutationVariables>(UpdateBoProductDocument, baseOptions);
      }
export type UpdateBoProductMutationHookResult = ReturnType<typeof useUpdateBoProductMutation>;
export type UpdateBoProductMutationResult = ApolloReactCommon.MutationResult<UpdateBoProductMutation>;
export type UpdateBoProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBoProductMutation, UpdateBoProductMutationVariables>;
export const UpdateBrandOwnerRecommendationDocument = gql`
    mutation UpdateBrandOwnerRecommendation($input: UpdateBrandOwnerRecommendationInput!) {
  updateBrandOwnerRecommendation(input: $input) {
    id
  }
}
    `;
export type UpdateBrandOwnerRecommendationMutationFn = ApolloReactCommon.MutationFunction<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables>;
export type UpdateBrandOwnerRecommendationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables>, 'mutation'>;

    export const UpdateBrandOwnerRecommendationComponent = (props: UpdateBrandOwnerRecommendationComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables> mutation={UpdateBrandOwnerRecommendationDocument} {...props} />
    );
    
export type UpdateBrandOwnerRecommendationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables>
    } & TChildProps;
export function withUpdateBrandOwnerRecommendation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBrandOwnerRecommendationMutation,
  UpdateBrandOwnerRecommendationMutationVariables,
  UpdateBrandOwnerRecommendationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables, UpdateBrandOwnerRecommendationProps<TChildProps, TDataName>>(UpdateBrandOwnerRecommendationDocument, {
      alias: 'updateBrandOwnerRecommendation',
      ...operationOptions
    });
};

/**
 * __useUpdateBrandOwnerRecommendationMutation__
 *
 * To run a mutation, you first call `useUpdateBrandOwnerRecommendationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBrandOwnerRecommendationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBrandOwnerRecommendationMutation, { data, loading, error }] = useUpdateBrandOwnerRecommendationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBrandOwnerRecommendationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables>(UpdateBrandOwnerRecommendationDocument, baseOptions);
      }
export type UpdateBrandOwnerRecommendationMutationHookResult = ReturnType<typeof useUpdateBrandOwnerRecommendationMutation>;
export type UpdateBrandOwnerRecommendationMutationResult = ApolloReactCommon.MutationResult<UpdateBrandOwnerRecommendationMutation>;
export type UpdateBrandOwnerRecommendationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBrandOwnerRecommendationMutation, UpdateBrandOwnerRecommendationMutationVariables>;
export const UpdateCompanyDetailsDocument = gql`
    mutation UpdateCompanyDetails($input: UpdateStarStockCompanyDetailsInput) {
  updateStarStockCompanyDetails(input: $input) {
    companyName
  }
}
    `;
export type UpdateCompanyDetailsMutationFn = ApolloReactCommon.MutationFunction<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>;
export type UpdateCompanyDetailsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>, 'mutation'>;

    export const UpdateCompanyDetailsComponent = (props: UpdateCompanyDetailsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables> mutation={UpdateCompanyDetailsDocument} {...props} />
    );
    
export type UpdateCompanyDetailsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>
    } & TChildProps;
export function withUpdateCompanyDetails<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCompanyDetailsMutation,
  UpdateCompanyDetailsMutationVariables,
  UpdateCompanyDetailsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables, UpdateCompanyDetailsProps<TChildProps, TDataName>>(UpdateCompanyDetailsDocument, {
      alias: 'updateCompanyDetails',
      ...operationOptions
    });
};

/**
 * __useUpdateCompanyDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyDetailsMutation, { data, loading, error }] = useUpdateCompanyDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyDetailsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>(UpdateCompanyDetailsDocument, baseOptions);
      }
export type UpdateCompanyDetailsMutationHookResult = ReturnType<typeof useUpdateCompanyDetailsMutation>;
export type UpdateCompanyDetailsMutationResult = ApolloReactCommon.MutationResult<UpdateCompanyDetailsMutation>;
export type UpdateCompanyDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>;
export const UpdateLogisticsFeeDocument = gql`
    mutation UpdateLogisticsFee($input: UpdateLogisticsFeeInput!) {
  updateAdminLogisticsFee(input: $input) {
    fee {
      id
    }
  }
}
    `;
export type UpdateLogisticsFeeMutationFn = ApolloReactCommon.MutationFunction<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables>;
export type UpdateLogisticsFeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables>, 'mutation'>;

    export const UpdateLogisticsFeeComponent = (props: UpdateLogisticsFeeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables> mutation={UpdateLogisticsFeeDocument} {...props} />
    );
    
export type UpdateLogisticsFeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables>
    } & TChildProps;
export function withUpdateLogisticsFee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateLogisticsFeeMutation,
  UpdateLogisticsFeeMutationVariables,
  UpdateLogisticsFeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables, UpdateLogisticsFeeProps<TChildProps, TDataName>>(UpdateLogisticsFeeDocument, {
      alias: 'updateLogisticsFee',
      ...operationOptions
    });
};

/**
 * __useUpdateLogisticsFeeMutation__
 *
 * To run a mutation, you first call `useUpdateLogisticsFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLogisticsFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLogisticsFeeMutation, { data, loading, error }] = useUpdateLogisticsFeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLogisticsFeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables>(UpdateLogisticsFeeDocument, baseOptions);
      }
export type UpdateLogisticsFeeMutationHookResult = ReturnType<typeof useUpdateLogisticsFeeMutation>;
export type UpdateLogisticsFeeMutationResult = ApolloReactCommon.MutationResult<UpdateLogisticsFeeMutation>;
export type UpdateLogisticsFeeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateLogisticsFeeMutation, UpdateLogisticsFeeMutationVariables>;
export const UpdateMyAccountDocument = gql`
    mutation UpdateMyAccount($input: UserUpdateInput!) {
  dslUpdateUser(input: $input) {
    user {
      id
    }
  }
}
    `;
export type UpdateMyAccountMutationFn = ApolloReactCommon.MutationFunction<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>;
export type UpdateMyAccountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>, 'mutation'>;

    export const UpdateMyAccountComponent = (props: UpdateMyAccountComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMyAccountMutation, UpdateMyAccountMutationVariables> mutation={UpdateMyAccountDocument} {...props} />
    );
    
export type UpdateMyAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>
    } & TChildProps;
export function withUpdateMyAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateMyAccountMutation,
  UpdateMyAccountMutationVariables,
  UpdateMyAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateMyAccountMutation, UpdateMyAccountMutationVariables, UpdateMyAccountProps<TChildProps, TDataName>>(UpdateMyAccountDocument, {
      alias: 'updateMyAccount',
      ...operationOptions
    });
};

/**
 * __useUpdateMyAccountMutation__
 *
 * To run a mutation, you first call `useUpdateMyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyAccountMutation, { data, loading, error }] = useUpdateMyAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMyAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>(UpdateMyAccountDocument, baseOptions);
      }
export type UpdateMyAccountMutationHookResult = ReturnType<typeof useUpdateMyAccountMutation>;
export type UpdateMyAccountMutationResult = ApolloReactCommon.MutationResult<UpdateMyAccountMutation>;
export type UpdateMyAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>;
export const UpdateMyPasswordDocument = gql`
    mutation UpdateMyPassword($input: UpdatePasswordInput!) {
  dslUpdateUserPassword(input: $input)
}
    `;
export type UpdateMyPasswordMutationFn = ApolloReactCommon.MutationFunction<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables>;
export type UpdateMyPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables>, 'mutation'>;

    export const UpdateMyPasswordComponent = (props: UpdateMyPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables> mutation={UpdateMyPasswordDocument} {...props} />
    );
    
export type UpdateMyPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables>
    } & TChildProps;
export function withUpdateMyPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateMyPasswordMutation,
  UpdateMyPasswordMutationVariables,
  UpdateMyPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables, UpdateMyPasswordProps<TChildProps, TDataName>>(UpdateMyPasswordDocument, {
      alias: 'updateMyPassword',
      ...operationOptions
    });
};

/**
 * __useUpdateMyPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateMyPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyPasswordMutation, { data, loading, error }] = useUpdateMyPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMyPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables>(UpdateMyPasswordDocument, baseOptions);
      }
export type UpdateMyPasswordMutationHookResult = ReturnType<typeof useUpdateMyPasswordMutation>;
export type UpdateMyPasswordMutationResult = ApolloReactCommon.MutationResult<UpdateMyPasswordMutation>;
export type UpdateMyPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMyPasswordMutation, UpdateMyPasswordMutationVariables>;
export const UpdateOutletProductPricingDocument = gql`
    mutation UpdateOutletProductPricing($input: UpdateOutletProductPricingInput!) {
  updateOutletProductPricing(input: $input)
}
    `;
export type UpdateOutletProductPricingMutationFn = ApolloReactCommon.MutationFunction<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables>;
export type UpdateOutletProductPricingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables>, 'mutation'>;

    export const UpdateOutletProductPricingComponent = (props: UpdateOutletProductPricingComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables> mutation={UpdateOutletProductPricingDocument} {...props} />
    );
    
export type UpdateOutletProductPricingProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables>
    } & TChildProps;
export function withUpdateOutletProductPricing<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateOutletProductPricingMutation,
  UpdateOutletProductPricingMutationVariables,
  UpdateOutletProductPricingProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables, UpdateOutletProductPricingProps<TChildProps, TDataName>>(UpdateOutletProductPricingDocument, {
      alias: 'updateOutletProductPricing',
      ...operationOptions
    });
};

/**
 * __useUpdateOutletProductPricingMutation__
 *
 * To run a mutation, you first call `useUpdateOutletProductPricingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOutletProductPricingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOutletProductPricingMutation, { data, loading, error }] = useUpdateOutletProductPricingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOutletProductPricingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables>(UpdateOutletProductPricingDocument, baseOptions);
      }
export type UpdateOutletProductPricingMutationHookResult = ReturnType<typeof useUpdateOutletProductPricingMutation>;
export type UpdateOutletProductPricingMutationResult = ApolloReactCommon.MutationResult<UpdateOutletProductPricingMutation>;
export type UpdateOutletProductPricingMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOutletProductPricingMutation, UpdateOutletProductPricingMutationVariables>;
export const UpdateOutletDocument = gql`
    mutation UpdateOutlet($input: UpdateAdminOutletInput!) {
  updateAdminOutlet(input: $input) {
    outlet {
      id
      status {
        id
        displayName
      }
    }
  }
}
    `;
export type UpdateOutletMutationFn = ApolloReactCommon.MutationFunction<UpdateOutletMutation, UpdateOutletMutationVariables>;
export type UpdateOutletComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOutletMutation, UpdateOutletMutationVariables>, 'mutation'>;

    export const UpdateOutletComponent = (props: UpdateOutletComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOutletMutation, UpdateOutletMutationVariables> mutation={UpdateOutletDocument} {...props} />
    );
    
export type UpdateOutletProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateOutletMutation, UpdateOutletMutationVariables>
    } & TChildProps;
export function withUpdateOutlet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateOutletMutation,
  UpdateOutletMutationVariables,
  UpdateOutletProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateOutletMutation, UpdateOutletMutationVariables, UpdateOutletProps<TChildProps, TDataName>>(UpdateOutletDocument, {
      alias: 'updateOutlet',
      ...operationOptions
    });
};

/**
 * __useUpdateOutletMutation__
 *
 * To run a mutation, you first call `useUpdateOutletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOutletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOutletMutation, { data, loading, error }] = useUpdateOutletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOutletMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOutletMutation, UpdateOutletMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOutletMutation, UpdateOutletMutationVariables>(UpdateOutletDocument, baseOptions);
      }
export type UpdateOutletMutationHookResult = ReturnType<typeof useUpdateOutletMutation>;
export type UpdateOutletMutationResult = ApolloReactCommon.MutationResult<UpdateOutletMutation>;
export type UpdateOutletMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOutletMutation, UpdateOutletMutationVariables>;
export const UpdateProductFeatureDocument = gql`
    mutation UpdateProductFeature($input: UpdateProductFeatureInput) {
  updateProductFeature(input: $input) {
    id
  }
}
    `;
export type UpdateProductFeatureMutationFn = ApolloReactCommon.MutationFunction<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>;
export type UpdateProductFeatureComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>, 'mutation'>;

    export const UpdateProductFeatureComponent = (props: UpdateProductFeatureComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables> mutation={UpdateProductFeatureDocument} {...props} />
    );
    
export type UpdateProductFeatureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>
    } & TChildProps;
export function withUpdateProductFeature<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductFeatureMutation,
  UpdateProductFeatureMutationVariables,
  UpdateProductFeatureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables, UpdateProductFeatureProps<TChildProps, TDataName>>(UpdateProductFeatureDocument, {
      alias: 'updateProductFeature',
      ...operationOptions
    });
};

/**
 * __useUpdateProductFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductFeatureMutation, { data, loading, error }] = useUpdateProductFeatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductFeatureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>(UpdateProductFeatureDocument, baseOptions);
      }
export type UpdateProductFeatureMutationHookResult = ReturnType<typeof useUpdateProductFeatureMutation>;
export type UpdateProductFeatureMutationResult = ApolloReactCommon.MutationResult<UpdateProductFeatureMutation>;
export type UpdateProductFeatureMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>;
export const UpdateProductPostcodeRestrictionDocument = gql`
    mutation UpdateProductPostcodeRestriction($input: UpdateProductPostcodeRestrictionsInput!) {
  updateProductPostcodeRestrictions(input: $input)
}
    `;
export type UpdateProductPostcodeRestrictionMutationFn = ApolloReactCommon.MutationFunction<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables>;
export type UpdateProductPostcodeRestrictionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables>, 'mutation'>;

    export const UpdateProductPostcodeRestrictionComponent = (props: UpdateProductPostcodeRestrictionComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables> mutation={UpdateProductPostcodeRestrictionDocument} {...props} />
    );
    
export type UpdateProductPostcodeRestrictionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables>
    } & TChildProps;
export function withUpdateProductPostcodeRestriction<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductPostcodeRestrictionMutation,
  UpdateProductPostcodeRestrictionMutationVariables,
  UpdateProductPostcodeRestrictionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables, UpdateProductPostcodeRestrictionProps<TChildProps, TDataName>>(UpdateProductPostcodeRestrictionDocument, {
      alias: 'updateProductPostcodeRestriction',
      ...operationOptions
    });
};

/**
 * __useUpdateProductPostcodeRestrictionMutation__
 *
 * To run a mutation, you first call `useUpdateProductPostcodeRestrictionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductPostcodeRestrictionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductPostcodeRestrictionMutation, { data, loading, error }] = useUpdateProductPostcodeRestrictionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductPostcodeRestrictionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables>(UpdateProductPostcodeRestrictionDocument, baseOptions);
      }
export type UpdateProductPostcodeRestrictionMutationHookResult = ReturnType<typeof useUpdateProductPostcodeRestrictionMutation>;
export type UpdateProductPostcodeRestrictionMutationResult = ApolloReactCommon.MutationResult<UpdateProductPostcodeRestrictionMutation>;
export type UpdateProductPostcodeRestrictionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProductPostcodeRestrictionMutation, UpdateProductPostcodeRestrictionMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($input: UpdateProductInput!, $ads: [AdInput!]) {
  updateProduct(input: $input) {
    product {
      id
    }
  }
  updateAds(input: $ads) {
    ads {
      id
      status {
        value
      }
      type
      image {
        id
        type
        url
      }
      targetUrl
      identifier
      grouping
      position
      viewCount
      clickCount
      createdOn
      updatedOn
    }
  }
}
    `;
export type UpdateProductMutationFn = ApolloReactCommon.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;
export type UpdateProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateProductMutation, UpdateProductMutationVariables>, 'mutation'>;

    export const UpdateProductComponent = (props: UpdateProductComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateProductMutation, UpdateProductMutationVariables> mutation={UpdateProductDocument} {...props} />
    );
    
export type UpdateProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>
    } & TChildProps;
export function withUpdateProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductMutation,
  UpdateProductMutationVariables,
  UpdateProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductMutation, UpdateProductMutationVariables, UpdateProductProps<TChildProps, TDataName>>(UpdateProductDocument, {
      alias: 'updateProduct',
      ...operationOptions
    });
};

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      ads: // value for 'ads'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = ApolloReactCommon.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const UpdatePromotionDocument = gql`
    mutation UpdatePromotion($input: UpdatePromotionInput!) {
  updatePromotion(input: $input) {
    promotion {
      id
    }
  }
}
    `;
export type UpdatePromotionMutationFn = ApolloReactCommon.MutationFunction<UpdatePromotionMutation, UpdatePromotionMutationVariables>;
export type UpdatePromotionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePromotionMutation, UpdatePromotionMutationVariables>, 'mutation'>;

    export const UpdatePromotionComponent = (props: UpdatePromotionComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePromotionMutation, UpdatePromotionMutationVariables> mutation={UpdatePromotionDocument} {...props} />
    );
    
export type UpdatePromotionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdatePromotionMutation, UpdatePromotionMutationVariables>
    } & TChildProps;
export function withUpdatePromotion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePromotionMutation,
  UpdatePromotionMutationVariables,
  UpdatePromotionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePromotionMutation, UpdatePromotionMutationVariables, UpdatePromotionProps<TChildProps, TDataName>>(UpdatePromotionDocument, {
      alias: 'updatePromotion',
      ...operationOptions
    });
};

/**
 * __useUpdatePromotionMutation__
 *
 * To run a mutation, you first call `useUpdatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePromotionMutation, { data, loading, error }] = useUpdatePromotionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePromotionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePromotionMutation, UpdatePromotionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePromotionMutation, UpdatePromotionMutationVariables>(UpdatePromotionDocument, baseOptions);
      }
export type UpdatePromotionMutationHookResult = ReturnType<typeof useUpdatePromotionMutation>;
export type UpdatePromotionMutationResult = ApolloReactCommon.MutationResult<UpdatePromotionMutation>;
export type UpdatePromotionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePromotionMutation, UpdatePromotionMutationVariables>;
export const UpdateAdminSimilarProductsDocument = gql`
    mutation UpdateAdminSimilarProducts($input: UpdateSimilarProductsInput!) {
  updateAdminSimilarProducts(input: $input) {
    products {
      ...DslProductFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type UpdateAdminSimilarProductsMutationFn = ApolloReactCommon.MutationFunction<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables>;
export type UpdateAdminSimilarProductsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables>, 'mutation'>;

    export const UpdateAdminSimilarProductsComponent = (props: UpdateAdminSimilarProductsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables> mutation={UpdateAdminSimilarProductsDocument} {...props} />
    );
    
export type UpdateAdminSimilarProductsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables>
    } & TChildProps;
export function withUpdateAdminSimilarProducts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAdminSimilarProductsMutation,
  UpdateAdminSimilarProductsMutationVariables,
  UpdateAdminSimilarProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables, UpdateAdminSimilarProductsProps<TChildProps, TDataName>>(UpdateAdminSimilarProductsDocument, {
      alias: 'updateAdminSimilarProducts',
      ...operationOptions
    });
};

/**
 * __useUpdateAdminSimilarProductsMutation__
 *
 * To run a mutation, you first call `useUpdateAdminSimilarProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminSimilarProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminSimilarProductsMutation, { data, loading, error }] = useUpdateAdminSimilarProductsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdminSimilarProductsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables>(UpdateAdminSimilarProductsDocument, baseOptions);
      }
export type UpdateAdminSimilarProductsMutationHookResult = ReturnType<typeof useUpdateAdminSimilarProductsMutation>;
export type UpdateAdminSimilarProductsMutationResult = ApolloReactCommon.MutationResult<UpdateAdminSimilarProductsMutation>;
export type UpdateAdminSimilarProductsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAdminSimilarProductsMutation, UpdateAdminSimilarProductsMutationVariables>;
export const UpdateEntityStatusDocument = gql`
    mutation UpdateEntityStatus($input: UpdateStatusInput) {
  updateEntityStatus(input: $input)
}
    `;
export type UpdateEntityStatusMutationFn = ApolloReactCommon.MutationFunction<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables>;
export type UpdateEntityStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables>, 'mutation'>;

    export const UpdateEntityStatusComponent = (props: UpdateEntityStatusComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables> mutation={UpdateEntityStatusDocument} {...props} />
    );
    
export type UpdateEntityStatusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables>
    } & TChildProps;
export function withUpdateEntityStatus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateEntityStatusMutation,
  UpdateEntityStatusMutationVariables,
  UpdateEntityStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables, UpdateEntityStatusProps<TChildProps, TDataName>>(UpdateEntityStatusDocument, {
      alias: 'updateEntityStatus',
      ...operationOptions
    });
};

/**
 * __useUpdateEntityStatusMutation__
 *
 * To run a mutation, you first call `useUpdateEntityStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEntityStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEntityStatusMutation, { data, loading, error }] = useUpdateEntityStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEntityStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables>(UpdateEntityStatusDocument, baseOptions);
      }
export type UpdateEntityStatusMutationHookResult = ReturnType<typeof useUpdateEntityStatusMutation>;
export type UpdateEntityStatusMutationResult = ApolloReactCommon.MutationResult<UpdateEntityStatusMutation>;
export type UpdateEntityStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateEntityStatusMutation, UpdateEntityStatusMutationVariables>;
export const UpdateTaxCodeDocument = gql`
    mutation UpdateTaxCode($input: TaxCodeInput!) {
  updateTaxCode(input: $input) {
    id
  }
}
    `;
export type UpdateTaxCodeMutationFn = ApolloReactCommon.MutationFunction<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables>;
export type UpdateTaxCodeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables>, 'mutation'>;

    export const UpdateTaxCodeComponent = (props: UpdateTaxCodeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables> mutation={UpdateTaxCodeDocument} {...props} />
    );
    
export type UpdateTaxCodeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables>
    } & TChildProps;
export function withUpdateTaxCode<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaxCodeMutation,
  UpdateTaxCodeMutationVariables,
  UpdateTaxCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables, UpdateTaxCodeProps<TChildProps, TDataName>>(UpdateTaxCodeDocument, {
      alias: 'updateTaxCode',
      ...operationOptions
    });
};

/**
 * __useUpdateTaxCodeMutation__
 *
 * To run a mutation, you first call `useUpdateTaxCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaxCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaxCodeMutation, { data, loading, error }] = useUpdateTaxCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaxCodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables>(UpdateTaxCodeDocument, baseOptions);
      }
export type UpdateTaxCodeMutationHookResult = ReturnType<typeof useUpdateTaxCodeMutation>;
export type UpdateTaxCodeMutationResult = ApolloReactCommon.MutationResult<UpdateTaxCodeMutation>;
export type UpdateTaxCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTaxCodeMutation, UpdateTaxCodeMutationVariables>;
export const UpdateTermsConditionsDocument = gql`
    mutation UpdateTermsConditions($input: UpdateTermsConditions!) {
  updateTermsConditions(input: $input) {
    id
  }
}
    `;
export type UpdateTermsConditionsMutationFn = ApolloReactCommon.MutationFunction<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables>;
export type UpdateTermsConditionsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables>, 'mutation'>;

    export const UpdateTermsConditionsComponent = (props: UpdateTermsConditionsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables> mutation={UpdateTermsConditionsDocument} {...props} />
    );
    
export type UpdateTermsConditionsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables>
    } & TChildProps;
export function withUpdateTermsConditions<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTermsConditionsMutation,
  UpdateTermsConditionsMutationVariables,
  UpdateTermsConditionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables, UpdateTermsConditionsProps<TChildProps, TDataName>>(UpdateTermsConditionsDocument, {
      alias: 'updateTermsConditions',
      ...operationOptions
    });
};

/**
 * __useUpdateTermsConditionsMutation__
 *
 * To run a mutation, you first call `useUpdateTermsConditionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTermsConditionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTermsConditionsMutation, { data, loading, error }] = useUpdateTermsConditionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTermsConditionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables>(UpdateTermsConditionsDocument, baseOptions);
      }
export type UpdateTermsConditionsMutationHookResult = ReturnType<typeof useUpdateTermsConditionsMutation>;
export type UpdateTermsConditionsMutationResult = ApolloReactCommon.MutationResult<UpdateTermsConditionsMutation>;
export type UpdateTermsConditionsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTermsConditionsMutation, UpdateTermsConditionsMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateAdminUser(input: $input) {
    ...DslUserFields
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateAdminYouMightAlsoLikeProductsDocument = gql`
    mutation UpdateAdminYouMightAlsoLikeProducts($input: UpdateYouMightAlsoLikeProductsInput!) {
  updateAdminYouMightAlsoLikeProducts(input: $input) {
    products {
      ...DslProductFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type UpdateAdminYouMightAlsoLikeProductsMutationFn = ApolloReactCommon.MutationFunction<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables>;
export type UpdateAdminYouMightAlsoLikeProductsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables>, 'mutation'>;

    export const UpdateAdminYouMightAlsoLikeProductsComponent = (props: UpdateAdminYouMightAlsoLikeProductsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables> mutation={UpdateAdminYouMightAlsoLikeProductsDocument} {...props} />
    );
    
export type UpdateAdminYouMightAlsoLikeProductsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables>
    } & TChildProps;
export function withUpdateAdminYouMightAlsoLikeProducts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAdminYouMightAlsoLikeProductsMutation,
  UpdateAdminYouMightAlsoLikeProductsMutationVariables,
  UpdateAdminYouMightAlsoLikeProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables, UpdateAdminYouMightAlsoLikeProductsProps<TChildProps, TDataName>>(UpdateAdminYouMightAlsoLikeProductsDocument, {
      alias: 'updateAdminYouMightAlsoLikeProducts',
      ...operationOptions
    });
};

/**
 * __useUpdateAdminYouMightAlsoLikeProductsMutation__
 *
 * To run a mutation, you first call `useUpdateAdminYouMightAlsoLikeProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminYouMightAlsoLikeProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminYouMightAlsoLikeProductsMutation, { data, loading, error }] = useUpdateAdminYouMightAlsoLikeProductsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdminYouMightAlsoLikeProductsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables>(UpdateAdminYouMightAlsoLikeProductsDocument, baseOptions);
      }
export type UpdateAdminYouMightAlsoLikeProductsMutationHookResult = ReturnType<typeof useUpdateAdminYouMightAlsoLikeProductsMutation>;
export type UpdateAdminYouMightAlsoLikeProductsMutationResult = ApolloReactCommon.MutationResult<UpdateAdminYouMightAlsoLikeProductsMutation>;
export type UpdateAdminYouMightAlsoLikeProductsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAdminYouMightAlsoLikeProductsMutation, UpdateAdminYouMightAlsoLikeProductsMutationVariables>;
export const UpsertRecommendationDocument = gql`
    mutation UpsertRecommendation($i: UpsertRecommendationInput!) {
  upsertRecommendation(input: $i) {
    id
  }
}
    `;
export type UpsertRecommendationMutationFn = ApolloReactCommon.MutationFunction<UpsertRecommendationMutation, UpsertRecommendationMutationVariables>;
export type UpsertRecommendationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpsertRecommendationMutation, UpsertRecommendationMutationVariables>, 'mutation'>;

    export const UpsertRecommendationComponent = (props: UpsertRecommendationComponentProps) => (
      <ApolloReactComponents.Mutation<UpsertRecommendationMutation, UpsertRecommendationMutationVariables> mutation={UpsertRecommendationDocument} {...props} />
    );
    
export type UpsertRecommendationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpsertRecommendationMutation, UpsertRecommendationMutationVariables>
    } & TChildProps;
export function withUpsertRecommendation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpsertRecommendationMutation,
  UpsertRecommendationMutationVariables,
  UpsertRecommendationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpsertRecommendationMutation, UpsertRecommendationMutationVariables, UpsertRecommendationProps<TChildProps, TDataName>>(UpsertRecommendationDocument, {
      alias: 'upsertRecommendation',
      ...operationOptions
    });
};

/**
 * __useUpsertRecommendationMutation__
 *
 * To run a mutation, you first call `useUpsertRecommendationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertRecommendationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertRecommendationMutation, { data, loading, error }] = useUpsertRecommendationMutation({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useUpsertRecommendationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpsertRecommendationMutation, UpsertRecommendationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpsertRecommendationMutation, UpsertRecommendationMutationVariables>(UpsertRecommendationDocument, baseOptions);
      }
export type UpsertRecommendationMutationHookResult = ReturnType<typeof useUpsertRecommendationMutation>;
export type UpsertRecommendationMutationResult = ApolloReactCommon.MutationResult<UpsertRecommendationMutation>;
export type UpsertRecommendationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpsertRecommendationMutation, UpsertRecommendationMutationVariables>;
export const GetAdminAbandonedCartDetailsDocument = gql`
    query GetAdminAbandonedCartDetails($id: Int!) {
  getAdminAbandonedCartDetails(id: $id) {
    id
    userId
    OutletId
    guestId
    totalProducts
    createdOn
    updatedOn
    products {
      id
      cartId
      productId
      qty
      product {
        ...DslProductFields
      }
    }
    outlet {
      name
    }
    user {
      title
      firstName
      middleName
      lastName
    }
    totals {
      subtotal
      discount
      delivery
      tax
      total
    }
    canCheckout
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type GetAdminAbandonedCartDetailsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>, 'query'> & ({ variables: GetAdminAbandonedCartDetailsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminAbandonedCartDetailsComponent = (props: GetAdminAbandonedCartDetailsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables> query={GetAdminAbandonedCartDetailsDocument} {...props} />
    );
    
export type GetAdminAbandonedCartDetailsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>
    } & TChildProps;
export function withGetAdminAbandonedCartDetails<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminAbandonedCartDetailsQuery,
  GetAdminAbandonedCartDetailsQueryVariables,
  GetAdminAbandonedCartDetailsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables, GetAdminAbandonedCartDetailsProps<TChildProps, TDataName>>(GetAdminAbandonedCartDetailsDocument, {
      alias: 'getAdminAbandonedCartDetails',
      ...operationOptions
    });
};

/**
 * __useGetAdminAbandonedCartDetailsQuery__
 *
 * To run a query within a React component, call `useGetAdminAbandonedCartDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminAbandonedCartDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminAbandonedCartDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdminAbandonedCartDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>(GetAdminAbandonedCartDetailsDocument, baseOptions);
      }
export function useGetAdminAbandonedCartDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>(GetAdminAbandonedCartDetailsDocument, baseOptions);
        }
export type GetAdminAbandonedCartDetailsQueryHookResult = ReturnType<typeof useGetAdminAbandonedCartDetailsQuery>;
export type GetAdminAbandonedCartDetailsLazyQueryHookResult = ReturnType<typeof useGetAdminAbandonedCartDetailsLazyQuery>;
export type GetAdminAbandonedCartDetailsQueryResult = ApolloReactCommon.QueryResult<GetAdminAbandonedCartDetailsQuery, GetAdminAbandonedCartDetailsQueryVariables>;
export const GetAbandonedCartsDocument = gql`
    query GetAbandonedCarts($params: AdminAbandonedCartsInput) {
  getAdminAbandonedCarts(params: $params) {
    totalCount
    carts {
      id
      userId
      OutletId
      guestId
      totalProducts
      createdOn
      updatedOn
      products {
        id
        cartId
        productId
        qty
        lastKnownPrice
      }
      user {
        id
        title
        firstName
        middleName
        lastName
        phone
        email
        marketing
        identities {
          id
          type
          value
        }
      }
      outlet {
        id
        name
        style
        legalStatus
        companyName
        charityNumber
        dropPointDescription
        createdOn
        updatedOn
        lastOrdered
      }
    }
  }
}
    `;
export type GetAbandonedCartsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>, 'query'>;

    export const GetAbandonedCartsComponent = (props: GetAbandonedCartsComponentProps) => (
      <ApolloReactComponents.Query<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables> query={GetAbandonedCartsDocument} {...props} />
    );
    
export type GetAbandonedCartsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>
    } & TChildProps;
export function withGetAbandonedCarts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAbandonedCartsQuery,
  GetAbandonedCartsQueryVariables,
  GetAbandonedCartsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables, GetAbandonedCartsProps<TChildProps, TDataName>>(GetAbandonedCartsDocument, {
      alias: 'getAbandonedCarts',
      ...operationOptions
    });
};

/**
 * __useGetAbandonedCartsQuery__
 *
 * To run a query within a React component, call `useGetAbandonedCartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAbandonedCartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAbandonedCartsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAbandonedCartsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>(GetAbandonedCartsDocument, baseOptions);
      }
export function useGetAbandonedCartsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>(GetAbandonedCartsDocument, baseOptions);
        }
export type GetAbandonedCartsQueryHookResult = ReturnType<typeof useGetAbandonedCartsQuery>;
export type GetAbandonedCartsLazyQueryHookResult = ReturnType<typeof useGetAbandonedCartsLazyQuery>;
export type GetAbandonedCartsQueryResult = ApolloReactCommon.QueryResult<GetAbandonedCartsQuery, GetAbandonedCartsQueryVariables>;
export const GetAdminUserByIdDocument = gql`
    query GetAdminUserById($id: Int!) {
  getAdminUserById(id: $id) {
    ...DslUserFields
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type GetAdminUserByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>, 'query'> & ({ variables: GetAdminUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminUserByIdComponent = (props: GetAdminUserByIdComponentProps) => (
      <ApolloReactComponents.Query<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables> query={GetAdminUserByIdDocument} {...props} />
    );
    
export type GetAdminUserByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>
    } & TChildProps;
export function withGetAdminUserById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminUserByIdQuery,
  GetAdminUserByIdQueryVariables,
  GetAdminUserByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables, GetAdminUserByIdProps<TChildProps, TDataName>>(GetAdminUserByIdDocument, {
      alias: 'getAdminUserById',
      ...operationOptions
    });
};

/**
 * __useGetAdminUserByIdQuery__
 *
 * To run a query within a React component, call `useGetAdminUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdminUserByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>(GetAdminUserByIdDocument, baseOptions);
      }
export function useGetAdminUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>(GetAdminUserByIdDocument, baseOptions);
        }
export type GetAdminUserByIdQueryHookResult = ReturnType<typeof useGetAdminUserByIdQuery>;
export type GetAdminUserByIdLazyQueryHookResult = ReturnType<typeof useGetAdminUserByIdLazyQuery>;
export type GetAdminUserByIdQueryResult = ApolloReactCommon.QueryResult<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>;
export const GetBrandOwnersDocument = gql`
    query GetBrandOwners($searchText: String, $sortBy: String!, $sortOrder: String!, $page: Int!, $perPage: Int! = 10, $status: Int) {
  getBrandOwner(
    params: {search: $searchText, sort: {by: $sortBy, direction: $sortOrder}, pagination: {page: $page, perPage: $perPage}, filters: {status: $status}}
  ) {
    totalCount
    brandOwners {
      id
      displayName
      status {
        id
        displayName
      }
      createdOn
      isBrandNursery
      isDefaultDistributor
      isBrandPartner
    }
  }
}
    `;
export type GetBrandOwnersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>, 'query'> & ({ variables: GetBrandOwnersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBrandOwnersComponent = (props: GetBrandOwnersComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnersQuery, GetBrandOwnersQueryVariables> query={GetBrandOwnersDocument} {...props} />
    );
    
export type GetBrandOwnersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>
    } & TChildProps;
export function withGetBrandOwners<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnersQuery,
  GetBrandOwnersQueryVariables,
  GetBrandOwnersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnersQuery, GetBrandOwnersQueryVariables, GetBrandOwnersProps<TChildProps, TDataName>>(GetBrandOwnersDocument, {
      alias: 'getBrandOwners',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnersQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnersQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetBrandOwnersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>(GetBrandOwnersDocument, baseOptions);
      }
export function useGetBrandOwnersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>(GetBrandOwnersDocument, baseOptions);
        }
export type GetBrandOwnersQueryHookResult = ReturnType<typeof useGetBrandOwnersQuery>;
export type GetBrandOwnersLazyQueryHookResult = ReturnType<typeof useGetBrandOwnersLazyQuery>;
export type GetBrandOwnersQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>;
export const GetBrandOwnerDocument = gql`
    query GetBrandOwner {
  getBrandOwner {
    brandOwners {
      id
      displayName
      isBrandNursery
      isDefaultDistributor
      isBrandPartner
    }
  }
}
    `;
export type GetBrandOwnerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>, 'query'>;

    export const GetBrandOwnerComponent = (props: GetBrandOwnerComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnerQuery, GetBrandOwnerQueryVariables> query={GetBrandOwnerDocument} {...props} />
    );
    
export type GetBrandOwnerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>
    } & TChildProps;
export function withGetBrandOwner<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnerQuery,
  GetBrandOwnerQueryVariables,
  GetBrandOwnerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnerQuery, GetBrandOwnerQueryVariables, GetBrandOwnerProps<TChildProps, TDataName>>(GetBrandOwnerDocument, {
      alias: 'getBrandOwner',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnerQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBrandOwnerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>(GetBrandOwnerDocument, baseOptions);
      }
export function useGetBrandOwnerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>(GetBrandOwnerDocument, baseOptions);
        }
export type GetBrandOwnerQueryHookResult = ReturnType<typeof useGetBrandOwnerQuery>;
export type GetBrandOwnerLazyQueryHookResult = ReturnType<typeof useGetBrandOwnerLazyQuery>;
export type GetBrandOwnerQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  getAdminCategories {
    id
    parentId
    status {
      id
      value
      displayName
      description
    }
    name
    shortDescription
    longDescription
    seoTitle
    seoDescription
    seoKeywords
    seoSlug
    createdOn
    updatedOn
    subCategories {
      id
      parentId
      status {
        id
        value
        displayName
        description
      }
      name
      shortDescription
      longDescription
      seoTitle
      seoDescription
      seoKeywords
      seoSlug
      createdOn
      updatedOn
      subCategories {
        id
        parentId
        status {
          id
          value
          displayName
          description
        }
        name
        shortDescription
        longDescription
        seoTitle
        seoDescription
        seoKeywords
        seoSlug
        createdOn
        updatedOn
      }
    }
  }
}
    `;
export type GetCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoriesQuery, GetCategoriesQueryVariables>, 'query'>;

    export const GetCategoriesComponent = (props: GetCategoriesComponentProps) => (
      <ApolloReactComponents.Query<GetCategoriesQuery, GetCategoriesQueryVariables> query={GetCategoriesDocument} {...props} />
    );
    
export type GetCategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCategoriesQuery, GetCategoriesQueryVariables>
    } & TChildProps;
export function withGetCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCategoriesQuery,
  GetCategoriesQueryVariables,
  GetCategoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCategoriesQuery, GetCategoriesQueryVariables, GetCategoriesProps<TChildProps, TDataName>>(GetCategoriesDocument, {
      alias: 'getCategories',
      ...operationOptions
    });
};

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
      }
export function useGetCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = ApolloReactCommon.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCompanyDetailsDocument = gql`
    query GetCompanyDetails {
  getStarStockCompanyDetails {
    companyName
    address1
    address2
    city
    county
    postcode
    vatNumber
    awrs
    fee
  }
}
    `;
export type GetCompanyDetailsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>, 'query'>;

    export const GetCompanyDetailsComponent = (props: GetCompanyDetailsComponentProps) => (
      <ApolloReactComponents.Query<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables> query={GetCompanyDetailsDocument} {...props} />
    );
    
export type GetCompanyDetailsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>
    } & TChildProps;
export function withGetCompanyDetails<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCompanyDetailsQuery,
  GetCompanyDetailsQueryVariables,
  GetCompanyDetailsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables, GetCompanyDetailsProps<TChildProps, TDataName>>(GetCompanyDetailsDocument, {
      alias: 'getCompanyDetails',
      ...operationOptions
    });
};

/**
 * __useGetCompanyDetailsQuery__
 *
 * To run a query within a React component, call `useGetCompanyDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(GetCompanyDetailsDocument, baseOptions);
      }
export function useGetCompanyDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(GetCompanyDetailsDocument, baseOptions);
        }
export type GetCompanyDetailsQueryHookResult = ReturnType<typeof useGetCompanyDetailsQuery>;
export type GetCompanyDetailsLazyQueryHookResult = ReturnType<typeof useGetCompanyDetailsLazyQuery>;
export type GetCompanyDetailsQueryResult = ApolloReactCommon.QueryResult<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  dslCurrentUser {
    result
    user {
      id
      firstName
      lastName
      type
      email
      phone
      title
      marketing
      type
      brand {
        id
        displayName
        adminLogo
        termsConditions {
          id
          content
          accepted
        }
      }
    }
  }
}
    `;
export type GetCurrentUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>, 'query'>;

    export const GetCurrentUserComponent = (props: GetCurrentUserComponentProps) => (
      <ApolloReactComponents.Query<GetCurrentUserQuery, GetCurrentUserQueryVariables> query={GetCurrentUserDocument} {...props} />
    );
    
export type GetCurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCurrentUserQuery, GetCurrentUserQueryVariables>
    } & TChildProps;
export function withGetCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables,
  GetCurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCurrentUserQuery, GetCurrentUserQueryVariables, GetCurrentUserProps<TChildProps, TDataName>>(GetCurrentUserDocument, {
      alias: 'getCurrentUser',
      ...operationOptions
    });
};

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = ApolloReactCommon.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetDocumentsDocument = gql`
    query GetDocuments($params: SupportDocumentAdminParams) {
  getAdminSupportDocuments(params: $params) {
    totalCount
    documents {
      id
      name
      url
      status {
        id
        value
        displayName
      }
    }
  }
}
    `;
export type GetDocumentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetDocumentsQuery, GetDocumentsQueryVariables>, 'query'>;

    export const GetDocumentsComponent = (props: GetDocumentsComponentProps) => (
      <ApolloReactComponents.Query<GetDocumentsQuery, GetDocumentsQueryVariables> query={GetDocumentsDocument} {...props} />
    );
    
export type GetDocumentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetDocumentsQuery, GetDocumentsQueryVariables>
    } & TChildProps;
export function withGetDocuments<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetDocumentsQuery,
  GetDocumentsQueryVariables,
  GetDocumentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetDocumentsQuery, GetDocumentsQueryVariables, GetDocumentsProps<TChildProps, TDataName>>(GetDocumentsDocument, {
      alias: 'getDocuments',
      ...operationOptions
    });
};

/**
 * __useGetDocumentsQuery__
 *
 * To run a query within a React component, call `useGetDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetDocumentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDocumentsQuery, GetDocumentsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDocumentsQuery, GetDocumentsQueryVariables>(GetDocumentsDocument, baseOptions);
      }
export function useGetDocumentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDocumentsQuery, GetDocumentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDocumentsQuery, GetDocumentsQueryVariables>(GetDocumentsDocument, baseOptions);
        }
export type GetDocumentsQueryHookResult = ReturnType<typeof useGetDocumentsQuery>;
export type GetDocumentsLazyQueryHookResult = ReturnType<typeof useGetDocumentsLazyQuery>;
export type GetDocumentsQueryResult = ApolloReactCommon.QueryResult<GetDocumentsQuery, GetDocumentsQueryVariables>;
export const FindOutletDocument = gql`
    query FindOutlet($input: FindOutletParams!) {
  findOutlet(input: $input) {
    id
    name
    accountNumber
  }
}
    `;
export type FindOutletComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindOutletQuery, FindOutletQueryVariables>, 'query'> & ({ variables: FindOutletQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindOutletComponent = (props: FindOutletComponentProps) => (
      <ApolloReactComponents.Query<FindOutletQuery, FindOutletQueryVariables> query={FindOutletDocument} {...props} />
    );
    
export type FindOutletProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FindOutletQuery, FindOutletQueryVariables>
    } & TChildProps;
export function withFindOutlet<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FindOutletQuery,
  FindOutletQueryVariables,
  FindOutletProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FindOutletQuery, FindOutletQueryVariables, FindOutletProps<TChildProps, TDataName>>(FindOutletDocument, {
      alias: 'findOutlet',
      ...operationOptions
    });
};

/**
 * __useFindOutletQuery__
 *
 * To run a query within a React component, call `useFindOutletQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOutletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOutletQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindOutletQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOutletQuery, FindOutletQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOutletQuery, FindOutletQueryVariables>(FindOutletDocument, baseOptions);
      }
export function useFindOutletLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOutletQuery, FindOutletQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOutletQuery, FindOutletQueryVariables>(FindOutletDocument, baseOptions);
        }
export type FindOutletQueryHookResult = ReturnType<typeof useFindOutletQuery>;
export type FindOutletLazyQueryHookResult = ReturnType<typeof useFindOutletLazyQuery>;
export type FindOutletQueryResult = ApolloReactCommon.QueryResult<FindOutletQuery, FindOutletQueryVariables>;
export const GetAdGroupsDocument = gql`
    query GetAdGroups($input: BasicAdminListInput!) {
  getAdGroups(input: $input) {
    groups {
      name
      adCount
    }
    totalCount
  }
}
    `;
export type GetAdGroupsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdGroupsQuery, GetAdGroupsQueryVariables>, 'query'> & ({ variables: GetAdGroupsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdGroupsComponent = (props: GetAdGroupsComponentProps) => (
      <ApolloReactComponents.Query<GetAdGroupsQuery, GetAdGroupsQueryVariables> query={GetAdGroupsDocument} {...props} />
    );
    
export type GetAdGroupsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdGroupsQuery, GetAdGroupsQueryVariables>
    } & TChildProps;
export function withGetAdGroups<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdGroupsQuery,
  GetAdGroupsQueryVariables,
  GetAdGroupsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdGroupsQuery, GetAdGroupsQueryVariables, GetAdGroupsProps<TChildProps, TDataName>>(GetAdGroupsDocument, {
      alias: 'getAdGroups',
      ...operationOptions
    });
};

/**
 * __useGetAdGroupsQuery__
 *
 * To run a query within a React component, call `useGetAdGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdGroupsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAdGroupsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdGroupsQuery, GetAdGroupsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdGroupsQuery, GetAdGroupsQueryVariables>(GetAdGroupsDocument, baseOptions);
      }
export function useGetAdGroupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdGroupsQuery, GetAdGroupsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdGroupsQuery, GetAdGroupsQueryVariables>(GetAdGroupsDocument, baseOptions);
        }
export type GetAdGroupsQueryHookResult = ReturnType<typeof useGetAdGroupsQuery>;
export type GetAdGroupsLazyQueryHookResult = ReturnType<typeof useGetAdGroupsLazyQuery>;
export type GetAdGroupsQueryResult = ApolloReactCommon.QueryResult<GetAdGroupsQuery, GetAdGroupsQueryVariables>;
export const GetCurrentAdminFeesDocument = gql`
    query GetCurrentAdminFees {
  getAdminLogisticsFees {
    fees {
      id
      name
      logisticsType
      fee
    }
  }
}
    `;
export type GetCurrentAdminFeesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>, 'query'>;

    export const GetCurrentAdminFeesComponent = (props: GetCurrentAdminFeesComponentProps) => (
      <ApolloReactComponents.Query<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables> query={GetCurrentAdminFeesDocument} {...props} />
    );
    
export type GetCurrentAdminFeesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>
    } & TChildProps;
export function withGetCurrentAdminFees<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCurrentAdminFeesQuery,
  GetCurrentAdminFeesQueryVariables,
  GetCurrentAdminFeesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables, GetCurrentAdminFeesProps<TChildProps, TDataName>>(GetCurrentAdminFeesDocument, {
      alias: 'getCurrentAdminFees',
      ...operationOptions
    });
};

/**
 * __useGetCurrentAdminFeesQuery__
 *
 * To run a query within a React component, call `useGetCurrentAdminFeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentAdminFeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentAdminFeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentAdminFeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>(GetCurrentAdminFeesDocument, baseOptions);
      }
export function useGetCurrentAdminFeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>(GetCurrentAdminFeesDocument, baseOptions);
        }
export type GetCurrentAdminFeesQueryHookResult = ReturnType<typeof useGetCurrentAdminFeesQuery>;
export type GetCurrentAdminFeesLazyQueryHookResult = ReturnType<typeof useGetCurrentAdminFeesLazyQuery>;
export type GetCurrentAdminFeesQueryResult = ApolloReactCommon.QueryResult<GetCurrentAdminFeesQuery, GetCurrentAdminFeesQueryVariables>;
export const GetAdminOrdersOverviewDocument = gql`
    query GetAdminOrdersOverview($i: AdminOverviewInput!) {
  getAdminOrdersOverview(input: $i) {
    ordersStats {
      totalOrders
      ordersValue
      ordersItems
      orderingCustomers
      productsVolume
    }
    orderLines
  }
}
    `;
export type GetAdminOrdersOverviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>, 'query'> & ({ variables: GetAdminOrdersOverviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminOrdersOverviewComponent = (props: GetAdminOrdersOverviewComponentProps) => (
      <ApolloReactComponents.Query<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables> query={GetAdminOrdersOverviewDocument} {...props} />
    );
    
export type GetAdminOrdersOverviewProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>
    } & TChildProps;
export function withGetAdminOrdersOverview<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminOrdersOverviewQuery,
  GetAdminOrdersOverviewQueryVariables,
  GetAdminOrdersOverviewProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables, GetAdminOrdersOverviewProps<TChildProps, TDataName>>(GetAdminOrdersOverviewDocument, {
      alias: 'getAdminOrdersOverview',
      ...operationOptions
    });
};

/**
 * __useGetAdminOrdersOverviewQuery__
 *
 * To run a query within a React component, call `useGetAdminOrdersOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminOrdersOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminOrdersOverviewQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetAdminOrdersOverviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>(GetAdminOrdersOverviewDocument, baseOptions);
      }
export function useGetAdminOrdersOverviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>(GetAdminOrdersOverviewDocument, baseOptions);
        }
export type GetAdminOrdersOverviewQueryHookResult = ReturnType<typeof useGetAdminOrdersOverviewQuery>;
export type GetAdminOrdersOverviewLazyQueryHookResult = ReturnType<typeof useGetAdminOrdersOverviewLazyQuery>;
export type GetAdminOrdersOverviewQueryResult = ApolloReactCommon.QueryResult<GetAdminOrdersOverviewQuery, GetAdminOrdersOverviewQueryVariables>;
export const GetAdminOrdersWeeklyStatsDocument = gql`
    query GetAdminOrdersWeeklyStats {
  getAdminOrdersWeeklyStats {
    dateTime
    ordersCount
    orderAmount
  }
}
    `;
export type GetAdminOrdersWeeklyStatsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>, 'query'>;

    export const GetAdminOrdersWeeklyStatsComponent = (props: GetAdminOrdersWeeklyStatsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables> query={GetAdminOrdersWeeklyStatsDocument} {...props} />
    );
    
export type GetAdminOrdersWeeklyStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>
    } & TChildProps;
export function withGetAdminOrdersWeeklyStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminOrdersWeeklyStatsQuery,
  GetAdminOrdersWeeklyStatsQueryVariables,
  GetAdminOrdersWeeklyStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables, GetAdminOrdersWeeklyStatsProps<TChildProps, TDataName>>(GetAdminOrdersWeeklyStatsDocument, {
      alias: 'getAdminOrdersWeeklyStats',
      ...operationOptions
    });
};

/**
 * __useGetAdminOrdersWeeklyStatsQuery__
 *
 * To run a query within a React component, call `useGetAdminOrdersWeeklyStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminOrdersWeeklyStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminOrdersWeeklyStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminOrdersWeeklyStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>(GetAdminOrdersWeeklyStatsDocument, baseOptions);
      }
export function useGetAdminOrdersWeeklyStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>(GetAdminOrdersWeeklyStatsDocument, baseOptions);
        }
export type GetAdminOrdersWeeklyStatsQueryHookResult = ReturnType<typeof useGetAdminOrdersWeeklyStatsQuery>;
export type GetAdminOrdersWeeklyStatsLazyQueryHookResult = ReturnType<typeof useGetAdminOrdersWeeklyStatsLazyQuery>;
export type GetAdminOrdersWeeklyStatsQueryResult = ApolloReactCommon.QueryResult<GetAdminOrdersWeeklyStatsQuery, GetAdminOrdersWeeklyStatsQueryVariables>;
export const GetAdminOverviewDocument = gql`
    query GetAdminOverview($i: AdminOverviewInput!) {
  getAdminOverview(input: $i) {
    inactiveMarketingUsers
    activeProducts
    orderingAccounts
    activePromotions
    brandOwners
    registeredCustomers
    noWeekOrderCustomers
  }
}
    `;
export type GetAdminOverviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>, 'query'> & ({ variables: GetAdminOverviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminOverviewComponent = (props: GetAdminOverviewComponentProps) => (
      <ApolloReactComponents.Query<GetAdminOverviewQuery, GetAdminOverviewQueryVariables> query={GetAdminOverviewDocument} {...props} />
    );
    
export type GetAdminOverviewProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>
    } & TChildProps;
export function withGetAdminOverview<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminOverviewQuery,
  GetAdminOverviewQueryVariables,
  GetAdminOverviewProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminOverviewQuery, GetAdminOverviewQueryVariables, GetAdminOverviewProps<TChildProps, TDataName>>(GetAdminOverviewDocument, {
      alias: 'getAdminOverview',
      ...operationOptions
    });
};

/**
 * __useGetAdminOverviewQuery__
 *
 * To run a query within a React component, call `useGetAdminOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminOverviewQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetAdminOverviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>(GetAdminOverviewDocument, baseOptions);
      }
export function useGetAdminOverviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>(GetAdminOverviewDocument, baseOptions);
        }
export type GetAdminOverviewQueryHookResult = ReturnType<typeof useGetAdminOverviewQuery>;
export type GetAdminOverviewLazyQueryHookResult = ReturnType<typeof useGetAdminOverviewLazyQuery>;
export type GetAdminOverviewQueryResult = ApolloReactCommon.QueryResult<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>;
export const GetAdminTopProductsDocument = gql`
    query GetAdminTopProducts($i: AdminOverviewInput!) {
  getAdminTopProducts(input: $i) {
    id
    name
    code
    thumbnailPath
  }
}
    `;
export type GetAdminTopProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>, 'query'> & ({ variables: GetAdminTopProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminTopProductsComponent = (props: GetAdminTopProductsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables> query={GetAdminTopProductsDocument} {...props} />
    );
    
export type GetAdminTopProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>
    } & TChildProps;
export function withGetAdminTopProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminTopProductsQuery,
  GetAdminTopProductsQueryVariables,
  GetAdminTopProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables, GetAdminTopProductsProps<TChildProps, TDataName>>(GetAdminTopProductsDocument, {
      alias: 'getAdminTopProducts',
      ...operationOptions
    });
};

/**
 * __useGetAdminTopProductsQuery__
 *
 * To run a query within a React component, call `useGetAdminTopProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminTopProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminTopProductsQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetAdminTopProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>(GetAdminTopProductsDocument, baseOptions);
      }
export function useGetAdminTopProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>(GetAdminTopProductsDocument, baseOptions);
        }
export type GetAdminTopProductsQueryHookResult = ReturnType<typeof useGetAdminTopProductsQuery>;
export type GetAdminTopProductsLazyQueryHookResult = ReturnType<typeof useGetAdminTopProductsLazyQuery>;
export type GetAdminTopProductsQueryResult = ApolloReactCommon.QueryResult<GetAdminTopProductsQuery, GetAdminTopProductsQueryVariables>;
export const GetAdminTopPromotionsDocument = gql`
    query GetAdminTopPromotions($i: AdminOverviewInput!) {
  getAdminTopPromotions(input: $i) {
    id
    name
  }
}
    `;
export type GetAdminTopPromotionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>, 'query'> & ({ variables: GetAdminTopPromotionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminTopPromotionsComponent = (props: GetAdminTopPromotionsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables> query={GetAdminTopPromotionsDocument} {...props} />
    );
    
export type GetAdminTopPromotionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>
    } & TChildProps;
export function withGetAdminTopPromotions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminTopPromotionsQuery,
  GetAdminTopPromotionsQueryVariables,
  GetAdminTopPromotionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables, GetAdminTopPromotionsProps<TChildProps, TDataName>>(GetAdminTopPromotionsDocument, {
      alias: 'getAdminTopPromotions',
      ...operationOptions
    });
};

/**
 * __useGetAdminTopPromotionsQuery__
 *
 * To run a query within a React component, call `useGetAdminTopPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminTopPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminTopPromotionsQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetAdminTopPromotionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>(GetAdminTopPromotionsDocument, baseOptions);
      }
export function useGetAdminTopPromotionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>(GetAdminTopPromotionsDocument, baseOptions);
        }
export type GetAdminTopPromotionsQueryHookResult = ReturnType<typeof useGetAdminTopPromotionsQuery>;
export type GetAdminTopPromotionsLazyQueryHookResult = ReturnType<typeof useGetAdminTopPromotionsLazyQuery>;
export type GetAdminTopPromotionsQueryResult = ApolloReactCommon.QueryResult<GetAdminTopPromotionsQuery, GetAdminTopPromotionsQueryVariables>;
export const GetAdminUpsellProductsDocument = gql`
    query GetAdminUpsellProducts {
  getAdminUpsellProducts {
    order {
      ...DslProductFields
    }
    basket {
      ...DslProductFields
    }
    home {
      ...DslProductFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type GetAdminUpsellProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>, 'query'>;

    export const GetAdminUpsellProductsComponent = (props: GetAdminUpsellProductsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables> query={GetAdminUpsellProductsDocument} {...props} />
    );
    
export type GetAdminUpsellProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>
    } & TChildProps;
export function withGetAdminUpsellProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminUpsellProductsQuery,
  GetAdminUpsellProductsQueryVariables,
  GetAdminUpsellProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables, GetAdminUpsellProductsProps<TChildProps, TDataName>>(GetAdminUpsellProductsDocument, {
      alias: 'getAdminUpsellProducts',
      ...operationOptions
    });
};

/**
 * __useGetAdminUpsellProductsQuery__
 *
 * To run a query within a React component, call `useGetAdminUpsellProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminUpsellProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminUpsellProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminUpsellProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>(GetAdminUpsellProductsDocument, baseOptions);
      }
export function useGetAdminUpsellProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>(GetAdminUpsellProductsDocument, baseOptions);
        }
export type GetAdminUpsellProductsQueryHookResult = ReturnType<typeof useGetAdminUpsellProductsQuery>;
export type GetAdminUpsellProductsLazyQueryHookResult = ReturnType<typeof useGetAdminUpsellProductsLazyQuery>;
export type GetAdminUpsellProductsQueryResult = ApolloReactCommon.QueryResult<GetAdminUpsellProductsQuery, GetAdminUpsellProductsQueryVariables>;
export const GetAdsForGroupDocument = gql`
    query GetAdsForGroup($groupName: String!) {
  getAdsForGroup(name: $groupName) {
    id
    status {
      value
    }
    type
    image {
      id
      status {
        value
      }
      type
      url
      mobileUrl
      thumbnail
      altText
      titleText
      name
      createdOn
      updatedOn
    }
    targetUrl
    identifier
    grouping
    position
    titleText
  }
}
    `;
export type GetAdsForGroupComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>, 'query'> & ({ variables: GetAdsForGroupQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdsForGroupComponent = (props: GetAdsForGroupComponentProps) => (
      <ApolloReactComponents.Query<GetAdsForGroupQuery, GetAdsForGroupQueryVariables> query={GetAdsForGroupDocument} {...props} />
    );
    
export type GetAdsForGroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>
    } & TChildProps;
export function withGetAdsForGroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdsForGroupQuery,
  GetAdsForGroupQueryVariables,
  GetAdsForGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdsForGroupQuery, GetAdsForGroupQueryVariables, GetAdsForGroupProps<TChildProps, TDataName>>(GetAdsForGroupDocument, {
      alias: 'getAdsForGroup',
      ...operationOptions
    });
};

/**
 * __useGetAdsForGroupQuery__
 *
 * To run a query within a React component, call `useGetAdsForGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdsForGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdsForGroupQuery({
 *   variables: {
 *      groupName: // value for 'groupName'
 *   },
 * });
 */
export function useGetAdsForGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>(GetAdsForGroupDocument, baseOptions);
      }
export function useGetAdsForGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>(GetAdsForGroupDocument, baseOptions);
        }
export type GetAdsForGroupQueryHookResult = ReturnType<typeof useGetAdsForGroupQuery>;
export type GetAdsForGroupLazyQueryHookResult = ReturnType<typeof useGetAdsForGroupLazyQuery>;
export type GetAdsForGroupQueryResult = ApolloReactCommon.QueryResult<GetAdsForGroupQuery, GetAdsForGroupQueryVariables>;
export const GetBrandOwnerByIdDocument = gql`
    query GetBrandOwnerByID($id: Int!) {
  getBrandOwnerByID(brandId: $id) {
    owner {
      id
      displayName
      slug
      language
      mainEmail
      ccEmail
      phone
      installEmail
      pumpClipEmail
      createdOn
      updatedOn
      description
      storefrontLogo
      adminLogo
      isBrandNursery
      isDefaultDistributor
      isBrandPartner
      orderEmailAddresses
      ads {
        id
        status {
          value
        }
        type
        image {
          id
          status {
            value
          }
          type
          url
          mobileUrl
          thumbnail
          altText
          titleText
          name
          createdOn
          updatedOn
        }
        targetUrl
        identifier
        grouping
        position
        titleText
      }
    }
    address {
      id
      outletId
      title
      firstName
      middleName
      lastName
      lineOne
      lineTwo
      lineThree
      city
      county
      postcode
      country
      type
      brandOwnerId
    }
    logisticsFees {
      id
      logisticsFeeId
      fee
    }
  }
}
    `;
export type GetBrandOwnerByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>, 'query'> & ({ variables: GetBrandOwnerByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBrandOwnerByIdComponent = (props: GetBrandOwnerByIdComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables> query={GetBrandOwnerByIdDocument} {...props} />
    );
    
export type GetBrandOwnerByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>
    } & TChildProps;
export function withGetBrandOwnerById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnerByIdQuery,
  GetBrandOwnerByIdQueryVariables,
  GetBrandOwnerByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables, GetBrandOwnerByIdProps<TChildProps, TDataName>>(GetBrandOwnerByIdDocument, {
      alias: 'getBrandOwnerById',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnerByIdQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBrandOwnerByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>(GetBrandOwnerByIdDocument, baseOptions);
      }
export function useGetBrandOwnerByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>(GetBrandOwnerByIdDocument, baseOptions);
        }
export type GetBrandOwnerByIdQueryHookResult = ReturnType<typeof useGetBrandOwnerByIdQuery>;
export type GetBrandOwnerByIdLazyQueryHookResult = ReturnType<typeof useGetBrandOwnerByIdLazyQuery>;
export type GetBrandOwnerByIdQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnerByIdQuery, GetBrandOwnerByIdQueryVariables>;
export const GetBrandOwnerOrdersWeeklyStatsDocument = gql`
    query GetBrandOwnerOrdersWeeklyStats {
  getBrandOwnerOrdersWeeklyStats {
    dateTime
    ordersCount
    orderAmount
  }
}
    `;
export type GetBrandOwnerOrdersWeeklyStatsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>, 'query'>;

    export const GetBrandOwnerOrdersWeeklyStatsComponent = (props: GetBrandOwnerOrdersWeeklyStatsComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables> query={GetBrandOwnerOrdersWeeklyStatsDocument} {...props} />
    );
    
export type GetBrandOwnerOrdersWeeklyStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>
    } & TChildProps;
export function withGetBrandOwnerOrdersWeeklyStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnerOrdersWeeklyStatsQuery,
  GetBrandOwnerOrdersWeeklyStatsQueryVariables,
  GetBrandOwnerOrdersWeeklyStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables, GetBrandOwnerOrdersWeeklyStatsProps<TChildProps, TDataName>>(GetBrandOwnerOrdersWeeklyStatsDocument, {
      alias: 'getBrandOwnerOrdersWeeklyStats',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnerOrdersWeeklyStatsQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnerOrdersWeeklyStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnerOrdersWeeklyStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnerOrdersWeeklyStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBrandOwnerOrdersWeeklyStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>(GetBrandOwnerOrdersWeeklyStatsDocument, baseOptions);
      }
export function useGetBrandOwnerOrdersWeeklyStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>(GetBrandOwnerOrdersWeeklyStatsDocument, baseOptions);
        }
export type GetBrandOwnerOrdersWeeklyStatsQueryHookResult = ReturnType<typeof useGetBrandOwnerOrdersWeeklyStatsQuery>;
export type GetBrandOwnerOrdersWeeklyStatsLazyQueryHookResult = ReturnType<typeof useGetBrandOwnerOrdersWeeklyStatsLazyQuery>;
export type GetBrandOwnerOrdersWeeklyStatsQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnerOrdersWeeklyStatsQuery, GetBrandOwnerOrdersWeeklyStatsQueryVariables>;
export const GetBrandOwnerOverviewDocument = gql`
    query GetBrandOwnerOverview($i: BrandOwnerOverviewInput!) {
  getBrandOwnerOverview(input: $i) {
    totalOrders
    activeProducts
    ordersValue
    orderingAccounts
    activePromotions
    productsVolume
  }
}
    `;
export type GetBrandOwnerOverviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>, 'query'> & ({ variables: GetBrandOwnerOverviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBrandOwnerOverviewComponent = (props: GetBrandOwnerOverviewComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables> query={GetBrandOwnerOverviewDocument} {...props} />
    );
    
export type GetBrandOwnerOverviewProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>
    } & TChildProps;
export function withGetBrandOwnerOverview<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnerOverviewQuery,
  GetBrandOwnerOverviewQueryVariables,
  GetBrandOwnerOverviewProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables, GetBrandOwnerOverviewProps<TChildProps, TDataName>>(GetBrandOwnerOverviewDocument, {
      alias: 'getBrandOwnerOverview',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnerOverviewQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnerOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnerOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnerOverviewQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetBrandOwnerOverviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>(GetBrandOwnerOverviewDocument, baseOptions);
      }
export function useGetBrandOwnerOverviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>(GetBrandOwnerOverviewDocument, baseOptions);
        }
export type GetBrandOwnerOverviewQueryHookResult = ReturnType<typeof useGetBrandOwnerOverviewQuery>;
export type GetBrandOwnerOverviewLazyQueryHookResult = ReturnType<typeof useGetBrandOwnerOverviewLazyQuery>;
export type GetBrandOwnerOverviewQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnerOverviewQuery, GetBrandOwnerOverviewQueryVariables>;
export const GetBrandOwnerTopProductsDocument = gql`
    query GetBrandOwnerTopProducts($i: BrandOwnerOverviewInput!) {
  getBrandOwnerTopProducts(input: $i) {
    id
    status {
      displayName
    }
    name
    shortDescription
    longDescription
    code
    totalSales
    thumbnailPath
  }
}
    `;
export type GetBrandOwnerTopProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>, 'query'> & ({ variables: GetBrandOwnerTopProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBrandOwnerTopProductsComponent = (props: GetBrandOwnerTopProductsComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables> query={GetBrandOwnerTopProductsDocument} {...props} />
    );
    
export type GetBrandOwnerTopProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>
    } & TChildProps;
export function withGetBrandOwnerTopProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnerTopProductsQuery,
  GetBrandOwnerTopProductsQueryVariables,
  GetBrandOwnerTopProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables, GetBrandOwnerTopProductsProps<TChildProps, TDataName>>(GetBrandOwnerTopProductsDocument, {
      alias: 'getBrandOwnerTopProducts',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnerTopProductsQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnerTopProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnerTopProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnerTopProductsQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetBrandOwnerTopProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>(GetBrandOwnerTopProductsDocument, baseOptions);
      }
export function useGetBrandOwnerTopProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>(GetBrandOwnerTopProductsDocument, baseOptions);
        }
export type GetBrandOwnerTopProductsQueryHookResult = ReturnType<typeof useGetBrandOwnerTopProductsQuery>;
export type GetBrandOwnerTopProductsLazyQueryHookResult = ReturnType<typeof useGetBrandOwnerTopProductsLazyQuery>;
export type GetBrandOwnerTopProductsQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnerTopProductsQuery, GetBrandOwnerTopProductsQueryVariables>;
export const GetBrandOwnerTopPromotionsDocument = gql`
    query GetBrandOwnerTopPromotions {
  getBrandOwnerTopPromotions {
    id
    name
  }
}
    `;
export type GetBrandOwnerTopPromotionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>, 'query'>;

    export const GetBrandOwnerTopPromotionsComponent = (props: GetBrandOwnerTopPromotionsComponentProps) => (
      <ApolloReactComponents.Query<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables> query={GetBrandOwnerTopPromotionsDocument} {...props} />
    );
    
export type GetBrandOwnerTopPromotionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>
    } & TChildProps;
export function withGetBrandOwnerTopPromotions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBrandOwnerTopPromotionsQuery,
  GetBrandOwnerTopPromotionsQueryVariables,
  GetBrandOwnerTopPromotionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables, GetBrandOwnerTopPromotionsProps<TChildProps, TDataName>>(GetBrandOwnerTopPromotionsDocument, {
      alias: 'getBrandOwnerTopPromotions',
      ...operationOptions
    });
};

/**
 * __useGetBrandOwnerTopPromotionsQuery__
 *
 * To run a query within a React component, call `useGetBrandOwnerTopPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandOwnerTopPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandOwnerTopPromotionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBrandOwnerTopPromotionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>(GetBrandOwnerTopPromotionsDocument, baseOptions);
      }
export function useGetBrandOwnerTopPromotionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>(GetBrandOwnerTopPromotionsDocument, baseOptions);
        }
export type GetBrandOwnerTopPromotionsQueryHookResult = ReturnType<typeof useGetBrandOwnerTopPromotionsQuery>;
export type GetBrandOwnerTopPromotionsLazyQueryHookResult = ReturnType<typeof useGetBrandOwnerTopPromotionsLazyQuery>;
export type GetBrandOwnerTopPromotionsQueryResult = ApolloReactCommon.QueryResult<GetBrandOwnerTopPromotionsQuery, GetBrandOwnerTopPromotionsQueryVariables>;
export const GetCreditNoteByIdDocument = gql`
    query GetCreditNoteById($id: Int!) {
  getCreditNoteById(id: $id) {
    id
    creditNumber
    orderId
    orderReference
    outletName
    providerReferences {
      id
      creditNoteId
      reference
      paymentProvider
    }
    subtotal
    discount
    tax
    total
    createdBy {
      ...DslUserFields
    }
    createdOn
    updatedOn
    items {
      brandOwnerId
      orderItemId
      subtotal
      tax
      qty
      total
      taxRate
      taxCalculationType
      reasons
    }
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type GetCreditNoteByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>, 'query'> & ({ variables: GetCreditNoteByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCreditNoteByIdComponent = (props: GetCreditNoteByIdComponentProps) => (
      <ApolloReactComponents.Query<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables> query={GetCreditNoteByIdDocument} {...props} />
    );
    
export type GetCreditNoteByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>
    } & TChildProps;
export function withGetCreditNoteById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCreditNoteByIdQuery,
  GetCreditNoteByIdQueryVariables,
  GetCreditNoteByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables, GetCreditNoteByIdProps<TChildProps, TDataName>>(GetCreditNoteByIdDocument, {
      alias: 'getCreditNoteById',
      ...operationOptions
    });
};

/**
 * __useGetCreditNoteByIdQuery__
 *
 * To run a query within a React component, call `useGetCreditNoteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditNoteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditNoteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCreditNoteByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>(GetCreditNoteByIdDocument, baseOptions);
      }
export function useGetCreditNoteByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>(GetCreditNoteByIdDocument, baseOptions);
        }
export type GetCreditNoteByIdQueryHookResult = ReturnType<typeof useGetCreditNoteByIdQuery>;
export type GetCreditNoteByIdLazyQueryHookResult = ReturnType<typeof useGetCreditNoteByIdLazyQuery>;
export type GetCreditNoteByIdQueryResult = ApolloReactCommon.QueryResult<GetCreditNoteByIdQuery, GetCreditNoteByIdQueryVariables>;
export const GetCreditNotesDocument = gql`
    query GetCreditNotes($input: CreditNoteFilters!) {
  getCreditNotes(input: $input) {
    totalCount
    notes {
      id
      creditNumber
      orderId
      orderReference
      outletName
      providerReferences {
        id
        creditNoteId
        reference
        paymentProvider
      }
      subtotal
      discount
      tax
      total
      createdOn
      updatedOn
      items {
        id
        brandOwnerId
        orderItemId
        subtotal
        qty
        tax
        total
        taxRate
        taxCalculationType
        reasons
      }
      createdBy {
        ...DslUserFields
      }
    }
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type GetCreditNotesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCreditNotesQuery, GetCreditNotesQueryVariables>, 'query'> & ({ variables: GetCreditNotesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCreditNotesComponent = (props: GetCreditNotesComponentProps) => (
      <ApolloReactComponents.Query<GetCreditNotesQuery, GetCreditNotesQueryVariables> query={GetCreditNotesDocument} {...props} />
    );
    
export type GetCreditNotesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCreditNotesQuery, GetCreditNotesQueryVariables>
    } & TChildProps;
export function withGetCreditNotes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCreditNotesQuery,
  GetCreditNotesQueryVariables,
  GetCreditNotesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCreditNotesQuery, GetCreditNotesQueryVariables, GetCreditNotesProps<TChildProps, TDataName>>(GetCreditNotesDocument, {
      alias: 'getCreditNotes',
      ...operationOptions
    });
};

/**
 * __useGetCreditNotesQuery__
 *
 * To run a query within a React component, call `useGetCreditNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditNotesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCreditNotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCreditNotesQuery, GetCreditNotesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCreditNotesQuery, GetCreditNotesQueryVariables>(GetCreditNotesDocument, baseOptions);
      }
export function useGetCreditNotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCreditNotesQuery, GetCreditNotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCreditNotesQuery, GetCreditNotesQueryVariables>(GetCreditNotesDocument, baseOptions);
        }
export type GetCreditNotesQueryHookResult = ReturnType<typeof useGetCreditNotesQuery>;
export type GetCreditNotesLazyQueryHookResult = ReturnType<typeof useGetCreditNotesLazyQuery>;
export type GetCreditNotesQueryResult = ApolloReactCommon.QueryResult<GetCreditNotesQuery, GetCreditNotesQueryVariables>;
export const GetAdminDistributorsDocument = gql`
    query GetAdminDistributors {
  getAdminDistributors {
    id
    displayName
  }
}
    `;
export type GetAdminDistributorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>, 'query'>;

    export const GetAdminDistributorsComponent = (props: GetAdminDistributorsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables> query={GetAdminDistributorsDocument} {...props} />
    );
    
export type GetAdminDistributorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>
    } & TChildProps;
export function withGetAdminDistributors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminDistributorsQuery,
  GetAdminDistributorsQueryVariables,
  GetAdminDistributorsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables, GetAdminDistributorsProps<TChildProps, TDataName>>(GetAdminDistributorsDocument, {
      alias: 'getAdminDistributors',
      ...operationOptions
    });
};

/**
 * __useGetAdminDistributorsQuery__
 *
 * To run a query within a React component, call `useGetAdminDistributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminDistributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminDistributorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminDistributorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>(GetAdminDistributorsDocument, baseOptions);
      }
export function useGetAdminDistributorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>(GetAdminDistributorsDocument, baseOptions);
        }
export type GetAdminDistributorsQueryHookResult = ReturnType<typeof useGetAdminDistributorsQuery>;
export type GetAdminDistributorsLazyQueryHookResult = ReturnType<typeof useGetAdminDistributorsLazyQuery>;
export type GetAdminDistributorsQueryResult = ApolloReactCommon.QueryResult<GetAdminDistributorsQuery, GetAdminDistributorsQueryVariables>;
export const GetProductAttributeSelectionDocument = gql`
    query GetProductAttributeSelection($productId: Int) {
  getProductAttributeSelection(productId: $productId) {
    feature {
      id
      name
      type {
        name
      }
      position
      multipleValueSelection
      readOnly
      status {
        id
        displayName
      }
      mandatory
      defaultValues {
        value
        position
      }
      value
      values {
        value
      }
    }
  }
}
    `;
export type GetProductAttributeSelectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>, 'query'>;

    export const GetProductAttributeSelectionComponent = (props: GetProductAttributeSelectionComponentProps) => (
      <ApolloReactComponents.Query<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables> query={GetProductAttributeSelectionDocument} {...props} />
    );
    
export type GetProductAttributeSelectionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>
    } & TChildProps;
export function withGetProductAttributeSelection<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductAttributeSelectionQuery,
  GetProductAttributeSelectionQueryVariables,
  GetProductAttributeSelectionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables, GetProductAttributeSelectionProps<TChildProps, TDataName>>(GetProductAttributeSelectionDocument, {
      alias: 'getProductAttributeSelection',
      ...operationOptions
    });
};

/**
 * __useGetProductAttributeSelectionQuery__
 *
 * To run a query within a React component, call `useGetProductAttributeSelectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductAttributeSelectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductAttributeSelectionQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductAttributeSelectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>(GetProductAttributeSelectionDocument, baseOptions);
      }
export function useGetProductAttributeSelectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>(GetProductAttributeSelectionDocument, baseOptions);
        }
export type GetProductAttributeSelectionQueryHookResult = ReturnType<typeof useGetProductAttributeSelectionQuery>;
export type GetProductAttributeSelectionLazyQueryHookResult = ReturnType<typeof useGetProductAttributeSelectionLazyQuery>;
export type GetProductAttributeSelectionQueryResult = ApolloReactCommon.QueryResult<GetProductAttributeSelectionQuery, GetProductAttributeSelectionQueryVariables>;
export const GetProductDistributorsDocument = gql`
    query getProductDistributors($params: AvailableDistributorParams!) {
  getAvailableProductDistributors(params: $params) {
    id
    name
    isDefault
  }
}
    `;
export type GetProductDistributorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>, 'query'> & ({ variables: GetProductDistributorsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProductDistributorsComponent = (props: GetProductDistributorsComponentProps) => (
      <ApolloReactComponents.Query<GetProductDistributorsQuery, GetProductDistributorsQueryVariables> query={GetProductDistributorsDocument} {...props} />
    );
    
export type GetProductDistributorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>
    } & TChildProps;
export function withGetProductDistributors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductDistributorsQuery,
  GetProductDistributorsQueryVariables,
  GetProductDistributorsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductDistributorsQuery, GetProductDistributorsQueryVariables, GetProductDistributorsProps<TChildProps, TDataName>>(GetProductDistributorsDocument, {
      alias: 'getProductDistributors',
      ...operationOptions
    });
};

/**
 * __useGetProductDistributorsQuery__
 *
 * To run a query within a React component, call `useGetProductDistributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDistributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDistributorsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetProductDistributorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>(GetProductDistributorsDocument, baseOptions);
      }
export function useGetProductDistributorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>(GetProductDistributorsDocument, baseOptions);
        }
export type GetProductDistributorsQueryHookResult = ReturnType<typeof useGetProductDistributorsQuery>;
export type GetProductDistributorsLazyQueryHookResult = ReturnType<typeof useGetProductDistributorsLazyQuery>;
export type GetProductDistributorsQueryResult = ApolloReactCommon.QueryResult<GetProductDistributorsQuery, GetProductDistributorsQueryVariables>;
export const GetProductFeatureByIdDocument = gql`
    query GetProductFeatureById($id: Int!) {
  getProductFeatureById(id: $id) {
    id
    name
    value
    values {
      id
      value
    }
    description
    featured
    filterable
    position
    createdOn
    updatedOn
    readOnly
    code
    type {
      id
      name
      createdOn
      updatedOn
    }
    status {
      id
      value
      displayName
    }
    defaultValues {
      value
      position
    }
    storeFrontDisplay
    mandatory
    brandOwnerDisplay
    multipleValueSelection
  }
}
    `;
export type GetProductFeatureByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>, 'query'> & ({ variables: GetProductFeatureByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProductFeatureByIdComponent = (props: GetProductFeatureByIdComponentProps) => (
      <ApolloReactComponents.Query<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables> query={GetProductFeatureByIdDocument} {...props} />
    );
    
export type GetProductFeatureByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>
    } & TChildProps;
export function withGetProductFeatureById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductFeatureByIdQuery,
  GetProductFeatureByIdQueryVariables,
  GetProductFeatureByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables, GetProductFeatureByIdProps<TChildProps, TDataName>>(GetProductFeatureByIdDocument, {
      alias: 'getProductFeatureById',
      ...operationOptions
    });
};

/**
 * __useGetProductFeatureByIdQuery__
 *
 * To run a query within a React component, call `useGetProductFeatureByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductFeatureByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductFeatureByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductFeatureByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>(GetProductFeatureByIdDocument, baseOptions);
      }
export function useGetProductFeatureByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>(GetProductFeatureByIdDocument, baseOptions);
        }
export type GetProductFeatureByIdQueryHookResult = ReturnType<typeof useGetProductFeatureByIdQuery>;
export type GetProductFeatureByIdLazyQueryHookResult = ReturnType<typeof useGetProductFeatureByIdLazyQuery>;
export type GetProductFeatureByIdQueryResult = ApolloReactCommon.QueryResult<GetProductFeatureByIdQuery, GetProductFeatureByIdQueryVariables>;
export const GetProductFeaturesListDocument = gql`
    query getProductFeaturesList($i: ProductFeaturesListInput) {
  getProductFeaturesList(params: $i) {
    totalCount
    features {
      id
      name
      position
      description
      featured
      filterable
      createdOn
      updatedOn
      readOnly
      code
      multipleValueSelection
      storeFrontDisplay
      mandatory
      brandOwnerDisplay
      multipleValueSelection
      type {
        id
        name
      }
      status {
        id
        displayName
      }
      defaultValues {
        value
        position
      }
    }
  }
}
    `;
export type GetProductFeaturesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>, 'query'>;

    export const GetProductFeaturesListComponent = (props: GetProductFeaturesListComponentProps) => (
      <ApolloReactComponents.Query<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables> query={GetProductFeaturesListDocument} {...props} />
    );
    
export type GetProductFeaturesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>
    } & TChildProps;
export function withGetProductFeaturesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductFeaturesListQuery,
  GetProductFeaturesListQueryVariables,
  GetProductFeaturesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables, GetProductFeaturesListProps<TChildProps, TDataName>>(GetProductFeaturesListDocument, {
      alias: 'getProductFeaturesList',
      ...operationOptions
    });
};

/**
 * __useGetProductFeaturesListQuery__
 *
 * To run a query within a React component, call `useGetProductFeaturesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductFeaturesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductFeaturesListQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetProductFeaturesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>(GetProductFeaturesListDocument, baseOptions);
      }
export function useGetProductFeaturesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>(GetProductFeaturesListDocument, baseOptions);
        }
export type GetProductFeaturesListQueryHookResult = ReturnType<typeof useGetProductFeaturesListQuery>;
export type GetProductFeaturesListLazyQueryHookResult = ReturnType<typeof useGetProductFeaturesListLazyQuery>;
export type GetProductFeaturesListQueryResult = ApolloReactCommon.QueryResult<GetProductFeaturesListQuery, GetProductFeaturesListQueryVariables>;
export const GetRecommendationByIdDocument = gql`
    query GetRecommendationByID($id: Int!) {
  getRecommendationByID(id: $id) {
    id
    status {
      id
      displayName
    }
    title
    description
    closedOn
    createdOn
    viewedOn
    createdBy {
      firstName
      lastName
    }
    updatedOn
    brandOwner {
      id
      displayName
    }
  }
}
    `;
export type GetRecommendationByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>, 'query'> & ({ variables: GetRecommendationByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetRecommendationByIdComponent = (props: GetRecommendationByIdComponentProps) => (
      <ApolloReactComponents.Query<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables> query={GetRecommendationByIdDocument} {...props} />
    );
    
export type GetRecommendationByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>
    } & TChildProps;
export function withGetRecommendationById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRecommendationByIdQuery,
  GetRecommendationByIdQueryVariables,
  GetRecommendationByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables, GetRecommendationByIdProps<TChildProps, TDataName>>(GetRecommendationByIdDocument, {
      alias: 'getRecommendationById',
      ...operationOptions
    });
};

/**
 * __useGetRecommendationByIdQuery__
 *
 * To run a query within a React component, call `useGetRecommendationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecommendationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecommendationByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>(GetRecommendationByIdDocument, baseOptions);
      }
export function useGetRecommendationByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>(GetRecommendationByIdDocument, baseOptions);
        }
export type GetRecommendationByIdQueryHookResult = ReturnType<typeof useGetRecommendationByIdQuery>;
export type GetRecommendationByIdLazyQueryHookResult = ReturnType<typeof useGetRecommendationByIdLazyQuery>;
export type GetRecommendationByIdQueryResult = ApolloReactCommon.QueryResult<GetRecommendationByIdQuery, GetRecommendationByIdQueryVariables>;
export const GetRecommendationsDocument = gql`
    query GetRecommendations($i: RecommendationsListParams!) {
  getRecommendations(input: $i) {
    totalCount
    recommendations {
      id
      status {
        id
        displayName
      }
      title
      description
      closedOn
      createdOn
      updatedOn
      viewedOn
      brandOwner {
        id
        displayName
      }
    }
  }
}
    `;
export type GetRecommendationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>, 'query'> & ({ variables: GetRecommendationsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetRecommendationsComponent = (props: GetRecommendationsComponentProps) => (
      <ApolloReactComponents.Query<GetRecommendationsQuery, GetRecommendationsQueryVariables> query={GetRecommendationsDocument} {...props} />
    );
    
export type GetRecommendationsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetRecommendationsQuery, GetRecommendationsQueryVariables>
    } & TChildProps;
export function withGetRecommendations<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRecommendationsQuery,
  GetRecommendationsQueryVariables,
  GetRecommendationsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetRecommendationsQuery, GetRecommendationsQueryVariables, GetRecommendationsProps<TChildProps, TDataName>>(GetRecommendationsDocument, {
      alias: 'getRecommendations',
      ...operationOptions
    });
};

/**
 * __useGetRecommendationsQuery__
 *
 * To run a query within a React component, call `useGetRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecommendationsQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetRecommendationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRecommendationsQuery, GetRecommendationsQueryVariables>(GetRecommendationsDocument, baseOptions);
      }
export function useGetRecommendationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRecommendationsQuery, GetRecommendationsQueryVariables>(GetRecommendationsDocument, baseOptions);
        }
export type GetRecommendationsQueryHookResult = ReturnType<typeof useGetRecommendationsQuery>;
export type GetRecommendationsLazyQueryHookResult = ReturnType<typeof useGetRecommendationsLazyQuery>;
export type GetRecommendationsQueryResult = ApolloReactCommon.QueryResult<GetRecommendationsQuery, GetRecommendationsQueryVariables>;
export const GetTermsConditionsByIdDocument = gql`
    query GetTermsConditionsByID($i: Int!) {
  getTermsConditionsByID(id: $i) {
    id
    title
    content
    accepted
    status {
      value
      displayName
    }
  }
}
    `;
export type GetTermsConditionsByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>, 'query'> & ({ variables: GetTermsConditionsByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTermsConditionsByIdComponent = (props: GetTermsConditionsByIdComponentProps) => (
      <ApolloReactComponents.Query<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables> query={GetTermsConditionsByIdDocument} {...props} />
    );
    
export type GetTermsConditionsByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>
    } & TChildProps;
export function withGetTermsConditionsById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTermsConditionsByIdQuery,
  GetTermsConditionsByIdQueryVariables,
  GetTermsConditionsByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables, GetTermsConditionsByIdProps<TChildProps, TDataName>>(GetTermsConditionsByIdDocument, {
      alias: 'getTermsConditionsById',
      ...operationOptions
    });
};

/**
 * __useGetTermsConditionsByIdQuery__
 *
 * To run a query within a React component, call `useGetTermsConditionsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTermsConditionsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTermsConditionsByIdQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetTermsConditionsByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>(GetTermsConditionsByIdDocument, baseOptions);
      }
export function useGetTermsConditionsByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>(GetTermsConditionsByIdDocument, baseOptions);
        }
export type GetTermsConditionsByIdQueryHookResult = ReturnType<typeof useGetTermsConditionsByIdQuery>;
export type GetTermsConditionsByIdLazyQueryHookResult = ReturnType<typeof useGetTermsConditionsByIdLazyQuery>;
export type GetTermsConditionsByIdQueryResult = ApolloReactCommon.QueryResult<GetTermsConditionsByIdQuery, GetTermsConditionsByIdQueryVariables>;
export const GetTermsConditionsListDocument = gql`
    query GetTermsConditionsList($i: TermsConditionsListParams!) {
  getTermsConditionsList(input: $i) {
    totalCount
    termsConditions {
      id
      content
      title
      accepted
      status {
        id
        displayName
      }
      createdOn
    }
  }
}
    `;
export type GetTermsConditionsListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>, 'query'> & ({ variables: GetTermsConditionsListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTermsConditionsListComponent = (props: GetTermsConditionsListComponentProps) => (
      <ApolloReactComponents.Query<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables> query={GetTermsConditionsListDocument} {...props} />
    );
    
export type GetTermsConditionsListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>
    } & TChildProps;
export function withGetTermsConditionsList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTermsConditionsListQuery,
  GetTermsConditionsListQueryVariables,
  GetTermsConditionsListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables, GetTermsConditionsListProps<TChildProps, TDataName>>(GetTermsConditionsListDocument, {
      alias: 'getTermsConditionsList',
      ...operationOptions
    });
};

/**
 * __useGetTermsConditionsListQuery__
 *
 * To run a query within a React component, call `useGetTermsConditionsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTermsConditionsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTermsConditionsListQuery({
 *   variables: {
 *      i: // value for 'i'
 *   },
 * });
 */
export function useGetTermsConditionsListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>(GetTermsConditionsListDocument, baseOptions);
      }
export function useGetTermsConditionsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>(GetTermsConditionsListDocument, baseOptions);
        }
export type GetTermsConditionsListQueryHookResult = ReturnType<typeof useGetTermsConditionsListQuery>;
export type GetTermsConditionsListLazyQueryHookResult = ReturnType<typeof useGetTermsConditionsListLazyQuery>;
export type GetTermsConditionsListQueryResult = ApolloReactCommon.QueryResult<GetTermsConditionsListQuery, GetTermsConditionsListQueryVariables>;
export const GetAdminLinkedProductsDocument = gql`
    query GetAdminLinkedProducts($productId: Int!) {
  getAdminLinkedProducts(productId: $productId) {
    youMightAlsoLike {
      ...DslProductFields
    }
    similar {
      ...DslProductFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type GetAdminLinkedProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>, 'query'> & ({ variables: GetAdminLinkedProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAdminLinkedProductsComponent = (props: GetAdminLinkedProductsComponentProps) => (
      <ApolloReactComponents.Query<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables> query={GetAdminLinkedProductsDocument} {...props} />
    );
    
export type GetAdminLinkedProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>
    } & TChildProps;
export function withGetAdminLinkedProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAdminLinkedProductsQuery,
  GetAdminLinkedProductsQueryVariables,
  GetAdminLinkedProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables, GetAdminLinkedProductsProps<TChildProps, TDataName>>(GetAdminLinkedProductsDocument, {
      alias: 'getAdminLinkedProducts',
      ...operationOptions
    });
};

/**
 * __useGetAdminLinkedProductsQuery__
 *
 * To run a query within a React component, call `useGetAdminLinkedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminLinkedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminLinkedProductsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetAdminLinkedProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>(GetAdminLinkedProductsDocument, baseOptions);
      }
export function useGetAdminLinkedProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>(GetAdminLinkedProductsDocument, baseOptions);
        }
export type GetAdminLinkedProductsQueryHookResult = ReturnType<typeof useGetAdminLinkedProductsQuery>;
export type GetAdminLinkedProductsLazyQueryHookResult = ReturnType<typeof useGetAdminLinkedProductsLazyQuery>;
export type GetAdminLinkedProductsQueryResult = ApolloReactCommon.QueryResult<GetAdminLinkedProductsQuery, GetAdminLinkedProductsQueryVariables>;
export const GetLogisticsFeeByIdDocument = gql`
    query GetLogisticsFeeById($id: Int!) {
  getAdminLogisticsFeeById(id: $id) {
    id
    name
    logisticsType
    fee
    status {
      id
      value
      displayName
    }
  }
}
    `;
export type GetLogisticsFeeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>, 'query'> & ({ variables: GetLogisticsFeeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetLogisticsFeeByIdComponent = (props: GetLogisticsFeeByIdComponentProps) => (
      <ApolloReactComponents.Query<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables> query={GetLogisticsFeeByIdDocument} {...props} />
    );
    
export type GetLogisticsFeeByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>
    } & TChildProps;
export function withGetLogisticsFeeById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLogisticsFeeByIdQuery,
  GetLogisticsFeeByIdQueryVariables,
  GetLogisticsFeeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables, GetLogisticsFeeByIdProps<TChildProps, TDataName>>(GetLogisticsFeeByIdDocument, {
      alias: 'getLogisticsFeeById',
      ...operationOptions
    });
};

/**
 * __useGetLogisticsFeeByIdQuery__
 *
 * To run a query within a React component, call `useGetLogisticsFeeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogisticsFeeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogisticsFeeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLogisticsFeeByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>(GetLogisticsFeeByIdDocument, baseOptions);
      }
export function useGetLogisticsFeeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>(GetLogisticsFeeByIdDocument, baseOptions);
        }
export type GetLogisticsFeeByIdQueryHookResult = ReturnType<typeof useGetLogisticsFeeByIdQuery>;
export type GetLogisticsFeeByIdLazyQueryHookResult = ReturnType<typeof useGetLogisticsFeeByIdLazyQuery>;
export type GetLogisticsFeeByIdQueryResult = ApolloReactCommon.QueryResult<GetLogisticsFeeByIdQuery, GetLogisticsFeeByIdQueryVariables>;
export const GetLogisticsFeesDocument = gql`
    query GetLogisticsFees($params: LogisticsFeesParams!) {
  getAdminLogisticsFees(params: $params) {
    totalCount
    fees {
      id
      name
      logisticsType
      fee
      status {
        id
        value
        displayName
      }
    }
  }
}
    `;
export type GetLogisticsFeesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>, 'query'> & ({ variables: GetLogisticsFeesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetLogisticsFeesComponent = (props: GetLogisticsFeesComponentProps) => (
      <ApolloReactComponents.Query<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables> query={GetLogisticsFeesDocument} {...props} />
    );
    
export type GetLogisticsFeesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>
    } & TChildProps;
export function withGetLogisticsFees<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLogisticsFeesQuery,
  GetLogisticsFeesQueryVariables,
  GetLogisticsFeesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables, GetLogisticsFeesProps<TChildProps, TDataName>>(GetLogisticsFeesDocument, {
      alias: 'getLogisticsFees',
      ...operationOptions
    });
};

/**
 * __useGetLogisticsFeesQuery__
 *
 * To run a query within a React component, call `useGetLogisticsFeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogisticsFeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogisticsFeesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetLogisticsFeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>(GetLogisticsFeesDocument, baseOptions);
      }
export function useGetLogisticsFeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>(GetLogisticsFeesDocument, baseOptions);
        }
export type GetLogisticsFeesQueryHookResult = ReturnType<typeof useGetLogisticsFeesQuery>;
export type GetLogisticsFeesLazyQueryHookResult = ReturnType<typeof useGetLogisticsFeesLazyQuery>;
export type GetLogisticsFeesQueryResult = ApolloReactCommon.QueryResult<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>;
export const GetOrderDetailsDocument = gql`
    query GetOrderDetails($id: Int!) {
  getAdminOrderById(id: $id) {
    ...DslOrderFields
  }
}
    ${DslOrderFieldsFragmentDoc}`;
export type GetOrderDetailsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>, 'query'> & ({ variables: GetOrderDetailsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrderDetailsComponent = (props: GetOrderDetailsComponentProps) => (
      <ApolloReactComponents.Query<GetOrderDetailsQuery, GetOrderDetailsQueryVariables> query={GetOrderDetailsDocument} {...props} />
    );
    
export type GetOrderDetailsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>
    } & TChildProps;
export function withGetOrderDetails<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOrderDetailsQuery,
  GetOrderDetailsQueryVariables,
  GetOrderDetailsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOrderDetailsQuery, GetOrderDetailsQueryVariables, GetOrderDetailsProps<TChildProps, TDataName>>(GetOrderDetailsDocument, {
      alias: 'getOrderDetails',
      ...operationOptions
    });
};

/**
 * __useGetOrderDetailsQuery__
 *
 * To run a query within a React component, call `useGetOrderDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>(GetOrderDetailsDocument, baseOptions);
      }
export function useGetOrderDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>(GetOrderDetailsDocument, baseOptions);
        }
export type GetOrderDetailsQueryHookResult = ReturnType<typeof useGetOrderDetailsQuery>;
export type GetOrderDetailsLazyQueryHookResult = ReturnType<typeof useGetOrderDetailsLazyQuery>;
export type GetOrderDetailsQueryResult = ApolloReactCommon.QueryResult<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders($prams: AdminOrdersParams!) {
  getAdminOrders(params: $prams) {
    totalCount
    adminOrders {
      ...DslOrderListFields
    }
  }
}
    ${DslOrderListFieldsFragmentDoc}`;
export type GetOrdersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrdersQuery, GetOrdersQueryVariables>, 'query'> & ({ variables: GetOrdersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrdersComponent = (props: GetOrdersComponentProps) => (
      <ApolloReactComponents.Query<GetOrdersQuery, GetOrdersQueryVariables> query={GetOrdersDocument} {...props} />
    );
    
export type GetOrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOrdersQuery, GetOrdersQueryVariables>
    } & TChildProps;
export function withGetOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOrdersQuery,
  GetOrdersQueryVariables,
  GetOrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOrdersQuery, GetOrdersQueryVariables, GetOrdersProps<TChildProps, TDataName>>(GetOrdersDocument, {
      alias: 'getOrders',
      ...operationOptions
    });
};

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      prams: // value for 'prams'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, baseOptions);
      }
export function useGetOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, baseOptions);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = ApolloReactCommon.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetOutletByIdDocument = gql`
    query GetOutletById($id: Int!) {
  getAdminOutletByID(outletId: $id) {
    id
    name
    style
    status {
      value
      displayName
      id
    }
    legalStatus
    companyName
    accountNumber
    charityNumber
    dropPointDescription
    productsWithPricingCount
    createdOn
    lastOrdered
    deliveryDays {
      id
      fullDate
      day
      price
      isAvailable
      createdOn
      updatedOn
      type
      leadDays
    }
    primaryUser {
      user {
        id
        lastLogin
        lastOrdered
        email
      }
    }
    xpoAccountNumber
    addressBook {
      billingId
      shippingId
      addresses {
        ...AddressFields
      }
    }
    outletUsers {
      role
      user {
        ...DslUserFields
      }
    }
  }
}
    ${AddressFieldsFragmentDoc}
${DslUserFieldsFragmentDoc}`;
export type GetOutletByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOutletByIdQuery, GetOutletByIdQueryVariables>, 'query'> & ({ variables: GetOutletByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOutletByIdComponent = (props: GetOutletByIdComponentProps) => (
      <ApolloReactComponents.Query<GetOutletByIdQuery, GetOutletByIdQueryVariables> query={GetOutletByIdDocument} {...props} />
    );
    
export type GetOutletByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOutletByIdQuery, GetOutletByIdQueryVariables>
    } & TChildProps;
export function withGetOutletById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOutletByIdQuery,
  GetOutletByIdQueryVariables,
  GetOutletByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOutletByIdQuery, GetOutletByIdQueryVariables, GetOutletByIdProps<TChildProps, TDataName>>(GetOutletByIdDocument, {
      alias: 'getOutletById',
      ...operationOptions
    });
};

/**
 * __useGetOutletByIdQuery__
 *
 * To run a query within a React component, call `useGetOutletByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutletByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutletByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOutletByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOutletByIdQuery, GetOutletByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOutletByIdQuery, GetOutletByIdQueryVariables>(GetOutletByIdDocument, baseOptions);
      }
export function useGetOutletByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOutletByIdQuery, GetOutletByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOutletByIdQuery, GetOutletByIdQueryVariables>(GetOutletByIdDocument, baseOptions);
        }
export type GetOutletByIdQueryHookResult = ReturnType<typeof useGetOutletByIdQuery>;
export type GetOutletByIdLazyQueryHookResult = ReturnType<typeof useGetOutletByIdLazyQuery>;
export type GetOutletByIdQueryResult = ApolloReactCommon.QueryResult<GetOutletByIdQuery, GetOutletByIdQueryVariables>;
export const GetOutletProductPricingDocument = gql`
    query GetOutletProductPricing($params: OutletProductPricingParams!) {
  getOutletProductPricing(params: $params) {
    pricing {
      productId
      productCode
      ProductName
      price {
        inputPrice
        starStockFee
        logisticsFee
        dateFrom
        dateTo
      }
    }
  }
}
    `;
export type GetOutletProductPricingComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>, 'query'> & ({ variables: GetOutletProductPricingQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOutletProductPricingComponent = (props: GetOutletProductPricingComponentProps) => (
      <ApolloReactComponents.Query<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables> query={GetOutletProductPricingDocument} {...props} />
    );
    
export type GetOutletProductPricingProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>
    } & TChildProps;
export function withGetOutletProductPricing<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOutletProductPricingQuery,
  GetOutletProductPricingQueryVariables,
  GetOutletProductPricingProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables, GetOutletProductPricingProps<TChildProps, TDataName>>(GetOutletProductPricingDocument, {
      alias: 'getOutletProductPricing',
      ...operationOptions
    });
};

/**
 * __useGetOutletProductPricingQuery__
 *
 * To run a query within a React component, call `useGetOutletProductPricingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutletProductPricingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutletProductPricingQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetOutletProductPricingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>(GetOutletProductPricingDocument, baseOptions);
      }
export function useGetOutletProductPricingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>(GetOutletProductPricingDocument, baseOptions);
        }
export type GetOutletProductPricingQueryHookResult = ReturnType<typeof useGetOutletProductPricingQuery>;
export type GetOutletProductPricingLazyQueryHookResult = ReturnType<typeof useGetOutletProductPricingLazyQuery>;
export type GetOutletProductPricingQueryResult = ApolloReactCommon.QueryResult<GetOutletProductPricingQuery, GetOutletProductPricingQueryVariables>;
export const GetOutletsDocument = gql`
    query GetOutlets($params: OutletAdminParams) {
  getAdminOutlets(params: $params) {
    totalCount
    outlets {
      id
      name
      status {
        displayName
      }
      style
      createdOn
      lastOrdered
      companyNumber
      accountNumber
      productsWithPricingCount
      deliveryDays {
        day
        isAvailable
        price
        type
      }
      addressBook {
        billingId
        shippingId
        addresses {
          ...AddressFields
        }
      }
      outletUsers {
        role
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
}
    ${AddressFieldsFragmentDoc}`;
export type GetOutletsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOutletsQuery, GetOutletsQueryVariables>, 'query'>;

    export const GetOutletsComponent = (props: GetOutletsComponentProps) => (
      <ApolloReactComponents.Query<GetOutletsQuery, GetOutletsQueryVariables> query={GetOutletsDocument} {...props} />
    );
    
export type GetOutletsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOutletsQuery, GetOutletsQueryVariables>
    } & TChildProps;
export function withGetOutlets<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOutletsQuery,
  GetOutletsQueryVariables,
  GetOutletsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOutletsQuery, GetOutletsQueryVariables, GetOutletsProps<TChildProps, TDataName>>(GetOutletsDocument, {
      alias: 'getOutlets',
      ...operationOptions
    });
};

/**
 * __useGetOutletsQuery__
 *
 * To run a query within a React component, call `useGetOutletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutletsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetOutletsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOutletsQuery, GetOutletsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOutletsQuery, GetOutletsQueryVariables>(GetOutletsDocument, baseOptions);
      }
export function useGetOutletsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOutletsQuery, GetOutletsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOutletsQuery, GetOutletsQueryVariables>(GetOutletsDocument, baseOptions);
        }
export type GetOutletsQueryHookResult = ReturnType<typeof useGetOutletsQuery>;
export type GetOutletsLazyQueryHookResult = ReturnType<typeof useGetOutletsLazyQuery>;
export type GetOutletsQueryResult = ApolloReactCommon.QueryResult<GetOutletsQuery, GetOutletsQueryVariables>;
export const ProductByIdDocument = gql`
    query ProductById($id: Int!) {
  getProductById(id: $id) {
    ...DslProductFields
    ads {
      id
      status {
        value
      }
      type
      image {
        id
        status {
          value
        }
        type
        url
        mobileUrl
        thumbnail
        altText
        titleText
        name
        createdOn
        updatedOn
      }
      targetUrl
      identifier
      grouping
      position
      titleText
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type ProductByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductByIdQuery, ProductByIdQueryVariables>, 'query'> & ({ variables: ProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProductByIdComponent = (props: ProductByIdComponentProps) => (
      <ApolloReactComponents.Query<ProductByIdQuery, ProductByIdQueryVariables> query={ProductByIdDocument} {...props} />
    );
    
export type ProductByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProductByIdQuery, ProductByIdQueryVariables>
    } & TChildProps;
export function withProductById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductByIdQuery,
  ProductByIdQueryVariables,
  ProductByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProductByIdQuery, ProductByIdQueryVariables, ProductByIdProps<TChildProps, TDataName>>(ProductByIdDocument, {
      alias: 'productById',
      ...operationOptions
    });
};

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, baseOptions);
      }
export function useProductByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, baseOptions);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = ApolloReactCommon.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const GetProductFeaturesDocument = gql`
    query GetProductFeatures($params: ProductFeaturesListInput) {
  getProductFeaturesList(params: $params) {
    totalCount
    features {
      id
      name
      description
      value
      filterable
      position
      storeFrontDisplay
      brandOwnerDisplay
      mandatory
      type {
        name
      }
      status {
        value
        displayName
      }
    }
  }
}
    `;
export type GetProductFeaturesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>, 'query'>;

    export const GetProductFeaturesComponent = (props: GetProductFeaturesComponentProps) => (
      <ApolloReactComponents.Query<GetProductFeaturesQuery, GetProductFeaturesQueryVariables> query={GetProductFeaturesDocument} {...props} />
    );
    
export type GetProductFeaturesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>
    } & TChildProps;
export function withGetProductFeatures<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductFeaturesQuery,
  GetProductFeaturesQueryVariables,
  GetProductFeaturesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductFeaturesQuery, GetProductFeaturesQueryVariables, GetProductFeaturesProps<TChildProps, TDataName>>(GetProductFeaturesDocument, {
      alias: 'getProductFeatures',
      ...operationOptions
    });
};

/**
 * __useGetProductFeaturesQuery__
 *
 * To run a query within a React component, call `useGetProductFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductFeaturesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetProductFeaturesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>(GetProductFeaturesDocument, baseOptions);
      }
export function useGetProductFeaturesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>(GetProductFeaturesDocument, baseOptions);
        }
export type GetProductFeaturesQueryHookResult = ReturnType<typeof useGetProductFeaturesQuery>;
export type GetProductFeaturesLazyQueryHookResult = ReturnType<typeof useGetProductFeaturesLazyQuery>;
export type GetProductFeaturesQueryResult = ApolloReactCommon.QueryResult<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>;
export const GetProductPostcodeRestrictionDocument = gql`
    query GetProductPostcodeRestriction($id: Int!) {
  getProductPostcodeRestrictions(productId: $id) {
    postcodes {
      id
      postcode {
        id
        postcode
        defaultAvailable
      }
      deliveryAvailable
      brandLocked
    }
  }
}
    `;
export type GetProductPostcodeRestrictionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>, 'query'> & ({ variables: GetProductPostcodeRestrictionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProductPostcodeRestrictionComponent = (props: GetProductPostcodeRestrictionComponentProps) => (
      <ApolloReactComponents.Query<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables> query={GetProductPostcodeRestrictionDocument} {...props} />
    );
    
export type GetProductPostcodeRestrictionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>
    } & TChildProps;
export function withGetProductPostcodeRestriction<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductPostcodeRestrictionQuery,
  GetProductPostcodeRestrictionQueryVariables,
  GetProductPostcodeRestrictionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables, GetProductPostcodeRestrictionProps<TChildProps, TDataName>>(GetProductPostcodeRestrictionDocument, {
      alias: 'getProductPostcodeRestriction',
      ...operationOptions
    });
};

/**
 * __useGetProductPostcodeRestrictionQuery__
 *
 * To run a query within a React component, call `useGetProductPostcodeRestrictionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductPostcodeRestrictionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductPostcodeRestrictionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductPostcodeRestrictionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>(GetProductPostcodeRestrictionDocument, baseOptions);
      }
export function useGetProductPostcodeRestrictionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>(GetProductPostcodeRestrictionDocument, baseOptions);
        }
export type GetProductPostcodeRestrictionQueryHookResult = ReturnType<typeof useGetProductPostcodeRestrictionQuery>;
export type GetProductPostcodeRestrictionLazyQueryHookResult = ReturnType<typeof useGetProductPostcodeRestrictionLazyQuery>;
export type GetProductPostcodeRestrictionQueryResult = ApolloReactCommon.QueryResult<GetProductPostcodeRestrictionQuery, GetProductPostcodeRestrictionQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($params: DslProductAdminParams) {
  getAdminProducts(params: $params) {
    products {
      ...DslProductFields
    }
    totalCount
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type GetProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductsQuery, GetProductsQueryVariables>, 'query'>;

    export const GetProductsComponent = (props: GetProductsComponentProps) => (
      <ApolloReactComponents.Query<GetProductsQuery, GetProductsQueryVariables> query={GetProductsDocument} {...props} />
    );
    
export type GetProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductsQuery, GetProductsQueryVariables>
    } & TChildProps;
export function withGetProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductsQuery,
  GetProductsQueryVariables,
  GetProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductsQuery, GetProductsQueryVariables, GetProductsProps<TChildProps, TDataName>>(GetProductsDocument, {
      alias: 'getProducts',
      ...operationOptions
    });
};

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = ApolloReactCommon.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetPromotionsDocument = gql`
    query GetPromotions($params: PromotionsListParams!) {
  getAdminPromotions(params: $params) {
    id
    name
    status
    createdOn
    identityCode
    longDescription
    shortDescription
    activeFrom
    activeTo
    categoriesInPromotion
    productsInPromotion
    terms
    containsVoucherCode
    imagePath
    hiddenFromAll
    brandId
    distributorId
    priority
    conditions {
      type
      comparator
      order
      promotionId
      in
      id
      result
      multiplesOf
      equalOrLess
      equalOrGreater
      greaterThan
      lessThan
      notIn
      voucherCodes {
        id
        code
        redemptionCount
        maxRedemptionCount
        enabled
      }
    }
    effects {
      id
      name
      type
      value
      taxMultiplier
      freeStock {
        entityId
        qty
      }
      rangeSelect {
        entityId
        qty
      }
    }
    limits {
      value
      id
      type
      order
    }
    type {
      name
      displayName
    }
  }
}
    `;
export type GetPromotionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPromotionsQuery, GetPromotionsQueryVariables>, 'query'> & ({ variables: GetPromotionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPromotionsComponent = (props: GetPromotionsComponentProps) => (
      <ApolloReactComponents.Query<GetPromotionsQuery, GetPromotionsQueryVariables> query={GetPromotionsDocument} {...props} />
    );
    
export type GetPromotionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPromotionsQuery, GetPromotionsQueryVariables>
    } & TChildProps;
export function withGetPromotions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPromotionsQuery,
  GetPromotionsQueryVariables,
  GetPromotionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPromotionsQuery, GetPromotionsQueryVariables, GetPromotionsProps<TChildProps, TDataName>>(GetPromotionsDocument, {
      alias: 'getPromotions',
      ...operationOptions
    });
};

/**
 * __useGetPromotionsQuery__
 *
 * To run a query within a React component, call `useGetPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetPromotionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPromotionsQuery, GetPromotionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(GetPromotionsDocument, baseOptions);
      }
export function useGetPromotionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPromotionsQuery, GetPromotionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(GetPromotionsDocument, baseOptions);
        }
export type GetPromotionsQueryHookResult = ReturnType<typeof useGetPromotionsQuery>;
export type GetPromotionsLazyQueryHookResult = ReturnType<typeof useGetPromotionsLazyQuery>;
export type GetPromotionsQueryResult = ApolloReactCommon.QueryResult<GetPromotionsQuery, GetPromotionsQueryVariables>;
export const GetReportByIdDocument = gql`
    query GetReportById($id: Int!) {
  getReportById(id: $id) {
    id
    name
    type
    data {
      columns {
        name
        value
      }
    }
    createdBy {
      id
      firstName
      lastName
    }
    createdOn
    updatedOn
  }
}
    `;
export type GetReportByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetReportByIdQuery, GetReportByIdQueryVariables>, 'query'> & ({ variables: GetReportByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetReportByIdComponent = (props: GetReportByIdComponentProps) => (
      <ApolloReactComponents.Query<GetReportByIdQuery, GetReportByIdQueryVariables> query={GetReportByIdDocument} {...props} />
    );
    
export type GetReportByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetReportByIdQuery, GetReportByIdQueryVariables>
    } & TChildProps;
export function withGetReportById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetReportByIdQuery,
  GetReportByIdQueryVariables,
  GetReportByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetReportByIdQuery, GetReportByIdQueryVariables, GetReportByIdProps<TChildProps, TDataName>>(GetReportByIdDocument, {
      alias: 'getReportById',
      ...operationOptions
    });
};

/**
 * __useGetReportByIdQuery__
 *
 * To run a query within a React component, call `useGetReportByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReportByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReportByIdQuery, GetReportByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetReportByIdQuery, GetReportByIdQueryVariables>(GetReportByIdDocument, baseOptions);
      }
export function useGetReportByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReportByIdQuery, GetReportByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetReportByIdQuery, GetReportByIdQueryVariables>(GetReportByIdDocument, baseOptions);
        }
export type GetReportByIdQueryHookResult = ReturnType<typeof useGetReportByIdQuery>;
export type GetReportByIdLazyQueryHookResult = ReturnType<typeof useGetReportByIdLazyQuery>;
export type GetReportByIdQueryResult = ApolloReactCommon.QueryResult<GetReportByIdQuery, GetReportByIdQueryVariables>;
export const GetReportsDocument = gql`
    query GetReports($params: BasicAdminListInput!) {
  getReports(params: $params) {
    total
    reports {
      id
      name
      type
      data {
        columns {
          name
          value
        }
      }
      createdBy {
        id
        firstName
        lastName
      }
      createdOn
      updatedOn
    }
  }
}
    `;
export type GetReportsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetReportsQuery, GetReportsQueryVariables>, 'query'> & ({ variables: GetReportsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetReportsComponent = (props: GetReportsComponentProps) => (
      <ApolloReactComponents.Query<GetReportsQuery, GetReportsQueryVariables> query={GetReportsDocument} {...props} />
    );
    
export type GetReportsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetReportsQuery, GetReportsQueryVariables>
    } & TChildProps;
export function withGetReports<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetReportsQuery,
  GetReportsQueryVariables,
  GetReportsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetReportsQuery, GetReportsQueryVariables, GetReportsProps<TChildProps, TDataName>>(GetReportsDocument, {
      alias: 'getReports',
      ...operationOptions
    });
};

/**
 * __useGetReportsQuery__
 *
 * To run a query within a React component, call `useGetReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetReportsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReportsQuery, GetReportsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetReportsQuery, GetReportsQueryVariables>(GetReportsDocument, baseOptions);
      }
export function useGetReportsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReportsQuery, GetReportsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetReportsQuery, GetReportsQueryVariables>(GetReportsDocument, baseOptions);
        }
export type GetReportsQueryHookResult = ReturnType<typeof useGetReportsQuery>;
export type GetReportsLazyQueryHookResult = ReturnType<typeof useGetReportsLazyQuery>;
export type GetReportsQueryResult = ApolloReactCommon.QueryResult<GetReportsQuery, GetReportsQueryVariables>;
export const GetSalesByOrderDocument = gql`
    query GetSalesByOrder($input: SalesReportInput!) {
  getSalesReportByOrder(input: $input) {
    rows {
      accountNumber
      outletName
      orderNumber
      orderDate
      deliveryDate
      podDate
      processedOn
      brandOwner
      productCode
      productName
      price
      inputPrice
      platformFee
      logisticsFee
      qty
      lineTotal
      inputTotal
      platformTotal
      logisticsTotal
    }
  }
}
    `;
export type GetSalesByOrderComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>, 'query'> & ({ variables: GetSalesByOrderQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetSalesByOrderComponent = (props: GetSalesByOrderComponentProps) => (
      <ApolloReactComponents.Query<GetSalesByOrderQuery, GetSalesByOrderQueryVariables> query={GetSalesByOrderDocument} {...props} />
    );
    
export type GetSalesByOrderProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>
    } & TChildProps;
export function withGetSalesByOrder<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSalesByOrderQuery,
  GetSalesByOrderQueryVariables,
  GetSalesByOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSalesByOrderQuery, GetSalesByOrderQueryVariables, GetSalesByOrderProps<TChildProps, TDataName>>(GetSalesByOrderDocument, {
      alias: 'getSalesByOrder',
      ...operationOptions
    });
};

/**
 * __useGetSalesByOrderQuery__
 *
 * To run a query within a React component, call `useGetSalesByOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSalesByOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSalesByOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSalesByOrderQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>(GetSalesByOrderDocument, baseOptions);
      }
export function useGetSalesByOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>(GetSalesByOrderDocument, baseOptions);
        }
export type GetSalesByOrderQueryHookResult = ReturnType<typeof useGetSalesByOrderQuery>;
export type GetSalesByOrderLazyQueryHookResult = ReturnType<typeof useGetSalesByOrderLazyQuery>;
export type GetSalesByOrderQueryResult = ApolloReactCommon.QueryResult<GetSalesByOrderQuery, GetSalesByOrderQueryVariables>;
export const SyncSageDataDocument = gql`
    query SyncSageData {
  syncSageData
}
    `;
export type SyncSageDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SyncSageDataQuery, SyncSageDataQueryVariables>, 'query'>;

    export const SyncSageDataComponent = (props: SyncSageDataComponentProps) => (
      <ApolloReactComponents.Query<SyncSageDataQuery, SyncSageDataQueryVariables> query={SyncSageDataDocument} {...props} />
    );
    
export type SyncSageDataProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SyncSageDataQuery, SyncSageDataQueryVariables>
    } & TChildProps;
export function withSyncSageData<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SyncSageDataQuery,
  SyncSageDataQueryVariables,
  SyncSageDataProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SyncSageDataQuery, SyncSageDataQueryVariables, SyncSageDataProps<TChildProps, TDataName>>(SyncSageDataDocument, {
      alias: 'syncSageData',
      ...operationOptions
    });
};

/**
 * __useSyncSageDataQuery__
 *
 * To run a query within a React component, call `useSyncSageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useSyncSageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSyncSageDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useSyncSageDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SyncSageDataQuery, SyncSageDataQueryVariables>) {
        return ApolloReactHooks.useQuery<SyncSageDataQuery, SyncSageDataQueryVariables>(SyncSageDataDocument, baseOptions);
      }
export function useSyncSageDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SyncSageDataQuery, SyncSageDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SyncSageDataQuery, SyncSageDataQueryVariables>(SyncSageDataDocument, baseOptions);
        }
export type SyncSageDataQueryHookResult = ReturnType<typeof useSyncSageDataQuery>;
export type SyncSageDataLazyQueryHookResult = ReturnType<typeof useSyncSageDataLazyQuery>;
export type SyncSageDataQueryResult = ApolloReactCommon.QueryResult<SyncSageDataQuery, SyncSageDataQueryVariables>;
export const GetTaxCodeByIdDocument = gql`
    query GetTaxCodeById($id: Int!) {
  getTaxCodeById(id: $id) {
    id
    name
    code
    rate
    calculationType
    status {
      id
      value
      displayName
    }
  }
}
    `;
export type GetTaxCodeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>, 'query'> & ({ variables: GetTaxCodeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTaxCodeByIdComponent = (props: GetTaxCodeByIdComponentProps) => (
      <ApolloReactComponents.Query<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables> query={GetTaxCodeByIdDocument} {...props} />
    );
    
export type GetTaxCodeByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>
    } & TChildProps;
export function withGetTaxCodeById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTaxCodeByIdQuery,
  GetTaxCodeByIdQueryVariables,
  GetTaxCodeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables, GetTaxCodeByIdProps<TChildProps, TDataName>>(GetTaxCodeByIdDocument, {
      alias: 'getTaxCodeById',
      ...operationOptions
    });
};

/**
 * __useGetTaxCodeByIdQuery__
 *
 * To run a query within a React component, call `useGetTaxCodeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaxCodeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaxCodeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaxCodeByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>(GetTaxCodeByIdDocument, baseOptions);
      }
export function useGetTaxCodeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>(GetTaxCodeByIdDocument, baseOptions);
        }
export type GetTaxCodeByIdQueryHookResult = ReturnType<typeof useGetTaxCodeByIdQuery>;
export type GetTaxCodeByIdLazyQueryHookResult = ReturnType<typeof useGetTaxCodeByIdLazyQuery>;
export type GetTaxCodeByIdQueryResult = ApolloReactCommon.QueryResult<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>;
export const GetTaxCodesDocument = gql`
    query GetTaxCodes($params: TaxCodesAdminParams) {
  getAdminTaxCodes(params: $params) {
    totalCount
    taxCodes {
      id
      name
      status {
        id
        value
        displayName
      }
      calculationType
      rate
    }
  }
}
    `;
export type GetTaxCodesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTaxCodesQuery, GetTaxCodesQueryVariables>, 'query'>;

    export const GetTaxCodesComponent = (props: GetTaxCodesComponentProps) => (
      <ApolloReactComponents.Query<GetTaxCodesQuery, GetTaxCodesQueryVariables> query={GetTaxCodesDocument} {...props} />
    );
    
export type GetTaxCodesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTaxCodesQuery, GetTaxCodesQueryVariables>
    } & TChildProps;
export function withGetTaxCodes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTaxCodesQuery,
  GetTaxCodesQueryVariables,
  GetTaxCodesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTaxCodesQuery, GetTaxCodesQueryVariables, GetTaxCodesProps<TChildProps, TDataName>>(GetTaxCodesDocument, {
      alias: 'getTaxCodes',
      ...operationOptions
    });
};

/**
 * __useGetTaxCodesQuery__
 *
 * To run a query within a React component, call `useGetTaxCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaxCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaxCodesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetTaxCodesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaxCodesQuery, GetTaxCodesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTaxCodesQuery, GetTaxCodesQueryVariables>(GetTaxCodesDocument, baseOptions);
      }
export function useGetTaxCodesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaxCodesQuery, GetTaxCodesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTaxCodesQuery, GetTaxCodesQueryVariables>(GetTaxCodesDocument, baseOptions);
        }
export type GetTaxCodesQueryHookResult = ReturnType<typeof useGetTaxCodesQuery>;
export type GetTaxCodesLazyQueryHookResult = ReturnType<typeof useGetTaxCodesLazyQuery>;
export type GetTaxCodesQueryResult = ApolloReactCommon.QueryResult<GetTaxCodesQuery, GetTaxCodesQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($params: AdminUsersParams!) {
  getAdminUsers(params: $params) {
    users {
      ...DslUserListItemFields
    }
    totalCount
  }
}
    ${DslUserListItemFieldsFragmentDoc}`;
export type GetUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsersQuery, GetUsersQueryVariables>, 'query'> & ({ variables: GetUsersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUsersComponent = (props: GetUsersComponentProps) => (
      <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables> query={GetUsersDocument} {...props} />
    );
    
export type GetUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUsersQuery, GetUsersQueryVariables>
    } & TChildProps;
export function withGetUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUsersQuery, GetUsersQueryVariables, GetUsersProps<TChildProps, TDataName>>(GetUsersDocument, {
      alias: 'getUsers',
      ...operationOptions
    });
};

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;