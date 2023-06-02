import {
  GetLogisticsFeesQuery,
  GetLogisticsFeesQueryVariables,
  LogisticsFeesResponse,
  GetLogisticsFeeByIdQuery,
  GetLogisticsFeeByIdQueryVariables,
  LogisticsFee,
} from '../graphql/generated/graphql';
import getLogisicFeesQuery from '../graphql/queries/logistics-fees.graphql';
import getLogisticFeesById from '../graphql/queries/logistics-fee-by-id.graphql';
import Repository from './Repository';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';

export default {
  async get(query: ParsedUrlQuery): Promise<LogisticsFeesResponse> {
    const params = getListingQuery(query);
    const { data } = await Repository.query<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>({
      query: getLogisicFeesQuery,
      variables: {
        params: {
          pagination: params.pagination,
          sort: params.sort,
          query: params.searchText,
          statusValue: params.status,
        },
      },
    });

    return data.getAdminLogisticsFees as LogisticsFeesResponse;
  },

  async getAll() {
    const { data } = await Repository.query<GetLogisticsFeesQuery, GetLogisticsFeesQueryVariables>({
      query: getLogisicFeesQuery,
      variables: {
        params: {
          pagination: { page: 1, perPage: 1000 },
        },
      },
    });

    return data.getAdminLogisticsFees as LogisticsFeesResponse;
  },
  async getById(id: number): Promise<LogisticsFee | null> {
    const { data } = await Repository.query<
      GetLogisticsFeeByIdQuery,
      GetLogisticsFeeByIdQueryVariables
    >({
      query: getLogisticFeesById,
      variables: {
        id,
      },
    });

    return data.getAdminLogisticsFeeById as LogisticsFee;
  },
};
