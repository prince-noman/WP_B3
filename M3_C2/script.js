/*
function greet(name) {
  //   return "My Name is " + name;
  return `My Name is ${name}`;
}

console.log(greet("Prince"));
console.log(greet("John"));
*/

// Array
// const fruits = ["Apple", "Mango", "Banana", "Orange"];

// Adding element at the end
// fruits.push("Banana");

// Removing element from the end
// fruits.pop()

// Adding element at the start
// console.log(fruits);
// fruits.unshift("Grapes");
// console.log(fruits);

// Removing element from the start
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// Adding or Removing element at any position

// console.log(fruits);
// console.log(fruits[3]);
// fruits.push("X");
// fruits.push("Y");
// fruits.push("Z");
// console.log(fruits);

// const lastIndex = fruits.length - 1;
// const lastElement = fruits[lastIndex];
// console.log(lastElement);
// Removing
// console.log(fruits);
// fruits.splice(2, 1);
// console.log(fruits);

// Adding
// console.log(fruits);
// fruits.splice(0, 0, "X", "Y", "Z");
// console.log(fruits);

// Slice
// console.log(fruits);
// const newFruits = fruits.slice(1, 3);
// newFruits.push("Y");
// console.log(newFruits);

// console.log(fruits);

// Object

// const person = {
//   name: "Prince",
//   age: 21,
//   greet: function () {
//     console.log(`My Name is ${this.name}`);
//   },
// };

// console.log(person.name);
// console.log(person.age);
// person.greet();

// Loops -> for, while, do while, for in, for of
// 1->5
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 4);

// for in -> object
// const person = {
//   name: "Prince",
//   age: 21,
//   email: "prince@gamil.com",
// };
// console.log(person.name);
// console.log(person["name"]);
// for (const key in person) {
//   console.log(person[key]);
// }

// for of -> array
// const fruits = ["Apple", "Mango", "Banana", "Orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// array destructuring
// const friends = ["John", "Jane", "Bob"];
// const firstFriend = friends[0];
// const secondFriend = friends[1];
// const thirdFriend = friends[2];
// const [firstFriend, , thirdFriend] = friends;
// console.log(firstFriend);
// console.log(secondFriend);
// console.log(thirdFriend);

// object destructuring

// const person = {
//   name: "Prince",
//   age: 21,
//   email: "prince@gamil.com",
// };
// const { name, age } = person;
// console.log(person.name);
// console.log(person.age);
// console.log(person.email);
// console.log(name);
// console.log(age);

// function add(x, y) {
//   return x + y;
// }

// const sum = (x, y) => {
//   return x + y;
// };
// const sum2 = (x, y) => x + y;
// console.log(sum2(1, 2));
