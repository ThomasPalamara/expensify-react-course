import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

//Action generators cf redux 101
//ADD_EXPENSE
const addExpense = (
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//EDIT_EXPENSE
const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})
//SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})

//Expense Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //We can used concat 'cause push alter state value and we want it to stay a pure function CF : redux101. Concat return another array that result of the concatenation of both arrays
            return [...state, action.expense]; // ...array Spread operator 
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id); //({id}) destructuring because state is an array of objects and we need their id
            case 'EDIT_EXPENSE':
            console.log(action);
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.update
                    }
                }else{
                    return expense;
                }

            })
        default:
            return state;
            break;
    }
}

//Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.date
            }
        default:
            return state;
            break;
    }
}
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        console.log(a.amount < b.amount ? 1 : -1);
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state =  store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})
const expense_2 = store.dispatch(addExpense({
    description: 'coffee',
    amount: 300,
    createdAt: -1000
}));
const expense_1 = store.dispatch(addExpense({
    description: 'Rent',
    amount: 10000,
    createdAt:1000
}));


// store.dispatch(removeExpense({ id: expense_1.expense.id }));
// store.dispatch(editExpense(expense_2.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(1250));

const demoState = {
    expenses: [{
        id: 'dsagasdg',
        description: 'May rent',
        note: 'This is my payment for that address',
        amount: 60000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}