/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var currentYear = 2019;
var yearBirth = 1980;
var actualAge = currentYear-yearBirth;
var to100Diff = 100-actualAge;

console.log(`ho ${actualAge} anni e per arrivare a 100 me ne mancano ${to100Diff}.`);
