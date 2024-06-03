document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.getElementById('cart-table-body');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartTable.innerHTML = '';
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item}</td>
                <td>
                    <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                </td>
            `;
            cartTable.appendChild(row);
        });
    };

    cartTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        }
    });

    renderCartItems();
});