'use strict';

const myParagraph = document.querySelector('#my-paragraph');

myParagraph.addEventListener('click', function(event){
  console.log('paragraph cliked');
  console.log('event', event);
  event.target.style.color = 'red';
})

const myButton = document.querySelector('#js-click');

myButton.addEventListener('click', function(event1){
  console.log('button cliked');
  console.log('event1', event1);
  event1.target.style.backgroundColor = 'green';
  event1.target.innerHTML = "Cliked";
})

let isBtnGray = true;
const myButton2 = document.querySelector('#js-change-color');

myButton2.addEventListener('click', function(event2){
  console.log('button cliked');
  console.log('event2', event2);
  if (isBtnGray === true){
    event2.target.style.backgroundColor = 'green';
    isBtnGray = false;
  }else{
    event2.target.style.backgroundColor = 'grey';
    isBtnGray = true;
  }
  myButton2.classList.add('btn-secondary');
})

const myButton3 = document.querySelector('#js-show-alert');
const myAlert = document.querySelector('#js-alert');
const myHide = document.querySelector('#js-hide-alert');
myButton3.addEventListener('click', function(event3){
  console.log('button cliked');
  console.log('event3', event3);
  event3.target.classList.add('js-alert');
  myAlert.style.display = 'flex';
})
myHide.addEventListener('click', function(event4){
  myAlert.style.display = 'none';
})


const myFlagFr = document.querySelector('#js-flag-fr');
 const myResult = document.querySelector('#js-iso-greeting')
 myFlagFr.addEventListener('mouseenter', function(event5){
console.log('event5', event5);
myResult.innerText = 'France'
})
myFlagFr.addEventListener('mouseleave', function(event6){
console.log('event6', event6);
myResult.innerText = ''
})
 const myFlagEs = document.querySelector('#js-flag-es');
 const myResult2 = document.querySelector('#js-iso-greeting')
 myFlagEs.addEventListener('mouseenter', function(event7){
console.log('event7', event7);
myResult2.innerText = 'Espagne'
})
myFlagEs.addEventListener('mouseleave', function(event8){
console.log('event8', event8);
myResult2.innerText = ''
})
 const myFlagDe = document.querySelector('#js-flag-de');
 const myResult3 = document.querySelector('#js-iso-greeting')
 myFlagDe.addEventListener('mouseenter', function(event9){
console.log('event9', event9);
myResult3.innerText = 'Allemagne'
})
myFlagDe.addEventListener('mouseleave', function(event10){
console.log('event10', event10);
myResult3.innerText = ''
})


const myWidth = document.querySelector('#js-window-width');
const myHeight = document.querySelector('#js-window-height');

window.addEventListener('resize', function(event11){
  console.log(event11);
  myWidth.innerText = window.innerWidth ;
  myHeight.innerText = window.innerHeight ;
});



const myForm = document.querySelector('#js-total-price');
const myProduct = document.querySelector('#js-product');
const myQty = document.querySelector('#js-quantity');
const myPrice = document.querySelector('#js-price');
const myPriceResult = document.querySelector('#js-price-result');
myForm.addEventListener('submit', function(event12){
  event12.preventDefault()//éviter le comportement par défaut

  const productName = myProduct.value;
  const productQty = myQty.value;
  const productPrice = myPrice.value;

  const totalPrice = myQty.value * myPrice.value;

  const result4 = 'Vous avez commandé ' + productName + ' ' + productQty + ' ' + 'fois. Le prix total sera ' + totalPrice + '€.';
  myPriceResult.style.display = 'flex';
  console.log('result4', result4);
  myPriceResult.innerText = 'Vous avez commandé ' + productName + ' ' + productQty + ' ' + 'fois. Le prix total sera ' + totalPrice + '€.';
})

// selectionner le node canvas
const canvas = document.getElementById('js-canvas');
// choisir le context du canvas
const ctx = canvas.getContext('2d');

//récupérer la position X et Y du pixel cliqué
const getCoordinatesInCanvas = (canvasEl, event13) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event13) => {
  getCoordinatesInCanvas(canvas, event13);
})

ctx.fillStyle = 'white'; //définie la couleur de fond qui sera appliquée
ctx.strokeStyle = 'red' //définie la couleur des traits que sera appliquée

//HEAD (a cirlce)
ctx.beginPath();//commence la partie du dessin
//200-position X du centre
//180-position Y du centre
//60-radius du cercle
//0-l'angle de départ en radians
//2 * Maths.PI - l'angle final en radians
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();// dessine un trait
ctx.fill();//remplie de couleur la partie du ssin qu'on vient de créer

//body
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//scarf
ctx.fillStyle = 'blue';
ctx.fillRect(165, 230, 70, 20);
ctx.fillRect(211, 232, 20, 90);

ctx.lineWidth = 5;
ctx.strokeStyle = 'brown';

//right arm
ctx.beginPath();
ctx.moveTo(140, 300);
ctx.lineTo(40, 250);
ctx.stroke();

//left arm
ctx.beginPath();
ctx.moveTo(272, 306);
ctx.lineTo(372, 241);
ctx.stroke();

//eyes
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(180, 175, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill;

ctx.beginPath();
ctx.arc(215, 175, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill;

//nose
ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';

ctx.beginPath();
ctx.moveTo(198, 186);
ctx.lineTo(130, 206);
ctx.lineTo(202, 207);
ctx.stroke();
ctx.fill();


//hat
ctx.fillStyle = 'red';
ctx.fillRect(132, 143, 130, 20);
ctx.fillRect(150, 109, 100, 40);
