// +++ JSnack 1 +++
let somma = 0;
// // for
// for (let i = 0; i < 5; i++) {
//     somma = somma + parseInt(prompt("Inserisci un numero da sommare:"));
// }
// while
let i = 0;
while (i < 5) {
    somma = somma + parseInt(prompt("Inserisci un numero da sommare:"));
    i++;
}
console.log("La somma è: " + somma);