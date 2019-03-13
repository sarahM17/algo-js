const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your firstname please? (1/5)');

let favoritFood = readlineSync.question('Can you give me your favorit food? (2/5)');

let favoritMovie = readlineSync.question('Can you give me your favorit movie? (3/5)');

let favoritColor = readlineSync.question('Can you give me your favorit color? (4/5)');

let home = readlineSync.question('Can you give me your favorit place in home? (5/5)');

console.log("One day" + firstName + "was eating " + favoritFood + "in the" + favoritColor + home + "when he/she was watching" + favoritMovie + "What a great day!");
