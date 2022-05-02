/* eslint-disable no-unreachable */
import {
  GET_SELECTED_CITY_START,
  GET_SELECTED_CITY_SUCCESS,
} from '../../const/actionForecastTypes';

export default function (state, action) {
  switch (action.type) {
    case GET_SELECTED_CITY_START:
      return {...state};
      break;
    case GET_SELECTED_CITY_SUCCESS:
      return {...state, city: action};
      break;
    default:
      return {...state};
  }
}
