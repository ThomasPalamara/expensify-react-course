import { createStore } from "redux";

//Action generator
//Usefull for several calls and Throw error on typo unlike store.dispatch({type: namewithtypo})
// Default value \( = {}) for payload prevent throwing error when not defined on increment by
//const incrementCount = ({incrementBy = 1}) CR desctructuring. =1 is default value
const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1 // simplified by deconstruring
        // incrementBy: incrementBy // Simplified by shorthand
        incrementBy

    })
const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
})
const resetCount = () => ({
        type: 'RESET'
})
// No default cause we want to force the user to set a count value (error if no value set)
const setCount = ({count}) => ({
        type: 'SET',
        count
})

//Reducers
//1- Reducers are pure functions : Only uses value passed in, not value outside of the scope
//2- Never change state or action inside of the reducer
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }
            break;
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
            break;
        case 'SET':
            return { count: action.count }
            break;
        case 'RESET':
            return { count: 0 }
            break;
        default:
            return state;
            break;
    }
}
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy:5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));
