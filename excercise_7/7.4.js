const readlineSync = require("readline-sync");
let array = [];
let erase=0;



function PizzaFlavors(){
console.log("Hello, welcome to Pizza Flavors Manager");
console.log("Please choose you're action!");

console.log("1 - List all the pizza flavors");
console.log("2 - Add a new pizza flavor");
console.log("3 - Remove a pizza flavor");
console.log("4 - Exit this program");
console.log("") ;


let i = parseInt(readlineSync.question("Please choose you're action?"));

if (i==1){

    console.log(array);
    PizzaFlavors();



}else if (i==2){
    array.push(readlineSync.question("What is you're favorit flavor?"))
    PizzaFlavors()


}else if (i==3){
            console.log(array);
            erase = (readlineSync.question("What pizza flavor do you wan't to remove?"));

    for (i=0;i < array.length;i++){
            console.log(erase + array[i]);

        if(erase == array[i]){
            array.splice( array.indexOf(erase), 1 );
            
        }else{
    }}
    PizzaFlavors();


}else if (i==4){
    console.log("Exit this program.");
    console.log("Thank you for ordering.");
    console.log(array.toString());

}
    

}



PizzaFlavors();