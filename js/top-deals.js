document.addEventListener('DOMContentLoaded', () => {
    const topDealsList = document.getElementById('top-deals-list');
    const cart = [];

    const topDeals = [
        { id: 1, name: 'Deal A', price: 79.99 },
        { id: 2, name: 'Deal B', price: 129.99 },
        { id: 3, name: 'Deal C', price: 179.99 }
    ];

    const renderTopDeals = () => {
        topDeals.forEach(deal => {
            const dealItem = document.createElement('div');
            dealItem.className = 'deal-item';
            dealItem.innerHTML = `
                <h3>${deal.name}</h3>
                <p>Price: $${deal.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${deal.id}">Add to Cart</button>
            `;
            topDealsList.appendChild(dealItem);
        });
    };

    const addToCart = (dealId) => {
        const deal = topDeals.find(d => d.id === parseInt(dealId, 10));
        if (deal) {
            cart.push(deal);
            alert(`${deal.name} has been added to your cart.`);
            updateCartCount();
        }
    };

    const updateCartCount = () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
    };

    topDealsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const dealId = event.target.getAttribute('data-id');
            addToCart(dealId);
        }
    });

    renderTopDeals();
});
