// Stirngs
// String is a sequence of characters used to represent text.

/* Create String
let str = "Apna College"

String length
    str.length


String Indices
    str[0],str[1],str[2]

*/

let str = "Apna College";

console.log(str.length);

console.log(str[2]);



// Template zliterals in JS
/*
You can create strings using Template Literals. Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.

Syntax:

let str = 'Template Litral String';
let newStr = `String created using ${str}`;
*/

let str1 = 'Template Litral String';
let newStr = `String created using ${str1}`;

//---------------------------

console.log(newStr);
let specialString = `This is a templete literal`
console.log(specialString);
console.log(typeof specialString);

//--------------------------------
 let obj = {
    item: "pen",
    price: 10,
 }
 
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

let output = `the cost of ${obj.item} is ${obj.price} rupees`; //template litral
console.log(output);


// String Interpolation
// To create strings by doing substitution of placeholders
// `string text ${expression}string text` 

let str2 = `This is templete literal ${4+5+6}`;
console.log(str2);


// Escape characters

console.log("Apna\nCollege");
console.log("Apna\tCollege");

let str3 = "Apna\nCollege";
console.log(str3.length); // 12 \n = 1 character



// String Methods/functions
//There are built-in functions to manipulate a string

// str.toUpperCase();
let str4 = "ApnaCollege"
let newStr1 = str.toUpperCase();
console.log(str4); //ApnaCollege
console.log(newStr1) // APNACOLLGE


// str.toLowerCase();
 let str5= "ApnaCollege"
 str5= str.toLowerCase();
 console.log(str5); // anpacollege


// str.trim() it removes whitespaces in starting and ending

let str6 = "     Apna  College     "
str6 = str.trim();
console.log(str6); // Apna College



// str.slice(start,end?)  //returns part of string

let str7 = "0123456789"
console.log(str7.slice(3,7)); // 3456

// str1.concat(str) // joins str2 with str1

let str8 = ("apna");
let str9 = ("collge");
 let newStrr = str8.concat(str9);
 console.log(newStrr);


// str.replace(searchval,newVal)

let strr = "Hello";

console.log(strr.replace("H", "Y"));

// str.charAT( idx )

let strr1 = "ILoveJS";

console.log(strr1.charAt(3)); // output: v