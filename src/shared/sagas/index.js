import { all, call, put, takeLatest } from 'redux-saga/effects';
import { search } from '../../api/';
import {
  ADVERTS_FETCHED,
  SEARCH_BUTTON_PRESSED,
  ERROR_FETCHING_ADVERTS_DATA
} from '../actions/actionTypes';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;
const BASE_URL_BACKUP = process.env.REACT_APP_BACKUP_API_URL;

export function* advertsFetcher({ searchFor }) {
  // Si la API principal está caída, usar la de respaldo
  try {
    const adverts = yield call(search, [BASE_URL, searchFor]);
    yield put({ type: ADVERTS_FETCHED, payload: adverts });
  } catch (e) {
    try {
      const adverts = yield call(search, [BASE_URL_BACKUP, searchFor]);
      yield put({ type: ADVERTS_FETCHED, payload: adverts });
    } catch (e) {
      yield put({ type: ERROR_FETCHING_ADVERTS_DATA });
    }
  }
}

function* searchWatcher() {
  yield takeLatest(SEARCH_BUTTON_PRESSED, advertsFetcher);
}

export default function* appSagas() {
  yield all([searchWatcher()]);
}
