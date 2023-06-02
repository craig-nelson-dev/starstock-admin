import Router from 'next/router';
import { getRunTimeUniqId } from '../utils/helper';

export function reloadPage(params: { [key: string]: string } = {}) {
  Router.replace({
    pathname: Router.router?.pathname,
    query: { ...Router.router?.query, ...params, _fe_uid: getRunTimeUniqId('uid') },
  });
}
