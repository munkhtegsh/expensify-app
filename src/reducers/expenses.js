//2.a: expenses reducer default data
const expensesReducserDefaultState = [];

const expenseReducer = ( state = expensesReducserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expenses]; //state is empty []
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => { //used {id} for obj destucuring e.id
                return id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates}
                } else {
                    return expense
                }
            });
        default:
            return state;
    }   
};

export default expenseReducer;