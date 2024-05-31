document.addEventListener('DOMContentLoaded', () => {
    const topDealsList = document.getElementById('top-deals-list');
    const latestSoftwareList = document.getElementById('latest-software-list');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const topDeals = [
        { id: 1, name: 'Deal A', price: 79.99 },
        { id: 2, name: 'Deal B', price: 129.99 },
        { id: 3, name: 'Deal C', price: 179.99 }
    ];

    const latestSoftware = [
        { id: 4, name: 'Software A', price: 99.99 },
        { id: 5, name: 'Software B', price: 149.99 },
        { id: 6, name: 'Software C', price: 199.99 }
    ];

    const renderList = (list, items) => {
        list.innerHTML = '';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'software-item';
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${item.id}">Add to Cart</button>
            `;
            list.appendChild(itemDiv);
        });
    };

    const addToCart = (itemId) => {
        const allItems = [...topDeals, ...latestSoftware];
        const item = allItems.find(i => i.id === parseInt(itemId, 10));
        if (item) {
            const existingItem = cart.find(c => c.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(${ item.name } has been added to your cart.);
            updateCartCount();
        }
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const itemId = event.target.getAttribute('data-id');
            addToCart(itemId);
        }
    });

    renderList(top