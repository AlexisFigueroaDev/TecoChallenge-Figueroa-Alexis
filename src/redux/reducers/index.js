import {combineReducers} from 'redux';

import forecastReducer from './forecastReducer';
import forecasteForDay from './forecasteForDay';

export default combineReducers({
  // Reducers
  forecastReducer,
  forecasteForDay,
});
