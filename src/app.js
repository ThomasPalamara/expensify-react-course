import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provide the store to all the component
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'gas bill', createdAt: 700 }))
store.dispatch(addExpense({ description: 'water bill', amount: 300 }))
store.dispatch(addExpense({ description: 'rent', amount: 108500 }))

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
