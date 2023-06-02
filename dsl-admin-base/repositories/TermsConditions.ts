import {
  GetTermsConditionsListQuery,
  GetTermsConditionsListQueryVariables,
  GetTermsConditionsByIdQueryVariables,
  GetTermsConditionsByIdQuery,
} from '../graphql/generated/graphql';
import getTermsConditionsList from '../graphql/queries/get-terms-conditions-list.graphql';
import getTermsConditionsByID from '../graphql/queries/get-terms-conditions-by-id.graphql';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';
import Repository from './Repository';

export default {
  async get(query: ParsedUrlQuery): Promise<GetTermsConditionsListQuery['getTermsConditionsList']> {
    const params = getListingQuery(query);
    const { data } = await Repository.query<
      GetTermsConditionsListQuery,
      GetTermsConditionsListQueryVariables
    >({
      query: getTermsConditionsList,
      variables: {
        i: {
          pagination: params.pagination,
          sort: params.sort,
          search: params.search,
        },
      },
    });

    return data.getTermsConditionsList;
  },
  async getById(id: number): Promise<GetTermsConditionsByIdQuery['getTermsConditionsByID']> {
    const { data } = await Repository.query<
      GetTermsConditionsByIdQuery,
      GetTermsConditionsByIdQueryVariables
    >({
      query: getTermsConditionsByID,
      variables: {
        i: id,
      },
    });

    return data.getTermsConditionsByID;
  },
};
