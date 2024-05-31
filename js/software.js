document.addEventListener('DOMContentLoaded', () => {
    const softwareList = document.getElementById('software-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const addToCart = (softwareId) => {
        const softwareItem = softwareList.querySelector([data - id='${softwareId}']);
        const softwareName = softwareItem.querySelector('.software-name').textContent;
        const softwarePrice = softwareItem.querySelector('.software-price').textContent;

        const cartItem = cart.find(item => item.id === softwareId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({
                id: softwareId,
                name: softwareName,
                price: softwarePrice,
                quantity: 1
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    };

    const updateCartUI = () => {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div>${item.name}</div>
                <div>${item.price}</div>
                <div>${item.quantity}</div>
            `;
            cartContainer.appendChild(cartItem);
        });
    };

    softwareList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const softwareId = event.target.closest('.software-item').dataset.id;
            addToCart(softwareId);
        }
    });

    updateCartUI();
});