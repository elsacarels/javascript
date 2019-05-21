'use strict';

/*
if (condition) {
//si c'est vrai
} else{
//si c'est faux
}
*/



let myVar = 20/2;
if (myVar >= 10 || myVar < 15){
  console.log('Vrai');
}
else {
  console.log('Faux');
}

let myVar1 = 100;
let myVar2 = 350;
if (myVar1 > myVar2){
  console.log ('The greater number of '+myVar1+' and '+myVar2+' is '+myVar1+'');
}
else {
  console.log('The greater number of '+myVar1+' and '+myVar2+' is '+myVar2+'');
}

let myVar3 = 40;
if (100 >= myVar3 && myVar3>= 90){
  console.log ('A');
}
else if (90 > myVar3 && myVar3>= 80){
  console.log ('B');
}
else if (80 > myVar3 && myVar3>= 70){
  console.log ('C');
}
else if (70 > myVar3 && myVar3>= 60){
  console.log ('D');
}
else {
  console.log ('F');
}

let myVar4 = 'es' ;
if (myVar4 === 'es'){
  console.log ('¡Hola mundo!');
}
else if (myVar === 'de'){
  console.log ('Hallo, wereld!');
}
else if (myVar4 === 'en'){
  console.log ('Hello World');
}
else {
  console.log ('Salut le Monde!')
}



let myNum = 8; //variable globale

// déclarer une fonction
function myFunction(){
  let myVar = 1; //variable locale
  console.log('myVar is ' + myVar);
}

// nouvelle façon de déclarer une fonction
const myFunc = () => {
  let myVar = 1;
  console.log('myVar is' + myVar);
}

//appeler une fonction
myFunction();

//num1, num2 - les arguments de la fonction
function sumTwoNum(num1, num2){
  console.log(num1);
  console.log(num2);
  const result = num1 + num2;
  console.log ('result', result);
  return result; //cette valeur sera retournée
}
let a = sumTwoNum(2, 5);
console.log('a',a)

function1()
function function1(){
  const result = 'Hello World';
  console.log ('Hello World');
  return 'Hello World';
}

function2()
function function2(exercice){
  console.log('exercice')
  return exercice;
}


function planMyTrip(CITY1, CITY2, CITY3, CITY4){
  console.log('CITY1', CITY1);
  console.log('CITY2', CITY2);
  console.log('CITY3', CITY3);
  console.log('CITY4', CITY4);
  const result = CITY1 +', ' + CITY2 +', '+ CITY3 +' and '+ CITY4+'.';
  console.log ('I want to visit ', result);
  return 'I want to visit ';
}
let b = planMyTrip('Paris', 'Londres', 'Bordeaux', 'Séoul');


function calculateDogAge(number){
  console.log(number);
  const result = number*7;
  console.log ('This dog is HUMAN_AGE years old', result);
}
let c = calculateDogAge(5)
