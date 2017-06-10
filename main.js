import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import allReducers from '~/js/reducers/index.js';
import { Provider } from 'react-redux';

//const store = createStore(allReducers);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);