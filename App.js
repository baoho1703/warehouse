import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import APP from './src/pages/app'
import rootReducer from './reducers'

const store = createStore(rootReducer);

export default class HomeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <APP> </APP>

      </Provider>
    );
  }
}