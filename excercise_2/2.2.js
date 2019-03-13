const readlineSync = require("readline-sync");

let min = Number(readlineSync.question('Give me a minimum value?'));

let max = Number(readlineSync.question('Give me a maximum value?'));

let current = Number(readlineSync.question('Give me a current value?'));

if (current>min && current<max)
{
  console.log(current);
}

try {
  throw new Error; // throws an exception with a numeric value
} catch (current) {
  if (min < max) {
     // statements to handle exceptions 1-50
  } else {
     // cannot handle this exception, so rethrow
     throw min;
  }
}