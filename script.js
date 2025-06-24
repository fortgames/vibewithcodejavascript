// Fibonacci Sequence (qn1.js)
function generateFibonacciUpTo(limit) {
    let fibSequence = [0, 1];
    let nextNumber = fibSequence[0] + fibSequence[1];
  
    while (nextNumber <= limit) {
      fibSequence.push(nextNumber);
      nextNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    }
  
    return fibSequence;
  }
  
  // Check Power of Two (qn2.js)
  function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
  }
  
  // Capitalize Words (qn3.js)
  function capitalizeString(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Guessing Game (qn4.js)
  function guessingGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let previousGuess = null;
    const gameOutput = document.getElementById('gameOutput');
    gameOutput.textContent = "";
    const rl = require('readline');
  
    const input = document.createElement('input');
    const btn = document.createElement('button');
    btn.innerText = "Guess";
    const appendContainer = document.getElementById('gameActions');
  
    btn.onclick = () => {
      const guess = parseInt(input.value);
      attempts++;
      displayResult(guess, attempts, previousGuess);
      previousGuess = guess;
    };
  
    let displayResult = (guess, attempts, previousGuess) => {
      if (guess < 1 || guess > 100) {
        gameOutput.innerHTML += "OUT OF BOUNDS<br>";
      } else if (guess === targetNumber) {
        gameOutput.innerHTML += `Congratulations! You've guessed the correct number ${targetNumber} in ${attempts} attempts!<br>`;
        appendContainer.removeChild(input);
        appendContainer.removeChild(btn);
      } else {
        const distance = Math.abs(targetNumber - guess);
        if (attempts === 1) {
          if (distance <= 10) {
            gameOutput.innerHTML += "WARM!<br>";
          } else {
            gameOutput.innerHTML += "COLD!<br>";
          }
        } else {
          const previousDistance = Math.abs(targetNumber - previousGuess);
          if (distance < previousDistance) {
            gameOutput.innerHTML += "WARMER!<br>";
          } else {
            gameOutput.innerHTML += "COLDER!<br>";
          }
        }
      }
    };
  
    appendContainer.appendChild(input);
    appendContainer.appendChild(btn);
  }
  
  // Shopping Cart (qn5.js)
  class ShoppingCart {
    calculate_total(products) {
      let totalBeforeDiscount = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
      }, 0);
  
      let totalAfterDiscount;
      if (totalBeforeDiscount > 100) {
        totalAfterDiscount = totalBeforeDiscount * 0.9;
      } else {
        totalAfterDiscount = totalBeforeDiscount;
      }
  
      const finalTotal = totalAfterDiscount * 1.08;
      return finalTotal.toFixed(2);
    }
  }
  
  // Payroll Calculation (qn6.js)
  class Payroll {
    calculate_employee_pay(baseSalary, hoursWorked) {
      const hourlyRate = baseSalary / 52 / 40;
      let grossPay;
  
      if (hoursWorked > 40) {
        const regularHours = 40;
        const overtimeHours = hoursWorked - 40;
        grossPay = (regularHours * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
      } else {
        grossPay = hoursWorked * hourlyRate;
      }
  
      let tax;
      if (grossPay <= 500) {
        tax = grossPay * 0.10;
      } else if (grossPay <= 1000) {
        tax = (500 * 0.10) + ((grossPay - 500) * 0.20);
      } else {
        tax = (500 * 0.10) + (500 * 0.20) + ((grossPay - 1000) * 0.30);
      }
  
      const socialSecurity = grossPay * 0.062;
      const netPay = grossPay - tax - socialSecurity;
  
      return {
        grossPay: grossPay.toFixed(2),
        tax: tax.toFixed(2),
        socialSecurity: socialSecurity.toFixed(2),
        netPay: netPay.toFixed(2)
      };
    }
  }
  
  // Event handler functions to execute scripts when triggered from HTML
  function generateFibonacci() {
    const fibResultDiv = document.getElementById('fibResult');
    const fibSequence = generateFibonacciUpTo(100);
    fibResultDiv.textContent = 'Fibonacci Sequence: ' + fibSequence.join(', ');
  }
  
  function checkPowerOfTwo() {
    const input = parseInt(document.getElementById('powerOfTwoInput').value);
    const result = isPowerOfTwo(input);
    const powerOfTwoResultDiv = document.getElementById('powerOfTwoResult');
    powerOfTwoResultDiv.textContent = `Result: ${result}`;
  }
  
  function capitalizeWords() {
    const input = document.getElementById('capitalizeInput').value;
    const result = capitalizeString(input);
    const capitalizeResultDiv = document.getElementById('capitalizeResult');
    capitalizeResultDiv.textContent = `Result: ${result}`;
  }
  
  function calculateShoppingCart() {
    const input = JSON.parse(document.getElementById('shoppingCartInput').value);
    const cart = new ShoppingCart();
    const result = cart.calculate_total(input);
    const shoppingCartResultDiv = document.getElementById('shoppingCartResult');
    shoppingCartResultDiv.textContent = `Total: $${result}`;
  }
  
  function calculatePayroll() {
    const baseSalary = parseFloat(document.getElementById('baseSalaryInput').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorkedInput').value);
    const payroll = new Payroll();
    const result = payroll.calculate_employee_pay(baseSalary, hoursWorked);
    const payrollResultDiv = document.getElementById('payrollResult');
    payrollResultDiv.textContent = `Gross Pay: $${result.grossPay}, Tax: $${result.tax}, Social Security: $${result.socialSecurity}, Net Pay: $${result.netPay}`;
  }