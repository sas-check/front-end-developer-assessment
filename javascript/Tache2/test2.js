const changeTextBtn = document.getElementById('changeTextBtn');
const myText = document.getElementById('myText');

const text = "Texte d'origine";
const newText = "Hello, Check !";


changeTextBtn.addEventListener('click', function() {
    if (myText.textContent === text) {
        myText.textContent = newText;
    } else {
        myText.textContent = text;
    }
});
