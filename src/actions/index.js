// Action Creator

// Named export
export const selectSong = () => {
  // Return an action
  return {
    tye: 'SONG_SELECTED',
    payload: song
  };
};

