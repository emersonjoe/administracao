import combineReducers from 'redux/lib/combineReducers';
import { createEntityReducer } from './entities';

/**
 * Store registered reducers
 */
const reducers = {};

/**
 * Normalize namespaces text
 */
const parseNamespace = name => name.toUpperCase().trim();

/**
 * Register the reducer, considering namespace
 */
const registerReducer = (newReducer, key, module = 'MAIN') => {
    const ns = parseNamespace(module);

    if (!reducers.hasOwnProperty(ns)) {
        reducers[ns] = {};
    }

    if (reducers[ns].hasOwnProperty(key)) {
        throw new Error(`Duplicated reducer ${key} for module ${module}`);
    }

    reducers[ns][key] = newReducer;
    return;
};

/**
 * Util function to batch register reducers
 */
export const registerReducers = (newReducers, ns) => {
    Object.keys(newReducers).forEach(key =>
        registerReducer(newReducers[key], key, ns)
    );
};

/**
 * Combine reducers by namespaces, to pass to Redux
 */
const combineNamespaces = (sum, ns) => {
    reducers[ns].entities = createEntityReducer(ns);

    sum[ns] = combineReducers(reducers[ns]);

    return sum;
};

/**
 * Return combinedReducers to Redux store
 */
export const getReducers = () => {
    const namespaces = Object.keys(reducers);

    // Empty reducers
    if (!namespaces.length) {
        return () => {};
    }

    const combinedReducers = namespaces.reduce(combineNamespaces, {});

    return combineReducers(combinedReducers);
};
