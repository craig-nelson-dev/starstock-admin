import { ParsedUrlQuery } from 'querystring';
import {
  DslOutlet,
  FindOutletParams,
  FindOutletQuery,
  FindOutletQueryVariables,
  GetOutletByIdQuery,
  GetOutletByIdQueryVariables,
  GetOutletProductPricingQuery,
  GetOutletProductPricingQueryVariables,
  GetOutletsQuery,
  GetOutletsQueryVariables,
  OutletsResponse,
  ProductAdminOverridePrice,
} from '../graphql/generated/graphql';
import findOutletQuery from '../graphql/queries/find-outlet.graphql';
import getOutletByIdQuery from '../graphql/queries/outlet-by-id.graphql';
import getOutletProductPricingQuery from '../graphql/queries/outlet-product-pricing.graphql';
import getOutletsQuery from '../graphql/queries/outlets.graphql';
import { getListingQuery } from '../utils/helper';
import Repository from './Repository';

export default {
  async get(query: ParsedUrlQuery): Promise<OutletsResponse | null> {
    const params = getListingQuery(query);

    const defaultSort = {
      by: 'created_on',
      direction: 'desc',
    };

    const { data } = await Repository.query<GetOutletsQuery, GetOutletsQueryVariables>({
      query: getOutletsQuery,
      variables: {
        params: {
          pagination: params.pagination,
          search: params.search,
          filters: {
            statusValue: params.status,
            productsCount: { min: null, max: null },
            style: params.style,
          },
          sort: params.sort || defaultSort,
          orderedOnly: params.orderedOnly || false,
        },
      },
    });

    return data.getAdminOutlets as OutletsResponse;
  },

  async getById(id: number): Promise<DslOutlet | null> {
    const { data } = await Repository.query<GetOutletByIdQuery, GetOutletByIdQueryVariables>({
      query: getOutletByIdQuery,
      variables: {
        id,
      },
    });

    return data.getAdminOutletByID as DslOutlet;
  },

  async getProductPricing(query: ParsedUrlQuery): Promise<ProductAdminOverridePrice[]> {
    const params = getListingQuery(query);
    const { data } = await Repository.query<
      GetOutletProductPricingQuery,
      GetOutletProductPricingQueryVariables
    >({
      query: getOutletProductPricingQuery,
      variables: {
        params: {
          outletId: params.outletId,
        },
      },
    });

    return data.getOutletProductPricing.pricing as ProductAdminOverridePrice[];
  },

  async exactMatch(input: FindOutletParams): Promise<DslOutlet | null> {
    const { data } = await Repository.query<FindOutletQuery, FindOutletQueryVariables>({
      query: findOutletQuery,
      variables: {
        input,
      },
    });

    return data.findOutlet as DslOutlet;
  },
};
