import { Observable } from 'rxjs/Observable';

// import only what we need by patching (this is useful for size-sensitive bundling)
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/race';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/throttleTime';

const effects = {};

export const isSuccessful = action => !action.error;

export const isFailure = action => action.error;

const actionsIsInSequence = (actions, order) =>
    actions.every((action, i) => action.type === order[i]);

export const ofSequencedTypes = action$ => {
    return {
        ofType: (...types) =>
            action$
                .ofType(...types)
                .bufferCount(types.length, 1)
                .filter(actions => actionsIsInSequence(actions, types))
                .filter(actions => actions.length === types.length)
    };
};

const registerEffects = newEffects => {
    Object.keys(newEffects).forEach(effect => {
        if (effects[effect]) {
            /* eslint-disable no-console */
            console.error(
                `Warning: Duplicated effect. Check the effect ${effect}.`
            );
            /* eslint-enable no-console */
        }
    });

    Object.assign(effects, newEffects);
};

export const registerImportedEffects = importedEffects =>
    Object.values(importedEffects).forEach(registerEffects);

export const getSagas = () => (action$, store) => {
    const callAction$ = saga => saga(action$, store, {});

    return Observable.merge(...Object.values(effects).map(callAction$));
};
