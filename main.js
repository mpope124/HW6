let Music = function (pSong, pAlbum, pArtist, pYear, pGenre, pLink){
   this.ID = Math.random().toString(16).slice(5)
   this.song = pSong;
   this.album = pAlbum
   this.artist = pArtist;
   this.year = pYear;
   this.genre = pGenre;
   this.link = pLink;
   
 } // Constructor for creating music and genre objects

 musicArr = []; // music and genre get stored here


 function Storedmusic() {
    let song = document.getElementById('newSong').value;
    let album = document.getElementById('album').value;
    let artist = document.getElementById('artist').value;
    let yearReleased = document.getElementById('yearReleased').value;
    let genre = document.getElementById("genre").value;
    let link = document.getElementById('link').value;
    
    musicArr.push(new Music(song, album, artist, yearReleased, genre, link))
    document.getElementById('newSong').value = " ";
    document.getElementById('album').value = " ";
    document.getElementById("artist").value = " ";
    document.getElementById('yearReleased').value = " ";
    document.getElementById('genre').value = " ";
    document.getAnimations('link').value = " ";
    document.getElementById("musicNotes").innerHTML = "Music has been Stored: Add Another One?";
    // displays.style.display = "block"; // Opens up the section of the subgenre
    console.log(musicArr);
 } // Gets the value of music, genre, and other information and pushes it into the musicArr and clears the textboxes
 
document.addEventListener("DOMContentLoaded", function () {

  // document.getElementById("listMusic1").addEventListener("click", function () {

  //   document.location.href = "index.html#hiddenPage";

  // })

});

$(document).on("pagebeforeshow", "#displayMusic", function (event) {  
  showMusic();
});

document.getElementById("listMusic").addEventListener('click',showMusic);
function showMusic() {
  
  document.getElementById('musicList').innerText = '';
  musicArr.forEach(function (element,) {
    let list = document.createElement('li');
        list.classList.add('oneMusic'); 
        list.setAttribute("data-parm", element.ID);
        list.innerHTML = element.song + "--" + element.artist;
        document.getElementById('musicList').append(list);
  });
      // for (i = 0; i < musicArr.length; i++) {
      //     let list = document.createElement('li');
      //     list.classList.add('oneMusic');
      //     list.setAttribute('data-parm',musicArr[i].ID);
      //     list.innerText = musicArr[i].song + ' -- ' + musicArr[i].artist
      //     document.getElementById('musicList').append(list);
      // }
// This is the code that allows you to click on the individual li's on the page
let liArray = document.getElementsByClassName('oneMusic');
Array.from(liArray).forEach(function (element){
  element.addEventListener('click', function(){
    let parm = this.getAttribute('data-parm');
    localStorage.setItem('parm', parm);
    let stringMusicArr = JSON.stringify(musicArr);
    localStorage.setItem('musicArr',stringMusicArr);
    document.location.href = "index.html#hiddenPage"
  })
})
}

$(document).on("pagebeforeshow", "#hiddenPage", function (event) {   
  let localParm = localStorage.getItem('parm');
  let localID = getArray(localParm);
  musicArr = JSON.parse(localStorage.getItem('musicArr'));  
  document.getElementById("musicSong").innerHTML = "The Song is: " + musicArr[localID].song;
  document.getElementById("musicAlbum").innerHTML = "The Album is: " + musicArr[localID ].album;
  document.getElementById("musicArtist").innerHTML = "The Artist is: " + musicArr[localID ].artist;
  document.getElementById("musicDate").innerHTML = "Year Released is: " + musicArr[localID].year;
  document.getElementById("musicGenre").innerHTML = "Genre: " + musicArr[localID].genre;
  document.getElementById("musicLink").innerHTML = "URL for the Music Video: " + musicArr[localID].link;
});

document.getElementById('clearMusic').addEventListener('click',clearMusic);
function clearMusic() {
  document.getElementById('musicList').innerText = '';
}

function getArray(localID) {
  for (let i = 0; i < musicArr.length; i++) {
      if (localID === musicArr[i].ID) {
          return i;
      }
  }
}







 