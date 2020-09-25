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

  const handleProfileClick = (u: User) => {
    appDispatch({ type: 'setCurrentUser', payload: u });
  };

  return (
    <div className="profileContainer" onClick={(_) => handleProfileClick(user)}>
      <div className="profilePeople">
        <PeopleSVG type={user.picture} />
      </div>
    </div>
  );
};

export default UserTile;
