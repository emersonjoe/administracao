const routes = [
    {
        path: 'budget-manager',
        indexRoute: {
            onEnter(nextState, replace) {
                replace({ pathname: '/budget-manager/budget' });
            }
        },
        childRoutes: [
            {
                path: '/budget-manager/budget',
                getComponent(nextState, cb) {
                    require.ensure(
                        [],
                        require => {
                            cb(null, require('./containers/home').default);
                        },
                        'budget-manager-budget'
                    );
                }
            }
        ]
    }
];

export default routes;
