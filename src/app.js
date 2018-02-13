import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //provider will allow us to provide a store all the components that make up our app
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selector/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import AddExpensePage from './components/AddExpensePage';
import test from './components/AddHelp'

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
});

//addExpense -> WaterBill
store.dispatch(addExpense({description: 'Water bill', note: '', amount: 0, createdAt: 0}));
//addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

//setTextFilter -> bill -> water (1 item)
store.dispatch(setTextFilter(''));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

//Provider store makes the Redux store available to connect()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//getvisibleExpenses -> print visible ones to screen
ReactDOM.render(jsx, document.getElementById('app'));
