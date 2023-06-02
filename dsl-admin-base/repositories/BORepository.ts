import {
  BrandOwnerListResponse,
  GetBrandOwnerByIdQuery,
  GetBrandOwnerByIdQueryVariables,
  GetBrandOwnerOverviewQuery,
  GetBrandOwnerOverviewQueryVariables,
  GetBrandOwnersQuery,
  GetBrandOwnersQueryVariables,
} from '../graphql/generated/graphql';
import getBrandOwnersQuery from '../graphql/queries/bo.graphql';
import getBrandOwnder from '../graphql/queries/get-brand-ownder-id.graphql';
import GetBrandOwnerOverview from '../graphql/queries/get-brand-owner-overview.graphql';
import Repository from './Repository';

export default {
  async get(
    params: GetBrandOwnersQueryVariables & { currentPage?: number },
  ): Promise<BrandOwnerListResponse> {
    try {
      const variables: GetBrandOwnersQueryVariables = {
        page: params.currentPage || 1,
        sortBy: params.sortBy || 'createdOn',
        sortOrder: params.sortOrder || 'desc',
        perPage: params.perPage || 10,
      };
      if (params.sortOrder == 'descend') variables.sortOrder = 'desc';
      if (params.sortOrder == 'ascend') variables.sortOrder = 'asc';
      if (params.searchText) variables.searchText = params.searchText;
      if (params.status && params.status != -1 && params.status != 0)
        variables.status = params.status;
      const { data } = await Repository.query<GetBrandOwnersQuery, GetBrandOwnersQueryVariables>({
        query: getBrandOwnersQuery,
        variables,
      });

      return (data.getBrandOwner || { totalCount: 0, brandOwners: [] }) as BrandOwnerListResponse;
    } catch (e) {
      console.log(e);
      // Mock data
      return [1, 2, 3, 5].map((o) => ({ id: o })) as any;
    }
  },
  getById: async ({ id }: { id: number }): Promise<GetBrandOwnerByIdQuery['getBrandOwnerByID']> => {
    try {
      const { data } = await Repository.query<
        GetBrandOwnerByIdQuery,
        GetBrandOwnerByIdQueryVariables
      >({
        query: getBrandOwnder,
        variables: { id },
      });

      return data.getBrandOwnerByID;
    } catch (e) {
      console.log(e);
      // Mock data
      return [1, 2, 3, 5].map((o) => ({ id: o })) as any;
    }
  },
  async getBrandOwnerOverview(
    f: GetBrandOwnerOverviewQueryVariables['i']['filters'],
  ): Promise<GetBrandOwnerOverviewQuery['getBrandOwnerOverview']> {
    const { data } = await Repository.query<
      GetBrandOwnerOverviewQuery,
      GetBrandOwnerOverviewQueryVariables
    >({
      query: GetBrandOwnerOverview,
      variables: { i: { filters: f } },
    });

    return data.getBrandOwnerOverview;
  },
};
