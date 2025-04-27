let products = [
  { id: 1, name: "Mobile", price: 8000, image: "images/mobile.jpg" },
  { id: 2, name: "Headphones", price: 1500, image: "images/headphones.jpg" }
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("productList");
  if (!productList) return;

  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="deleteProduct(${product.id})">Delete</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    alert(`${product.name} added to cart!`);
  }
}

function deleteProduct(productId) {
  products = products.filter(p => p.id !== productId);
  displayProducts();
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

displayProducts();
displayCart();
