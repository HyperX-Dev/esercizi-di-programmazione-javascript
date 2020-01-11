/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/

 var rosso = 12909;
 var giallo = 900;
 var verde = 88;
 var blu = 455;

 if (rosso > giallo && rosso > verde && rosso > blu) {
   console.log(`il numero maggiore tra i quattro è ${rosso}.`);
 } else if (giallo > verde && giallo > blu && giallo > rosso) {
   console.log(`il numero maggiore tra i quattro è ${giallo}.`);
 } else if (verde > blu && verde > rosso && verde > giallo) {
   console.log(`il numero maggiore tra i quattro è ${verde}.`);
 } else {
   console.log(`il numero maggiore tra i quattro è ${blu}.`);
 }

 if (rosso < giallo && rosso < verde && rosso < blu) {
   console.log(`il numero minore tra i quattro è ${rosso}.`);
 } else if (giallo < verde && giallo < blu && giallo < rosso) {
   console.log(`il numero minore tra i quattro è ${giallo}.`);
 } else if (verde < blu && verde < rosso && verde < giallo) {
   console.log(`il numero minore tra i quattro è ${verde}.`);
 } else {
   console.log(`il numero minore tra i quattro è ${blu}.`);
 }
