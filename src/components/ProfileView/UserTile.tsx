import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';

import { AnimationSVG } from 'components/SVGComponents';
import { PeopleSVG } from 'components/SVGComponents';
import { ReactComponent as Heart } from 'assets/SVG/heart.svg';
import { User } from 'types';

import './profile.css';
import 'components/main.css';

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
