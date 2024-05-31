document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCart = () => {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item card mb-3';
            cartItem.innerHTML = `
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                    <p class="card-text">Quantity: <input type="number" class="form-control quantity" data-index="${index}" value="${item.quantity}" min="1"></p>
                    <button class="btn btn-danger remove-from-cart" data-index="${index}">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
    };

    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    cartItems.addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity')) {
            const index = event.target.getAttribute('data-index');
            const quantity = parseInt(event.target.value, 10);
            if (quantity > 0) {
                cart[index].quantity = quantity;
                updateCart();
            }
        }
    });

    document.getElementById('proceed-to -checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty.');
        } else {
            alert('Proceed to checkout.');
            // Add your checkout logic here
        }
    });

    renderCart();
    updateCartCount();
});