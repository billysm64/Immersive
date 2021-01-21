// // arrays can contain functions, and other arrays
//
// (function() {
//   'use strict'; //strict triggered by this;
//   let cat = {
//     name : "Bertie",
//     breed : "Cymric",
//     color : "white",
//     greeting : function() {
//       console.log(`Hello, said ${this.name}.`);
//   };
// })();
//
// cat.greeting();
//
// //reduce functions
//
// const sum2 = arr => arr.reduce((acc, i) => acc + 1);
//
// const sum3 = arr.reduce(function(acc, i) {
//   return acc + i;
// });

console.log("Hey");

const heading = document.querySelector("h2");

heading.textContent = "Hey, Sally!";
console.log(heading.innerHTML);

heading.classList.add('heading-three')

//add elements to dom

const div = document.createElement("div");
div.textContent = "Hey, again!";
div.classList.add('second-greeting')

document.body.appendChild(div)

//to add many elements
const html = `
  <heading>
    <h1>heading here</h1>
    <p>Hey, everyone!</p>
  </heading>
`;

console.log(html)

document.body.innerHTML += html

let elements = document.querySelector(".heading"); //only gives the first node of that name
elements = document.querySelectorAll(".heading"); //gives ALL nodes of that name

const button = document.querySelector("button");
function handleClick() {
  alert("You clicked the button.");
}
button.addEventListener('click', handleClick);
