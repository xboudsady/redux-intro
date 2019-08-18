import { combineReducers } from 'redux';


// Our current state of our song
// Static data, with an array of objects
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ]
};

// First argument, our current data null, with default to null, and 2nd is our action
const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};


// Pass in an object with our reducer functions
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});