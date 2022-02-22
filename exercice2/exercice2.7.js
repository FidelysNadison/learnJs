const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question('Taper un nombre'));
let i = 1
let resultat = 0
while(i <= n){
    resultat += i;
    i++
}
console.log(resultat)
