const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('Can you give me your shoe size?');


let birthYear = readlineSync.question('Can you give me your birth year?');

let totalSize = shoeSize * 2;
let totalSize2 = totalSize + 5;
let totalSize3 = totalSize2 * 50;
let totalSize4 = totalSize3 - birthYear;
let totalSize5 = totalSize4 + 1766;

console.log(totalSize5);