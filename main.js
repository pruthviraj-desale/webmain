// Using var - function scoped
var x = 10;
console.log("Using var, x is initially:", x);
if (true) {
    var x = 20;
    console.log("Inside if block, x is:", x);
}
console.log("Outside if block, x is:", x);

// Using let - block scoped
let y = 30;
console.log("Using let, y is initially:", y);
if (true) {
    let y = 40;
    
    console.log("Inside if block, y is:", y);
}
console.log("Outside if block, y is:", y);

// Using const- block scoped
const z = 50;
console.log("Using const, z is initially:", z);
// Trying to reassign const will result in an error
// z = 60; // Uncommenting this line will throw an error