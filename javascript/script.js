/* Task 1: Array Manipulation */
// Write a function named `getEvenNumbers` that takes an array of numbers as input and returns a new array 
// containing only the even numbers from the original array.

// Version 1 : without a Javascript function
function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// Version 2 : with the Javascript function "filter"
function getEvenNumbers2(arr) {
    return arr.filter(number => number % 2 === 0);
}