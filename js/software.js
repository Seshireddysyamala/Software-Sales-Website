document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    };

    const renderCartItems = () => {
        const cartTable = document.getElementById('cart-table');
        if (cartTable) {
            cartTable.innerHTML = cart.map((item, index) => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>
                        <button class="btn btn-danger remove-from-cart" data-index="${index}">Remove</button>
                    </td>
                </tr>
            `).join('');
        }
    };

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = {
                id: productId,
                name: button.closest('.card-body').querySelector('.card-title').textContent,
                price: button.closest('.card-body').querySelector('.card-text').textContent,
            };
            addToCart(product);
        });
    });

    document.getElementById('cart-table').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    renderCartItems();
});