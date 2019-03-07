import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Auth from './pages/auth';
import TodoItem from './pages/todo';
import Main from './pages/main';
import Registry from './pages/registry';
import style from './nav.css';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="nav">
                    <ul>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/auth'>Войти</Link></li>
                        <li><Link to='/registry'>Зарегистрироваться</Link></li>
                        <li><Link to='/todo'>To-Do</Link></li>
                    </ul>

                    <Route path="/" component={Main}/>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/registry" component={Registry}/>
                    <Route path="/todo" component={TodoItem}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Header;
