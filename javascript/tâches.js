// Tâche1: Manipulation de tableaux
function getEvenNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}

// Tâche2: Interaction DOM
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('myText').textContent = 'Hello, Check !';
});


// Tâche3: Récupération de base
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        const todoList = document.getElementById('todoList');
        data.slice(0, 5).forEach(todo => {
            let listItem = document.createElement('li');
            listItem.textContent = todo.title;
            todoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));
