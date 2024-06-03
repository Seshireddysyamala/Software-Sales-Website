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
                <td>
                    <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                </td>
            `;
            cartTable.appendChild(row);
        });
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
        calculateTotal();
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => total += item.price * item.quantity);
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    };

    cartTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    cartTable.addEventListener('input', (event) => {
        if (event.target.classList.contains('item-quantity')) {
            const index = event.target.getAttribute('data-index');
            cart[index].quantity = parseInt(event.target.value, 10); // Ensure quantity is an integer
            updateCart();
        }
    });

    renderCartItems();
    updateCartCount();
    calculateTotal();
});
