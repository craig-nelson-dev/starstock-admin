import { ParsedUrlQuery } from 'querystring';
import {
  GetReportByIdQuery,
  GetReportByIdQueryVariables,
  GetReportsQuery,
  GetReportsQueryVariables,
  Report,
  ReportsResponse,
} from '../graphql/generated/graphql';
import getReportByIdQuery from '../graphql/queries/report-by-id.graphql';
import getReportsQuery from '../graphql/queries/reports.graphql';
import { getListingQuery } from '../utils/helper';
import Repository from './Repository';

export default {
  async get(query: ParsedUrlQuery): Promise<ReportsResponse | null> {
    try {
      const params = getListingQuery(query);
      const { data: { getReports = null } = {} } = await Repository.query<
        GetReportsQuery,
        GetReportsQueryVariables
      >({
        query: getReportsQuery,
        variables: {
          params: {
            sort: {
              by: 'created_on',
              direction: 'desc',
            },
            pagination: params.pagination,
          },
        },
      });

      return getReports as ReportsResponse;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async getReportDetail(id: number): Promise<Report | null> {
    const { data } = await Repository.query<GetReportByIdQuery, GetReportByIdQueryVariables>({
      query: getReportByIdQuery,
      variables: { id },
    });

    if (data.getReportById) {
      return data.getReportById as Report;
    }

    return null;
  },
};
