// In this session I learn  about console, Variables, datatypes , comments in js..etc


// console.log is used to log (print) a message to the console
console.log("Hello! Coders");
console.log("Nabraj Madai");
console.log("I love JavaScript")
console.log("Hello World! I Don't Give a Bug")

// Variables
// variables are containers for data
/*Rules for variables 
These are case-sensitive
Can only begin with a letter, underscore(“_”) or “$” symbol
It can contain letters, numbers, underscore, or “$” symbol
A variable name cannot be a reserved keyword
*/
// here age , name, price, x, y.. are variables

age = 24;
name = "Nabraj";
price = 23.2;
console.log(age, name, price);

x = null;
console.log(x);

y = undefined;
console.log(y);

isFollow = true;
console.log(isFollow);


// let, const & var
//var: variables can be re-declared and updated. A global scope variable.
// let: variables cannot be re-declared but can be updated. A block scope variable.
//const: variables cannot be re-declared or updated. A block scope variable.
// we do not use var in javascript as a goodprogrammer

{
    let a = 5;
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}

const PI = 3.14;
console.log(PI)




// JavaScript data Types

/* JavaScript data types are categorized into two parts i.e. primitive and non-primitive types.
The primitive data types include Number, String, Boolean, Null, Undefined, and Symbol. 
Non-primitive types include Object, Array, and Function. */

/* 1. Number
The Number data type represents both integer and floating-point numbers.

The Number data type contains both integer and floating-point numbers. JavaScript does not distinguish between integers and floats. Some special numbers in JavaScript are: ‘Infinity’, ‘-Infinity’, and ‘NaN’. The ‘NaN’ denotes a computational error.

let num = 2;       // Integer 
let num2 = 1.3;     // Floating point number
let num3 = Infinity;      // Infinity
let num4 = 'something here too'/2;     // NaN
2. String
A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in Javascript, which are:

let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;
There’s no difference between ‘single’ and “double” quotes in JavaScript. Backticks provide extra functionality as with their help of them we can embed variables inside them.

let name = "Nabraj";          // embed a variable
alert( `Hello, ${name}!` );   // Hello, Nabraj!
3. Boolean
The boolean type has only two values i.e. true and false.

let isCoding = true;
let isOld = false;
4. NULL
The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value.

let age = null;
The ‘null’ data type defines a special value that represents nothing, or empty value.

5. Undefined
A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.

let x;      // x is declared but not defined
console.log(x);  // Output: undefined
6. Symbol (Introduced in ES6)
Symbols are new primitive data types introduced as part of ES6. A Symbol is a unique and immutable primitive value that is used as an identifier for object properties. Symbols are primarily used for creating unique property keys in objects, ensuring there are no conflicts with other properties.

let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")
  
// Each time Symbol() method 
// is used to create new global Symbol
console.log(symbol1 == symbol2); // False (because symbols are always unique)
7. BigInt (Introduced in ES2020)
BigInt is a built-in object that provides a way to represent whole numbers greater than 253. The largest number that JavaScript can reliably represent with the Number primitive is 253, which is represented by the MAX_SAFE_INTEGER constant.

let bigBin = BigInt("0b1010101001010101001111111111111111");
// 11430854655n
console.log(bigBin);
JavaScript Non-Primitive Data Types Examples
1. Object
JavaScript objects are fundamental data structures used to store collections of data. They consist of key-value pairs and can be created using curly braces {} or the new keyword. Understanding objects is crucial, as everything in JavaScript is essentially an object.

Object Creation

Using the “object constructor” syntax

let person = new Object(); 
Using the “object literal” syntax

let person = {}; 
Both these methods are correct, though it’s totally your call what to choose. We can also put properties inside an Object.

2. Arrays
An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.

let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", { name: "Object" }, [3, 4, 5]]; */


// Practice Question

const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270
};

console.log(product);

const profile = {
    userName : "Nabraj_Madai",
    post : 432,
    isFollow : false,
    followers : 345,
    following : 543,
    bio : "Web developer"
};

console.log(profile);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["userName"]);
console.log(typeof profile["bio"]);
console.log(typeof profile["post"]);
console.log(typeof profile["following"])