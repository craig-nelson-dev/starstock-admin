import { waitFor } from '..';
import {
  DslProduct,
  GetAdminUpsellProductsQuery,
  GetAdminUpsellProductsQueryVariables,
} from '../graphql/generated/graphql';
import GetAdminUpsellProducts from '../graphql/queries/get-admin-upsell-products.graphql';
import Repository from './Repository';
import { PRODUCTS } from '../utils/mock';
const products = PRODUCTS as DslProduct[];

export default {
  async get(): Promise<GetAdminUpsellProductsQuery['getAdminUpsellProducts']> {
    const { data } = await Repository.query<
      GetAdminUpsellProductsQuery,
      GetAdminUpsellProductsQueryVariables
    >({
      query: GetAdminUpsellProducts,
    });

    return data.getAdminUpsellProducts;
  },
  async getProductDetail(id: string): Promise<any> {
    const nid = Number(id);
    await waitFor(300);
    return products[nid];
  },
};
