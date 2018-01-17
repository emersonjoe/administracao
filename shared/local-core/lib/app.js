import React from 'react';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
import { useScroll } from 'react-router-scroll';
import Provider from 'react-redux/lib/components/Provider';
import { initStore } from './store';
import { getRoutes } from './routes';
import { LOCATION_CHANGE } from './constants';

const store = initStore();

hashHistory.listen(location =>
    store.dispatch({
        type: LOCATION_CHANGE,
        payload: location
    })
);

const Component = (
    <Provider store={store}>
        <Router
            history={hashHistory}
            routes={getRoutes()}
            render={applyRouterMiddleware(useScroll())}
        />
    </Provider>
);

export default Component;
