const products = [
    { name: "Tomatoes", price: 30 },
    { name: "Potatoes", price: 25 },
    { name: "Onions", price: 28 },
    { name: "Rice", price: 60 },
    { name: "Wheat", price: 45 },
    { name: "Apples", price: 120 },
    { name: "Bananas", price: 40 }
];

let cart = [];
let total = 0;

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalDisplay = document.getElementById("total");

/* Load Products */
products.forEach(p => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <h3>${p.name}</h3>
        <p>₹${p.price} / kg</p>
        <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    productList.appendChild(div);
});

/* Add to Cart */
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

/* Render Cart */
function renderCart() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    totalDisplay.textContent = "Total: ₹" + total;
}

/* Checkout */
function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully! Farmer will contact you.");
        cart = [];
        total = 0;
        renderCart();
    }
}

/* Search */
function searchProduct() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

/* Scroll */
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
