const readline = require('readline-sync');

const rand10 = () => {
    return parseInt(Math.random() * 10)
}

const multiRand = (n) => {
    let array = [];

    for(let i = 0; i < n; i++){
        array.push(rand10());
    }

    return array;
}

let ask = parseInt(readline.question('How many random numbers do you want to generate ? '));

console.log(multiRand(ask));