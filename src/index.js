import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import JsxCom from './JsxCom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <Router>
            <Route path="/" component={App} exact/>
            <Route path="/JsxCom" component={JsxCom} exact/>
        </Router>
        , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
