document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <label for="quantity-${index}">Quantity:</label>
                    <input type="number" id="quantity-${index}" class="quantity" value="${item.quantity}" min="1" data-index="${index}">
                    <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    cartItems.addEventListener('change', (event) => {
        if (event.target.classList.contains('quantity')) {
            const index = event.target.getAttribute('data-index');
            const quantity = parseInt(event.target.value, 10);
            if (quantity > 0) {
                cart[index].quantity = quantity;
                updateCart();
            }
        }
    });

    document.getElementById('proceed-to-checkout').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    renderCartItems();
    updateCartCount();
});