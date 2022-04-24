import Reactotron from 'reactotron-react-native';

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import Reactotron from './../../../ReactotronConfig';
import reducers from '../reducers';
import sagas from '../sagas';

const enhancers = [];

export default () => {
  const sagaMonitor = Reactotron.createSagaMonitor;
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  enhancers.push(Reactotron.createEnhancer());
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(sagas),
  };
};
