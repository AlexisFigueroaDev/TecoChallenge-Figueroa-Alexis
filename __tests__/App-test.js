import {
  GET_FORECAST_DAY_ERROR,
  GET_FORECAST_DAY_START,
  GET_FORECAST_DAY_SUCCESS,
  GET_FORECAST_ERROR,
  GET_FORECAST_START,
  GET_FORECAST_SUCCESS,
  GET_NEW_FORECAST_ERROR,
  GET_NEW_FORECAST_START,
  GET_NEW_FORECAST_SUCCESS,
} from '../src/const/actionForecastTypes';

describe('Test Type', () => {
  test('Validar Types', () => {
    expect(GET_FORECAST_START).toEqual('forecast:GET_FORECAST_START');
    expect(GET_FORECAST_SUCCESS).toEqual('forecast:GET_FORECAST_SUCCESS');
    expect(GET_FORECAST_ERROR).toEqual('forecast:GET_FORECAST_ERROR');
    expect(GET_FORECAST_DAY_START).toEqual('forecast:GET_FORECAST_DAY_START');
    expect(GET_FORECAST_DAY_SUCCESS).toEqual(
      'forecast:GET_FORECAST_DAY_SUCCESS',
    );
    expect(GET_FORECAST_DAY_ERROR).toEqual('forecast:GET_FORECAST_DAY_ERROR');
    expect(GET_NEW_FORECAST_START).toEqual('forecast:GET_NEW_FORECAST_START');
    expect(GET_NEW_FORECAST_SUCCESS).toEqual(
      'forecast:GET_NEW_FORECAST_SUCCESS',
    );
    expect(GET_NEW_FORECAST_ERROR).toEqual('forecast:GET_NEW_FORECAST_ERROR');
  });
});
