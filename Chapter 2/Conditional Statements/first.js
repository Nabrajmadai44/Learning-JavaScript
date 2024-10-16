// Conditional Statements
// To implement some condition in the code

// 1. if statement
/*
if ( condition ) {
    // If the condition is met, 
    //code  will get executed.
}
*/
let age = 16;

if (age >= 18) {
    console.log("you can vote");
}

if (age < 18 ) {
    console.log("you CANNOT vote");
}
 
//---------------------------------------

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
 if (mode === "light") {
    color = "white";
 }

console.log(color);


// if-else Statement
/*
if (condition1) {
    // Executes when condition1 is true
    if (condition2) {
        // Executes when condition2 is true
    }
} */

if ( mode === "dark-mode") {
    color = "black";
}
else {
    color = "white";
}

console.log(color)

//------------------------------------------

let Age = 16;

if (age >= 18) {
    console.log("vote");
}
else {
    console.log("not vote");
}


//-------------------------------------------

let num = 20;

if ( num % 2 === 0) {
    console.log(num, "is even");
}
else {
    console.log(num, "is odd");
}


// else-if Statement
/*
if (1st condition) {
    // Code for 1st condition
} else if (2nd condition) {
    // ode for 2nd condition
} else if (3rd condition) {
    // Code for 3rd condition
} else {
    //  ode that will execute if all 
    // above conditions are false
}
*/

let urAge = 22;
 if ( urAge < 18 ) {
    console.log("You are Junior");
 }
 else if ( urAge > 60 ) {
    console.log("Yor are Senior");
 }
 else {
    console.log("You are in Middle");
 }

 //---------------------------------------

 let urMode = "dark";
 let urColor;

 if ( urMode === "dark") {
    urColor = "black";
 }
 else if ( urMode === "blue") {
    urColor = "blue";
 }
 else if ( urMode === "white") {
    urColor = "white";
 }
 else {
    urColor = "yellow";
 }

 console.log(urColor);



// Switch Statement (JavaScript Switch Case)
/*
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    . . .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
};
*/

const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log("Student Branch name is :", Branch);

//----------------------------------------------

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday


// Using Ternary Operator ( ?: )
/* The conditional operator, also referred to as the ternary operator (?:),
 is a shortcut for expressing conditional statements in JavaScript.
 Syntax:
condition ? value if true : value if false */

let agee = 21;

const result =
    (agee >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);