// Function to check if a number is a power of two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// Read input from the console (Node.js environment)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an integer: ', (input) => {
  const num = parseInt(input, 10);

  // Checking if the input number is a power of two and log the result (true/false)
  const result = isPowerOfTwo(num);
  console.log(result);

  rl.close();
});