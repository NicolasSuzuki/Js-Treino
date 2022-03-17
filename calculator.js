
function sum() {
    //TODO: receive array of numbers and make the sum of them

}

function subtract() {
    //TODO: subtract the two number

}

function multiply() {
    //TODO: multiply the two number

}

function division() {
    //TODO: receive two numbers and return the division of them

}

function squareOfNumbers() {
    //TODO: receive array of numbers, sort and return the square of them
    
}


function run() {
    const arrayToGetSquareOfThem = [1,2,6,3,4,5,9,8]; //result is [1, 4, 9, 16, 25, 36, 64, 81]
    const arrayToSum = [1,2,3,4,5,6]; //result is 21
    const subtractThisNumber = 12;
    const multiplyThisNumber = 5;
    const splitThisNumber = 24;
    const withThisNumber = 8;

    console.log(sum(arrayToSum),
     subtract(subtractThisNumber, withThisNumber),
     multiply(multiplyThisNumber,withThisNumber),
     division(splitThisNumber,withThisNumber),
     squareOfNumbers(arrayToGetSquareOfThem)
    );
    
}

run();