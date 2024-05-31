document.addEventListener('DOMContentLoaded', () => {
    const cartTableBody = document.querySelector('#cartTable tbody');
    const cartTotalDiv = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        cartTableBody.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" class="form-control quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger delete-item-btn" data-index="${index}">Remove</button>
                </td>
            `;
            cartTableBody.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotalDiv.innerHTML = <h3>Total: $${total.toFixed(2)}</h3>;
    };

    cartTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-item-btn')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    cartTableBody.addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const index = event.target.getAttribute('data-index');
            const newQuantity = parseInt(event.target.value);
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            }
        }
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to checkout!');
        // Add checkout logic here
    });

    updateCart();
});