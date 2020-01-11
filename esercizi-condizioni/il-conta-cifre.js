/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

var number = 555;

if (number < 10) {
  console.log('il numero è composto da 1 cifra.');
} else if (number >= 10 && number < 100) {
  console.log('il numero è composto da 2 cifre.');
} else if (number >= 100 && number < 1000) {
  console.log('il numero è composto da 3 cifre.');
} else if (number >= 1000 && number < 10000) {
  console.log('il numero è composto da 4 cifre.');
} else {
  console.log('Troppo difficile, perchè non ti arrangi?');
}
