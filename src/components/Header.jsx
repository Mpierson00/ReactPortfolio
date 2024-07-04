import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <div className="logo-container">
      <a href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <h1>Michael Pierson</h1>
    </div>
    <Navigation />
  </header>
);

export default Header;
