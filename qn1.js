// Function 
function generateFibonacciUpTo(limit) {
    // Initializing the sequence with the first two Fibonacci numbers
    let fibSequence = [0, 1];
  
    // Calculating the next number in the sequence
    let nextNumber = fibSequence[0] + fibSequence[1];

    //generating numbers until the next number is greater than the limit
    while (nextNumber <= limit) {
      // Adding the next number to the sequence
      fibSequence.push(nextNumber);
  
      // Calculating the next Fibonacci number using the last two numbers in the sequence
      nextNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    }
  
    // Returning the full sequence up to the limit
    return fibSequence;
  }
  
  // Seting the limit for the Fibonacci sequence
  const limit = 100;
  
  // Generating the Fibonacci sequence up to the specified limit
  const fibonacciSequence = generateFibonacciUpTo(limit);
  
  // Printing the generated Fibonacci sequence to the console
  console.log(fibonacciSequence);