let array = [1,2,3,4,5];
let arrayDeux =  [100, 101, 102];


let n = 0;
let resultat = 0;


while(n< array.length){
    resultat += array[n];
    n++;
}


let i = 0;
let resultatDeux = 0;

while(i< arrayDeux.length){
    resultatDeux += arrayDeux[i];
    i++;
}

console.log(resultat / array.length)
console.log(resultatDeux / arrayDeux.length)


