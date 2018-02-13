import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
        return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(expense) => { //onSubmit is props
                    props.dispatch(addExpense(expense));
                    props.history.push('/'); //It switches  the page to DashboardCreate 
                }}
            />
        </div>
    )
};

export default connect()(AddExpensePage);