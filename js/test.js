const readlineSync = require("readline-sync");

console.log("hello");
console.log("It works !!!");

let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);

let age = 25; // I'm 25
age = 36; // I get older
age = 18; // Miraculously I'm getting younger

let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age);
