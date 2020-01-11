/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

var sceltaUtente = 7;

var opzione1 = 1;
var nOpzione1 = 'Tiramisù';

var opzione2 = 2;
var nOpzione2 = 'Torta della Nonna';

var opzione3 = 3;
var nOpzione3 = 'Cheesecake Alla Nutella';

var opzione4 = 4;
var nOpzione4 = 'Macedonia';

if (sceltaUtente == opzione1) {
  console.log(`Hai scelto il dolce ${nOpzione1}.`);
} else if (sceltaUtente == opzione2) {
  console.log(`Hai scelto il dolce ${nOpzione2}.`);
} else if (sceltaUtente == opzione3) {
  console.log(`Hai scelto il dolce ${nOpzione3}.`);
} else if (sceltaUtente == opzione4) {
  console.log(`Hai scelto il dolce ${nOpzione4}.`);
} else {
  console.log('Mi dispiace, il dolce che hai scelto non è disponibile.');
}
