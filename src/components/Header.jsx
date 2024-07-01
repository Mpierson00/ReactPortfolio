import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <a href="#">
      <img src={logo} alt="Logo" className="logo" />
    </a>
    <Navigation />
  </header>
);

export default Header;
