// Load cart items and calculate total price
function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
  
    let total = 0;
    cartItemsContainer.innerHTML = "";
  
    cart.forEach(book => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <p>${book.title} - ₹${book.price}</p>
      `;
      cartItemsContainer.appendChild(itemDiv);
      total += book.price;
    });
  
    totalPriceEl.textContent = total;
  }
  
  // Simulate payment processing
  function processPayment() {
    const name = document.getElementById("name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
  
    // Basic validation
    if (!name || !cardNumber || !expiry || !cvv) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Simulate successful payment (replace with actual API for real-world usage)
    alert("Payment Successful! Thank you for your purchase.");
    localStorage.removeItem("cart"); // Empty the cart after purchase
    window.location.href = "thank-you.html"; // Redirect to Thank You page
  }
  
  loadCart(); // Call this function to display the cart items
  