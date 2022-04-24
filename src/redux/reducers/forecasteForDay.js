/* eslint-disable no-unreachable */
import {
  GET_FORECAST_DAY_START,
  GET_FORECAST_DAY_SUCCESS,
  GET_FORECAST_DAY_ERROR,
} from '../../const/actionForecastTypes';

export default function (state, action) {
  switch (action.type) {
    case GET_FORECAST_DAY_START:
      return {...state};
      break;
    case GET_FORECAST_DAY_SUCCESS:
      return {...state, forecasteForDay: action.result};
      break;
    case GET_FORECAST_DAY_ERROR:
      return {...state, forecasteForDay: null, error: action.error};
      break;
    default:
      return {...state};
  }
}
