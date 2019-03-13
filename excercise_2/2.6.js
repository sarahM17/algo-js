const readlinesync = require ("readline-sync");

let nummer = 1;

nummer = readlinesync.question("Give me a number between 1 and 7?");

if (nummer == 1)
{
    console.log("Maandag");
  }
if (nummer == 2) {
    console.log("Dinsdag");
  } 
  
if (nummer == 3) {
    console.log("Woensdag");
  }

if (nummer == 4) {
    console.log("Donderdag");
  }

if (nummer == 5) {
    console.log("Vrijdag");
  }

if (nummer == 6) {
    console.log("Zaterdag");
  }

if (nummer == 7) {
    console.log("Zondag");
  }

