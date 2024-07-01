import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <img src={logo} alt="Logo" className="logo" />
    <Navigation />
  </header>
);

export default Header;
