// if (something truthy) {
//   //do something
// } else if (something_else) {
//   //do something else
// } else {
//   //do something else
// }

// function greetMe(greeting, name) {
//   if (name === undefined) {
//     console.log(greeting + "BAMBOO.7")
//   } else {
//     console.log(greeting + name)
//   }
// }

function greetMe(greeting, name) {
  if (name === undefined) {
    console.log(greeting + "BAMBOO.7")
  } else {
    console.log(greeting + name)
  }
}

greetMe("Hello, ", "Gemma")


// ternary
//condition ? if true : if false

const temp = 54;
let isCold;
temp < 70 ? isCold = true : isCold = false;
console.log(isCold);

//! to coerce into boolean

const str = "Hello";
let bool = !!str;
console.log(bool);

const name = "Gemma";

switch(name) {
  case `Jasmine`:
  case `Mady`:
    console.log("Hi, Mady.");
    break;
  case `Gemma`:
    console.log("Hi, Gemma.");
    break;
  case `Billy`:
    console.log("Hi, Billy.");
    break;
  case `Wolf`:
    console.log("Hi, Wolf.");
    break;
  default:
    console.log("Hi, what's your name?")
    break;
}
