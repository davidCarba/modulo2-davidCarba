/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 1

// let user = {
//   name: "John Smith",
//   age: 35
// };

// let user2 = JSON.stringify(user);
// user2 = JSON.parse(user2);
// console.log(user2);

//ejercicio 2

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     /*alert(`${key}: ${value}`);*/
//     return value == meetup && key != "" ? undefined : value;
//   })
// );

// /* result should be:
//   {
//     "title":"Conference",
//     "occupiedBy":[{"name":"John"},{"name":"Alice"}],
//     "place":{"number":23}
//   }
//   */

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
//   script => {
//     console.log(_); // function declared in the loaded script
//     console.log(_.chunk(["a", "b", "c", "d"], 2));
//     console.log(_.drop([1, 2, 3], 2));
//     console.log(_.multiply(6, 4));
//   }
// );
// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("Script load error: " + src));

//     document.head.append(script);
//   });
// }
// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/loktgchdash.js"
// );

// promise
//   .then(script => alert(`${script.src} is loaded!`))
//   .catch(error => alert(`Error: ${error.message}`));

// promise.then(script => alert("One more handler to do something else!"));
