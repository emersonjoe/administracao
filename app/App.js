import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './containers/home';
import { createStore } from 'redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
const Provider = require('react-redux').Provider;

let store = createStore(reducer)

console.log(store.getState())
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
 if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Home />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app'));

    registerServiceWorker();