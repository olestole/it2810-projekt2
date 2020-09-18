import React, { useContext, useState } from 'react';
import AppContext from 'utils/AppContext';
import { GalleryTile } from '../components/GalleryTile';
import { User } from 'types';
import { Filter, generateFilters } from 'components/Filter';
import '../pages/GalleryView.css';

const GalleryView = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [profiles, setProfiles] = useState<User[]>(appState.users);

  const renderProfiles = () => {
    // If there are filters in appState --> Apply them before mapping the users
    let filteredProfiles = appState.users;
    if (appState.filter) {
      filteredProfiles = profiles.filter((user: User) => generateFilters(appState.filter!).every((f: any) => f(user)));
    }
    return filteredProfiles.map((user: User, index: number) => <GalleryTile user={user} key={index} />);
  };

  return (
    <div>
      <Filter />
      <div className="gridContainer">{renderProfiles()}</div>
    </div>
  );
};

export default GalleryView;
