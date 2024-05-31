document.addEventListener('DOMContentLoaded', () => {
    const softwareDetailsDiv = document.getElementById('software-details');
    const addToCartBtn = document.getElementById('addToCartBtn');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const item = urlParams.get('item');

    const softwareData = {
        software2: { id: 'software2', name: 'Software 2', price: 49.99, description: 'Description of Software 2' },
        deal1: { id: 'deal1', name: 'Deal 1', price: 29.99, description: 'Description of Deal 1' },
        deal2: { id: 'deal2', name: 'Deal 2', price: 19.99, description: 'Description of Deal 2' }
    };

    if (item && softwareData[item]) {
        const software = softwareData[item];
        softwareDetailsDiv.innerHTML = `
            <h1>${software.name}</h1>
            <p>${software.description}</p>
            <p>Price: $${software.price}</p>
        `;

        addToCartBtn.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === software.id);

            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                software.quantity = 1;
                cart.push(software);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(${ software.name } added to cart);
        });
    } else {
        softwareDetailsDiv.innerHTML = '<p>Software details not found.</p>';
        addToCartBtn.style.display = 'none';
    }
});