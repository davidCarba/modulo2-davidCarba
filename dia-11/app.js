/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 1

/*function camelize(str) {
  return str
    .split("-")
    .map((word, index) => index == 0 
    ? word : word[0].toUpperCase() + word.slice(1)
    )
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

alert(camelize("cara-de-sapo"));

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

alert(arr); // 5,3,8,1 (not modified)

/*return arr.filter(item => (a <= item && item <= b));*/

//ejercicio 4

/*let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);*/
