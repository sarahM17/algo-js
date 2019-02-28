

const readlineSync = require("readline-sync");

/*ask the user for the following data about its favorite TV serie.
gather all the data in a single object and return it.*/

function askTvSerie() {
    myObject.name = readlineSync.question("Can you give me the name of your favorit Tv Serie?");
    myObject.year = readlineSync.question("What is the production year of this Tv Serie?");
    myObject.castmembers = readlineSync.question("Give the names of some cast members?");

    return myObject;
}

//display it to the user in JSON format.

    let myObject = {
        "name": "",
        "year": "",
        "castmembers": "",
    }

//output:
    
console.log(askTvSerie());


