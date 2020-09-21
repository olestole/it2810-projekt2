const song1 = require('assets/mp3/song1.mp3');
const song2 = require('assets/mp3/song2.mp3');
const song3 = require('assets/mp3/song3.mp3');
const song4 = require('assets/mp3/song4.mp3');
const song5 = require('assets/mp3/song5.mp3');

//https://soundcloud.com/hanangobran/sets/reading-music

const song = (songName: string) => {
  switch (songName) {
    case 'song1':
      return song1;
    case 'song2':
      return song2;
    case 'song3':
      return song3;
    case 'song4':
      return song4;
    case 'song5':
      return song5;
    default:
      return null;
  }
};

export default song;
