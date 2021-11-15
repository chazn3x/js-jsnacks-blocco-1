// // +++ JSnack 1 +++

// let somma = 0;
// // for
// for (let i = 0; i < 5; i++) {
//     somma = somma + parseInt(prompt("Inserisci un numero da sommare:"));
// }
// // while
// let i = 0;
// while (i < 5) {
//     somma = somma + parseInt(prompt("Inserisci un numero da sommare:"));
//     i++;
// }
// console.log("La somma è: " + somma);


// +++ JSnack 2 +++

const word1 = prompt("Inserisci la prima parola: ");
const word2 = prompt("Inserisci la seconda parola: ");
if (word1.length > word2.length) {
    console.log(word1);
} else if (word1.length < word2.length) {
    console.log(word2);
} else {
    console.log(word1 + " " + word2);
}