const readlinesync = require("readline-sync");

let number = parseInt(readlinesync.question('Give me a random number?'));
let fibonacci_numbers = function (number) 
{
  if (number===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let s = fibonacci_numbers(number - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_numbers(number));
 