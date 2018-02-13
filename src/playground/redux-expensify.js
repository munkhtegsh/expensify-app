
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//4: Action generators_________________________________________________________________

//ADD_EXPENSE action --- REMEMBER ACTIONS ARE returning OBJECT ({}) !!!!!!!!
const addExpense = (({description='', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
}));

//REMOVE_EXPENSE action
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE action
const editExpense = (id, amount) => ({
    type: 'EDIT_EXPENSE',
    id,
    amount
});

//SET_TEXT_DATE
const setTextFilter = (text = '') => ({
    type: "SET_TEXT",
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

//SET_START_DATE
const startDate = (date) => ({
    type: 'START_DATE',
    date
});

//SET_END_DATE
const endDate = (date) => ({
    type: 'END_DATE',
    date
})


//End of action generators________________________________________________

//2.a: expenses reducer default data
const expensesReducserDefaultState = [];

//2.a creating reducer
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
                    return {...expense, ...action.amount}
                }
            });
        default:
            return state;
    }   
};

//2.b: filter Reducer default data
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

//2.b creating Reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT': 
            return {...state, text: action.text};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'START_DATE':
            return {...state, startDate: action.date}
        case 'END_DATE':
            return {...state, endDate: action.date}
        default:
            return state;
    }
};

//timestamps (millisecond)
//January 1st 1970 (unix, epoch)
//33400, 10, -203

//5. get Visible expenses (it's kind of sorting or filtering data based on the conditionals)
const getVisisbleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); 
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
        //     return -1
        // } else {
        //     return 1
            return a.createdAt < b.createdAt ?  1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });
}

//3. Store creation (combining the created reducers, it's like a setState() func)
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));    

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const storeOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const storeTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}))
// store.dispatch(removeExpense({id: storeTwo.expenses.id})) //when you dispatch you will call always action creators
// // console.log(storeOne.expenses.id)
// store.dispatch(editExpense(storeOne.expenses.id, {amount: 500})); //setting amount to 500
// //-------------------------------------------
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(startDate(0));
// // store.dispatch(startDate());
// store.dispatch(endDate(1250));


//1. Created stucture of States for the code (you won't use it)
const demoState = {
    expenses: [{
        id: 'jfkjslfkjs',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};












// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// //Add expense action
// const addExpense = (({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// }));

// const setText = (text = '') => ({
//     type: 'SET_TEXT',
//     text
// });

// const setSortByDate = (date) => ({
//     type: 'SORT_BY_DATE',
//     date
// });

// const setSortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT',
// });

// //SET_START_DATE
// const startDate = (date) => ({
//     type: 'START_DATE',
//     date
// });

// //SET_END_DATE
// const endDate = (date) => ({
//     type: 'END_DATE',
//     date
// })

// //expenseReducer
// const expenses = [];
// const expensesReducer = (state = expenses, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return state.concat(action.expense)
//         default:
//             return state;
//     }
// };

// //filterReducer
// const filter = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };

// const filterReducer = (state = filter, action) => {
//     switch (action.type) {
//         case 'SET_TEXT':
//             return {...state, text: action.text};
//         case 'SORT_BY_DATE':
//             return {...state, sortBy: action.date};
//         case 'SORT_BY_AMOUNT':
//             return {...state, sortBy: 'amount'};
//         case 'START_DATE':
//             return {...state, startDate: action.date}
//         case 'END_DATE':
//             return {...state, endDate: action.date}
//         default: 
//             return state;
//     }
// };

// const visibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
//         const textMatch = true;
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if(sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         }

//     })
// }

// //create each states
// //create the reducers
// //create actions
// //test - call the subscription
// //filter

// const store = createStore(combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducer
// }));

// store.subscribe(() => {
//     const state = store.getState();
//     const visible = visibleExpenses(state.expenses, state.filters);
//     console.log(visible);
// });

// store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
// store.dispatch(addExpense({description: 'Coffee', amount: 100, createdAt: -1000}));

// // store.dispatch(setText('rent'));
// // store.dispatch(setSortByDate('date'));
// // store.dispatch(setSortByAmount());
// store.dispatch(startDate())

// // // store.dispatch(startDate(0));
// // // // store.dispatch(startDate());
// // // store.dispatch(endDate(1250));

// const demoObj = {
//     expenses: [{
//         id: 0,
//         description: 'January rent',
//         note: 'This was the final payment',
//         amount: 0,
//         createdAt: '',

//     }], 
//     filter: {
//         text: '',
//         sortBy: 'data',
//         startDate: undefined,
//         endDate: undefined
//     }
// }









