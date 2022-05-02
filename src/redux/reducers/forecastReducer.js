/* eslint-disable no-unreachable */
import {
  GET_FORECAST_START,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
} from '../../const/actionForecastTypes';

export default function (state, action) {
  switch (action.type) {
    case GET_FORECAST_START:
      return {...state};
      break;
    case GET_FORECAST_SUCCESS:
      return {...state, forecast: action.result};
      break;
    case GET_FORECAST_ERROR:
      return {...state, forecast: null, error: action.error};
      break;
    default:
      return {...state};
  }
}
