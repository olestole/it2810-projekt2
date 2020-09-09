import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { Poem } from 'components/Profile';

const ProfileView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  return (
    <div>
      <h1>ProfileView</h1>
      <Poem />
    </div>
  );
};

export default ProfileView;
