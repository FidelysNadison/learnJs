const readlineSync = require("readline-sync");
let shoeSize = readlineSync.question('Entrer votre pointure');
let birthYear = readlineSync.question('Entrer votre année de naissance');
console.log(shoeSize * 2 + 5 * 50 - birthYear + 1766);