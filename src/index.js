import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

console.log('index.js');

// Состояние приложения
const store = new Store({
  items: [
    {code: 1, title: 'Название элемента', price:100, currency: 'P'},
    {code: 2, title: 'Некий объект',price:120, currency: 'P'},
    {code: 3, title: 'Заголовок',price:1730, currency: 'P'},
    {code: 4, title: 'Короткое название',price:920, currency: 'P'},
    {code: 5, title: 'Запись',price:12, currency: 'P'},
    {code: 6, title: 'Пример названия',price:140, currency: 'P'},
    {code: 7, title: 'Седьмой',price:190, currency: 'P'}
  ],
  itemsBasket:[]
});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store}/>, root);
