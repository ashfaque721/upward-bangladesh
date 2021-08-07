import React, { Component } from 'react';
import Pagewrapper from './components/pagewrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// Pages
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import AdminWrapper from './components/AdminWrapper';
import Dashboard from './components/pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>

        <Route 
          path="/admin"
          render={props => {
            return (
              <AdminWrapper>
                {this.props.auth.token? <Dashboard/> : <Login />}
              </AdminWrapper>
            )
          }}
        />

        

          <Route exact={true} path="/" render={props => (
            <Pagewrapper>
              <Home {...props}/>
            </Pagewrapper>
          )}
          />

          <Route path="/about" render={props => (
            <Pagewrapper>
              <About {...props}/>
            </Pagewrapper>
          )}

          />

          <Route path="/contact" render={props => (
            <Pagewrapper>
              <Contact {...props}/>
            </Pagewrapper>
          )}/>

        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispath => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
