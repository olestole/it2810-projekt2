import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import GalleryTile from 'components/GalleryTile/GalleryTile';
import { User } from 'types';
import '../pages/GalleryView.css';

const GalleryView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleProfileClick = () => {
    console.log('Pressed User');
    appDispatch({ type: 'setCurrentUser', payload: appState.users[0] });
  };

  return (
    <div>
      <h1>GalleryView</h1>
      <button onClick={handleProfileClick}>Profile 1</button>
      <button onClick={() => console.log(appState.users[0].picture)}>console</button>
      <div className="container">
      {appState.users.map((e) => {return React.createElement(GalleryTile, e)})}
      </div>
    </div>
  );
};

export default GalleryView;
