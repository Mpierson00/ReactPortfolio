import React from 'react';

const Navigation = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#about" onClick={(event) => handleScroll(event, 'about')}>About Me</a>
        </li>
        <li>
          <a href="#portfolio" onClick={(event) => handleScroll(event, 'portfolio')}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={(event) => handleScroll(event, 'contact')}>Contact</a>
        </li>
        <li>
          <a href="#resume" onClick={(event) => handleScroll(event, 'resume')}>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
