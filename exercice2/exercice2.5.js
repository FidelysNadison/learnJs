const readlineSync = require("readline-sync");

let favnumber = readlineSync.question('Enter your favorite number');

while(favnumber !== 42){
    console.log('Are you sure?');
    favnumber = parseInt(readlineSync.question('Enter your favorite number'));
}
    
  




