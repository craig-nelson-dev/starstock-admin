import { ParsedUrlQuery } from 'querystring';
import moment from 'moment';
import { DslProduct } from '../graphql/generated/graphql';

export function getRunTimeUniqId(prefix = 'run-time-id') {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

export function getRandomColorHex() {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function isSelection(): boolean {
  const selection = window.getSelection();

  return Boolean(selection && selection.toString().length > 0);
}

const intKeys = ['status'];
const dateKeys = ['createdFrom', 'createdTo', 'updatedFrom', 'updatedTo', 'dateFrom', 'dateTo'];

export function parseQueryFromRouteQuery(query: any) {
  const newQuery = { ...query };
  for (let key in newQuery) {
    if (intKeys.includes(key)) {
      newQuery[key] = newQuery[key] ? parseInt(newQuery[key]) : '';
    }
    if (dateKeys.includes(key)) {
      newQuery[key] = query[key] ? moment(query[key], 'DD/MM/YYYY') : '';
    }
  }

  return newQuery;
}

export function getListingQuery(query: ParsedUrlQuery) {
  let params: any = parseQueryFromRouteQuery(query);

  for (let [key, value] of Object.entries(query)) {
    if (value === '') {
      delete query[key];
    }
  }

  params = {
    ...query,
    pagination: {
      page: parseInt(query.currentPage as string) || 1,
      perPage: parseInt(query.perPage as string) || 10,
    },
  };

  if (query.sortBy && query.sortOrder) {
    params.sort = {
      by: query.sortBy,
      direction: query.sortOrder === 'ascend' ? 'asc' : 'desc',
    };
  }

  return params;
}

export function waitFor(duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export function parseNestedFormValues(data: any, nestedData: Object) {
  for (let [key, value] of Object.entries(nestedData)) {
    if (typeof value === 'object') {
      for (let [nestedKey, nestedValue] of Object.entries(value)) {
        data[`${key}_${nestedKey}`] = nestedValue;
      }
    }
  }

  return data;
}

export function extractNestedAddressFormValues(data: Object, prefix: string) {
  const fields = [
    'title',
    'firstName',
    'lastName',
    'middleName',
    'lineOne',
    'lineTwo',
    'lineThree',
    'city',
    'county',
    'postcode',
    'country',
  ];
  const rs: any = {};

  for (let [key, value] of Object.entries(data)) {
    if (key.startsWith(prefix)) {
      rs[key.replace(prefix, '')] = value;
    }
  }

  for (let field of fields) {
    rs[field] = rs[field] || '';
  }

  return rs;
}

function isEmptyValue(value: any): boolean {
  return value === undefined || (typeof value === 'object' && Object.entries(value).length == 0);
}

export function removeUndefinedValuesFromParams(params: any) {
  const clone = {} as any;
  Object.entries(params).forEach(([key, value]) => {
    if (value === Object(value)) {
      const result = removeUndefinedValuesFromParams(value);
      if (!isEmptyValue(result)) clone[key] = result;
    } else if (!isEmptyValue(value)) {
      clone[key] = params[key];
    }
  });
  return clone;
}

export function getCurrentPrice(product?: DslProduct | null) {
  return product?.adminPricing?.pricing?.find(
    (o) => moment(o.dateFrom).isBefore(moment()) && moment(o.dateTo).isAfter(moment()),
  );
}

export function calculatePrice(basePrice: number, starStockFee: number, logisticFeeAmount: number) {
  return basePrice + basePrice * (starStockFee / 100) + logisticFeeAmount;
}
