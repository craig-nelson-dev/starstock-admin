import {
  GetProductFeaturesQuery,
  GetProductFeaturesQueryVariables,
  ProductFeaturesListOutput,
  DslProductFeature,
} from '../graphql/generated/graphql';
import getProductFeaturesQuery from '../graphql/queries/product-features.graphql';
import Repository from './Repository';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';

const productFeature = {
  async get(query: ParsedUrlQuery): Promise<ProductFeaturesListOutput> {
    const params = getListingQuery(query);
    const { data } = await Repository.query<
      GetProductFeaturesQuery,
      GetProductFeaturesQueryVariables
    >({
      query: getProductFeaturesQuery,
      variables: {
        params: {
          pagination: params.pagination,
          sort: params.sort,
          search: params.searchText,
        },
      },
    });

    return data.getProductFeaturesList as ProductFeaturesListOutput;
  },

  async getById(id: number): Promise<DslProductFeature | null> {
    const data = await productFeature.get({ page: '1', perPage: '1000' });
    return data.features?.find((o) => o?.id && +o.id === id) || null;
  },
};

export default productFeature;
