import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import AddEdit from '../components/AddEdit';
import NotFoundPage from '../components/NotFoundPage';
import AddHelp from '../components/AddHelp';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route exact path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/help" component={AddHelp} />
            <Route path="/edit/:id" component={AddEdit} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter; 
