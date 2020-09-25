import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { Poem } from 'components/Profile';
import song from 'utils/songsConverter';
import { GalleryTile } from 'components/GalleryTile';
import { AiOutlineReload } from 'react-icons/ai';

import './profileView.css';
import { UserTile } from 'components/ProfileView';
import LikeButton from 'components/ProfileView/LikeButton';

const ProfileView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  let likePerson = () => {
<<<<<<< HEAD
    appDispatch({ type: 'likeUser', targetUser: appState.currentUser!.name });
=======
    appDispatch({ type: 'setLiked', targetUser: appState.currentUser!.name });
>>>>>>> 215f004c36727aabd43c0979fa02186380f5dd2a
  };

  return (
    <div className="profileView">
      <div className="profilePicture">
        <UserTile user={appState.currentUser!} />
        <div id="display" style={{ margin: '10px 0' }}>
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
<<<<<<< HEAD
=======
      <audio controls autoPlay>
        <source src={song(appState.currentUser != null ? appState.currentUser?.song : '')} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <LikeButton like={likePerson}></LikeButton>
>>>>>>> 215f004c36727aabd43c0979fa02186380f5dd2a
    </div>
  );
};

export default ProfileView;
