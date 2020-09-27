import React, { useContext, useEffect } from 'react';
import AppContext from 'utils/AppContext';
import Heading from './Heading/Header';

import ProfileView from '../pages/ProfileView';
import GalleryView from '../pages/GalleryView';

import './main.css';

const App = () => {
  const { appState, appDispatch } = useContext(AppContext);

  useEffect(() => {
    console.log('Satt localStorage');
    localStorage.setItem('context', JSON.stringify(appState));
    document.body.style.backgroundColor = appState.darkmode ? '#121212' : 'white';
  }, [appState]);

  return (
    <div className={appState.darkmode ? 'dark' : 'light'}>
      <Heading />
      {appState.currentUser !== null ? <ProfileView /> : <GalleryView />}
    </div>
  );
};

export default App;
