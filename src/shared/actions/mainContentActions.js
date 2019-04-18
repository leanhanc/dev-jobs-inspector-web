import { ADVERTS_DATE_FILTER_SETTED } from './actionTypes';

export function onAdvertsDateFilterInputChange(number) {
  return {
    type: ADVERTS_DATE_FILTER_SETTED,
    number
  };
}
