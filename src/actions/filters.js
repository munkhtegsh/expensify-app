
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
export const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
});

//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
})
