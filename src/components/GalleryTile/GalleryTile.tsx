import React, { useContext } from 'react';
import AppContext from '../../utils/AppContext';
import '../GalleryTile/GalleryTile.css';
import 'components/main.css';

import { AnimationSVG } from '../../components/AnimationsSVG';
import { PeopleSVG } from '../../components/AnimationsSVG';
import { ReactComponent as Heart } from 'assets/SVG/heart.svg';

import { User } from 'types';

interface GalleryTileProps {
  user: User;
}

const GalleryTile = ({ user }: GalleryTileProps) => {
  const { appState, appDispatch } = useContext(AppContext);

  const handleProfileClick = (u: User) => {
    appDispatch({ type: 'setCurrentUser', payload: u });
  };

  return (
    <div className="svgContainer" onClick={(_) => handleProfileClick(user)}>
      <div id={user.animation} className="svgAnimation">
        <AnimationSVG type={user.animation} />
      </div>
      <div className="svgPeople">
        <div id="heart">{user.liked ? <Heart /> : null}</div>
        <PeopleSVG type={user.picture} />
      </div>

      <p className="svgText">{user.name}</p>
    </div>
  );
};

//      <div className="svgHeart">{user.liked ? <Heart type={'heart'} /> : null}</div>

export default GalleryTile;
