import {
  GetCompanyDetailsQuery,
  GetCompanyDetailsQueryVariables,
  StarStockCompanyDetails,
  DslUser,
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables,
} from '../graphql/generated/graphql';
import getCompanyDetailsQuery from '../graphql/queries/company-detail.graphql';
import getCurrentUserQuery from '../graphql/queries/current-user.graphql';
import Repository from './Repository';

export default {
  async get(): Promise<StarStockCompanyDetails> {
    const { data } = await Repository.query<
      GetCompanyDetailsQuery,
      GetCompanyDetailsQueryVariables
    >({
      query: getCompanyDetailsQuery,
    });

    return data.getStarStockCompanyDetails as StarStockCompanyDetails;
  },

  async getCurrentUser(): Promise<DslUser | null> {
    const { data } = await Repository.query<GetCurrentUserQuery, GetCurrentUserQueryVariables>({
      query: getCurrentUserQuery,
    });

    return data.dslCurrentUser?.user as DslUser;
  },
};
