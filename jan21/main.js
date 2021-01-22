const date = Date();
console.log(typeof(date)); //returns "string"

const date2 = new Date();
console.log(typeof(date2)); //returns "object"

const arr = new Array();
console.log(arr); //returns []

const obj = new Object();
console.log(obj); //returns {}

//Fundamental objects: Object, Function, Boolean,

const str = JSON.stringify({name: "Sally"}); //returns "{"name":"Sally"}"

const parser = JSON.parse(str); //returns {name: "Sally"}

function Cat() { //constructor functions should be capitalized
  console.log("Meow!");
}

const kepler = new Cat(); //creates an object of Dog

console.log(kepler);

//enter kepler.constructor in console to find out how it was constructed

//"this" targets the current object. If used in the console, the object target will be the Window object.

const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  console.log('target', event.target);
  console.log('current target', event.currentTarget);
  console.log('this', this);
});

const person = {
  name: "Henry",
  greeting: function() {
    console.log(`${this.greeting} says hi!`)
  }
}

person.greeting()

//When we call a method against an object, the value of `this` is the object.

// function Dog() {
//   console.log(this)
// }
//
// const harper = new Dog();

function Dog(name) {
  this.name = name; //create a property
}
//
// const harper = new Dog(); //created an instance of dog (see above function)
const loldog = new Dog('lol'); // is an instance of dog
console.log(loldog)


// ====PROTOTYPES==== //

function Dog2({name} = {}) {
  this.name = name;
  this.speaks = function() { //not function to every instance, to save memory, is better
    console.log("Woof!");
  }
}

function Dog3({name} = {}) {
  this.name = name;
}

Dog3.prototype.speaks = function() { // a prototype will go to ALL instances of Dog3. This is like a template on wikis
  console.log("Woof!");
}
