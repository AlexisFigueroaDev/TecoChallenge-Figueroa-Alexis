import {call, takeLatest, put} from 'redux-saga/effects';
import {
  GET_FORECAST_START,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
  GET_FORECAST_DAY_START,
  GET_FORECAST_DAY_SUCCESS,
  GET_FORECAST_DAY_ERROR,
} from '../../const/actionForecastTypes';

import apiCall from '../api/forecastApi';

export function* getForecast({payload}) {
  const method = 'GET';
  const url = `/weather?q=${payload},AR`;
  try {
    const result = yield call(apiCall, url, method);
    yield put({type: GET_FORECAST_SUCCESS, result: result.data});
  } catch (error) {
    yield put({type: GET_FORECAST_ERROR, result: error});
  }
}

export function* getForecasteForDay({payload}) {
  const {lat, lon} = payload;
  const method = 'GET';
  const url = `/onecall?lat=${lat}&lon=${lon}`;
  try {
    const result = yield call(apiCall, url, method);
    yield put({
      type: GET_FORECAST_DAY_SUCCESS,
      result: result.data.daily,
    });
  } catch (error) {
    yield put({type: GET_FORECAST_DAY_ERROR, result: error});
  }
}

export default function* forecast() {
  yield takeLatest(GET_FORECAST_START, getForecast);
  yield takeLatest(GET_FORECAST_DAY_START, getForecasteForDay);
}
