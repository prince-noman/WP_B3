//variable, array, loop, condition, function

//Variable -> var, let, const

// var number = 5;
// console.log(number);

//Variable Naming Convention
// letters, digits, underscore, dollar sign
// must start with letter
// can start with dollar sign or underscore sign
// case sensitive => x and X are different
// cannot use reserved keywords => const let = 5, const function = "addition"

// cases
// camelCase => daysInWeek => JS
// snake_case => days_in_week => Python
// kebab-case => days-in-week
// PascalCase => DaysInWeek => C#

// var -> function scoped  / Global
// let -> blocked Scoped / Local
// const -> blocked Scoped / Local

// Re-declare & Re-assign allowed
// var fruit = "banana";
// console.log(fruit);
// var fruit = "Mango";
// console.log(fruit);

// Re-declare not allowed but re-assign allowed
// let fruit = "banana";
// console.log(fruit);

// let fruitOne = "mango";
// fruit = "Mango";
// console.log(fruit);
// console.log(fruitOne);

// Re-delcare and re-assign not allowed

// const daysInWeek = 7;
// daysInWeek = 6;
// const daysInWeek = 5;
// console.log(daysInWeek);

// Data Types
//-> Primitive Data Type
// String -> "Hello"  "CSS dsfasdasdsadsadsa"
// Number -> 1,2,3,4,5,6,7...... , 11200
// Boolean -> true/false
// Null
// Undefined

//-> Non-Primitive Data Type
// Array -> [1,2,3,4,5, "banana", {name: "X", age: "25"}]
// Object -> {name: "X", age: "25"}

// let name = "X";
// let number = 2;
// let name = null;
// name = '-------'

// let name;
// console.log(name);

// console.log(typeof name);
// console.log(typeof number);

// Operators - (Arithmetic, Logical, Ternary, Null Coalescing, Short circuiting)

// Arithmetic (+, -, *, /, %)
// const n1 = 5;
// const n2 = 2;
// const sum = n1 + n2;
// console.log(sum);

// const n1 = 5;
// const n2 = 2;
// const result = n1 - n2;
// console.log(result);

// const n1 = 5;
// const n2 = 2;
// const result = n1 * n2;
// console.log(result);

// const n1 = 5;
// const n2 = 2;
// const result = n1 / n2;
// console.log(result);

// const n1 = 5;
// const n2 = 2;
// const result = n1 % n2;
// console.log(result);

// Logical Operators (||, &&, !)

// || -> OR
//  T | T -> T
//  T | F -> T
//  F | T -> T
//  F | F -> F

// && -> AND
//  T | T -> T
//  T | F -> F
//  F | T -> F
//  F | F -> F

// ! -> NOT
//  T -> F
//  F -> T
// const isActive = true;
// const pending = true;

// console.log(isActive || pending);
// console.log(isActive && pending);
// console.log(isActive);
// console.log(!isActive);

// Comparision Operator (>,<,>=,<=,==,===,!=,!==) => T/F
// const n1 = 10;
// const n2 = "10";
// const result = n1 === n2;
// console.log(result);

// Control Structure (Conditions & Loops)

// Conditions (if else, switch)

// const age = 20;

// if(){

// }else if(){

// }else if(){

// }else{

// }
// if (age >= 18) {
//   console.log("You can vote");
//   if (age >= 21) {
//     console.log("You are above 21");
//   }
// } else {
//   console.log("You cannot vote");
// }

// let marks = 50;

// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 80) {
//   console.log("B");
// } else if (marks >= 70) {
//   console.log("C");
// } else if (marks >= 60) {
//   console.log("D");
// } else if (marks >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// Ternary Operator
//  condition ? true : false

// const age = 2;
// if (age >= 18) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// age >= 18 ? console.log("Yes") : console.log("No");

// Null Coleasing Operator
// const name = null;
// const userName = name ?? "Guest";
// console.log(userName);

// let day = 8;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("No Day");
// }

// let number = 25;

// switch (true) {
//   case number < 10:
//     console.log("The number is less than 10.");
//     break;
//   case number >= 10 && number <= 20:
//     console.log("The number is between 10 and 20.");
//     break;
//   case number > 20 && number <= 30:
//     console.log("The number is between 21 and 30.");
//     break;
//   default:
//     console.log("The number is greater than 30.");
//     break;
// }

// Function
// 5,6
// const n1 = 5;
// const n2 = 6;
// const sum = n1 + n2;
// console.log(sum);

//10,20
// const n1 = 10;
// const n2 = 10;
// const sum = n1 + n2;
// console.log(sum);

// function functionName(){

// }

// Function Declaration
// function sum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }

// Function Call
// const x = 10;
// const y =70;
// const result = sum(x, y);
// const result = sum(10, 20);
// console.log(result);

// const result2 = sum(100, 200);
// console.log(result2);
