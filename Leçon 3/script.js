'use strict';
/*
Arrays (Tableaux)
*/
let usernames = ["Jeremy","Toto","Gio"];
console.log('usernames', usernames);

let sitenames = ["Youtube","Twitter","Pinterest"]
console.log('sitenames', sitenames);

sitenames[0] //premier élément
sitenames[1] //deuxième élément
sitenames[2] //troisième élément
let sitenamesLength = sitenames.length //3
sitenames [sitenamesLength -1] //troisième élément
console.log('sitenamesLength', sitenames.length);

console.log('sitenames[0]', sitenames[0]);
console.log('sitenames[1]', sitenames[1]);
console.log('sitenames', sitenames.length);
console.log('sitenames', sitenames[2], sitenames.length);

let myArray = [[1,2,3], null, undefined, 2, [4,5,6]];
console.log('premier élément du premier élément', myArray[0][0]);

//Créer un tableau qui contient 3 Tableaux
//Loguez dans la console le deuxième élément du premier élément.
//Loguez dans la console le dernier élément du dernier élément

let myArray2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log('deuxième élément du premier élément', myArray2[0][1]);
console.log('dernier élément du dernier élément', myArray2[2][2]);
console.log('dernier élément du dernier élément', myArray2[myArray2.length - 1][myArray2[myArray2.length - 1].length - 1]);

const myArr = ['Hello', 'Bonjour', 'Hola'];
console.log(myArr);
//push (ajouter un élément à la fin de notre tableau)
myArr.push('Hallo');
console.log('après le push', myArr);

// unshift (ajouter un élément au début de notre tableau)
myArr.unshift('Nihao');
console.log('après le unshift', myArr);

// pop (supprimer le dernier élément)
myArr.pop();
// shift (supprimer le premier élément)
myArr.shift();
console.log('RESULT: myArr', myArr);

const myArr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(myArr2);
myArr2.shift();
console.log(myArr2);
myArr2.pop();
console.log(myArr2);
myArr2.unshift(10);
console.log(myArr2);
myArr2.push(100);
console.log(myArr2);

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let result = arr1. concat(arr2);
console.log('concat result', result);

let arr3 = [1,2,3]
let arr4 = [4,5,6]
let arr5 = [7,8,9,10]
let arr6 = [11,12,13,14]
let result2 = arr3. concat(arr4, arr5, arr6);
console.log('concat result', result2);


let myString = 'Bonjour!';
// split transformer une chaine de charactère(string) dans un tableau
// console.log(myString.split()) //['B', 'o', 'n',...]
let myArr10 = myString.split('');
// reverse (inverser un tableau)
let reversedArr = myArr10.reverse();
console.log('reversedArr', reversedArr);
//join (transformer un tableau en une chaine de caractères)
let res = reversedArr.join('');
console.log('res',res);
// enchainer les méthodes : reversedArr.reverse().join()

let myString2 = 'Hello World';
let myArr11 = myString2.split('');
let reversedArr2 = myArr11.reverse();
console.log('reversedArr', reversedArr2);
let res2 = reversedArr2.join('');
console.log('res',res2);

var number = [10, 3, 5, 2, 7, 9, 8, 6, 1, 0, 4];
number.sort(function(a, b) {
  return a - b;
});
console.log(number);
let reversedArr3 = number.reverse();
console.log('reservedArr', reversedArr3);

let myString3 = ['One', 'two', 'Three', 'Four', 'Five'];
myString3.sort(function (a, b) {
  return a.value - b.value;
});
console.log(myString3);


// parcourir un Tableaux
// map ou forEach

let myNum = [1,2,3,4,5,6,7,8,9];
myNum.forEach((elem)=> {
  console.log('my array element', elem);
});

let myNum2 = ['What', 'A', 'Wonderful', 'World'];
myNum2.forEach((elem)=> {
  console.log('my array element', elem);
});

let test = ''; // à l'extérieur de forEach
test += 'Hello'; // à l'intérieur de forEach

let myNum3 = ['Hello', 'World', 'I', 'am', 'John', 'Doe'];
let myVar3 = "";
myNum3.forEach ((elem)=> {
  myVar3 += elem + ' ';
  console.log(elem + ' ');
});
console.log('RESULT', myVar3);

let myNum4 = [0, 1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log (myNum4.reduce(reducer));
