const readlinesync = require ("readline-sync");

function numbers() {
    let number =  Math.floor ((Math.random () * 100) +1);


let numberTwo

while (numberTwo != number) {
    numberTwo = readlinesync.question('Guess the number?');
    
    if (numberTwo < number) {
    console.log ('Too low');}
    
    else if (numberTwo > number) {
    console.log ('Too high');}
}


console.log('Well done!')
}

numbers();

