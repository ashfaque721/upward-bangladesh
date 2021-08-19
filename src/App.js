import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import TeamPage from './components/pages/Team';
import GalleryPage from './components/pages/GalleryPage';
import './App.css';
import Articles from './components/Articles';
import Events from './Events';
import { FooterContainer } from './components/Footer/containers/footer';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path="/" render={props => (
          <div>
            <Navbar />
            <Home {...props} />
            <FooterContainer />
          </div>
        )}
        />

        <Route path="/about" render={props => (
          <div>
            <Navbar />
            <About {...props} />
            <FooterContainer />
          </div>
        )}

        />

        <Route path="/team" render={props => (
          <div>
            <Navbar />
            <TeamPage {...props} />
            <FooterContainer />
          </div>
        )}

        />

        <Route path="/articles" render={props => (
          <div>
            <Navbar />
            <Articles {...props} />
            <FooterContainer />
          </div>
        )}

        />

        <Route path="/contact" render={props => (
          <div>
            <Navbar />
            <Contact {...props} />
            <FooterContainer />
          </div>
        )} />

        <Route path="/events" render={props => (
          <div>
            <Navbar />
            <Events {...props} />
            <FooterContainer />
          </div>
        )} />

        <Route path="/gallery" render={props => (
          <div>
            <Navbar />
            <GalleryPage {...props} />
            <FooterContainer />
          </div>
        )} />

      </Router>
    );
  }
}


export default App;
