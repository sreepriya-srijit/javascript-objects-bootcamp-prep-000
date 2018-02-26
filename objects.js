var playlist = {'arti1' : 'player1', 'arti2' : 'player2'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},playlist,{artistName : songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}