/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto switch-case.

  Esempio:
    Input: v = 29
    Output: Distinto

  http://www.imparareaprogrammare.it
*/

var voto = 29;

var giudizio1 = 'insufficiente';
var giudizio2 = 'sufficiente';
var giudizio3 = 'buono';
var giudizio4 = 'distinto';
var giudizio5 = 'ottimo';
var giudizio6 = 'eccellente';
var giudizioNull = 'non valido';

switch (voto) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    voto = giudizio1;
    break

  case 18:
  case 19:
  case 20:
    voto = giudizio2;
    break

  case 21:
  case 22:
  case 23:
    voto = giudizio3;
    break

  case 24:
  case 25:
  case 26:
    voto = giudizio4;
    break

  case 27:
  case 28:
  case 29:
    voto = giudizio5;
    break

  case 30:
    voto = giudizio6;
    break

  default:
    voto = giudizioNull;
}

console.log(`Il voto del candidato è ${voto}.`);
