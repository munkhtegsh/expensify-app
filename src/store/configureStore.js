import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default  () => {
    //3. Store creation (combining the created reducers, it's like a setState() func)
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );    
    return store;
}
