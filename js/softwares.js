function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = itemCount;
}

document.addEventListener('DOMContentLoaded', updateCartCount);

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'block';
    } else {
        document.getElementById('login-link').style.display = 'block';
        document.getElementById('profile-link').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkLoginState);

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1, image });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
    updateCartCount();
}

// Example event listeners for adding specific software items to the cart
document.getElementById('add-to-cart-windows11').addEventListener('click', function () {
    addToCart('Windows 11', 49.99, 'images/windows11.jpg');
});

document.getElementById('add-to-cart-zoom').addEventListener('click', function () {
    addToCart('Zoom', 99.99, 'C:\Users\seshi\source\repos\Software-Sales-Website\images\zoom.png');
});

// Add similar event listeners for other software items
document.getElementById('add-to-cart-gta6').addEventListener('click', function () {
    addToCart('GTA 6', 59.99, 'images/gta6.jpg');
});

document.getElementById('add-to-cart-office').addEventListener('click', function () {
    addToCart('Microsoft Office', 149.99, 'images/office.jpg');
});
