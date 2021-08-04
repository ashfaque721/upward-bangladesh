import React, { Component } from 'react';
import Pagewrapper from './components/pagewrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Pagewrapper>
          <Route exact={true} path="/" component={Home}
          />

          <Route path="/about" component={About}

          />

          <Route path="/contact" component={Contact}></Route>

        </Pagewrapper>
      </Router>
    );
  }
}

export default App;
