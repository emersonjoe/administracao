import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getSagas } from './effects';
import { getReducers } from './reducers';
import { createEpicMiddleware } from 'redux-observable';

let store = null;

export const initStore = initialState => {
    if (store) {
        return store;
    }

    const epicMiddleware = createEpicMiddleware(getSagas());

    store = createStore(
        getReducers(),
        initialState,
        compose(
            applyMiddleware(epicMiddleware, thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
};

/**
* Util function to dispatch action to store
*/
export const dispatch = action => {
    if (!store) {
        console.error('Called dispatch without store'); // eslint-disable-line no-console
        return;
    }

    store.dispatch(action);
};
