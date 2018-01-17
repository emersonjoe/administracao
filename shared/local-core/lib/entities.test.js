import test from 'ava';
import { fromJS } from 'immutable';
import { createEntityReducer } from './entities';

const entityReducer = createEntityReducer('NAMESPACE');

const state = fromJS({
    a: {
        id1: {
            id: 'id1',
            list: ['a', 'b'],
            listObj: [
                {
                    key1: '1',
                    key2: '2'
                },
                {
                    key1: '1',
                    key2: '2'
                }
            ],
            deep: {
                key1: '1',
                key2: '2'
            },
            update: '1',
            extraProp: 'value'
        },
        id2: {
            id: 'id2',
            list: ['a', 'b'],
            listObj: [
                {
                    key1: '1',
                    key2: '2'
                },
                {
                    key1: '1',
                    key2: '2'
                }
            ],
            deep: {
                key1: '1',
                key2: '2'
            },
            update: '1',
            extraProp: 'value'
        }
    },
    b: {
        id4: {
            id: 'id4',
            list: ['a', 'b'],
            listObj: [
                {
                    key1: '1',
                    key2: '2'
                },
                {
                    key1: '1',
                    key2: '2'
                }
            ],
            deep: {
                key1: '1',
                key2: '2'
            },
            update: '1',
            extraProp: 'value'
        }
    }
});

test(t => {
    const actual = entityReducer(state, {
        payload: {
            ns: 'NAMESPACE',
            entities: {
                a: {
                    id1: {
                        id: 'id1',
                        list: ['a'],
                        listObj: [
                            {
                                key1: '1e',
                                key2: '2e'
                            }
                        ],
                        deep: {
                            key2: 'edit',
                            key3: '3'
                        },
                        newProp: 'value',
                        update: '2'
                    },
                    id3: {
                        id: 'id3'
                    }
                }
            }
        }
    });

    const expected = {
        a: {
            id1: {
                id: 'id1',
                list: ['a'],
                listObj: [
                    {
                        key1: '1e',
                        key2: '2e'
                    }
                ],
                deep: {
                    key1: '1',
                    key2: 'edit',
                    key3: '3'
                },
                newProp: 'value',
                update: '2',
                extraProp: 'value'
            },
            id2: {
                id: 'id2',
                list: ['a', 'b'],
                listObj: [
                    {
                        key1: '1',
                        key2: '2'
                    },
                    {
                        key1: '1',
                        key2: '2'
                    }
                ],
                deep: {
                    key1: '1',
                    key2: '2'
                },
                update: '1',
                extraProp: 'value'
            },
            id3: {
                id: 'id3'
            }
        },
        b: {
            id4: {
                id: 'id4',
                list: ['a', 'b'],
                listObj: [
                    {
                        key1: '1',
                        key2: '2'
                    },
                    {
                        key1: '1',
                        key2: '2'
                    }
                ],
                deep: {
                    key1: '1',
                    key2: '2'
                },
                update: '1',
                extraProp: 'value'
            }
        }
    };

    t.deepEqual(actual.toJS(), expected);
});
