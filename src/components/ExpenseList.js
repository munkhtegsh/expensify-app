import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selector/expenses';

//regular unconnected component
const ExpenseList = ({expenses}) => (
    <div>
        <h3> Expense List </h3>
        {/*expenses.length*/}
        {
            expenses.map((expense, i) => {
                return <ExpenseListItem key={expense.id} {...expense} /> //Awesome useful descructuring in map
            })
        }
    </div>
);

//it's just a fn that mapping the states in App.js
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

//pulls all of these together
export default connect(mapStateToProps)(ExpenseList);











// const ExpenseList = (props) => (
//     <div>
//         <h1> Expense List </h1>
//         {props.expenses.length}
//     </div>
// );

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;