document.addEventListener('DOMContentLoaded', () => {
    const softwareId = new URLSearchParams(window.location.search).get('id');
    const softwareInfo = document.getElementById('software-info');
    const addToCartButton = document.getElementById('add-to-cart');

    const softwareDetails = {
        1: { name: 'Software 1', price: 49.99, description: 'Description of Software 1' },
        2: { name: 'Software 2', price: 69.99, description: 'Description of Software 2' },
        3: { name: 'Deal 1', price: 39.99, description: 'Description of Deal 1' },
        4: { name: 'Deal 2', price: 29.99, description: 'Description of Deal 2' }
    };

    const software = softwareDetails[softwareId];
    if (software) {
        softwareInfo.innerHTML = `
            <h2>${software.name}</h2>
            <p>${software.description}</p>
            <p>Price: $${software.price}</p>
        `;

        addToCartButton.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === softwareId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id: softwareId, name: software.name, price: software.price, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Added to cart!');
        });
    } else {
        softwareInfo.innerHTML = '<p>Software not found.</p>';
        addToCartButton.style.display = 'none';
    }
});