// Task 1: Array Manipulation
function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(array);
console.log("Even numbers : " + evenNumbers);

// Task 2: DOM Interaction
function changeTextFunction() {
  const button = document.getElementById("changeText");
  const textElement = document.getElementById("myText");

  button.addEventListener("click", () => {
    textElement.textContent = "Hello, Check!";
  });
}
changeTextFunction();
