const readlineSync = require("readline-sync");
let Name = readlineSync.question('Entrer ici votre nom');
let firstName = readlineSync.question('Entrer ici votre prénom');
let city = readlineSync.question('Entrer votre city ici');
console.log("Bonjour " + Name  + firstName + " vous vous trouvez à " + city );


