const readlineSync = require("readline-sync");

let nbrmin = readlineSync.question('Veillez entrer nombre minimum');
let nbrmax = readlineSync.question('Veillez entrer nombre maximum');
let current = readlineSync.question('Veillez entrer nombre current');

if(nbrmin>nbrmax){
    console.log('ERROR');
}
if(current > nbrmin && current < nbrmax){
    console.log('The current number is between the min and max number');
}else{
    console.log('The current number is not between the min and max number');
}