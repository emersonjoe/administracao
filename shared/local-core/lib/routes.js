import React from 'react';

const decorators = [];
const onEnterHandlers = [];

const rootRoute = {
    component: 'div',
    path: '/',
    childRoutes: [],
    indexRoute: {
        onEnter(nextState, replace) {
            onEnterHandlers.forEach(handler => handler(nextState, replace));
        }
    }
};

const getDisplayName = WrappedComponent =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

const wrapDecorator = (Parent, Child) => {
    const Component = props =>
        <Parent>
            {typeof Child === 'string'
                ? <Child>
                      {props.children}
                  </Child>
                : <Child {...props} />}
        </Parent>;

    Component.displayName = `RouteDecorator(${getDisplayName(Parent)})`;

    return Component;
};

export const decorateRootComponent = Component => decorators.push(Component);

export const registerScreen = config => rootRoute.childRoutes.push(config);

const registerScreens = screens => screens.forEach(registerScreen);

export const parseScreens = screens =>
    Object.keys(screens).map(screen => screens[screen]);

export const registerImportedScreens = imported =>
    registerScreens(parseScreens(imported));

export const registerOnEnterHandler = handler => onEnterHandlers.push(handler);

const registerNotFoundRoute = () =>
    registerScreen({
        component: 'div',
        path: '*',
        onEnter(nextState) {
            const { pathname, search, hash } = nextState.location;

            /* eslint-disable no-console */
            console.error(
                `Location ${pathname + search + hash} did not match any routes`
            );
            /* eslint-enable no-console */
        }
    });

export const getRoutes = () => {
    registerNotFoundRoute();

    if (!decorators.length) {
        return rootRoute;
    }

    decorators.forEach(decorator => {
        rootRoute.component = wrapDecorator(decorator, rootRoute.component);
    });

    return rootRoute;
};
