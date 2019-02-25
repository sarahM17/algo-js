const readlinesync = require ("readline-sync");

let numberOne = new Number (readlinesync.question('Can you give me a number?'));

let numberTwo = new Number (readlinesync.question('Can you give me another number?'));

let numberTree = new Number (readlinesync.question('Again, can you give me another number?'));

let totalNumber = numberOne + numberTwo + numberTree;

console.log (totalNumber);

