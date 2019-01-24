/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 1

/* let age = prompt("Escribe una edad");

if (age >= 14 && age <= 90) {
  alert("ok");
} else {
  alert("I destroy you turkey");
}*/

//ejercicio 2

/*let age = prompt("Escribe una edad");

if (!(age >= 14 && age <= 90)) {
  alert("ok");
} else {
  alert("I destroy you turkey");
}*/

/*let age = prompt("Escribe una edad");

if (age <= 14 || age >= 90) {
  alert("ok");
} else {
  alert("I destroy you turkey");
}*/

//ejercicio 3

/*let userName = prompt("Whos there?");

if (userName == "Admin") {
  let login = prompt("Password");
  if (login == "TheMaster") {
    alert("Welcome");
  } else if (Cancelled(login)) {
    alert("Canceled");
  } else "Wrong Pasword";
} else if (Cancelled(userName)) {
  alert("Cancelled");
} else {
  alert("I dont know you");
}

function Cancelled(pass) {
  return pass == null || pass == "";
}*/

//ejercicio 4

/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm("Do you have your parents permission to access this page?");
    }
  }*/

/*function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }*/

/*function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }*/

//ejercicio 5

/*function minimo(a, b) {
  if (a < b) {
    return a;
  } else return b;
}*/

//ejercicio 6

/*function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported,
      use an integer greater than 0`);
  } else {
    alert( pow(x, n) );
  }*/
