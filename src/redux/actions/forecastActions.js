import {
  GET_FORECAST_DAY_START,
  GET_FORECAST_START,
} from '../../const/actionForecastTypes';

export const getForecast = payload => ({
  type: GET_FORECAST_START,
  payload,
});

export const getForecasteForDay = payload => ({
  type: GET_FORECAST_DAY_START,
  payload,
});
