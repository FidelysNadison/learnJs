const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Entrer ici votre nom');
console.log("Bonjour" +  firstName);