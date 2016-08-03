import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import App from './containers/App';
import newsApp from './reducers';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};


let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

let store = createStoreWithMiddleware(newsApp);


let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
