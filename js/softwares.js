document.addEventListener('DOMContentLoaded', function () {
    fetchSoftware();
    fetchTopDeals();
});

function fetchSoftware() {
    fetch('latest-software.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displaySoftware(data))
        .catch(error => console.error('Error fetching latest software:', error));
}

function fetchTopDeals() {
    fetch('top-deals.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayTopDeals(data))
        .catch(error => console.error('Error fetching top deals:', error));
}

function displaySoftware(softwareList) {
    const latestSoftwareSection = document.getElementById('latest-software');
    let html = '<h2>Latest Software</h2>';
    softwareList.forEach(software => {
        html += `<div class="software-item">
                    <h3>${software.name}</h3>
                    <p>${software.description}</p>
                    <p>Price: $${software.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${software.id}, '${software.name}', ${software.price})">Add to Cart</button>
                 </div>`;
    });
    latestSoftwareSection.innerHTML += html;
}

function displayTopDeals(dealsList) {
    const topDealsSection = document.getElementById('top-deals');
    let html = '<h2>Top Deals</h2>';
    dealsList.forEach(deal => {
        html += `<div class="deal-item">
                    <h3>${deal.name}</h3>
                    <p>${deal.description}</p>
                    <p>Original Price: $${deal.originalPrice}</p>
                    <p>Discounted Price: $${deal.discountedPrice}</p>
                    <button class="btn btn-primary" onclick="addToCart(${deal.id}, '${deal.name}', ${deal.discountedPrice})">Add to Cart</button>
                 </div>`;
    });
    topDealsSection.innerHTML += html;
}

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}
