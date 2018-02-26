var playlist = {Kanye: "Gold Digger"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},playlist,{[artistName] : songTitle})
}
console.log(playlist)
function removeFromPlaylist(playlist, artistName){
  delete playlist['artistName']
  return playlist
}