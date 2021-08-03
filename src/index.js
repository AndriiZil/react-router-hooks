import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Header from './Header';
import Book from './Book';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/about' component={About}/>
                <Route path='/book/:name' component={Book}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
