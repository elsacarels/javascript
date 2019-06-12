'use strict';

// par le nom de balise (liste)
document.getElementsByTagName('p');
document.querySelectorAll('p');

//par le nom de classe (liste)
document.getElementsByClassName ('my-class')
document.querySelectorAll('.my-class');

//par le id (node)
document.getElementById('my-id')
document.querySelector('#my-id')

let myBody = document.getElementsByTagName('body');
console.log('myBody', myBody);



const myParagraphe = document.getElementsByTagName('p');
console.log('myParagraphe', myParagraphe);
// modifier le texte dans un node
myParagraphe[0].innerText = 'Hello World';

const myParagraphe2 = document.querySelectorAll('p');
console.log('myParagraphe2', myParagraphe2);
//modifie la structure html
myParagraphe2[1].innerHTML = '<strong>Hello you !</strong>';



const myClass = document.getElementsByClassName('circle');
console.log('div par nom de classe : circle', myClass)

const myClass2 = document.querySelectorAll('.circle');
console.log('div par nom de classe : circle', myClass2);
// modifier les styles CSS
myClass2[0].style.backgroundColor = 'red';

const myBlueDiv = document.querySelector('#middle-circle');
console.log('div bleu', myBlueDiv);
const myBlueDiv2 = document.getElementById('middle-circle');
console.log('div bleu', myBlueDiv2);
myBlueDiv.classList.remove('circle'); //supprimer une classe class
myBlueDiv2.classList.add('square'); //ajouter une classe CSS

const mySpan = document.getElementsByTagName('span');
console.log('span', mySpan);


let myFavouriteArtist = {
  lastname: 'Glover',
  firstname: 'Donald',
  nickname: 'Childish Gambino',
  albums: [
    {
      title: 'Be Alone',
      releaseYear: 2019,
      songs: ['One', 'Two', 'Three']
    }
  ]
}
const artist = document.querySelector('#js-artist');
artist.innerText = (myFavouriteArtist.nickname);
const artistRealName = document.querySelector('#js-artist-real-name');
artistRealName.innerText = (myFavouriteArtist.firstname + ' ' + myFavouriteArtist.lastname);
const album = document.querySelector('.js-album-title');
album.innerText = (myFavouriteArtist.albums[0].title);
const year = document.querySelector('#js-release-date span');
year.innerText = (myFavouriteArtist.albums[0].releaseYear);
const songsCount = document.querySelector('#js-songs-count');
songsCount.innerHTML = (myFavouriteArtist.albums[0].songs.length);
const songpref = document.querySelector('.js-favourite-song');
songpref.innerHTML = (myFavouriteArtist.albums[0].songs[0]);
const songconnu = document.querySelector('#js-famous-song');
songconnu.innerHTML = (myFavouriteArtist.albums[0].songs[1]);
const songlongue = document.querySelector('#js-longest-song');
songlongue.innerHTML = (myFavouriteArtist.albums[0].songs[2]);
artist.style.color = 'blue';
artistRealName.style.color = 'blue';

songpref.innerHTML = makeBold(myFavouriteArtist.albums[0].songs[0]);
songconnu.innerHTML = makeBold(myFavouriteArtist.albums[0].songs[1]);
songlongue.innerHTML = makeBold(myFavouriteArtist.albums[0].songs[2]);
function makeBold(value){
  return '<strong>'+ value + '</strong>'
}
