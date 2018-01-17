import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './containers/home';
import { createStore } from 'redux'
import reducer from './reducers'
const Provider = require('react-redux').Provider;

let store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Home />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app'));