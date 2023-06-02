import { SyncSageDataQuery, SyncSageDataQueryVariables } from '../graphql/generated/graphql';
import syncSageData from '../graphql/queries/sync-sage-data.graphql';
import Repository from './Repository';

export default {
  async sync(): Promise<string> {
    const { data } = await Repository.query<SyncSageDataQuery, SyncSageDataQueryVariables>({
      query: syncSageData,
    });

    return data.syncSageData;
  },
};
