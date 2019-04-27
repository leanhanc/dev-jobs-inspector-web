import { ADVERTS_DATE_FILTER_SETTED, ADVERTS_GET_NEXT_PAGE } from './actionTypes';

export function onAdvertsDateFilterInputChange(number) {
  return {
    type: ADVERTS_DATE_FILTER_SETTED,
    number
  };
}

export function onScrollToBottom() {
  return { type: ADVERTS_GET_NEXT_PAGE };
}
