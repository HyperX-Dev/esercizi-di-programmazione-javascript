/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var totSec = 1199773;

var days = totSec/86400;
var hours = totSec/3600;
var mins = totSec%3600/60;
var secs = totSec-Math.floor(hours)*3600-Math.floor(mins)*60;

console.log(`${totSec} secondi corrispondono a ${Math.floor(days)} giorni ${Math.floor(hours)} ore, ${Math.floor(mins)} minuti e ${Math.floor(secs)} secondi.`);
