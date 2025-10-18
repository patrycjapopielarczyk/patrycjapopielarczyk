/*// 1. Stwórz obiekt samochód (car) i przypisz mu pola: brand, model, year.
const carKia = {
    brand: "kia" ,
    model: "ceed",
    year: 2024
};
//console.log(car);
// 2. Stwórz trzy obiekty car i umieść je w tablicy. Niech rok produkcji będzie unikalny dla każdego auta.
const carToyota = {
    brand: "toyota" ,
    model: "auris",
    year: 2021
    };
const carAudi = {
    brand: "audi" ,
    model: "S6 Sportback",
    year: 2020
    };

const cars = [carKia,carAudi, carToyota];
//console.log(cars);
//3. Dla chętnych: przy pomocy funkcji .map przeiteruj po tablicy i wyświetl wszystkie informacje (brand, model, year) dla każdego
//samochodu
const carsNew = cars.map( car=> `Brand:${car.brand}, Model: ${car.model}, Year: ${car.year}`)
console.log(carsNew)

//4. Dla chętnych: Przy pomocy funkcji .filter wyświetl informacje tylko dla dwóch najmłodszych aut.

const carFiltered = cars.filter(car => car.year>2020);
console.log(carFiltered);
*/

//1. Zrób własny przykład dziedziczenia :)

/*class Soup{
    constructor(wegetables,flavour, meat) {
        this.wegetables = wegetables; 
        this.flavour = flavour;
        this.meat =meat;
}
        cook(){
        console.log(`If you want to make tomato soup you need add ${this.wegetables} and ${this.meat} than soup will be ${this.flavour}`)
}};
        const tomatoSoup = new Soup ("tomato", "spicy", "chicken");
        tomatoSoup.cook();

        class Dinner extends Soup{
            constructor(wegetables, flavour, meat, sos){
                super(wegetables,flavour, meat)
                this.sos = sos;
            }
        cookDinner(){
            console.log(`If you want to make dinner you need prepare ${this.meat} and ${this.wegetables} and the end add ${this.sos}`);
        }}
        const schabowy = new Dinner ("potato", "mild", "pork", "sos");
        schabowy.cookDinner();
*/
