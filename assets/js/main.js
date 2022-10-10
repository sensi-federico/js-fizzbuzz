

// per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const container = document.getElementById ('container');
const ulEl = document.querySelector ('ul')

for (let i = 1; i <= 100; i++) {

    let boxLi = document.createElement ('li')
    ulEl.append (boxLi)

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("BuzzFizz");
        boxLi.append ('BuzzFizz');
        boxLi.style.background = "rgb(170, 95, 242)";

    } else if (i % 5 == 0) {
        console.log("Buzz");
        boxLi.append ('Buzz');
        boxLi.style.background = "rgb(40, 245, 66)";

    } else if (i % 3 == 0) {
        console.log("Fizz");
        boxLi.append ('Fizz');
        boxLi.style.background = "rgb(70, 45, 22)";
    } else {
        console.log(i);
        boxLi.append (i);
        boxLi.style.background = "rgb(240, 55, 42)";
    }
}

