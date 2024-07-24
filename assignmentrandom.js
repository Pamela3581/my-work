//JGenerate an array of 60 random numbers
let numbers = [];
for (let i = 0; i < 60; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}

// Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);

// Check if some numbers are even
let someEven = numbers.some(num => num % 2 === 0);

// Calculate the sum of the numbers
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Return the results
console.log("Numbers:", numbers);
console.log("All even:", allEven);
console.log("Some even:", someEven);
console.log("Sum:", sum);
