document.addEventListener('DOMContentLoaded', () => {
    const cartItemsDiv = document.getElementById('cartItems');

    const loadCartItems = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsDiv.innerHTML = '';

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p>Your cart is empty</p>';
            return;
        }

        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item', 'mb-3', 'p-3', 'border', 'rounded');
            itemDiv.innerHTML = `
                <h5>${item.name}</h5>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="btn btn-danger remove-from-cart-btn" data-id="${item.id}">Remove</button>
            `;
            cartItemsDiv.appendChild(itemDiv);
        });
    };

    cartItemsDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart-btn')) {
            const itemId = event.target.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id != itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
        }
    });

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Implement checkout logic here
    });

    loadCartItems();
});