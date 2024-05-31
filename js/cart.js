document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartTable = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    const updateCart = () => {
        cartTable.innerHTML = '';
        let totalPrice = 0;
        cartItems.forEach((item, index) => {
            const total = item.price * item.quantity;
            totalPrice += total;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" class="form-control" value="${item.quantity}" min="1" data-index="${index}">
                </td>
                <td>$${total.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger" data-index="${index}">Remove</button>
                </td>
            `;
            cartTable.appendChild(row);
        });
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="3">Total</td>
            <td colspan="2">$${totalPrice.toFixed(2)}</td>
        `;
        cartTable.appendChild(row);
    };

    cartTable.addEventListener('input', (e) => {
        if (e.target.type === 'number') {
            const index = e.target.getAttribute('data-index');
            cartItems[index].quantity = parseInt(e.target.value);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    });

    cartTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-danger')) {
            const index = e.target.getAttribute('data-index');
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (cartItems.length > 0) {
            alert('Proceeding to checkout...');
        } else {
            alert('Your cart is empty.');
        }
    });

    updateCart();
});