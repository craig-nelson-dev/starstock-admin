import {
  GetDocumentsQuery,
  GetDocumentsQueryVariables,
  SupportDocumentsResponse,
} from '../graphql/generated/graphql';
import getDocumentsQuery from '../graphql/queries/documents.graphql';
import Repository from './Repository';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';

export default {
  async get(query: ParsedUrlQuery): Promise<SupportDocumentsResponse> {
    const params = getListingQuery(query);

    const { data } = await Repository.query<GetDocumentsQuery, GetDocumentsQueryVariables>({
      query: getDocumentsQuery,
      variables: {
        params: {
          pagination: params.pagination,
        },
      },
    });

    return data.getAdminSupportDocuments as SupportDocumentsResponse;
  },

  async getById(id: number): Promise<null> {
    id;
    return null;
  },
};
