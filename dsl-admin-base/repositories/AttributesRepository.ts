import { ParsedUrlQuery } from 'querystring';
import Repository from './Repository';
import getProductFeaturesList from '../graphql/queries/get-product-features-list.graphql';
import getProductFeatureById from '../graphql/queries/get-product-feature-by-id.graphql';
import getProductAttributeSelection from '../graphql/queries/get-product-attribute-selection.graphql';
import {
  GetProductAttributeSelectionQuery,
  GetProductAttributeSelectionQueryVariables,
  GetProductFeatureByIdQuery,
  GetProductFeatureByIdQueryVariables,
  GetProductFeaturesListQuery,
  GetProductFeaturesListQueryVariables,
} from '..';

function parseQuery(arg: any): GetProductFeaturesListQueryVariables['i'] {
  return {
    pagination: {
      page: arg.currentPage || 1,
      perPage: arg.perPage || 10,
    },
    sort: {
      by: arg.sortBy || 'id',
      direction: arg.sortOrder ? (arg.sortOrder == 'ascend' ? 'asc' : 'desc') : 'asc',
    },
    display: arg.display && arg.display != 'all' ? arg.display == 1 : undefined,
    search: arg.searchText ? arg.searchText : undefined,
    statusValue: arg.status ? arg.status : undefined,
  };
}

export default {
  async get(query: ParsedUrlQuery) {
    const i = parseQuery(query);
    const { data } = await Repository.query<
      GetProductFeaturesListQuery,
      GetProductFeaturesListQueryVariables
    >({
      query: getProductFeaturesList,
      variables: { i },
    });

    return data.getProductFeaturesList;
  },
  async getById(id: number) {
    const { data } = await Repository.query<
      GetProductFeatureByIdQuery,
      GetProductFeatureByIdQueryVariables
    >({
      query: getProductFeatureById,
      variables: { id },
    });

    return data.getProductFeatureById;
  },
  async getProductAttributeSelection({
    productId,
  }: GetProductAttributeSelectionQueryVariables): Promise<
    GetProductAttributeSelectionQuery['getProductAttributeSelection']
  > {
    const { data } = await Repository.query<
      GetProductAttributeSelectionQuery,
      GetProductAttributeSelectionQueryVariables
    >({
      query: getProductAttributeSelection,
      variables: { productId },
    });

    return data.getProductAttributeSelection;
  },
};
