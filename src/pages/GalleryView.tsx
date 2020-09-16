import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { GalleryTile } from 'components/GalleryTile';
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
      <div className="gridContainer">
        {appState.users.map((user: User, index: number) => (
          <GalleryTile user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
