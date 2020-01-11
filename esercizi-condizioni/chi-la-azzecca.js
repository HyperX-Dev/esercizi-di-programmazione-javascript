/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var numRandom = Math.random() * (100-1) + 1;
console.log(`Il numero estratto è ${Math.floor(numRandom)}`);

var player1 = 'Gianluca';
var numPlayer1 = 34;
var difference = function (numRandom, numPlayer1) {
  return Math.abs(numRandom - numPlayer1);
}

console.log(difference);

/*
var diffPlayer1High = numPlayer1 - numRandom    // differenza con numero giocatore 1 più alto del numero estratto
var diffPlayer1Low = numRandom - numPlayer1     // differenza con numero giocatore 1 più basso del numero estratto

var player2 = 'Francesca';
var numPlayer2 = 66;
var diffPlayer2High = numPlayer2 - numRandom    // differenza con numero giocatore 2 più alto del numero estratto
var diffPlayer2Low = numRandom - numPlayer2     // differenza con numero giocatore 2 più basso del numero estratto


if (numPlayer1 == numRandom) {
  console.log(`Complimenti ${player1}'!' Hai indovinato il numero misterioso!`);
} else if (numPlayer2 == numRandom) {
  console.log(`Complimenti ${player2}'!' Hai indovinato il numero misterioso!`);
} else if (diffPlayer1High < diffPlayer2High || diffPlayer1High < diffPlayer2Low) {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ma ${player1} ci è andato più vicino!`);
} else if (diffPlayer1Low < diffPlayer2High || diffPlayer1Low < diffPlayer2Low) {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ma ${player1} ci è andato più vicino!`);
} else if (diffPlayer2High < diffPlayer1High || diffPlayer2High < diffPlayer1Low) {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ma ${player1} ci è andato più vicino!`);
} else if (diffPlayer2Low < diffPlayer1High || diffPlayer2Low < diffPlayer1Low) {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ma ${player1} ci è andato più vicino!`);
} else {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ed entrambi i giocatori sono ugualmente vicini!`);
}
*/
