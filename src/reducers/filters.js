import moment from 'moment';

//2.b: filter Reducer default data
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
            return {...state, startDate: action.startDate}
        case 'END_DATE':
            return {...state, endDate: action.endDate}
        default:
            return state;
    }
};

export default filterReducer;