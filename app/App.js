import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore } from 'redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import Home from './Home'
const Provider = require('react-redux').Provider;

let store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <Home />
            </ BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.body);