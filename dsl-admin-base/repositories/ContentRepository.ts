import {
  Ad,
  AdGroupsResponse,
  GetAdGroupsQuery,
  GetAdGroupsQueryVariables,
  GetAdsForGroupQuery,
  GetAdsForGroupQueryVariables,
} from '../graphql/generated/graphql';
import getAdsQuery from '../graphql/queries/get-ad-groups.graphql';
import Repository from './Repository';

const content = {
  async getAdGroups(): Promise<AdGroupsResponse> {
    const { data } = await Repository.query<GetAdGroupsQuery, GetAdGroupsQueryVariables>({
      query: getAdsQuery,
      variables: {
        input: {
          sort: {
            by: 'name',
            direction: 'asc',
          },
          pagination: {
            page: 1,
            perPage: 10,
          },
        },
      },
    });

    return data.getAdGroups as AdGroupsResponse;
  },

  async getAdsForGroup(groupName: string): Promise<Ad[]> {
    const { data: { getAdsForGroup = [] } = {} } = await Repository.query<
      GetAdsForGroupQuery,
      GetAdsForGroupQueryVariables
    >({
      query: getAdsQuery,
      variables: {
        groupName,
      },
    });

    return getAdsForGroup as Ad[];
  },
};

export default content;
