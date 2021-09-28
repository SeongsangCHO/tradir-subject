import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import Routes from './Routes';
import rootReducer, { rootSaga } from './Modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // ,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    //   ? composeWithDevTools()
    //   : (f) => f
  ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

export default store;
