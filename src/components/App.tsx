import React from 'react';
import Heading from './Heading/Header';
import './main.css';
import { Poem } from './Profile';
import GalleryTile from './GalleryTile/GalleryTile'

function App() {
  return (
    <div className="App">
      <Heading />
      <Poem />
      <GalleryTile></GalleryTile>
    </div>
  );
}

export default App;
