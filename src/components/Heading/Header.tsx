import React, { useContext } from 'react';
import moon from 'assets/header/moon.svg';
import sun from 'assets/header/sun.svg';
import AppContext from 'utils/AppContext';
import Logo from 'assets/header/appLogo.svg';

import './header.css';

const Heading = () => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleHomebuttonClick = () => {
    appDispatch({ type: 'setCurrentUser', payload: null });
  };

  const toggleDarkmode = () => {
    appDispatch({ type: 'darkmode' });
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={Logo} onClick={handleHomebuttonClick}></img>
        </div>
        <div className="darkmode">
          <img src={appState.darkmode ? sun : moon} onClick={toggleDarkmode}></img>
        </div>
      </header>
    </div>
  );
};

export default Heading;
