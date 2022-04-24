// import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let reactotron;

const {default: Reactotron} = require('reactotron-react-native');
const {reactotronRedux} = require('reactotron-redux');
const sagaPlugin = require('reactotron-redux-saga');
reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({name: 'Teco Forecast'}) // controls connection & communication settings
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

console.tron = Reactotron;

export default reactotron;
