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

var numRandom = Math.floor (Math.random() * (100-1) + 1);                         // estrazione numero casuale
console.log(`Il numero estratto è ${(numRandom)}`);

var player1 = 'Gianluca';
var numPlayer1 = 34;
var difference1 = Math.floor (Math.abs(numRandom - numPlayer1));                  //quanto è andato vicino player1?

var player2 = 'Francesca';
var numPlayer2 = 40;
var difference2 = Math.floor (Math.abs(numRandom - numPlayer2));                  //quanto è andato vicino player2?

if (numPlayer1 == numRandom) {
  console.log(`Complimenti ${player1}'!' Hai indovinato il numero misterioso!`);
} else if (numPlayer2 == numRandom) {
  console.log(`Complimenti ${player2}'!' Hai indovinato il numero misterioso!`);
} else if (difference1 < difference2) {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ma ${player1} ci è andato più vicino!`);
} else if (difference1 > difference2) {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ma ${player2} ci è andato più vicino!`);
} else {
  console.log(`Purtroppo nessuno ha indovinato il numero misterioso, ed entrambi i giocatori sono ugualmente vicini!`);
}
