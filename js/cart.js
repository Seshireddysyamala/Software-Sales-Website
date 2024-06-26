document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.getElementById('cart-table-body');
    const cartCountElements = document.querySelectorAll('#cart-count');
    const checkoutButton = document.getElementById('checkout-button');
    const errorMessage = document.getElementById('error-message');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartTable.innerHTML = '';
        if (cart.length === 0) {
            cartTable.innerHTML = '<tr><td colspan="5" class="text-center">Your cart is empty</td></tr>';
            checkoutButton.style.display = 'none';
        } else {
            checkoutButton.style.display = 'inline-block';
            cart.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td><input type="number" class="form-control item-quantity" data-index="${index}" value="${item.quantity}" min="1"></td>
                    <td class="item-total">$${(item.price * item.quantity).toFixed(2)}</td>
                    <td><button class="btn btn-danger remove-item" data-index="${index}">Remove</button></td>
                `;
                cartTable.appendChild(row);
            });
        }
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
        calculateTotal();
    };

    const updateCartCount = () => {
        const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
        cartCountElements.forEach(el => el.textContent = itemCount);
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => total += item.price * item.quantity);
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    };

    cartTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            const confirmation = confirm("Are you sure you want to remove this item from the cart?");
            if (confirmation) {
                removeItemFromCart(parseInt(index));
            }
        }
    });

    cartTable.addEventListener('input', (event) => {
        if (event.target.classList.contains('item-quantity')) {
            const index = parseInt(event.target.getAttribute('data-index'), 10);
            cart[index].quantity = parseInt(event.target.value, 10) || 1;
            updateCart();
        }
    });

    document.getElementById('checkout-button').addEventListener('click', function (event) {
        proceedToCheckout();
    });

    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
            checkLoginState();
            updateCartCount();
        })
        .catch(error => console.error('Error loading menu:', error));

    renderCartItems();
    updateCartCount();
    calculateTotal();
});

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (cart.length === 0) {
        errorMessage.textContent = 'Your cart is empty.';
        errorMessage.style.display = 'block';
    } else if (!isLoggedIn) {
        localStorage.setItem('redirectAfterLogin', 'cart.html');
        window.location.href = 'login.html';
    } else {
        document.getElementById('constructionModal').style.display = 'block';
    }
}

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

function closeModal() {
    document.getElementById('constructionModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
            checkLoginState();
            updateCartCount();
        })
        .catch(error => console.error('Error loading menu:', error));
});

function removeItemFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
    calculateTotal();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = itemCount);
}

function renderCartItems() {
    const cartTable = document.getElementById('cart-table-body');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartTable.innerHTML = '';
    if (cart.length === 0) {
        cartTable.innerHTML = '<tr><td colspan="5" class="text-center">Your cart is empty</td></tr>';
        document.getElementById('checkout-button').style.display = 'none';
    } else {
        document.getElementById('checkout-button').style.display = 'inline-block';
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" class="form-control item-quantity" data-index="${index}" value="${item.quantity}" min="1"></td>
                <td class="item-total">$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="btn btn-danger remove-item" data-index="${index}">Remove</button></td>
            `;
            cartTable.appendChild(row);
        });
    }
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => total += item.price * item.quantity);
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartCount();
});
