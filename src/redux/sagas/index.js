import {all} from 'redux-saga/effects';

import forecast from './forecastSaga';

export default function* rootSaga() {
  yield all([forecast()]);
}
