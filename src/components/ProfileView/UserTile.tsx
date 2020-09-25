import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';

import { AnimationSVG } from 'components/AnimationsSVG';
import { PeopleSVG } from 'components/AnimationsSVG';

import './profile.css';

import { User } from 'types';

interface UserTileProps {
  user: User;
}

const UserTile = ({ user }: UserTileProps) => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleLike = () => {
    appDispatch({ type: 'likeUser', payload: user });
  };

  return (
    <div className="profileContainer" onDoubleClick={handleLike}>
      {/* <div id={user.animation} className="svgAnimation">
        <AnimationSVG type={user.animation} />
      </div> */}
      <div className="profilePeople">
        <PeopleSVG type={user.picture} />
      </div>
      {/* <p className="profileText">{user.name}</p> */}
    </div>
  );
};

export default UserTile;
