import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { Poem } from 'components/Profile';
import song from 'utils/songsConverter';

const ProfileView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  let playSong = () => {
    var audio = new Audio('/assets/mp3/song1.mp3');
    audio.play();
  };

  return (
    <div>
      <h1>ProfileView</h1>
      <h2>{appState.currentUser?.name}</h2>
      <Poem />
      <audio controls autoPlay>
        <source src={song(appState.currentUser != null ? appState.currentUser?.song : '')} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playSong}>Play Song</button>
    </div>
  );
};

export default ProfileView;
