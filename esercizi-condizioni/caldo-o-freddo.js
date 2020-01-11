/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

const lun = 'Lunedì';
var tempLun = 40;

const mar = 'Martedì';
var tempMar = 30;

const mer = 'Mercoledì';
var tempMer =31;

const gio = 'Giovedì';
var tempGio = 4;

const ven = 'Venerdì';
var tempVen = 5;

const sab = 'Sabato';
var tempSab = -2;

const dom = 'Domenica';
var tempDom = 12;

if (tempLun > tempMar && tempLun > tempMer && tempLun > tempGio && tempLun > tempVen && tempLun > tempSab && tempLun > tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${lun} con ${tempLun} gradi.`);
} else if (tempMar > tempLun && tempMar > tempMer && tempMar > tempGio && tempMar > tempVen && tempMar > tempSab && tempMar > tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${mar} con ${tempMar} gradi.`);
} else if (tempMer > tempLun && tempMer > tempMar && tempMer > tempGio && tempMer > tempVen && tempMer > tempSab && tempMer > tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${mer} con ${tempMer} gradi.`);
} else if (tempGio > tempLun && tempGio > tempMar && tempGio > tempMer && tempGio > tempVen && tempGio > tempSab && tempGio > tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${gio} con ${tempGio} gradi.`);
} else if (tempVen > tempLun && tempVen > tempMar && tempVen > tempMer && tempVen > tempGio && tempVen > tempSab && tempVen > tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${ven} con ${tempVen} gradi.`);
} else if (tempSab > tempLun && tempSab > tempMar && tempSab > tempMer && tempSab > tempGio && tempSab > tempVen && tempSab > tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${sab} con ${tempSab} gradi.`);
} else {
  console.log(`Questa settimana la giornata più calda è stata ${dom} con ${tempDom} gradi.`);
}

if (tempLun < tempMar && tempLun < tempMer && tempLun < tempGio && tempLun < tempVen && tempLun < tempSab && tempLun < tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${lun} con ${tempLun} gradi.`);
} else if (tempMar < tempLun && tempMar < tempMer && tempMar < tempGio && tempMar < tempVen && tempMar < tempSab && tempMar < tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${mar} con ${tempMar} gradi.`);
} else if (tempMer < tempLun && tempMer < tempMar && tempMer < tempGio && tempMer < tempVen && tempMer < tempSab && tempMer < tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${mer} con ${tempMer} gradi.`);
} else if (tempGio < tempLun && tempGio < tempMar && tempGio < tempMer && tempGio < tempVen && tempGio < tempSab && tempGio < tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${gio} con ${tempGio} gradi.`);
} else if (tempVen < tempLun && tempVen < tempMar && tempVen < tempMer && tempVen < tempGio && tempVen < tempSab && tempVen < tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${ven} con ${tempVen} gradi.`);
} else if (tempSab < tempLun && tempSab < tempMar && tempSab < tempMer && tempSab < tempGio && tempSab < tempVen && tempSab < tempDom) {
  console.log(`Questa settimana la giornata più calda è stata ${sab} con ${tempSab} gradi.`);
} else {
  console.log(`Questa settimana la giornata più calda è stata ${dom} con ${tempDom} gradi.`);
}
