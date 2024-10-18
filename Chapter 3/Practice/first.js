// Qs1. Print all numbers from 0 to 100

for (let num = 0; num <= 100; num++) {
    console.log("num =", num);
}


// Qs2. Print all even numbers from 0 to 100


for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("Even num =", num);
    }
}


// Qs3. Print all odd numbers from 0 to 100

for (let num = 0; num <= 100; num++) {
    if (num % 2 !== 0) {
        // console.log("Odd num =", num);
        console.log(`odd number are ${num}`)
    }
}


/* Qs4. Create a game where you start with any random game number.
ASk the user to keep guessing the game number number untill the user until the use enters correct value */


let gameNum = 44;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number, Guess again : ");
}
console.log("Congratulation, you entered the right number.");




/* Qs5. Prompt the user to enter their full name. Generate a username for them based on the input. 
Start username with @, followed by their full name and ending with the fullname length. */


let fullName = prompt("Enter your fullname without Spaces");

let userName = "@" + fullName + fullName.length;
console.log(userName);
