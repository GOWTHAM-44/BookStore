function loadCart() {
    

    const itemsContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    let total = 0;
    itemsContainer.innerHTML = "";
  
    cart.forEach((book, index) => {
      total += book.price;
  
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div>
          <h4>${book.title}</h4>
          <p>₹${book.price}</p>
        </div>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      itemsContainer.appendChild(div);
    });
  
    totalPriceEl.textContent = total;
  }
  
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  function checkout() {
    alert("Thank you for your purchase! 😊");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  }
  
  loadCart();
  