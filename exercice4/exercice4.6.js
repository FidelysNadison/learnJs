const readline = require('readline-sync');

const factorial = (a) => {
    let results = 1;
    for(let i = 1; i <= a; i++){
        results = results * i;
    }
    return results;
}
console.log(factorial(6));