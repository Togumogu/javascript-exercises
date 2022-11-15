const sumAll = function(num1, num2) {

    // Error code, doesn't accept negative or non-number values.
    if (num1 < 0 || num2 < 0 || isNaN(num1) === true || isNaN(num2) === true) {
        return "ERROR!!!"
    }

   // Give the numbers values for the loop
   let biggerNumber = 0
   let smallerNumber = 0
   smallerNumber = num1
   biggerNumber = num2

   // If the first number is bigger, reverse the values.
   if (num1 > num2) {
        smallerNumber = num2
        biggerNumber = num1
   }

    // For loop, sums the numbers
    let numbers = 0
    for (i = smallerNumber; i <= biggerNumber; i++) {
        numbers += i
    }
    return numbers
};

console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
