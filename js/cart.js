document.addEventListener('DOMContentLoaded', () => {
    const cartTableBody = document.querySelector('#cart-table tbody');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCart = () => {
        cartTableBody.innerHTML = '';
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="cart-quantity">
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                </td>
            `;
            cartTableBody.appendChild(row);
        });
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    cartTableBody.addEventListener('change', (event) => {
        if (event.target.classList.contains('cart-quantity')) {
            const index = event.target.dataset.index;
            cart[index].quantity = parseInt(event.target.value);
            updateCart();
        }
    });

    cartTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        }
    });

    renderCart();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.parentElement.querySelector('h3').textContent;
            const price = parseFloat(button.parentElement.querySelector('p').textContent.replace('$', ''));
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCart();
        });
    });
});