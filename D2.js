/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//let number1;
//let number2;
//number1 = window.prompt("inserisci il tuo primo numero!");
//number2 = window.prompt("inscerisci il tuo secondo numero!");
//if (number1 > number2) {
//  console.log(number1, "è maggiore il primo numero");
//} else {
//  console.log(number2, "è maggiore il secondo numero");
//}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let number1;
//number1 = window.prompt("verifica se un numero è diverso da 5");
//if (number1 != 5) {
//  console.log("not equal");
//} else {
//  console.log("equal");
//}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let number1 = 5;

let resultNumber = number1 % 5;
console.log(resultNumber);
if (resultNumber === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let number1 = 12;
let number2 = 12;
let resultNumber1 = number1 + number2;
let resultNumber2 = number1 - number2;
if (number1 === 8 || number2 === 8) {
  console.log("è uguale a otto");
} else if (resultNumber1 === 8 || resultNumber2 === 8) {
  console.log("la sua somma o la sua sottrazione è uguale a 8");
} else {
  console.log("nessun numero è uguale a 8 e neanche la loro somma o la loro sottrazione");
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*let totalShoppingCart;
totalShoppingCart = window.prompt("saldo totale dell'utente");
console.log(typeof totalShoppingCart);
if (totalShoppingCart > 50) {
  console.log("Spedizione Gratuita", " costo totale:", totalShoppingCart);
} else {
  console.log("aggiunta costo spedizione di 10", " costo totale:", Number(totalShoppingCart) + 10);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart;
totalShoppingCart = window.prompt("saldo totale dell'utente");
let ventiPercento = (Number(totalShoppingCart) * 20) / 100;
totalCost = totalShoppingCart - ventiPercento;
if (totalShoppingCart > 50) {
  console.log("Spedizione Gratuita", " costo totale:", totalCost);
} else {
  console.log("aggiunta costo spedizione di 10", " costo totale:", Number(totalCost) + 10);
}*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const numeri = [867, 4, 67];
numeri.sort();
numeri.reverse();
console.log(numeri);*/
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let valore = 56;
console.log(typeof valore);
if (typeof valore == "number") {
  console.log("il valore fornito è un numero");
} else {
  console.log("il valore fornito non è un numero");
}*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const number = 6;
const pariDispari = number % 2;
if (pariDispari === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let val = 3;
  if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else if (val >= 10) {
    console.log("Uguale a 10 o maggiore");
  }*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.push((city = "Toronto"));

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers.pop();
numbers.push(100);
console.log(numbers);*/
