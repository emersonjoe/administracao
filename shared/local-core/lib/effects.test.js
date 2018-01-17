import test from 'ava';

import { spy } from 'sinon';

import { ActionsObservable } from 'redux-observable';

import { ofSequencedTypes, isSuccessful, isFailure } from './effects';

test('Deve considerar sequencias', t => {
    const next = spy();

    const input = ActionsObservable.of(
        { type: 'A' },
        { type: 'B' },
        { type: 'C' }
    );

    const effect$ = action$ => ofSequencedTypes(action$).ofType('A', 'C');

    return effect$(input).do({
        next,
        complete() {
            t.is(next.callCount, 1);
        }
    });
});

test('Deve desconsiderar ações com erros', t => {
    const next = spy();

    const input = ActionsObservable.of(
        { type: 'A' },
        { type: 'B' },
        { type: 'C', error: true }
    );

    const effect$ = action$ =>
        ofSequencedTypes(action$.filter(isSuccessful)).ofType('A', 'C');

    return effect$(input).do({
        next,
        complete() {
            t.is(next.callCount, 0);
        }
    });
});

test('Deve ignorar ações fora de sequencia', t => {
    const next = spy();

    const input = ActionsObservable.of(
        { type: 'A' },
        { type: 'B' },
        { type: 'C' }
    );

    const effect$ = action$ => ofSequencedTypes(action$).ofType('C', 'A');

    return effect$(input).do({
        next,
        complete() {
            t.is(next.callCount, 0);
        }
    });
});

test('Deve sequenciar ações com erros', t => {
    const next = spy();

    const input = ActionsObservable.of(
        { type: 'A', error: true },
        { type: 'B' },
        { type: 'C', error: true }
    );

    const effect$ = action$ =>
        ofSequencedTypes(action$.filter(isFailure)).ofType('A', 'C');

    return effect$(input).do({
        next,
        complete() {
            t.is(next.callCount, 1);
        }
    });
});
