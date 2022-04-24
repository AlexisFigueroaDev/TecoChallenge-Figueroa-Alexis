if (true) {
  const reactotron = require('./ReactotronConfig').default;
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/navigate/Navigate';
import {Provider} from 'react-redux';
import Store from './src/redux/store';

const store = Store();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
