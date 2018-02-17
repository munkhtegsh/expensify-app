import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense actions object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense(123, {description: 'ice'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: {
            description: 'ice'
        }
    });
});

test('should setup add expense default', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            description: '',
            note: '',
            createdAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    });
});

test('should setup add expense default', () => {
    const object = {
        description: 'ger',
        note: 'white ger',
        createdAt: 11111111,
        amount: 99,
    }
    const action = addExpense(object);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...object,
            id: expect.any(String)
        }
    });
});