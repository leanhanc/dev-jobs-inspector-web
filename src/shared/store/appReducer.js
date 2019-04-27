import {
  ADVERTS_DATE_FILTER_SETTED,
  ADVERTS_FETCHED,
  ERROR_FETCHING_ADVERTS_DATA,
  INCREMENT_PAGE,
  SEARCH_TERM_INPUT_CHANGE,
  SELECT_LOCATION_INPUT_CHANGE,
  SEARCH_BUTTON_PRESSED
} from '../actions/actionTypes';

export default function appReducer(state, action) {
  switch (action.type) {
    case SEARCH_TERM_INPUT_CHANGE:
      return Object.assign({}, state, {
        searchFor: action.text
      });
    case SELECT_LOCATION_INPUT_CHANGE:
      return Object.assign({}, state, {
        locationFilter: action.text
      });
    case SEARCH_BUTTON_PRESSED:
      return Object.assign({}, state, {
        advertsFetched: false,
        loading: true
      });
    case ERROR_FETCHING_ADVERTS_DATA:
      return Object.assign({}, state, {
        failedToGetAdverts: true,
        loading: false
      });
    case ADVERTS_FETCHED:
      return Object.assign({}, state, {
        hasMoreItems: action.adverts.hasMoreItems,
        totalItems: action.adverts.totalItems,
        data: state.data ? state.data.concat(action.adverts.data) : action.adverts.data,
        advertsFetched: true,
        loading: false
      });
    case ADVERTS_DATE_FILTER_SETTED:
      return Object.assign({}, state, {
        dateFilter: Number(action.number),
        advertsFetched: false,
        loading: true
      });
    case INCREMENT_PAGE:
      return Object.assign({}, state, {
        pageNumber: state.pageNumber + 1
      });
    default:
      return state;
  }
}
