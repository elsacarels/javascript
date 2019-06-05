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

let myParagraphe = document.getElementsByTagName('p');
console.log('myParagraphe', myParagraphe);

let myClass = document.querySelectorAll('.circles');
console.log('div par nom de classe : circles', myClass);

let myBlueDiv = document.querySelector('#middle-circle');
console.log('div bleu', myBlueDiv);

let mySpan = document.getElementsByTagName('span');
console.log('span', mySpan);
