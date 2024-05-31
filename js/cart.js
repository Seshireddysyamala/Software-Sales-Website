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
                <p>Quantity: <input type="number" class="quantity-input" data-id="${item.id}" value="${item.quantity}" min="1"></p>
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

    cartItemsDiv.addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const itemId = event.target.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemIndex = cart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                cart[itemIndex].quantity = parseInt(event.target.value, 10);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
    });

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Implement checkout logic here (e.g., redirect to login/signup if not authenticated)
    });

    loadCartItems();
});