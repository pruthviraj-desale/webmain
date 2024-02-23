// Define a sample string
let str = "Hello, world!";

// Concatenation
let newStr = str.concat(" Welcome!");
console.log("Concatenated string:", newStr);

// Slice
let slicedStr = str.slice(7);
console.log("Sliced string:", slicedStr);

// toUpperCase
let upperCaseStr = str.toUpperCase();
console.log("Uppercase string:", upperCaseStr);

// Split
let words = str.split(" ");
console.log("Split string into words:", words);


// Length
console.log("Length of string:", str.length);

// charAt
console.log("Character at index 4:", str.charAt(4));

// startsWith
console.log("Does the string start with 'Hello'?", str.startsWith("Hello"));

// endsWith
console.log("Does the string end with 'world!'?", str.endsWith("world!"));

// includes
console.log("Does the string include 'world'?", str.includes("world"));

// Replace
let replacedStr = str.replace("world", "planet");
console.log("String with 'world' replaced:", replacedStr);