document.addEventListener('DOMContentLoaded', () => {
    const latestSoftwareItems = [
        { id: 1, name: 'Software 1', price: '$50' },
        { id: 2, name: 'Software 2', price: '$70' }
    ];

    const latestSoftwareContainer = document.getElementById('latest-software-container');

    latestSoftwareItems.forEach(item => {
        const softwareCard = document.createElement('div');
        softwareCard.className = 'card mb-3';
        softwareCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.price}</p>
                <button class="btn btn-primary add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
        latestSoftwareContainer.appendChild(softwareCard);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            const product = latestSoftwareItems.find(item => item.id == productId);
            addToCart(product);
        });
    });

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };
});