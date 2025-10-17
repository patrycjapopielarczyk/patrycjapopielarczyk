//1. Utwórz tablicę i pobierz z niej ostatni element
const tablica =[10, 20, 30];

const ostatniZmienna = tablica[tablica.length-1]
console.log(ostatniZmienna);

/*2Napisz program, który na podstawie podanej temperatury w stopniach Celsjusza wypisze odpowiedni komunikat:
• Jeśli temperatura jest poniżej 0, wypisz: Mróz! Ubierz się ciepło!
• Jeśli temperatura jest od 0 do 15 włącznie, wypisz: Chłodno. Przyda się kurtka.
• W przeciwnym razie wypisz: Ciepło! Zostaw kurtkę w domu.*/

const temp =27;

if (temp<0){
    console.log("Mróz! Ubierz się ciepło!");
} else if (temp>0 && temp <=15) {
    console.log("Chłodno. Przyda się kurtka.!");
} else {
    console.log ("Ciepło! Zostaw kurtkę w domu.");
}
//3. Napisz pętlę, która wyświetli liczby nieparzyste do 20


for (let number =1; number<20; number+=2){
    console.log(number);
}
