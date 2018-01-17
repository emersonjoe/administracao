import { Map, List } from 'immutable';
import { createSelector } from 'reselect';
import { normalize } from 'normalizr';

const initialState = Map();

const merger = (orig, dest) => {
    if (orig && orig.mergeWith && !List.isList(orig) && !List.isList(dest)) {
        return orig.mergeWith(merger, dest);
    }

    return dest;
};

export const createEntityReducer = ns => (state = initialState, action) => {
    if (
        !action.payload ||
        !action.payload.ns ||
        action.payload.ns !== ns ||
        !action.payload.entities
    ) {
        return state;
    }

    return merger(state, action.payload.entities);
};

export const makeEntitySelectorCreator = selectEntitiesDomain => ({ _key }) =>
    createSelector(
        [selectEntitiesDomain],
        entitiesState =>
            entitiesState.has(_key) ? entitiesState.get(_key) : initialState
    );

export const createNormalizeEntity = ns => (...args) => ({
    ...normalize(...args),
    ns
});
