import {
  SEARCH_BUTTON_PRESSED,
  SEARCH_TERM_INPUT_CHANGE,
  SELECT_LOCATION_INPUT_CHANGE
} from './actionTypes';

export function onSearchTermInputChange(text) {
  return {
    type: SEARCH_TERM_INPUT_CHANGE,
    text
  };
}

export function onSelectLocationInputChange(text) {
  return {
    type: SELECT_LOCATION_INPUT_CHANGE,
    text
  };
}

export function onSearchButtonPressed(query, locationFilter = '', dateFilter) {
  return {
    type: SEARCH_BUTTON_PRESSED,
    searchFor: query,
    locationFilter,
    dateFilter
  };
}
