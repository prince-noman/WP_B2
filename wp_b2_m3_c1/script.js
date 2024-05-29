// variable, array, loops, conditions, function

// variable -> var, let, const

// Re-declare allowed & re-assign allowed
// var x;
// x=15;
// var x = 'Apple';
// console.log(x);

// Re-declare not allowed, but re-assign allowed
// let x = 5;
// let x = 10;
// x = true;
// console.log(x);


// Re-declare & re-assign not allowed
// const daysInWeek = 7;
// console.log(daysInWeek);


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


// JS DataTypes
//Number => 0-9, 1.5, -1.5
//String => "apple"
//Boolean => true, false
//BigInt 
//Undefined => undefined
// Null => null
// Symbol 
//Object - array, object, date

// let y = BigInt(123124432553453534346436346);
// console.log(y);

// Object Data Types

// Object
// const person ={
//     name: "John",
//     age: 30,
//     city: "New York",
//     hasChildren: false
// }
// const y = 5;

// console.log(person);
// console.log(person.age);
// console.log(person.name);
// console.log(person['name']);


// Concatenation
// console.log("My name is Prince");
// console.log("My name is " + person.name + " and I am " + person.age + " years old");
// `` (backticks) => template literal
// console.log(`My name is ${person.name} and I am ${person.age} years old`); 

// Array
// const fruits = ['apple', 'banana', 'orange'];s

// Slice
// console.log(fruits.slice(0, 2));

// Splice
// console.log(fruits);
// console.log(fruits.splice(1, 1));
// console.log(fruits);


// const person = ['John', 30, 'New York', false];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[0] = 'kiwi';
// console.log(fruits);

// Adding Elements to the end of array
// fruits.push('mango');
// console.log(fruits);

// Removing Elements from the end of array
// fruits.pop();
// console.log(fruits);

// Adding Elements to the beginning of array
// fruits.unshift('pineapple');
// console.log(fruits);

// Removing Elements from the beginning of array
// fruits.shift();
// console.log(fruits);

// Date 
// const date = new Date("2024-05-28")
// console.log(date);

// Checking variables type

// const fruitName = 'Apple';
// console.log(typeof fruitName);


// Operators
// Arithmetic +,-, *, / , %

// let x = 7
// let y = 3
// let result = x + y;
// let result = x - y;
// let result = x * y;
// let result = x / y;
// let result = x % y;

// console.log(result);

// Logical Operators || , && , !

// ||  T | T => T
// ||  T | F => T
// ||  F | T => T
// ||  F | F => F


// &&  T | T => T
// &&  T | F => F
// &&  F | T => F
// &&  F | F => F


// !  T => F
// !  F => T

// let x = true;
// let y = !x;
// console.log(y);


// Comparision Operators
// ==, !=, ===, !==, >, <, >=, <=

// let x = 5 <= 5;
// console.log(x);

// Conditions

// if(){

// }else if(){

// }else{

// }






// let age = 20;

// if (age >= 18) {
//     if(false){
//         console.log('Yes');
//     }else{
//         console.log('No');
//     }
//     console.log('You can vote');
// } else {
//     console.log("You can't vote");
// }

// let marks = 8;

// if (marks >= 90) {
//     console.log('A');
// } else if (marks >= 80) {
//     console.log('B');
// } else if (marks >= 70) {
//     console.log('C');
// } else if (marks >= 60) {
//     console.log('D');
// } else if (marks >= 50) {
//     console.log('E');
// } else {
//     console.log('F');
// }

// Ternary Operator

// let age = 2;

// age >= 18 ? console.log('You can vote') : console.log('You can\'t vote');

// Nullish Coalescing Operator

// const userInput = undefined
// const userName = userInput ?? 'Guest';
// console.log(userName);


// let marks = 95;

// switch (marks) {
//     case 100:
//         console.log('Perfect');
//         break;
//     case 90:
//         console.log('Excellent');
//         break;
//     case 80:
//         console.log('Good');
//         break;
//     default:
//         console.log('No such marks');
//         break;
// }


// Function

// let x = 5;
// let y = 10;
// let result = x +y;
// console.log(result);

// let a = 15;
// let b = 100;
// let sum = a +b;
// console.log(sum);

// Function Defination
// function add(x, y){
//     let sum = x + y;
//     return sum;
// }

// Calling
// console.log(add(10,20));

// let res1 = add(50,10)
// let res2 = add(80,30)
// console.log(res1);
// console.log(res2);

// function add(x, y){
//     let sum = x + y;
//     console.log(sum);
// }

// add(10,20);


// const scores = {
//     1 : 90,
//     2 : 80,
//     3 : 70
// }

// console.log(scores[10-9]);












