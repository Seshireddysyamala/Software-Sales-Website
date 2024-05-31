document.addEventListener('DOMContentLoaded', () => {
    const latestSoftwareList = document.getElementById('latest-software-list');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const latestSoftware = [
        { id: 1, name: 'Software A', price: 99.99 },
        { id: 2, name: 'Software B', price: 149.99 },
        { id: 3, name: 'Software C', price: 199.99 }
    ];

    const renderLatestSoftware = () => {
        latestSoftwareList.innerHTML = '';
        latestSoftware.forEach(software => {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';
            softwareItem.innerHTML = `
                <h3>${software.name}</h3>
                <p>Price: $${software.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${software.id}">Add to Cart</button>
            `;
            latestSoftwareList.appendChild(softwareItem);
        });
    };

    const addToCart = (softwareId) => {
        const software = latestSoftware.find(s => s.id === parseInt(softwareId, 10));
        if (software) {
            const existingItem = cart.find(item => item.id === software.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...software, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('${ software.name } has been added to your cart.');
            updateCartCount();
        }
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    latestSoftwareList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const softwareId = event.target.getAttribute('data-id');
            addToCart(softwareId);
        }
    });

    renderLatestSoftware();
    updateCartCount();
});