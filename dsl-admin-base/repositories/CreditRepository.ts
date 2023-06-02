import {
  GetCreditNotesQuery,
  GetCreditNotesQueryVariables,
  CreditNotesResponse,
  GetCreditNoteByIdQuery,
  GetCreditNoteByIdQueryVariables,
  CreditNote,
} from '../graphql/generated/graphql';
import Repository from './Repository';
import getCreditNotesQuery from '../graphql/queries/get-credits.graphql';
import creditByIdQuery from '../graphql/queries/get-credit-by-id.graphql';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';
import moment from 'moment';

export default {
  async get(query: ParsedUrlQuery): Promise<CreditNotesResponse | null> {
    const params = getListingQuery(query);

    for (let [key, value] of Object.entries(params)) {
      if (value instanceof moment) {
        params[key] = moment(value, 'DD/MM/YYYY').format('DD/MM/YYYY');
      }
    }

    const { data } = await Repository.query<GetCreditNotesQuery, GetCreditNotesQueryVariables>({
      query: getCreditNotesQuery,
      variables: {
        input: {
          pagination: params.pagination,
          search: params.search,
          date: {
            ...(params.dateFrom ? { from: params.dateFrom } : {}),
            ...(params.dateTo ? { to: params.dateTo } : {}),
          },
        },
      },
    });

    return data.getCreditNotes as CreditNotesResponse;
  },

  async getById(id: number): Promise<CreditNote | null> {
    const { data } = await Repository.query<
      GetCreditNoteByIdQuery,
      GetCreditNoteByIdQueryVariables
    >({
      query: creditByIdQuery,
      variables: {
        id,
      },
    });

    return data.getCreditNoteById as CreditNote;
  },
};
