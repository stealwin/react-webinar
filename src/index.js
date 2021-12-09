import React from 'react';
import ReactDOM from 'react-dom';
//import Store from './store';
import App from './app';
import StoreProvider from "./store/provider";
//import * as modules from './store/exports.js';

import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './store-redux/exports.js';

const root = document.getElementById("app");

// Состояние приложения
//const store = new Store(modules);

// Состояние приложения в redux
const storeRedux = createStore(combineReducers(reducers), {}, applyMiddleware(thunk));

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(
  <StoreProvider store={storeRedux}>
    <App/>
  </StoreProvider>,
  root
);
