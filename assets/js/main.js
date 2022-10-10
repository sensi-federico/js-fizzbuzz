

// per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.





for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("BuzzFizz");
        const row = document.querySelector("div.row");
        const boxBuzzFizz = document.createElement('div.col');
        boxBuzzFizz.append('BuzzFizz');
        row.append(boxBuzzFizz);
        // const main = document.querySelector("main#site_main");
        // const container = document.createElement('div.container');

        // container.append('elemento');
        // main.append(container);

    } else if (i % 5 == 0) {
        console.log("Buzz");
        const row = document.querySelector("div.row");
        const boxBuzz = document.createElement('div.col');
        boxBuzz.append('Buzz');
        row.append(boxBuzz);


    } else if (i % 3 == 0) {
        console.log("Fizz");
        const row = document.querySelector("div.row");
        const boxFizz = document.createElement('div.col');
        boxFizz.append('fizz');
        row.append(boxFizz);

    } else {
        console.log(i);
        const row = document.querySelector("div.row");
        const boxNum = document.createElement('div.col');
        boxNum.append(i);
        row.append(boxNum);
    }
}

