import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <p>© 2024 Michael Pierson's Portfolio</p>
    <div className="social-icons">
      <a href="https://github.com/Mpierson00" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/michael-pierson-22a1922aa" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

export default Footer;
