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

musicArr.push(new Music("Umbrella", "Good Girls Gone Bad", "Rihanna", "2008", "Pop", "https://www.youtube.com/watch?v=CvBfHwUxHIk"));
musicArr.push(new Music("Single Ladies", "I AM...SASHA FIERCE", "Beyonce", "2008", "Pop", "https://www.youtube.com/watch?v=4m1EFMoRFvY"));
musicArr.push(new Music("Rehab","Back To Black", "Amy Winehouse", "2006", "Pop", "https://www.youtube.com/watch?v=KUmZp8pR1uc"));

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

  document.getElementById("listMusic1").addEventListener("click", function () {

    document.location.href = "index.html#hiddenPage";

  })

});

$(document).on("pagebeforeshow", "#displayMusic", function (event) {  
  showMusic();
});

document.getElementById("listMusic").addEventListener('click',showMusic);
function showMusic() {
  
  document.getElementById('musicList').innerText = '';

      for (i = 0; i < musicArr.length; i++) {
          let list = document.createElement('li');
          list.innerText = musicArr[i].song + ' -- ' + musicArr[i].artist
          document.getElementById('musicList').append(list);
      }
}

document.getElementById('clearMusic').addEventListener('click',clearMusic);
function clearMusic() {
  document.getElementById('musicList').innerText = '';
}









 