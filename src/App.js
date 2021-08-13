import React, { Component } from 'react';
import Pagewrapper from './components/pagewrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import TeamPage from './components/pages/Team';
import FocusArea from './components/FocusArea';
import ParticleBackground from './components/config/ParticleBackground';
import PauseOnHover from './components/partners';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path="/" render={props => (
          <div>
          <Pagewrapper>
            <Home {...props} />
            <div className="particles-js">
              <ParticleBackground />
              <div>
                <FocusArea />
              </div>
            </div>
          </Pagewrapper>
          <PauseOnHover />
        </div>
        )}
        />

        <Route path="/about" render={props => (
          <Pagewrapper>
            <About {...props} />
          </Pagewrapper>
        )}

        />

        <Route path="/team" render={props => (
          <Pagewrapper>
            <TeamPage {...props} />
          </Pagewrapper>
        )}

        />

        <Route path="/contact" render={props => (
          <Pagewrapper>
            <Contact {...props} />
          </Pagewrapper>
        )} />


      </Router>
    );
  }
}


export default App;
