/*
Ciao classse,
Esercizio di oggi:
nome repo: js-paliedispari

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare,
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.,

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?,
Ho bisogno di parametri?,
Devo restituire un valore?,
Se sì, di che tipo?
*/



// Struttura Palidroma

// 1. Chiedere parola all'utente.

// 2. Creare una funzione che:
//    -riceva la parola;
//    -la confronti con la stessa parola,ma al contrario (Una parola è palindroma se è uguale alla sua versione al contrario);
//    -restituisce true se è palindroma,altrimenti false.

// 3. Utilizzare la funzione e stampare il risultato.



// 1. Chiedere parola all'utente.

const userWord = prompt("Inserire parola");

// 2. Creare una funzione
function wordPalindrome(userWord) {

// Array per parola al contrario 
const splitted_word = [];

// Ciclo per invertire la parola
for (let i = 0; i < userWord.length; i++) {
  const letter = userWord[i];
  splitted_word.unshift(letter);
}

// Trasformiamo l'array in stringa
const reversedWord = splitted_word.join("");

// Confronto parola
  if (userWord === reversedWord) {
    return true;
  } else {
    return false;
  }
}

// 3. Utilizzare la funzione e stampare il risultato.
if (wordPalindrome(userWord)) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}


//Struttura Pari e Dispari

// Funzione per generare un numero casuale
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per sommare due numeri
function sum(a, b) {
  return a + b;
}

// Funzione per determinare se un numero è pari o dispari
function evenOrOdd(number){
  if(number % 2 === 0){
    return 'pari';
  }
  return 'dispari';
}

//L'utente sceglie pari o dispari
const user_choice = prompt("Pari o Dispari?");

//L'utente inserisce un numero da 1 a 5
const user_number = Number(prompt("Inserire numero da 1 a 5"));

//Generare un numero random da 1 a 5 per il computer
const pc_number = getRandomNumber(1, 5);

//Sommiamo i due numeri
const result = sum(user_number, pc_number);
console.log(result, user_choice, user_number, pc_number);

//Controlliamo se la somma è pari o dispari
if(evenOrOdd(result) === user_choice.toLowerCase()){

//Dichiarare il vincitore
  console.log('You win!');
} else {
  console.log('Ops.. Computer win..');
}