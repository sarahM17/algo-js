const readlineSync = require("readline-sync");

let numberOne = Math.trunc(readlineSync.question('Can you give me a number without decimals?'));


let numberTwo = Math.trunc(readlineSync.question('Can you give me a number without decimals?'));

console.log(numberOne % numberTwo);