import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { Poem } from 'components/Profile';
import song from 'utils/songsConverter';

const ProfileView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  return (
    <div>
      <h1>ProfileView</h1>
      <h2>{appState.currentUser?.name}</h2>
      <Poem />
      <audio controls>
        <source src={song(appState.currentUser != null ? appState.currentUser?.song : '')} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default ProfileView;
