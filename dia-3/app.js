/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

/*let value = prompt("what is the official name of Javascript", "");
if (value == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? ECMAScript!");
}*/

/*let age = prompt("age?", 18);

let message =
  age < 3
    ? "hi, baby"
    : age < 18
    ? "hello"
    : age < 100
    ? "Greetings"
    : "What an unusual age";
alert(message);*/

/*for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  alert(i);*/

/*let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break; // (*)

  sum += value;
}
alert("Sum: " + sum);*/

/*outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert("Done!");*/

//ejercicio 1

/*let i = 3;

while (i) {
  alert(i--);
}*/

//hasta el 1 porque el valor 0 se traduce en boolean como falso

//ejercicio 2

/*let i = 0;
while (++i < 5) alert(i);*/

//primero 1 luego 2 luego 3 y luego 4

/*let i = 0;
while (i++ < 5) alert(i);*/

//primero 1 segundo 2 tercero 3 cuarto 4 quinto 5

//ejercicio 3

/*for (let i = 0; i < 5; i++) alert(i);*/

/*for (let i = 0; i < 5; ++i) alert(i);*/

//Ambos muestran los mismos valores

//ejercicio 4

/*for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) {
    alert(n);
    console.log(n);
  }
}*/

//ejercicio 5

/*for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}*/

/*let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}*/

//ejercicio 6

/*let n;

do {
  n = prompt("Introduce un numero mayor que 100", 0);
} while (n <= 100 && n);*/

//ejercicio 7

/*let n = prompt("Introduce un numero");
Primos: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue Primos;
  }
  alert(i);
}*/

/*let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}*/

/*let arg = prompt("Enter a value?");
switch (arg) {
  case "0":
  case "1":
    alert("One or zero");
    break;

  case "2":
    alert("Two");
    break;

  case 3:
    alert("Never executes!");
    break;
  default:
    alert("An unknown value");
}*/

//ejercicio 8

/*switch (browser) {
    case "Edge":
      alert("You've got the Edge!");
      break;
  
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
      alert("Okay we support these browsers too");
      break;
  
    default:
      alert("We hope that this page looks ok!");
  }*/

/*let browser = prompt("Introduce tu navegador");

if (browser == "Edge") {
  alert("Tienes Edge");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("tambien vale");
} else {
  alert("Este no vale");
}*/

//ejercicio 9

/*let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}*/

/*let a = prompt("introduce 0 1 2 o 3");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert(2, 3);
    break;
}*/
/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}*/
