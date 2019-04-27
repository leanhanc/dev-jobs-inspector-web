import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { search } from '../../api/';
import * as selectors from './selectors';
import {
  ADVERTS_GET_NEXT_PAGE,
  ADVERTS_FETCHED,
  SEARCH_BUTTON_PRESSED,
  ERROR_FETCHING_ADVERTS_DATA,
  ADVERTS_DATE_FILTER_SETTED,
  INCREMENT_PAGE
} from '../actions/actionTypes';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;
const BASE_URL_BACKUP = process.env.REACT_APP_BACKUP_API_URL;

export function* advertsFetcher({ searchFor, locationFilter, dateFilter, pageNumber }) {
  if (!searchFor) {
    searchFor = yield select(selectors.getSerchTerm);
  }
  if (!dateFilter) {
    dateFilter = yield select(selectors.getDateFilter);
  }

  if (!locationFilter) {
    locationFilter = yield select(selectors.getLocationFilter);
  }

  if (!pageNumber) {
    pageNumber = yield select(selectors.getPageNumber);
  }

  // Si la API principal está caída, usar la de respaldo
  try {
    const adverts = yield call(search, [
      BASE_URL,
      searchFor,
      locationFilter,
      dateFilter,
      pageNumber
    ]);
    yield put({ type: ADVERTS_FETCHED, adverts });
    yield put({ type: INCREMENT_PAGE });
  } catch (e) {
    try {
      const adverts = yield call(search, [
        BASE_URL_BACKUP,
        searchFor,
        locationFilter,
        dateFilter,
        pageNumber
      ]);
      yield put({ type: ADVERTS_FETCHED, adverts });
      yield put({ type: INCREMENT_PAGE });
    } catch (e) {
      yield put({ type: ERROR_FETCHING_ADVERTS_DATA });
    }
  }
}

function* searchWatcher() {
  yield takeLatest(SEARCH_BUTTON_PRESSED, advertsFetcher);
  yield takeLatest(ADVERTS_DATE_FILTER_SETTED, advertsFetcher);
  yield takeLatest(ADVERTS_GET_NEXT_PAGE, advertsFetcher);
}

export default function* appSagas() {
  yield all([searchWatcher()]);
}
