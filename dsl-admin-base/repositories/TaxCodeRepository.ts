import {
  TaxCode,
  GetTaxCodesQuery,
  GetTaxCodesQueryVariables,
  GetTaxCodeByIdQuery,
  GetTaxCodeByIdQueryVariables,
} from '../graphql/generated/graphql';
import Repository from './Repository';
import getTaxCodesQuery from '../graphql/queries/tax-codes.graphql';
import getTaxCodeByIdQuery from '../graphql/queries/tax-code-by-id.graphql';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';

interface TaxCodesResponse {
  totalCount: number;
  taxCodes?: TaxCode[];
}

export default {
  async get(query: ParsedUrlQuery): Promise<TaxCodesResponse | null> {
    const params = getListingQuery(query);
    const { data } = await Repository.query<GetTaxCodesQuery, GetTaxCodesQueryVariables>({
      query: getTaxCodesQuery,
      variables: {
        params: {
          pagination: params.pagination,
          sort: params.sort,
          search: params.search,
        },
      },
    });

    return data.getAdminTaxCodes as TaxCodesResponse;
  },

  async getById(id: number): Promise<TaxCode | null> {
    const { data } = await Repository.query<GetTaxCodeByIdQuery, GetTaxCodeByIdQueryVariables>({
      query: getTaxCodeByIdQuery,
      variables: {
        id,
      },
    });

    return data.getTaxCodeById as TaxCode;
  },
};
