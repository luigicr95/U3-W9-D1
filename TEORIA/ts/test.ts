// class Prova {
//   text: string;
//   constructor(text: string) {
//     this.text = text;
//   }
// }

// let testo = new Prova("Testo di prova!");
// console.log(testo.text);

let txt = "Ciao";
txt = "abc";
//txt = 25 In Typescript le variabili sono tipizzate, non posso assegnare un numero a una stringa, ecc...

// i tipi sono string boolean number any

let arr = ["primo", "secondo", "terzo"];
// arr.push(1) L'array è tipizzato come stringa, non prenderà tipi diversi

// dichiarare e inizializzare un array

let arr2: string[] = [];
let arr3: Array<string> = [];

arr2.push();

let testo: string;
let anni = 18;
if (anni >= 18) {
  testo = "maggiorenne";
} else {
  testo = "minorenne";
}

console.log(testo);

// operatori ternari
testo = anni >= 18 ? "maggiorenne" : "minorenne";
