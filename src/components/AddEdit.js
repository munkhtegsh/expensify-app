import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const AddEdit = (props) => {
    // console.log(props)
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}

                onRemove={() => {
                    props.dispatch(removeExpense(props.expense));
                    props.history.push('/');
                }}
            />
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

export default connect(mapStateToProps)(AddEdit);

