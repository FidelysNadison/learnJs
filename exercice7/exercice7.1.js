const readlineSync = require ("readline-sync")

function entierAleatoire(max){
    return 1+Math.floor(Math.random() * max);
}

var entier = entierAleatoire(1 , 100);
let devine = readlineSync.question('Guess the number');

if (devine < entier) {
    console.log ("Too low");
  } else {
    console.log ("Too high");
  }
  
