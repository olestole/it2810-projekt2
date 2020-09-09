import React from 'react';
import "../GalleryTile/GalleryTile.css"
import {ReactComponent as Svg_man1 } from '../SVG/man1.svg';
import {ReactComponent as Svg_man2 } from '../SVG/man2.svg';
import {ReactComponent as Svg_man3 } from '../SVG/man3.svg';
import {ReactComponent as Svg_man4 } from '../SVG/man4.svg';
import {ReactComponent as Svg_man5 } from '../SVG/man5.svg';
import {ReactComponent as Svg_woman1 } from '../SVG/woman1.svg';
import {ReactComponent as Svg_woman2 } from '../SVG/woman2.svg';
import {ReactComponent as Svg_woman3 } from '../SVG/woman3.svg';
import {ReactComponent as Svg_woman4 } from '../SVG/woman4.svg';

import {ReactComponent as Test } from '../SVG/cloud.svg';
import {ReactComponent as Heart } from '../SVG/heart.svg';


const GalleryTile = () => {

  //Not going to use this design, just for making sure things work
  return (
    <div className="container">
      <div className="insideContainer">
        <Test className="svg" id="cloud"></Test>
        <Svg_man1 className="svg" id="person"></Svg_man1>
      </div>
      <div className="insideContainer">
        <Svg_man2 className="svg" id="person"></Svg_man2>
        <Test className="svg" id="cloud"></Test>
      </div>
      <div className="insideContainer">
        <Test className="svg" id="cloud"></Test>
        <Svg_man3 className="svg" id="person"></Svg_man3>
      </div>
      <div className="insideContainer">
        <Heart className="svg"></Heart>
        <Svg_man4 className="svg" id="person"></Svg_man4>
      </div>
      <div className="insideContainer">
        <Heart className="svg"></Heart>
        <Svg_man5 className="svg" id="person"></Svg_man5>
      </div>
      <div className="insideContainer">
        <Heart className="svg"></Heart>
        <Svg_woman1 className="svg" id="person"></Svg_woman1>
      </div>
      <div className="insideContainer">
        <Svg_woman2 className="svg" id="person"></Svg_woman2>
        <Test className="svg"></Test>
      </div>
      <div className="insideContainer">
        <Svg_woman3 className="svg" id="person"></Svg_woman3>
        <Test className="svg"></Test>
      </div>
      <div className="insideContainer">
        <Svg_woman4 className="svg" id="person"></Svg_woman4>
        <Test className="svg"></Test>
      </div>
      
    </div>
  );
};

export default GalleryTile;
