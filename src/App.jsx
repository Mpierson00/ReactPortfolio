import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

const App = () => (
  <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '60px' }}>
    <SpaceBackground />
    <Header />
    <div id="about">
      <AboutMe />
    </div>
    <div id="portfolio">
      <Portfolio />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <div id="resume">
      <Resume />
    </div>
    <Footer />
  </div>
);

export default App;
