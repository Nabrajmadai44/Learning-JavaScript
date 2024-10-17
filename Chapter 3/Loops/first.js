// Loops in JS
// Loops are used to execute a piece of code again and again.

// 1. for Loop
/*
A for loop in JavaScript repeatedly executes a block of code as long as a specified
condition is true. It includes initialization, condition checking, and iteration steps,
 making it efficient for controlled, repetitive tasks.

Syntax:

for (statement 1 ; statement 2 ; statement 3){
    code here...
}
*/

for (let i = 1; i <= 5; i++) {
    console.log("Love you Babe");
}

console.log("loop has ended");


// Calculate sum of 1 to 5

let sum = 0;
for (let i = 1; i <=5; i++) {
    sum = sum + i;
}
console.log("sum =", sum);

// Infinite Loop : A loop that never ends
// We should never do it in a program


// 2. while loop
/*
The while loop executes a block of code as long as a specified condition is true. In JavaScript,
this loop evaluates the condition before each iteration and continues running as long as the condition
remains true. The loop terminates when the condition becomes false, enabling dynamic and repeated operations
based on changing conditions.

Syntax

while (condition) {
    Code block to be executed
}
*/

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

//-----------------------------

let j = 10;
while ( j <=5) {
    console.log("fuck offff");
    j++;
}


// 3. do-while loop
/*
Syntax:

do {
    // Statements
}
while(conditions)
*/

let test = 1;
do {
    console.log(test);
    test++;
} while(test<=5);

//-----------------------

let i = 20;
do {
    console.log("fuck offff");
    i++
} while ( i <=5);


//-----------------------

let a = 1;
do {
    console.log("a =", a);
    a++
} while ( a <=5);


// 4. for-of Loop
/*
The for…of loop iterates over the values of an iterable objects(such as arrays, strings, maps, sets..),
 which is different from the for…in loop that iterates over the enumerable
properties of an object.

Syntax:
for ( variable of Iterable ) {
    // Code block to be executed
}
*/

let str ="JavaScript";

let size = 0;
for (let val of str) {
    // iterator -> characters
    console.log("val=", val);
    size++;
}
console.log("string size =", size); //10


// 5. for-in loop
/*
The JavaScript for-in loop iterates over the enumerable properties of an object, allowing you to access each key or property name in turn. It’s commonly used to traverse object properties but can also be used with arrays.

Syntax
for (let i in obj1) {
    // Prints all the keys in
    // obj1 on the console
    console.log(i);
}
*/

let student = {
    name: "Navya",
    age: 21,
    gpa: 3.90,
    isPass: true,
};

for ( let key in student) {
    console.log("key =", key, "value =", student [key]);
}