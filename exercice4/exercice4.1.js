const readline = require('readline-sync');

const calculSurface = (width , length) => {
    return width * length;
}

let width  = parseInt(readline.question('Type a width : '));
let length = parseInt(readline.question('Type a length : '));
console.log(calculSurface(width,length));


