// Function 
function capitalizeWords(str) {
  return str
    .split(' ')                  // Spliting the string into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalizing the first letter
    .join(' ');                  // Joining words back into a string
}

// Reading input from the console (Node.js environment)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input) => {
  const result = capitalizeWords(input);  // Capitalizing words in the input string
  console.log(result);                    // Outputing the result

  rl.close();
});