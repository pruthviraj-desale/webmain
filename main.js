/*// Math.floor: Rounds down to the nearest integer
console.log("Math.floor(3.7):", Math.floor(3.7));
console.log("Math.floor(-3.7):", Math.floor(-3.7));

// Math.ceil: Rounds up to the nearest integer
console.log("Math.ceil(3.2):", Math.ceil(3.2));
console.log("Math.ceil(-3.2):", Math.ceil(-3.2));

// Math.abs: Returns the absolute value of a number
console.log("Math.abs(-42):", Math.abs(-42));

// Math.random: Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random());

// To get a random integer between a specific range, you can use Math.floor with Math.random

let randomInt = Math.floor(Math.random() * (10));
console.log("Random integer between 1 and 10:", randomInt);*/


// let str = "pruthviraj";
// let len = str.length;
// let randomInt = Math.floor(Math.random()*(len));
// console.log(str.charAt(randomInt));

// // Alert dialog
// alert("This is an alert dialog!");

// // Confirm dialog
// let result = confirm("Do you want to proceed?");
// if (result === true) {
//     console.log("User clicked OK.");
// } else {
//     console.log("User clicked Cancel.");
// }

// // Prompt dialog
// let name = prompt("Please enter your name:", "John Doe");
// if (name !== null) {
//     console.log("Hello, " + name + "!");
// } else {
//     console.log("User clicked Cancel.");
// }


// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function call
greet("John");

// Function expression
let multiply = function(x, y) {
    return x * y;
};

// Function call
let result = multiply(3, 4);
console.log("Result of multiplication:", result);

// Arrow function
let subtract = (a, b) => {
    return a - b;
};

// Function call
let difference = subtract(7, 2);
console.log("Difference:", difference);