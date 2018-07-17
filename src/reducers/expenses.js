//Expense Reducer
const expensesReducerDefaultState = [];

// dont need a name for the function if we set a default export since it's the only export
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //We can used concat 'cause push alter state value and we want it to stay a pure function CF : redux101. Concat return another array that result of the concatenation of both arrays
            return [...state, action.expense]; // ...array Spread operator 
        case 'REMOVE_EXPENSE':
        console.log('action',action.id);
            return state.filter(({ id }) => action.id !== id); //({id}) destructuring because state is an array of objects and we need their id
        case 'EDIT_EXPENSE':
            console.log(action);
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expense;
                }

            })
        default:
            return state;
            break;
    }
}

