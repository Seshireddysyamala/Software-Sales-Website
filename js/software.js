document.addEventListener('DOMContentLoaded', () => {
    const softwareItemsDiv = document.getElementById('softwareItems');
    const softwareList = [
        { id: 1, name: 'Software A', price: 99.99 },
        { id: 2, name: 'Software B', price: 149.99 },
        { id: 3, name: 'Software C', price: 199.99 }
    ];

    const createSoftwareCard = (software) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${software.name}</h5>
                    <p class="card-text">Price: $${software.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart-btn" data-id="${software.id}">Add to Cart</button>
                </div>
            </div>
        `;
        softwareItemsDiv.appendChild(card);
    };

    softwareList.forEach(software => createSoftwareCard(software));

    softwareItemsDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const softwareId = event.target.getAttribute('data-id');
            const software = softwareList.find(s => s.id == softwareId);

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingItem = cart.find(item => item.id == softwareId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...software, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Added to cart!');
        }
    });
});