function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessingGame() {
  const targetNumber = getRandomInt(1, 100);
  let attempts = 0;
  let previousGuess = null;

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const promptGuess = () => {
    rl.question('Guess the number (1-100): ', (input) => {
      const guess = parseInt(input, 10);
      attempts++;

      if (guess < 1 || guess > 100) {
        console.log("OUT OF BOUNDS");
      } else if (guess === targetNumber) {
        console.log(`Congratulations! You've guessed the correct number ${targetNumber} in ${attempts} attempts!`);
        rl.close();
      } else {
        const distance = Math.abs(targetNumber - guess);
        if (attempts === 1) {
          if (distance <= 10) {
            console.log("WARM!");
          } else {
            console.log("COLD!");
          }
        } else {
          const previousDistance = Math.abs(targetNumber - previousGuess);
          if (distance < previousDistance) {
            console.log("WARMER!");
          } else {
            console.log("COLDER!");
          }
        }
        previousGuess = guess;
        promptGuess();
      }
    });
  };

  console.log("Welcome to the Number Guessing Game!");
  console.log("Try to guess the number between 1 and 100.");
  promptGuess();
}

guessingGame();

