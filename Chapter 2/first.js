// Operators in JS
// Used to perform some operation on data

// Arithmetic Operators

let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b); // Addition
console.log("a - b = ", a - b); // Subtraction
console.log("a * b = ", a * b); // Multiplication
console.log("a / b = ", a / b); // Division
console.log("a % b = ", a % b); // Modulus
console.log("a ** b = ", a ** b); // Exponentiation


// Unary Operators
// Increment Operator
a++;
console.log("a = ", a);

console.log("++a = ", ++a); //pre increment
console.log("a++ = ", a++); //post increment

// Decrement Operator
a--;
console.log("a = ", a);

console.log("--a = ", --a); //pre increment
console.log("a-- = ", a--); //post increment


// Assignment Operators

let m = 15;
console.log("m =", m)
console.log("m +=", m+= 10 );
console.log("m -= ", m-= 10 );
console.log("m *=", m*= 10 );
console.log("m /=", m/= 10 );
console.log("m %=", m%= 10 );
console.log("m **=", m**= 10 );


// Comparasion Operators

let c = 5;
let d = 2;

// equal to ==
console.log("5 == 2", c == d); // false

// not equal to !=
console.log("5 != 2", c!=d); // true

// equal to & type ===
console.log("5 === 2", c == d); // false

// not equal to & type !==
console.log("5 !== 2", c == d); 


// Logical Operators
 let e = 6;
 let f = 5;

 // Logical AND &&
 let cond1 = e > b; // true
 let cond2 = e === 6; // true
 console.log("cond1 && cond2 = ", cond1 && cond2);

 let cond3 = e < b; // false
 let cond4 = e === 6; // true
 console.log("cond3 && cond4 = ", cond3 && cond4);

// Logical OR ||

console.log("cond1 && cond2 = ", e < f || e === 6); //true
console.log("cond1 && cond2 = ", e < f || e !== 6); //false

// Logical NOT !
console.log("!(6 < 5)", !(e < f)); // true
console.log("!(6 > 5)", !(e > f)); // false
