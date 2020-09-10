import React from 'react';
import '../GalleryTile/GalleryTile.css';
import { ReactComponent as Svg_man1 } from '../SVG/man1.svg';
import { ReactComponent as Svg_man2 } from '../SVG/man2.svg';
import { ReactComponent as Svg_man3 } from '../SVG/man3.svg';
import { ReactComponent as Svg_man4 } from '../SVG/man4.svg';
import { ReactComponent as Svg_man5 } from '../SVG/man5.svg';
import { ReactComponent as Svg_woman1 } from '../SVG/woman1.svg';
import { ReactComponent as Svg_woman2 } from '../SVG/woman2.svg';
import { ReactComponent as Svg_woman3 } from '../SVG/woman3.svg';
import { ReactComponent as Svg_woman4 } from '../SVG/woman4.svg';

import { ReactComponent as Test } from '../SVG/cloud.svg';
import { ReactComponent as Heart } from '../SVG/heart.svg';
import { User } from 'types';

const GalleryTile = (user: User) => {
  //Not going to use this design, just for making sure things work
  return (
    <div className="container">
      <div className="insideContainer">
        <Test className="svg" id="cloud"></Test>
        <Svg_man1 className="svg" id="person"></Svg_man1>
      </div>

      <p>{user.name}</p>
    </div>
  );
};

export default GalleryTile;
