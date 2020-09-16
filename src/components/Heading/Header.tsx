import React from 'react';
import Logo from 'assets/logo.png';
import darkMode from 'assets/darkmode.png';

import './header.css';

function handleThemeClick() {
  alert('Function fired');
}

function handleLogoClick() {
  alert('Function fired');
}

const Heading = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={Logo} onClick={handleLogoClick}></img>
        </div>
        <div onClick={handleThemeClick} className="darkmode">
          <img src={darkMode} onClick={handleThemeClick}></img>
        </div>
      </header>
    </div>
  );
};

export default Heading;
