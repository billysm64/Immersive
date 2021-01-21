function add(num1, num2) {
  if ((typeof num1 === "number") && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return "lol no";
  };
};

// const lol = add("lol", "ol");
// alert(lol)

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return true;
  }
}

alert(evenOrOdd(0));

//$20, 20% tip
// 20% of 60 = 60

// function calculateTip(bill, tipRate) {
//   //return tip amount, take for example 60+(60*(20/100)).
//   return bill + (bill * (tipRate / 100))
// }
//
// alert(calculateTip(20, 50))
//
// //functions are normally hoisted
//
// isItHoisted();
// function isItHoisted() {
//   console.log("It IS hoisted")
// }
//
// // var is is hoisted

//terminary

// const isHungry = "" ? "yes" : "no";
// alert(isHungry)

//IIFE - Immediately Invoked Function Expression - an anonymous function
// Some people wrap entire scripts in IIFEs, to limit scope

// (function(name) {
//   alert(`Hey, ${name}!`);
// })("Patrick");


//Arrow functions look like THIS! RGgghhhh!

// const sum = function sum1(num1, num2) {
//   return num1 + num2;
// }
//
// //is the same as
//
// //implicit return
//
// const sum = (num1, num2) => {
//   return num1 + num2;
// }
//
// //Shorten - not recommended
// //explicit return
//
// const sum = (num1, num2) => num1 + num2;
//
// const addTwo = (num) => {
//   return num + 2;
// }
//
// const addTwo = (num) => num + 2;
// const addTwo = num => num + 2;

let greeting = (name) => {
  name = "Patrick";
  alert(`Hello, ${name}!`);
}

greeting()

greeting = (name) => {
  name = "Lana";
  alert(`Hello, ${name}!`);
}

greeting()


const person = (name, favColor, pet) => {
  name = "Billy";
  favColor = "blue";
  pet = "Wolf";
  person_info = {
    name: `${name}`,
    favColor: `${favColor}`,
    pet: `${pet}`
  };
  return `My name is ${person_info.name}. My favorite color is ${person_info.favColor}. My pet's name is ${person_info.pet}.`
}

const person2 = (name, favColor, pet) => ({name: name, favColor: favColor, pet: pet});

alert(person())
