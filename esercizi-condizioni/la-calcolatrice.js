/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

var num1 = 10;
var num2 = 20;

var operazione = 'media';

switch (operazione) {
  case 'somma':
    console.log(num1+num2);
    break;

  case 'sottrazione':
  console.log(num1-num2);
    break;

  case 'moltiplicazione':
  console.log(num1*num2);
    break;

  case 'divisione':
  console.log(num1/num2);
    break;

  case 'modulo':
  console.log(Math.ceil(num1%num2));
    break;

  case 'potenza':
  console.log(Math.pow(num1, num2));
  break;

  case 'media':
  console.log((num1+num2)/2);
  break;

  default:
  console.log(`Mi dispiace, l'operazione non è valida.`);

}
