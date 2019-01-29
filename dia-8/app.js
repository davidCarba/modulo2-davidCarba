/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 1

/*function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

let palabra = prompt("Introduce una palabra");
alert(ucFirst(palabra));*/

//ejercicio 2

/*function checkSpam(str) {
  let word = str.toLowerCase();
  return word.includes("viagra") || word.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));*/

//ejercicio 3

/*function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return (correcta = str.slice(0, maxlength - 1) + "…");
    } else {
      return str;
    }
  }
alert(truncate("What I'd like to tell on this topic is:", 20));*/

/*ejercicio 4

function extractCurrencyValue(str) {
  return +str.slice(1);
}
alert(extractCurrencyValue("$120") === 120);*/

//ejercicio 5

/*let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4*/

//ejercicio 6

/*let list=["Jazz", "Blues"];
list.push("Rock-n-Roll");
list.[Math.floor([list.length]/2)];
alert(list.shift());
list.unshift("Rap","Reggae");*/

//ejercicio 7

/*let arr = ["a", "b"];

arr.push(function() {
  alert(this);
});

arr[2](); // muestra la funcion entera y referencia a this por eso muestra tambien a y b*/

//ejercicio 8

/*function sumInput() {
  let numeros = [];
  while (true) {
    let a = prompt("Introduce un numero", 0);
    if (a === "" || a === null || !isFinite(a)) break;
    numeros.push(+a);
  }
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}
alert(sumInput());*/
