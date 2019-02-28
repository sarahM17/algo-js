//ask the number of random numbers:

const readlinesync = require("readline-sync");

let number = parseInt(readlinesync.question('Give me a number of random numbers?'));
let numbersArray = [];


//create a function named rand 10:

function rand10() {
    return Math.floor ((Math.random () * 10) +1);
}


//create a new function named multiRand:

function multiRand(number) {
    numbersArray.push(rand10());    
}

//create a loop that returns an array of n numbers between 1 and 10:

for (i=0; i<number; i++) {
    multiRand(number); 
}

//expected output:

console.log(numbersArray);

