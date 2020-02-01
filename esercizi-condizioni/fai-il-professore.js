/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

var voto = 30;

var giudizio1 = 'insufficiente';
var giudizio2 = 'sufficiente';
var giudizio3 = 'buono';
var giudizio4 = 'distinto';
var giudizio5 = 'ottimo';
var giudizio6 = 'eccellente';
var giudizioNull = 'non valido';

if (voto < 18) {
  (voto = giudizio1);
} else if (voto >= 18 && voto < 21) {
  (voto = giudizio2);
} else if (voto >= 21 && voto < 24) {
  (voto = giudizio3);
} else if (voto >= 24 && voto < 27) {
  (voto = giudizio4);
} else if (voto >= 27 && voto < 30) {
  (voto = giudizio5);
} else if (voto == 30) {
  (voto = giudizio6);
} else {
  (voto = giudizioNull);
  }
  
console.log(`Il voto del candidato è ${voto}.`);
