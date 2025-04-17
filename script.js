// Redirect if not logged in

const books = [
    { id: 1, title: "The Enchanted Garden", author: "L. Green", price: 299 },
    { id: 2, title: "Star Chronicles", author: "N. Vega", price: 450 },
    { id: 3, title: "Deep Forest Whispers", author: "A. Wilde", price: 275 },
    { id: 4, title: "Midnight Musings", author: "C. Poe", price: 320 },
    { id: 5, title: "Ocean’s Secret", author: "B. Marlowe", price: 399 },
    {
        id: 6,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 399
      },
      {
        id: 7,
        title: "Wings of Fire",
        author: "A.P.J Abdul Kalam",
        price: 299
      }
      
  ];
  
  let cart = [];
  
  
  function renderBooks(filter = "") {
    const list = document.getElementById("book-list");
    list.innerHTML = "";
  
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    );
  
    filteredBooks.forEach(book => {
      const div = document.createElement("div");
      div.className = "book";
      div.innerHTML = `
        <h3>${book.title}</h3>
        <p><em>${book.author}</em></p>
        <p>₹${book.price}</p>
        <button onclick="addToCart(${book.id})">Add to Cart</button>
      `;
      list.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const book = books.find(b => b.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`"${book.title}" added to cart!`);
  }
  
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  
  document.getElementById("search").addEventListener("input", (e) => {
    renderBooks(e.target.value);
  });
  
  renderBooks();
  updateCartCount();
  