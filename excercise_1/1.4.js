const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name please?');


let firstName = readlineSync.question('Can you give me your firstname please?');


let city = readlineSync.question('Can you give me the name of your city please?');
console.log("Hello " + name  + firstName);
console.log("Welcome in " + city);