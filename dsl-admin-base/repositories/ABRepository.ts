import {
  DslCart,
  GetAbandonedCartsQuery,
  GetAbandonedCartsQueryVariables,
  GetAdminAbandonedCartDetailsQuery,
  GetAdminAbandonedCartDetailsQueryVariables,
} from '../graphql/generated/graphql';
import getAdminAbandonedCarts from '../graphql/queries/abandonedcarts.graphql';
import getAdminAbandonedCartDetails from '../graphql/queries/abandonedcarts-by-id.graphql';
import moment from 'moment';

import Repository from './Repository';
import { getListingQuery, removeUndefinedValuesFromParams } from '../utils/helper';
import { ParsedUrlQuery } from 'querystring';

export default {
  async get(query: ParsedUrlQuery): Promise<{ total: number; carts: DslCart[] } | null> {
    try {
      const params = getListingQuery(query);
      const mockSortParams = {
        by: 'created_on',
        direction: 'desc',
      };

      for (let [key, value] of Object.entries(params)) {
        if (value instanceof moment) {
          params[key] = moment(value, 'DD/MM/YYYY').format('DD/MM/YYYY');
        }
      }

      const dedicatedParams: Object = {
        sort: params.sort || mockSortParams,
        pagination: params.pagination,
        filters: {
          created: {
            from: params.createdFrom,
            to: params.createdTo,
          },
          updated: {
            from: params.updatedFrom,
            to: params.updatedTo,
          },
        },
        search: params.searchText,
      };
      const sanitizedParams = removeUndefinedValuesFromParams(dedicatedParams);

      const { data } = await Repository.query<
        GetAbandonedCartsQuery,
        GetAbandonedCartsQueryVariables
      >({
        query: getAdminAbandonedCarts,
        variables: {
          params: sanitizedParams,
        },
      });

      return {
        total: data.getAdminAbandonedCarts?.totalCount || 0,
        carts: (data.getAdminAbandonedCarts?.carts || []) as DslCart[],
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  async getDetails({
    id,
  }: GetAdminAbandonedCartDetailsQueryVariables): Promise<
    GetAdminAbandonedCartDetailsQuery['getAdminAbandonedCartDetails']
  > {
    const { data } = await Repository.query<
      GetAdminAbandonedCartDetailsQuery,
      GetAdminAbandonedCartDetailsQueryVariables
    >({
      query: getAdminAbandonedCartDetails,
      variables: { id },
    });

    return data.getAdminAbandonedCartDetails;
  },
};
