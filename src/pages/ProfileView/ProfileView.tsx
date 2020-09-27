import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { Poem } from 'components/ProfileView';
import song from 'utils/songsConverter';
import { UserTile } from 'components/ProfileView';
import LikeButton from 'components/ProfileView/LikeButton';

import './profileView.css';

const ProfileView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  let likePerson = () => {
    appDispatch({ type: 'likeUser', targetUser: appState.currentUser! });
  };

  return (
    <div className="profileView">
      <div className="profilePicture">
        <UserTile user={appState.currentUser!} />
        <div id="display">
          <audio controls autoPlay>
            <source src={song(appState.currentUser != null ? appState.currentUser?.song : '')} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <LikeButton like={likePerson}></LikeButton>
        </div>
      </div>
      <div className="poem">
        <Poem />
      </div>
    </div>
  );
};

export default ProfileView;
