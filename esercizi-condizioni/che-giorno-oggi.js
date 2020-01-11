/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

var chosenDay = 8

const lun = 'Lunedì';
const mar = 'Martedì';
const mer = 'Mercoledì';
const gio = 'Giovedì';
const ven = 'Venerdì';
const sab = 'Sabato';
const dom = 'Domenica';

switch (chosenDay) {
  case 1:
  console.log(`Il giorno selezionato è ${lun}.`);
    break;

  case 2:
  console.log(`il giorno selezionato è ${mar}.`);
    break;

  case 3:
  console.log(`il giorno selezionato è ${mer}.`);
    break;

  case 4:
  console.log(`il giorno selezionato è ${gio}.`);
    break;

  case 5:
    console.log(`il giorno selezionato è ${ven}.`);
    break;

  case 6:
    console.log(`il giorno selezionato è ${sab}.`);
    break;

  case 7:
    console.log(`il giorno selezionato è ${dom}.`);
    break;

  default:
    console.log('Mi dispiace, il giorno selezionato non esiste! Ritenta e sarai più fortunato.');
}
