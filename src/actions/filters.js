//SET_TEXT_DATE
export const setTextFilter = (text = '') => ({
    type: "SET_TEXT",
    text
});

//SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

//SET_START_DATE
export const startDate = (date) => ({
    type: 'START_DATE',
    date
});

//SET_END_DATE
export const endDate = (date) => ({
    type: 'END_DATE',
    date
})
