//create a new function factorial(a):

function factorial(num) {
    //if the nummer is les than 0, error number -1:
    if (num < 0) 
        return -1;

    //if the nummer is equal to 0, 0 = 1:
    else if (num == 0) 
        return 1;

    //if its an other number greather than 0, factorialize it -1:    
    else {
        return (num * factorial(num - 1));
    }
}

factorial(5);

//output:

console.log(factorial(5));
