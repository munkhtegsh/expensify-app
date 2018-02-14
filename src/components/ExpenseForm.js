import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'; //without this line the app will crush
import { SingleDatePicker } from 'react-dates'; //calender picker tool it requires moment.js
import 'react-dates/lib/css/_datepicker.css'; //css for datepicker

// const date = new Date(); //it is complicated than moment.js
// const now = moment(); //this is the easier
// console.log(now.format('MMMM Do, YYYY')) //examples

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '', //taking info from the parent if has info
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //https://regex101.com/
            this.setState(() => ({amount}))
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {calendarFocused: focused}
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            const error = 'Please provide description';
            this.setState(() => ({error}))
        } else {
            //clear the error
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(), //it is moment obj so check Timestamp in moment.js, js work in millosecond
                note: this.state.note
            })
            
        }
    };

    render() {
        return (
            <div>
                { this.state.error }
                <form onSubmit={this.onSubmit}> { /*explore formic for react forms in the future */}
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                        />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1} //{ I will show the only one month }
                        isOutsideRange={() => false } //{ It will enable the previous dates }
                    />
                    
                    <textarea
                        onChange={(e) => {
                            let note = e.target.value //if you not using it, you can use e.persist()
                            this.setState(() => {
                                return {note}
                            })
                        }}
                        value={this.state.note} 
                        placeholder="Add a not for your expense (optional)">
                    </textarea>
                    <button>Add Expense</button>
                    
                </form>
            </div>
        )
    }
}