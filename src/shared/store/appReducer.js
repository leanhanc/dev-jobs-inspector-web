import {
  SEARCH_TERM_INPUT_CHANGE,
  SELECT_LOCATION_INPUT_CHANGE,
  SEARCH_BUTTON_PRESSED
} from '../actions/actionTypes';

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH_TERM_INPUT_CHANGE:
      return Object.assign({}, state, {
        searchFor: action.text
      });
      alert('mierda');
    case SELECT_LOCATION_INPUT_CHANGE:
      alert('hola');
    default:
      return state;
  }
}
