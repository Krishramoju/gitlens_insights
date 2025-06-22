
// mathUtils.js

// Adds two numbers
function add(a, b) {
  return a + b;
}

// Subtracts b from a
function subtract(a, b) {
  return a - b;
}

// Multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Divides a by b
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
