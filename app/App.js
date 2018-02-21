import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import Navbar from './containers/Navbar'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'

const Provider = require('react-redux').Provider;
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(reducer)

//let store = createStore(reducer)

//console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <Navbar />
            </ BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.body);