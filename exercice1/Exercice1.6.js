const readlineSync = require("readline-sync");
let nbrEntrOne = readlineSync.question('Entrer votre premier nombre entier');
let nbrEntrTwo = readlineSync.question('Entrer votre premier nombre entier');
console.log(nbrEntrOne % nbrEntrTwo)
