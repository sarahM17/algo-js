//ask for a number:

const readlinesync = require("readline-sync");

let number = parseInt(readlinesync.question('Give me a number?'));
let numbersArray = [];
let total = 0;

//create a function named average(numbersArray):

function average(numbersArray) {
    return(total/numbersArray.length);
}


//create a new function named min(numbersArray):

function min(numbersArray) {
    return Math.min(...numbersArray);
 }
 

 //create a new function named max(numbersArray):
 
function max(numbersArray) {
    return Math.max(...numbersArray);
  }
  

//create a function named rand 10():

function rand10() {
    return Math.floor((Math.random () * 10) +1);
}


//create a new function named multiRand(number):

function multiRand(number) {
    numbersArray.push(rand10());    
}

//create a loop that returns an array of n numbers between 1 and 10:

for (i=0; i<number; i++) {
    multiRand(number);
    total += numbersArray[i]; 
}

//expected output:

console.log(Math.round(average(numbersArray)));
console.log(numbersArray);
console.log(max(numbersArray));
console.log(min(numbersArray));