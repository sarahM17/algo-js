const readlineSync = require("readline-sync");

let mustAge = 18;

let age = readlineSync.question('What is your age?');


if (age >= 18) {
  console.log("You probably are an adult");
} else {
  console.log("You probably are a child");
}