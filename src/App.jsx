import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

const App = () => (
  <Router>
    <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '60px' }}>
      <SpaceBackground />
      <Header />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/#about">
          <AboutMe />
        </Route>
        <Route path="/#portfolio">
          <Portfolio />
        </Route>
        <Route path="/#contact">
          <Contact />
        </Route>
        <Route path="/#resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
