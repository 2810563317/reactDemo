import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './router';
import store from './redux/store.js';
store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});
ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);
