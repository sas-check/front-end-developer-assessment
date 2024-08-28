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

// Task 3: Basic Fetch :
function fetchAndDisplayTodos() {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const todosToDisplay = data.slice(0, 5);
      const listElement = document.getElementById("todoList");

      todosToDisplay.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.title;
        listElement.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
fetchAndDisplayTodos();
