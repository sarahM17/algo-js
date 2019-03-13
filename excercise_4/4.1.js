//takes length and width of a rectangle and return it:

function calcSurface(width, length) {
    return width * length;
  }

//asks length and width of a rectangle and display it:

const readlineSync = require("readline-sync");  
  let width = parseInt(readlineSync.question("Give me the width of a rectangle?"));
  let length = parseInt(readlineSync.question("Give me also the length of a rectangle?"));
  
  console.log('the total surface of the rectangle is'+ ' ' + calcSurface(width,length));
  // expected output