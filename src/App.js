import React, {Component} from 'react';
import Pagewrapper from './components/pagewrapper';
import Home from './components/pages/home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Pagewrapper>
          <Route path="/" component={Home}/>
        </Pagewrapper>
      </Router>
    );
  }
}

export default App;
