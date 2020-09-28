import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { AnimationSVG, PeopleSVG } from 'components/SVGComponents';
import { ReactComponent as Heart } from 'assets/SVG/heart.svg';
import { User } from 'types';

import '../GalleryTile/GalleryTile.css';
import 'components/main.css';

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
      <div className="svgMainElements">
        <div id="heart">{user.liked ? <Heart /> : null}</div>
        <div id="people">
          <PeopleSVG type={user.picture} />
        </div>
      </div>

      <p className="svgText">{user.name}</p>
    </div>
  );
};

export default GalleryTile;
