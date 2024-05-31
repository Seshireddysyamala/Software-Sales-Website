document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: <input type="number" class="item-quantity" data-index="${index}" value="${item.quantity}" min="1"></p>
                <button class="btn btn-danger remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
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

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    cartItemsContainer.addEventListener('change', (event) => {
        if (event.target.classList.contains('item-quantity')) {
            const index = event.target.getAttribute('data-index');
            const quantity = parseInt(event.target.value, 10);
            if (quantity > 0) {
                cart[index].quantity = quantity;
                updateCart();
            }
        }
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Add checkout logic here
    });

    renderCartItems();
    updateCartCount();
});