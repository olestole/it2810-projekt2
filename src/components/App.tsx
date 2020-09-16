import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import Heading from './Heading/Header';

import ProfileView from 'pages/ProfileView';
import GalleryView from 'pages/GalleryView';
<<<<<<< HEAD

import './main.css';
=======
>>>>>>> 0934262e805fa74a72430c2b6e16b59544e2625d

const App = () => {
  const { appState, appDispatch } = useContext(AppContext);

  return (
    <div className="App">
      <Heading />
      {appState.currentUser !== null ? <ProfileView /> : <GalleryView />}
    </div>
  );
};

export default App;
