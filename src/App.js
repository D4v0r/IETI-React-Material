import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from "./components/Login";
import { TodoApp } from "./components/TodoApp";

const createUser = () =>{
    //localStorage.clear();
    localStorage.setItem("email", "test@todo.com");
    localStorage.setItem("password", "123");
}

const App = props => {
    
    createUser();
    
    if(null === localStorage.getItem("isLoggedIn")) localStorage.setItem("isLoggedIn", false);

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

    const handleLoginState = (e) => {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    }

    const LoginView = () => ( 
        eval(isLoggedIn) ? 
        <h3>Already singed in!</h3>: 
        <Login signIn={handleLoginState} />
    );
    

    const TodoAppView = () => ( 
        eval(isLoggedIn) ? 
        <TodoApp/>: 
        <h3>Please, log in</h3>
    );

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                </ul>

                <div>
                    <Switch>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
