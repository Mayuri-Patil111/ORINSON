// script.js

// Function to apply discount and update the price
function applyDiscount(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice.toFixed(2); // Return the price with discount, rounded to 2 decimal places
}

// Update the price in the DOM based on the discount
function updatePrice() {
    const originalPrice = 14.99;  // Original price of the nail paint
    const discount = 20;  // 20% discount

    // Calculate the price after discount
    const finalPrice = applyDiscount(originalPrice, discount);

    // Update the price in the DOM
    const priceElement = document.querySelector('.price');
    priceElement.textContent = `$${finalPrice}`;  // Update the price with discount
}

// Handle Buy Now button click event
function handleBuyNow() {
    const button = document.getElementById('buyNow');
    button.addEventListener('click', function() {
        alert('Thank you for your purchase! Your nail paint will be shipped soon.');
    });
}

// Initialize the page
function initializePage() {
    updatePrice();  // Update the price with discount
    handleBuyNow(); // Set up the event listener for the Buy Now button
}

// Call the initializePage function once the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);
