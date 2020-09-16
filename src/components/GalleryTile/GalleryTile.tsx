import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import '../GalleryTile/GalleryTile.css';

import { AnimationSVG } from 'components/AnimationsSVG';
import { PeopleSVG } from 'components/AnimationsSVG';

import { User } from 'types';

interface GalleryTileProps {
  user: User;
}

const GalleryTile = ({ user }: GalleryTileProps) => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleProfileClick = (u: User) => {
    console.log('Pressed User');
    appDispatch({ type: 'setCurrentUser', payload: u });
  };

  return (
    <div className="insideContainer" onClick={(_) => handleProfileClick(user)}>
      <div key={user.song} className="svg" id={user.animation}>
        <AnimationSVG type={user.animation} />
      </div>
      <div key={user.name} className="svg" id="person">
        <PeopleSVG type={user.picture} />
      </div>
      <p id="text">{user.name}</p>
    </div>
  );
};

export default GalleryTile;
