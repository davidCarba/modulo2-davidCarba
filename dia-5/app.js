/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*console.log("Probando, probando, 1, 2, 3!");*/

/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// uso: las funciones showOk, showCancel se pasan como argumentos para preguntar
ask("Do you agree?", showOk, showCancel);*/

//ejercicio 1

/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

    ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  let ask = (question, yes, no)=> 
    if (confirm(question))? yes()
    :else no();
  

ask(
  "Do you agree?",
  () => alert("You agreed,"),
  () => alert("You cancelled the question.")
);*/

//ejercicio 2

/*let user = {};
user.name = "Manolo";
user.surname = "Garcia";
user.name = "NoMoreManolo";
delete user.name;*/

//ejercicio 3

/*let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}

alert(isEmpty(schedule));

schedule["8:30"] = "get up";*/

//ejercicio 4

/*const user = {
    name: "John"
  };
  
  // does it work?
  user.name = "Pete";//si se puede cambiar lo unico que no 
  //se puede cambiar es la referencia del objeto user*/

//ejercicio 5

/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);*/

//ejercicio 6
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof key !== String) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
