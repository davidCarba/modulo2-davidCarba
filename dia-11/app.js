/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 1

/*function camelize(str) {
  return str
    .split("-")
    .map(function check(word, index) {
      if (index == 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join("");
}

function camelize(str) {
let arr = str.split("-");
let result = arr.map(function(item, index, array) {
  if (index > 0) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  } else {
    return item;
  }
});
result = result.join("");
return result;
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));*/

//ejercicio 2

/*function filterRange(arr, a, b) {
  let cadena = arr.filter(function filtrar(arr, a, b) {
    if (a <= arr && b >= arr) {
      return cadena;
    }
  });
}*/

/*function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)*/

//ejercicio 4

/*let arr = [5, -2, 1, -10, 8, 11];

//primera forma

/*function reves(a, b) {
  return b - a;
}

arr.sort(reves);

//segunda forma

/*arr.sort((a, b) => b - a);

alert(arr);*/

//ejercicio 5

/*function copySorted(arr) {
  let newArray = arr.slice(0);
  newArray.sort();
  return newArray;
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)*/

//ejercicio 6

/*function Calculator() {
  let calculo = {
    "+": function(a, b) {
      return a + b;
    },
    "-": function(a, b) {
      return a - b;
    }
  };
  this.calculate = function(str) {
    let space = str.split(" "),
      a = +space[0],
      op = space[1],
      b = +space[2];

    if (!calculo[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    } else {
      return calculo[op](a, b);
    }
  };
  this.addMethod = function(name, func) {
    calculo[name] = func;
  };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", function mult(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function div(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function pow(a, b) {
  return a ** b;
});

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8*/

//ejercicio 7

/*let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(function(users) {
  return users.name;
});

alert(names); // John, Pete, Mary*/
