import React, { useContext } from 'react';
import '../GalleryTile/GalleryTile.css';
import AppContext from 'utils/AppContext';

import { ReactComponent as Test } from '../SVG/cloud.svg';
import { User } from 'types';

const GalleryTile = (user: User, index: Number) => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleProfileClick = (u:User) => {
    console.log('Pressed User');
    appDispatch({ type: 'setCurrentUser', payload: u });
  };

  //Not going to use this design, just for making sure things work
  return (
    <div className="insideContainer" onClick={_ => handleProfileClick(user) }>
      {React.createElement("div", {key: user.song, className:"svg", id:"cloud"}, React.createElement<User>(user.animation))}
      {React.createElement("div", {key: user.name, className:"svg", id:"person"}, React.createElement<User>(user.picture))}
      <p id="text">{user.name}</p>
    </div>
  );
};

//{React.createElement<User>(user.picture)}

export default GalleryTile;
