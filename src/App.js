import React, { Component } from 'react';
import Pagewrapper from './components/pagewrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import TeamPage from './components/pages/Team';
// import ParticleBackground from './components/config/ParticleBackground';
import './App.css';
import Articles from './components/Articles';
import Events from './Events';
import { FooterContainer } from './components/Footer/containers/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path="/" render={props => (
          <div>
            <Pagewrapper />
            <Home {...props} />
            <FooterContainer />
          </div>
        )}
        />

        <Route path="/about" render={props => (
          <div>
            <Pagewrapper />
            <About {...props} />
            <FooterContainer />
          </div>
        )}

        />

        <Route path="/team" render={props => (
          <div>
            <Pagewrapper />
            <TeamPage {...props} />
            <FooterContainer />
          </div>
        )}

        />

        <Route path="/articles" render={props => (
          <div>
            <Pagewrapper />
            <Articles {...props} />
            <FooterContainer />
          </div>
        )}

        />

        <Route path="/contact" render={props => (
          <div>
            <Pagewrapper />
            <Contact {...props} />
            <FooterContainer />
          </div>
        )} />

        <Route path="/events" render={props => (
          <div>
            <Pagewrapper />
            <Events {...props} />
            <FooterContainer />
          </div>
        )} />

      </Router>
    );
  }
}


export default App;
