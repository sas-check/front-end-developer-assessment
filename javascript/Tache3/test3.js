fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const List = document.getElementById('List');

    data.slice(0, 5).forEach(liste => {
      const listItem = document.createElement('li'); 
      listItem.textContent = liste.title; 
      List.appendChild(listItem); 
    });
  })
  .catch(error => console.error('Erreur récup données:', error));
