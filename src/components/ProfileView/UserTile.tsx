import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';

import { AnimationSVG } from 'components/AnimationsSVG';
import { PeopleSVG } from 'components/AnimationsSVG';
import { ReactComponent as Heart } from 'assets/SVG/heart.svg';

import './profile.css';
import 'components/main.css';

import { User } from 'types';

interface UserTileProps {
  user: User;
}

const UserTile = ({ user }: UserTileProps) => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleProfileClick = (user: User) => {
    appDispatch({ type: 'setCurrentUser', payload: user });
  };

  return (
    <div className="profileContainer" onClick={() => handleProfileClick(user)}>
      <div id={user.animation + '1'} className="animations">
        <AnimationSVG type={user.animation} />
      </div>
      <div className="profilePeople">
        <div id="heart1">{user.liked ? <Heart /> : null}</div>
        <div id="people">
          <PeopleSVG type={user.picture} />
        </div>
      </div>
      <p className="profileText">{user.name}</p>
    </div>
  );
};

export default UserTile;
