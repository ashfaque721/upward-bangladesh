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
import CardCollabs from './components/Collaborations';
import Donate from './components/Donate';
import Terms from './components/TermsAndConditions';
import Privacy from './components/PrivacyPolicy';
import Courses from './components/Courses';
import ScrollToTop from './components/ScrollToTop';
import Collab from './components/CollabUs';
import DevelopedBy from './components/DevelopedBy';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Route exact={true} path="/" render={props => (
          <div>
            <Navbar />
            <Home {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )}
        />

        <Route path="/about" render={props => (
          <div>
            <Navbar />
            <About {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )}

        />

        <Route path="/team" render={props => (
          <div>
            <Navbar />
            <TeamPage {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )}

        />

        <Route path="/articles" render={props => (
          <div>
            <Navbar />
            <Articles {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )}

        />

        <Route path="/contact" render={props => (
          <div>
            <Navbar />
            <Contact {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/events" render={props => (
          <div>
            <Navbar />
            <Events {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/gallery" render={props => (
          <div>
            <Navbar />
            <GalleryPage {...props} />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/collaborations" render={props => (
          <div>
            <Navbar />
            <CardCollabs />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/sponsor" render={props => (
          <div>
            <Navbar />
            <Donate />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/terms-and-conditions" render={props => (
          <div>
            <Navbar />
            <Terms />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/privacy-policy" render={props => (
          <div>
            <Navbar />
            <Privacy />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

        <Route path="/courses" render={props => (
          <div>
            <Navbar />
            <Courses />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />
        
        <Route path="/collab-with-us" render={props => (
          <div>
            <Navbar />
            <Collab />
            <FooterContainer />
            <DevelopedBy />
          </div>
        )} />

      </Router>
    );
  }
}


export default App;
