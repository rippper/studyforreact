import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class JsxCom extends Component {

    user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    
    formatName (user) {
        return user.firstName + ' ' + user.lastName
    }
    render () {
        return (
            <div className="JsxCom">
                <h1>Hello, {this.formatName(this.user)} !</h1>
                <span><Link to="/">返回首页</Link></span>
            </div>
        )
    }
}

export default JsxCom;