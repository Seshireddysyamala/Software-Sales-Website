document.addEventListener('DOMContentLoaded', function () {
    updateCart();

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartTableBody = document.getElementById('cart-table-body');
        const cartTotal = document.getElementById('cart-total');
        let total = 0;

        cartTableBody.innerHTML = '';

        cart.forEach((item, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItemFromCart(${index})">Remove</button>
                </td>
            `;

            cartTableBody.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    window.removeItemFromCart = function (index) {
        const confirmation = confirm("Are you sure you want to remove this item from the cart?");
        if (confirmation) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            updateCartCount();
        }
    }

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = itemCount;
    }
});
