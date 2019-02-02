/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 1

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O

//ejercicio 2

function aclean(arr) {
  let lista = new Map();
  for (let palabra of arr) {
    let ordenado = palabra
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    lista.set(ordenado, palabra);
    console.log(lista);
  }
  return Array.from(lista.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

//ejercicio 3

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: numbers.push is not a function
keys.push("more");

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: numbers.push is not a function
keys.push("more");

alert(keys);

//ejercicio 4

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

//ejercicio 8(Array method)

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

//ejercicio 9(Array method)

function sortByName(arr) {
  arr.sort(function orden(a, b) {
    if (a.age > b.age) {
      return 1;
    } else {
      return -1;
    }
  });
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

sortByName(arr);
alert(arr[0].name); // Mary
alert(arr[2].name); // Pete

//ejercicio 10(Array method)

function shuffle(arr) {
  arr.sort(function random() {
    return Math.random() - 0.5;
  });
  alert(arr);
}

let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);

//ejercicio 1(Object.key ...)

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salario of Object.values(salaries)) {
    sum += salario;
  }
  return sum;
}

alert(sumSalaries(salaries)); // 650

//ejercicio 2(Object.key...)

let user = {
  name: "John",
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

alert(count(user)); // 2

//ejercicio 1

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// //ejercicio 2

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary(salaries) {
  let max = 0;
  let nombre = "";

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      nombre = name;
    }
  }

  return nombre;
}

alert(topSalary(salaries)); //Pete

//ejercicio 1 (Dates)

let d = new Date(2012, 1, 20, 3, 12);
alert(d);

//ejercicio 2

function getWeekDay(date) {
  let semana = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  return semana[date.getDate()];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date)); // should output "TU"

//ejercicio 3

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date)); // tuesday, should show 2
