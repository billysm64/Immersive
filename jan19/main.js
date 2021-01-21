//string number null undefined boolean symbol

let pet = "cat";
console.log(pet);

console.log(pet.charAt(1));

//strings are unmutable
//pet[0] = "r" does not work

const person = new Object({ //you can make an object this way
  name: "Sally",
  isCool: true,
});

const age = 20;

const person_two = {
  name: "Sally",
  'is cool': 'true', //string can be used as a key
  age, //You can set "age" before, shorthand
};

console.log(person_two["is cool"]) //to call a string key

const student = {
  name: "Gemma",
  age: 21,
  greeting: function() { //this is a method of an object that we can create!
    console.log(`Hi, I'm ${this.name}`)
  },
  pet: {
    name: 'Wolf',
    greeting: function() {
      console.log("Meowww!");
    },
  }
};

student.greeting();

student.age = 22;
student.pet = "Wolf"; //add property

// delete student.pet //delete property

student.pet.greeting()
// student.address.street //TypeError: Cannot read property "street" of undefined
student.address?.street //check to see if address exists, much newer, added 2020


const emptyArray = [];
const moviesArray = ["Safety Last!", "The Man on the Box", "The Squaw Man"];

moviesArray.push("Little Annie Rooney");
moviesArray[3] = "Isn't Life Wonderful";

moviesArray.length
moviesArray.push() //add to end
moviesArray.pop() // delete from end
moviesArray.unshift() // add to beginning
moviesArray.shift() // delete from beginning
moviesArray.reverse() // reverse array
const reverse = animals.slice().reverse() // reverse ON ITS OWN changes the original list, so this is a trick to clone a new list for reverse

let x = Array.isArray([]) //check if array
