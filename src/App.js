import React, { Component } from 'react';
import Pagewrapper from './components/pagewrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Pages
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';

// Admin Pages
import Dashboard from './components/pages/Admin/Dashboard';
import Users from './components/pages/Admin/Users';
import Posts from './components/pages/Admin/Posts';
import AddPost from './components/pages/Admin/AddPost';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoggingWrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path="/admin/users"
          render={props => {
            return (
              <div>
                {this.props.auth.token?
                  <AdminWrapper>
                    <Users/>
                  </AdminWrapper> 
                :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                }
              </div>
            )
          }}
        />

        <Route
          path="/admin/posts/:view/:id"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper> 
                :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                }
              </div>
            )
          }}
        />

        <Route
          path="/admin/posts/:view"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper> 
                :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                }
              </div>
            )
          }}
        />
        <Route
          path="/admin/posts"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token?
                  <AdminWrapper>
                    <Posts/>
                  </AdminWrapper> 
                :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                }
              </div>
            )
          }}
        />
        <Route 
          exact={true}
          path="/admin"
          render={props => {
            return (
              <div>
                {this.props.auth.token?
                  <AdminWrapper>
                    <Dashboard/>
                  </AdminWrapper> 
                :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                }
              </div>
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
