const readlineSync = require("readline-sync");
let nbrDecimalOne = readlineSync.question('Entrer votre premier nombre decimal');
let nbrDecimalTwo = readlineSync.question('Entrer votre deusième nombre decimal');
console.log(Math.trunc(nbrDecimalOne) * nbrDecimalTwo );

