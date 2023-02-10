let Music = function (pSong, pAlbum, pArtist, pYear, pGenre, pLink){
   this.song = pSong;
   this.album = pAlbum
   this.artist = pArtist;
   this.year = pYear;
   this.genre = pGenre;
   this.link = pLink;
   
 } // Constructor for creating music and genre objects

 musicArr = []; // music and genre get stored here

 let Subgenres = function(pSubgenre, pAuthor){
    this.sub = pSubgenre;
    this.authors = pAuthor;
 } // constructor for creating sub genres
 
 subGenre = []; // Sub genres get stored here


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
    displays.style.display = "block"; // Opens up the section of the subgenre
    console.log(musicArr);
 } // Gets the value of music and the genre, pushes it into the musicArr and clears the textboxes

 function Subgenre() {
    let subMusic = document.getElementById("subGenre").value;
    let author = document.getElementById("author").value;
    subGenre.push(new Subgenres(subMusic, author))

    document.getElementById("subGenre").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("end").innerHTML = "Thank you for Listing Music";
    console.log(subGenre)
 } // Gets the value of the sub genre and author, and pushes it into the subGenre array and clears the textboxes.
 
 document.getElementById('listMusic').addEventListener('click',displayMusic);

 function displayMusic() {
      document.getElementById('musicList').innerText = '';
      for (i = 0; i < musicArr.length; i++) {
          let list = document.createElement('li');
          list.innerText = 'You entered in the song ' + musicArr[i].song + ' and the Artist is ' + musicArr[i].artist + ' and the genre is ' + musicArr[i].genre
          document.getElementById('musicList').append(list);
      }
      
  }

  document.getElementById('listSubGenre').addEventListener('click',displaySubGenre)

  function displaySubGenre() {
   document.getElementById('subGenreList').innerText = '';
   for (i = 0; i < subGenre.length; i++) {
       let list = document.createElement('li');
       list.innerText = 'You entered in the genre ' + subGenre[i].sub + ' and the artist/artists are ' + subGenre[i].authors
       document.getElementById('subGenreList').append(list);
   }
   
}