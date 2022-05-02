import {combineReducers} from 'redux';

import forecastReducer from './forecastReducer';
import forecasteForDay from './forecasteForDay';
import selectedCity from './selectedCity';

export default combineReducers({
  // Reducers
  forecastReducer,
  forecasteForDay,
  selectedCity,
});
