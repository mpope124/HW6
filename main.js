let Music = function(pMusic, pGenre){
    this.music = pMusic;
    this.genre = pGenre;
 } // Constructor for creating music and genre objects

 musicArr = []; // music and genre get stored here

 let Subgenres = function(pSubgenre, pAuthor){
    this.sub = pSubgenre;
    this.authors = pAuthor;
 } // constructor for creating sub genres
 
 subGenre = []; // Sub genres get stored here


 function Storedmusic() {
    let music = document.getElementById("musics").value;
    let genre = document.getElementById("genre").value;
    musicArr.push(new Music(music, genre))
    document.getElementById("musics").value = " ";
    document.getElementById("genre").value = " ";
    document.getElementById("musicNotes").innerHTML = "Music has been Stored: Add Another One?";
    displays.style.display = "block"; // Opens up the section of the subgenre
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
          list.innerText = 'You entered in the song ' + musicArr[i].music + ' and the genre is ' + musicArr[i].genre
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