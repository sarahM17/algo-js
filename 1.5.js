const readlineSync = require("readline-sync");

let numberOne = Math.trunc(readlineSync.question('Can you give me a number with decimals'));


let numberTwo = readlineSync.question('Can you give me a number with decimals?');

console.log(numberOne * numberTwo);