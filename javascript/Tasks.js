// Task 1: Array Manipulation
function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(array);
console.log("Even numbers : " + evenNumbers);
