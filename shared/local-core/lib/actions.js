import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';

export { handleActions } from 'redux-actions';

const isPromise = val => val && typeof val.then === 'function';

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    if (response.status === 401) {
        location.reload();
    }

    const error = new Error(response.statusText);

    error.response = response;
    throw error;
};

const parseResponse = response => {
    const contentType = response.headers.get('content-type');

    if (!contentType.startsWith('application/json')) {
        return response.text();
    }

    return response.json();
};

export const createAsyncAction = (name, asyncFn) => (...args) => (
    dispatch,
    getState
) => {
    const requested = createAction(name + '_REQUESTED');
    const completed = createAction(name + '_COMPLETED');

    dispatch(requested(args.length === 1 ? args[0] : args));

    const promise = asyncFn(...args, dispatch, getState);

    if (!isPromise(promise)) {
        return;
    }

    promise.then(response => dispatch(completed(response)));

    promise.catch(error => {
        let _error = error;

        if (!(error instanceof Error)) {
            _error = new Error(JSON.stringify(error));
        }

        _error.args = args;

        return dispatch(completed(_error));
    });
};

export const createApiAction = (name, payload) => {
    const defaultOptions = {
        method: 'get',
        credentials: 'include'
    };

    return createAsyncAction(name, (...args) => {
        const { schema, ns } = payload;
        let { url, options } = payload;

        if (typeof url === 'function') {
            url = url(...args);
        }

        if (typeof options === 'function') {
            options = options(...args);
        }

        return fetch(url, Object.assign({}, defaultOptions, options))
            .then(checkStatus)
            .then(parseResponse)
            .then(response => {
                if (schema) {
                    return Object.assign({}, normalize(response, schema), {
                        ns
                    });
                }

                return response;
            });
    });
};

export const generateAction = (name, payload) => {
    if (!payload) {
        return createAction(name);
    }

    if (typeof payload === 'function') {
        return createAsyncAction(name, payload);
    }

    if (payload && typeof payload === 'object' && payload.url) {
        return createApiAction(name, payload);
    }

    return null;
};

export const generateActions = actions =>
    Object.keys(actions).reduce((map, key) => {
        map[key] = generateAction(key, actions[key]);
        return map;
    }, {});
