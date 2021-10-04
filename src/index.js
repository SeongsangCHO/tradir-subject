import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import Routes from "./Routes";
import rootReducer, { rootSaga } from "./Modules";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
    // ,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    // composeWithDevTools()
    //   : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
