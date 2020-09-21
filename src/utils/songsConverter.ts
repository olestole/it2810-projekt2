//https://soundcloud.com/hanangobran/sets/reading-music

const song = (songName: string) => {
  switch (songName) {
    case 'song1':
      return require('assets/mp3/song1.mp3');
    case 'song2':
      return require('assets/mp3/song2.mp3');
    case 'song3':
      return require('assets/mp3/song3.mp3');
    case 'song4':
      return require('assets/mp3/song4.mp3');
    case 'song5':
      return require('assets/mp3/song5.mp3');
    default:
      return null;
  }
};

export default song;
