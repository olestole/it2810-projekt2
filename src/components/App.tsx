import React from 'react';
import { Poem } from './Profile';
import GalleryTile from './GalleryTile/GalleryTile'

function App() {
  return (
    <div className="App">
      <Poem />
      <GalleryTile></GalleryTile>
    </div>
  );
}

export default App;
