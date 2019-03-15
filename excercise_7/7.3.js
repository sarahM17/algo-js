//Question to ask for a positive integer.

const readlinesync = require("readline-sync");

let number = parseInt(readlinesync.question('Give me a random positive number?'));

function getDivisors(number) {
    // 1 is a special case where "1 and itself" are only one divisor.
    if (number === 1) {
        return 1;
    }

    let divisor = 2; //viriable so that "1 and itself" didn't display.

    let mod = 2;
    while (mod * 2 <= number){
        if (number % mod === 0) {
            if (mod * mod < number) {
            

                divisor += 2;
            } 
            else {
                
                divisor += 1; 
            }
        }
        mod++;
    }

    return divisor;
}

console.log(getDivisors(number))