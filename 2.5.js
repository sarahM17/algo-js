const readlinesync = require ("readline-sync");

let nummer = 0;

while (nummer != 42)
{
    nummer = readlinesync.question("Whats your favorite number?");
    readlinesync.question("Are you sure?");
}