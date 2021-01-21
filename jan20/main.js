//forEach();

[1, 2, 3].forEach(function(item){//foreach only takes a function CALL
  console.log(item);
});

const array = [1, 2, 3];
const copy = [];

array.forEach(function(item) {
  copy.push(item);
})

//map();

const plusTwo = [1, 2, 3].map(function(num) { //does the thing to each item in array, and puts it back in the array
  return num + 2;
})

const numbers = [1, 4, 9]
const roots = numbers.map(Math.sqrt); //.map just takes a function, not a function CALL

// filter()

[1, 2, 3].filter(function(num) { //only keep the numbers that meet the requirements specified
  return num > 2;
}) //get back 3

[1, 2, 4, 6].filter(num => num > 2); //fat arrow method

//reduce(), sometimes a little tricky

[1, 3, 5].reduce(function(acc, i) {
  return acc + i; // //1+3+5 = 9
}, 10); //add optional ", 10" for the starting value to be 10, i.e. 10+1+3+5

for (i = 0; i < 4; i+=2) {
  console.log("lol");
};

forlooplist = [1, 2, 3, 5, 4, 7];

for (let i of forlooplist) {
  console.log(i);
};

for (const [index, element] of forlooplist.entries()) {
  console.log(`index ${index} is ${element}`);
}

for (let i in forlooplist) {
  console.log(i);
};

let object = {a: 1, b: 2, c: 3};
object = "hey";

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
};
