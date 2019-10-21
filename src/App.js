import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';

class App extends Component {
  render () {
    return (
      <div className="App">
        <MainHeader />
        <span><Link to="/JsxCom">欢迎页面</Link></span>
      </div>
    );
  }
}

export default App;
