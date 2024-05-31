
document.addEventListener('DOMContentLoaded', () => {
    const softwareList = document.getElementById('software-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const software = [
        { id: 1, name: 'Software A', price: 99.99 },
        { id: 2, name: 'Software B', price: 149.99 },
        { id: 3, name: 'Software C', price: 199.99 },
        { id: 4, name: 'Deal A', price: 79.99 },
        { id: 5, name: 'Deal B', price: 129.99 },
        { id: 6, name: 'Deal C', price: 179.99 }
    ];

    const renderSoftware = () => {
        softwareList.innerHTML = '';
        software.forEach(item => {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';
            softwareItem.innerHTML = `
    < h3 > ${ item.name }</h3 >
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${item.id}">Add to Cart</button>
`;
            softwareList.appendChild(softwareItem);
        });
    };

    const addToCart = (softwareId) => {
        const item = software.find(s => s.id === parseInt(softwareId, 10));
        if (item) {
            const cartItem = cart.find(c => c.id === item.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                item.quantity = 1;
                cart.push(item);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('${item.name} has been added to your cart.');
            updateCartCount();
        }
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    softwareList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const softwareId = event.target.getAttribute('data-id');
            addToCart(softwareId);
        }
    });

    renderSoftware();
    updateCartCount();
});