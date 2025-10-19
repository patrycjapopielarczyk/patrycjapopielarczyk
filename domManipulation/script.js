

// 1. Dodanie nowego elementu przy ładowaniu 


const newDiv = document.createElement('patrycja');
newDiv.textContent = 'To jest  div patrycja';
document.body.appendChild(newDiv);

// 2. Zmiana koloru paragrafu

document.querySelector('patrycja').style.color = "red";
const firstParagraph = document.querySelector('p');
firstParagraph.style.color = "red";

// 3. Dla chętnych: pobierz element paragrafu nr 2. Pobierz element przycisku i uruchom na nim metodę addEventListener na zdarzenie ‚click’. W metodzie addEventListener zmień kolor przycisku.

//const secondParagraph = document.querySelector("#'paragraph-for-button'");
const button = document.querySelector("#changeColorBtn");
button.addEventListener('click', function(){
    alert("Przycisk klikniety")
})
