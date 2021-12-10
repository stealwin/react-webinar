import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import StoreProvider from "./store/provider";
import * as modules from './store/exports.js';

const root = document.getElementById("app");

// Состояние приложения
const store = new Store(modules);

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(
  <BrowserRouter>
  <StoreProvider store={store}>
    <App/>
  </StoreProvider>
  </BrowserRouter>,

root
);
