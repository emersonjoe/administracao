import { createSelector } from 'reselect';

export const makeDomainSelectorCreator = ns => reducerName =>
    createSelector(state => state[ns][reducerName], domainState => domainState);
