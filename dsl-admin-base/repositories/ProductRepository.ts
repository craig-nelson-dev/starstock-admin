import { ParsedUrlQuery } from 'querystring';
import {
  AvailableDistributorParams,
  DslProduct,
  GetAdminLinkedProductsQuery,
  GetAdminLinkedProductsQueryVariables,
  GetProductDistributorsQuery,
  GetProductDistributorsQueryVariables,
  GetProductPostcodeRestrictionQuery,
  GetProductPostcodeRestrictionQueryVariables,
  GetProductsQuery,
  GetProductsQueryVariables,
  LinkedProductsResponse,
  PostcodeRestriction,
  ProductByIdQuery,
  ProductByIdQueryVariables,
  GetBrandOwnerTopProductsQueryVariables,
  GetBrandOwnerTopProductsQuery,
  BrandOwnerTopProduct,
  ProductDistributor,
} from '../graphql/generated/graphql';
import getProductDistributors from '../graphql/queries/get-product-distributors.graphql';
import getLinkedProductsById from '../graphql/queries/linked-products-by-id.graphql';
import getProductById from '../graphql/queries/product-detail-by-id.graphql';
import getProductPostcodeRestrictionQuery from '../graphql/queries/product-postcode-restriction.graphql';
import getProductsQuery from '../graphql/queries/products.graphql';
import getBrandOwnerOverview from '../graphql/queries/get-brand-owner-top-products.graphql';
import { getListingQuery } from '../utils/helper';
import Repository from './Repository';

interface GetProductApprovalResult {
  products: DslProduct[];
  total: number;
}

export default {
  async get(query: ParsedUrlQuery): Promise<{ total: number; products: DslProduct[] } | null> {
    try {
      const params = getListingQuery(query);
      const { data } = await Repository.query<GetProductsQuery, GetProductsQueryVariables>({
        query: getProductsQuery,
        variables: {
          params: {
            sort: params.sort || { by: 'created_on', direction: 'desc' },
            pagination: params.pagination,
            search: params.searchText,
            filters: {
              statusValue: params.status,
              brandOwnerID: params.brandOwnerID,
              categoryId: params.categoryId,
            },
          },
        },
      });

      return {
        total: data.getAdminProducts.totalCount,
        products: (data.getAdminProducts.products || []) as DslProduct[],
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  async getForLinkedProductAddition(
    query: ParsedUrlQuery,
  ): Promise<{ total: number; products: DslProduct[] } | null> {
    try {
      const params = getListingQuery(query);
      const { data } = await Repository.query<GetProductsQuery, GetProductsQueryVariables>({
        query: getProductsQuery,
        variables: {
          params: {
            sort: params.sort,
            pagination: params.pagination,
          },
        },
      });

      return {
        total: data.getAdminProducts.totalCount,
        products: (data.getAdminProducts.products || []) as DslProduct[],
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async getProductDetail(id: number): Promise<DslProduct | null> {
    const { data } = await Repository.query<
      ProductByIdQuery,
      GetProductPostcodeRestrictionQueryVariables
    >({
      query: getProductById,
      variables: { id },
    });

    if (data.getProductById) {
      return data.getProductById as DslProduct;
    }

    return null;
  },

  async updateStatus(id: string, status: string) {
    id;
    status;
  },

  async getProductPostCodeRestriction(id: string): Promise<PostcodeRestriction[]> {
    const { data } = await Repository.query<
      GetProductPostcodeRestrictionQuery,
      ProductByIdQueryVariables
    >({
      query: getProductPostcodeRestrictionQuery,
      variables: { id: Number(id) },
    });

    return (data.getProductPostcodeRestrictions?.postcodes || []) as PostcodeRestriction[];
  },

  async updateProducts() {},

  async deleteProducts(ids: string[]) {
    ids;
  },

  async cloneProducts(ids: string[]) {
    ids;
  },

  async removeImage() {},

  async updateProduct() {},

  async getProductApproval(): Promise<GetProductApprovalResult> {
    const total = 12;
    const products: DslProduct[] = (Array(total)
      .fill(0)
      .map((_, idx) => ({
        id: 10000000 + idx,
      })) as unknown) as DslProduct[];

    return Promise.resolve({
      products,
      total,
    });
  },

  async getProductsLinked(productId: number): Promise<LinkedProductsResponse | null> {
    const { data } = await Repository.query<
      GetAdminLinkedProductsQuery,
      GetAdminLinkedProductsQueryVariables
    >({
      query: getLinkedProductsById,
      variables: { productId: productId },
    });

    if (data.getAdminLinkedProducts) {
      return data.getAdminLinkedProducts as LinkedProductsResponse;
    }
    return null;
  },

  async approveProducts(ids: number[]): Promise<number[]> {
    console.log('approve rows: ', ids);

    return Promise.resolve(ids);
  },
  async rejectProducts(ids: number[]): Promise<number[]> {
    console.log('reject rows: ', ids);

    return Promise.resolve(ids);
  },

  async distributors(brandId?: number): Promise<ProductDistributor[] | null> {
    const params: AvailableDistributorParams = {};

    // pass 0 to get all distributor
    params.brandId = brandId || 0;

    const { data } = await Repository.query<
      GetProductDistributorsQuery,
      GetProductDistributorsQueryVariables
    >({
      query: getProductDistributors,
      variables: { params },
    });

    if (data.getAvailableProductDistributors) {
      return data.getAvailableProductDistributors as ProductDistributor[];
    }
    return null;
  },
  async getTopProduct(
    f: GetBrandOwnerTopProductsQueryVariables['i']['filters'],
  ): Promise<BrandOwnerTopProduct[]> {
    const { data } = await Repository.query<
      GetBrandOwnerTopProductsQuery,
      GetBrandOwnerTopProductsQueryVariables
    >({
      query: getBrandOwnerOverview,
      variables: { i: { filters: f } },
    });

    return data.getBrandOwnerTopProducts as BrandOwnerTopProduct[];
  },
};
