import {
  ADVERTS_DATE_FILTER_SETTED,
  ADVERTS_FETCHED,
  ERROR_FETCHING_ADVERTS_DATA,
  INCREMENT_PAGE,
  SEARCH_TERM_INPUT_CHANGE,
  SELECT_LOCATION_INPUT_CHANGE,
  SEARCH_BUTTON_PRESSED,
  TOGGLE_LOADING_STATE,
  RESET_PAGE_NUMBER,
  RESET_FAILED_TO_GET_ADVERTS
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
        advertsFetched: false
      });
    case ERROR_FETCHING_ADVERTS_DATA:
      return Object.assign({}, state, {
        failedToGetAdverts: true
      });
    case RESET_FAILED_TO_GET_ADVERTS:
      return Object.assign({}, state, {
        failedToGetAdverts: false
      });
    case ADVERTS_FETCHED:
      return Object.assign({}, state, {
        hasMoreItems: action.adverts.hasMoreItems,
        totalItems: action.adverts.totalItems,
        data:
          state.pageNumber === 1
            ? action.adverts.data
            : state.data
            ? state.data.concat(action.adverts.data)
            : action.adverts.data,
        advertsFetched: true
      });
    case ADVERTS_DATE_FILTER_SETTED:
      return Object.assign({}, state, {
        dateFilter: Number(action.number),
        advertsFetched: false
      });
    case INCREMENT_PAGE:
      return Object.assign({}, state, {
        pageNumber: state.pageNumber + 1
      });
    case TOGGLE_LOADING_STATE:
      return Object.assign({}, state, {
        loading: !state.loading
      });
    case RESET_PAGE_NUMBER:
      return Object.assign({}, state, {
        pageNumber: 1
      });
    default:
      return state;
  }
}
