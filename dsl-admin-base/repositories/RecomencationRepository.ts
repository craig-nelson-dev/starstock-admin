import {
  GetRecommendationByIdQuery,
  GetRecommendationByIdQueryVariables,
  GetRecommendationsQuery,
  GetRecommendationsQueryVariables,
  RecommendationsListParams,
} from '../graphql/generated/graphql';
import getRecommendations from '../graphql/queries/get-recommendations.graphql';
import getRecommendationByID from '../graphql/queries/get-recommendations-by-id.graphql';

import Repository from './Repository';

export default {
  async get(
    query: RecommendationsListParams,
  ): Promise<GetRecommendationsQuery['getRecommendations']> {
    const i: RecommendationsListParams = {
      pagination: {
        page: query.pagination?.page || 1,
        perPage: query.pagination?.perPage || 10,
      },
      sort: {
        by: query.sort?.by || 'id',
        direction: query.sort?.direction ? query.sort?.direction : 'asc',
      },
      filters: {},
    };
    if (i.filters && query.filters) {
      if (query.filters.brandOwner != 0) {
        i.filters.brandOwner = query.filters.brandOwner;
      }
      if (query.filters.status != -1) {
        i.filters.status = query.filters.status;
      }
    }
    if (query?.search) {
      i.search = query?.search;
    }
    const { data } = await Repository.query<
      GetRecommendationsQuery,
      GetRecommendationsQueryVariables
    >({
      query: getRecommendations,
      variables: { i },
    });

    return data.getRecommendations;
  },
  async getById(id: number): Promise<GetRecommendationByIdQuery['getRecommendationByID']> {
    const { data } = await Repository.query<
      GetRecommendationByIdQuery,
      GetRecommendationByIdQueryVariables
    >({
      query: getRecommendationByID,
      variables: { id },
    });

    return data.getRecommendationByID;
  },
};
