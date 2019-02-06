/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("runs after 3 seconds"));

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("Script load error: " + src));

//     document.head.append(script);
//   });
// }

// loadScript("./one.js")
//   .then(function(script) {
//     return loadScript("./two.js");
//   })
//   .then(function(script) {
//     return loadScript("./three.js");
//   })
//   .then(function(script) {
//     one();
//     two();
//     three();
//   });

// function mayor10(num) {
//   return new Promise(function(resolve, reject) {
//     if (num > 10) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }
// mayor10(11)
//   .then(result => {
//     alert("bueno");
//   })
//   .catch(err => {
//     alert("malo");
//   });

//Escribir dos funciones que usen promesas que puedas encadenar.
// La primera función pasarAMayus() que tomará un array de palabras y
// las pondrá en mayúsculas y la segunda función ordenarPalabras() que las ordenará alfabéticamente.
// Si el array contiene datos que no son strings debería lanzar un error.

// let newArr = [];

// function pasarAMayus(array) {
// return new Promise(function(resolve, reject) {
//   for (let value of array) {
//     if (value != "number") {
//       value = value.toUpperCase();
//       newArr.push(value);
//     } else {
//       reject();
//     }
//     resolve(newArr);
//   }
// });
// }

// function ordenarPalabras(newArr) {
// return new Promise(function(resolve, reject) {
//   newArr[0] = "JUAN";
//   resolve(newArr);
// });
// }

// pasarAMayus(["pepito", "pablo"])
// .then(result => {
//   ordenarPalabras(result)
//     .then(result => {
//       alert(result);
//     })
//     .catch(err => {
//       console.log("Error");
//     });
// })
// .catch(err => {
//   console.log("Error");
// });
