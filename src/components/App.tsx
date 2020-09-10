import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import Heading from './Heading/Header';
import './main.css';
import ProfileView from './pages/ProfileView';
import GalleryView from './pages/GalleryView';

const App = () => {
  const { appState, appDispatch } = useContext(AppContext);

  return <div className="App">
    <Heading />
    {appState.currentUser !== null ? <ProfileView /> : <GalleryView />}
    </div>;
};

export default App;
