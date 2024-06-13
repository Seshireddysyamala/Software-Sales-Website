document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.getElementById('cart-table-body');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartTable.innerHTML = '';
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
        calculateTotal(); // Ensure the total is calculated whenever the cart is rendered
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
        calculateTotal();
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);
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
                cart.splice(index, 1);
                updateCart();
            }
        }
    });

    cartTable.addEventListener('input', (event) => {
        if (event.target.classList.contains('item-quantity')) {
            const index = event.target.getAttribute('data-index');
            cart[index].quantity = parseInt(event.target.value, 10) || 1;
            updateCart();
        }
    });

    renderCartItems();
    updateCartCount();
    calculateTotal();

    document.getElementById('checkout-button').addEventListener('click', function (event) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            event.preventDefault();
            window.location.href = 'login.html'; // Redirect to login page if not logged in
        } else {
            // Show the modal if logged in
            document.getElementById('constructionModal').style.display = 'block';
        }
    });
});

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('signup-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'block';
        document.getElementById('logout-link').style.display = 'block';
    } else {
        document.getElementById('login-link').style.display = 'block';
        document.getElementById('signup-link').style.display = 'block';
        document.getElementById('profile-link').style.display = 'none';
        document.getElementById('logout-link').style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html'; // Redirect to the home page after logout
}
