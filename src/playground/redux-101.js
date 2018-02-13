import { createStore } from 'redux';

//Action gererators - fn that return action obj

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

const resetCount = ({count} = {}) => ({
    type: 'RESET',
    count
})

const store = createStore((state = { count: 0}, action) => { //reducer
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy,
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return action.count;
        case 'RESET':
            return action.count;
        default: 
            return state;
    };
});

store.subscribe(() => {
    console.log(store.getState())
});
console.log(store.getState());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 89}));

store.dispatch(resetCount({count: 0}));

console.log(store.getState());



