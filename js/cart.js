document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
    updateCartCount();
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('${ name } added to cart!');
    updateCartCount();
}

function removeFromCart(name) {
    if (confirm('Are you sure you want to remove this item from the cart?')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.name !== name);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('${ name } removed from cart!');
        updateCartCount();
        displayCartItems();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = itemCount;
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });
}