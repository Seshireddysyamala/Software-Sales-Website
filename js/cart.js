document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: <input type="number" min="1" value="${item.quantity}" class="quantity-input" data-index="${index}"></p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
                <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
        cartTotalElement.textContent = total.toFixed(2);
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const updateCartItem = (index, quantity) => {
        cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
    };

    const removeCartItem = (index) => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
    };

    cartItemsContainer.addEventListener('change', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const index = event.target.getAttribute('data-index');
            const quantity = parseInt(event.target.value, 10);
            if (quantity > 0) {
                updateCartItem(index, quantity);
            }
        }
    });

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            removeCartItem(index);
        }
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });

    renderCartItems();
    updateCartCount();
});