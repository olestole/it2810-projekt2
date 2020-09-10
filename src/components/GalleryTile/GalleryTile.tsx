import React from 'react';
import '../GalleryTile/GalleryTile.css';

import { ReactComponent as Test } from '../SVG/cloud.svg';
import { User } from 'types';

const GalleryTile = (user: User, index: Number) => {
  //Not going to use this design, just for making sure things work
  return (
    <div className="insideContainer">
      {React.createElement("div", {key: user.song, className:"svg", id:"cloud"}, React.createElement<User>(user.animation))}
      {React.createElement("div", {key: user.name, className:"svg", id:"person"}, React.createElement<User>(user.picture))}
      <p id="text">{user.name}</p>
    </div>
  );
};

//{React.createElement<User>(user.picture)}

export default GalleryTile;
