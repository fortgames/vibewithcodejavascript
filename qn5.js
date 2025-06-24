// Constructor function for ShoppingCart
function ShoppingCart() {
  // Applying the calculate_total method using map
  this.calculate_total = function(products) {
    // Calculate the total price before any discounts or taxes
    let totalBeforeDiscount = products.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0);

    // Apply a 10% discount if the total exceeds $100
    let totalAfterDiscount;
    if (totalBeforeDiscount > 100) {
      totalAfterDiscount = totalBeforeDiscount * 0.9;
    } else {
      totalAfterDiscount = totalBeforeDiscount;
    }

    // Apply an 8% sales tax to the final amount
    const finalTotal = totalAfterDiscount * 1.08;

    return finalTotal.toFixed(2); // Return the total rounded to two decimal places
  }
}

// Example usage:
// Products array with items containing price and quantity
const products = [
  { price: 20, quantity: 4 },
  { price: 30, quantity: 2 },
  { price: 10, quantity: 10 }
];

const cart = new ShoppingCart();
const total = cart.calculate_total(products);

console.log(`Total: USD ${total}`);

