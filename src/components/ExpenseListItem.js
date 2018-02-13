import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({id, amount, createdAt, description, params}) => {
    return (
        <div>
            <Link to={`edit/${id}`}><h5>{description}</h5></Link>
            <p>{amount} - {createdAt}</p>
            <button onClick={() => props.dispatch(removeExpense({id}))}>Remove</button>
        </div>
    )
}


export default connect()(ExpenseListItem);




// const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
//     <div>
//         <h5>{description}</h5>
//         <p>{amount} - {createdAt}</p>
//         <button onClick={() => dispatch(removeExpense({id}))}>Remove</button>
//     </div>
// )

// const mapStateToProps = (state) => {
//     return {
//         expenses: selectExpenses(state.expenses, state.filters)
//     }
// }

// export default connect(mapStateToProps)(ExpenseListItem);
