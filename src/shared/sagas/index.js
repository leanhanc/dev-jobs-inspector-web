import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { search } from '../../api/';
import * as selectors from './selectors';
import {
  ADVERTS_GET_NEXT_PAGE,
  ADVERTS_FETCHED,
  SEARCH_BUTTON_PRESSED,
  ERROR_FETCHING_ADVERTS_DATA,
  ADVERTS_DATE_FILTER_SETTED,
  INCREMENT_PAGE,
  RESET_ERROR_STATE,
  RESET_ADVERTS_LIST,
  RESET_PAGE_NUMBER,
  TOGGLE_LOADING_STATE
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

  yield put({ type: TOGGLE_LOADING_STATE });

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
    yield put({ type: TOGGLE_LOADING_STATE });
    yield put({ type: INCREMENT_PAGE });

    // Si no hay mas items que mostrar, resetear para permitir una nueva búsqueda limpia
    if (!adverts.hasMoreItems) yield put({ type: RESET_PAGE_NUMBER });
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
      yield put({ type: TOGGLE_LOADING_STATE });
    } catch (e) {
      yield put({ type: ERROR_FETCHING_ADVERTS_DATA });
      yield put({ type: TOGGLE_LOADING_STATE });
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
