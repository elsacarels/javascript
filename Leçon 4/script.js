'use strict';

let myArr = [1,2,3];

myArr.forEach(function(element){
  let result = 0;
  result = result + element;
});

let dividedNumbers = [];
let myNumbers = [0, 1, 2, 3, 4, 5];
myNumbers.forEach(function(element){
  let result1 = element/2;
  dividedNumbers.push(result1);
});
console.log('dividedNumbers', dividedNumbers);

let myNumber2 = [1, -2, 3, 4, -9, 6];
let myPositive = [];

myNumber2.forEach(function(elem){
  if (elem >= 0){
    myPositive.push(elem);
  }
});
console.log('myPositive',myPositive);


let myFahrenheit = [];
let myCelcius = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myCelcius.forEach(function(elem2){
  myCelcius = (elem2 * 9/5) + 32;
  myFahrenheit.push(myCelcius);
});
console.log('myFahrenheit',myFahrenheit);




// OBJECTS

let user = {
  username: 'Sasha',
  type: 'Human',
  age: 23,
  friand: {
    name: 'Claire'
  }
}

// propriété : username
// clé de propriété : 'username'
// valeur de propriété : 'Sacha'

console.log(user.username) // Sacha
const objKey = 'type'
console.log(user[objKey]);
console.log(user['type']);

let user2 = {
  id: '1',
  name: 'Jeremy',
  email: 'jeremy@ynov.com',
}
console.log(user2.id);
console.log(user2['id']);

let user3 = {
  id: '2',
  name: 'Clem',
  car: {
    id: '3',
    brand:'Twingo',
    color:'Grey',
  }
}
console.log(user3.id);
console.log(user3.car.id);
console.log(user3.car.color);

let user4 = {
  nom: 'Glover',
  prenom: 'Donald',
  pseudo: 'Childish Gambino',
  albums: {
    album1: {
      title: 'Awaken, My Love!',
      date: '2016',
      nombredechamson: '3',
      listedeschansons: 'Zombies, Redbone, Riot.'
    },
    album2: {
      title: 'Because the Internet',
      date: '2013',
      nombredechamson: '4',
      listedeschansons: 'Crawl, Shadows, 3005, Sweatpants.'
    },
  }
}

let cat = {
  name: 'Cookie',
  favoritePlaces: ['random box', 'laps', 'Christmas tree'],
  petMyCat: function petMyCat(){
    const result3 = 'Mrrr';
    console.log(result3);
  }
}
console.log(cat.favoritePlaces[0]);
cat.petMyCat();



const myPets = [
  {
    pet: 'cat',
    name: 'Cookie',
    occupation: 'sleeping all day',
    says: () => { 'Miaou!' }
  },
  {
    pet: 'dog',
    name: 'Toffee',
    occupation: 'walking in the park',
    says: () => { 'Wouf!' }
  },
  {
    pet: 'parrot',
    name: 'Kesha',
    occupation: 'mocking other pets',
    says: () => { 'Hehe, that was fun!' }
  }
]

myPets.forEach(function(myPets) {
  console.log(myPets.pet);
  console.log(myPets.name);
  console.log(myPets.occupation);
  console.log(myPets.says);
} );
const result4 = 'My ' + (myPets.pet) + ' named ' + (myPets.name) + ' loves ' + (myPets.occupation) + ' and keeps saying ' + (myPets.says);
console.log(result4);
