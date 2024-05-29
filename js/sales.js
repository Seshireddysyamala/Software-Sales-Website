document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('salesForm');
    const salesList = document.getElementById('salesList');

    salesForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;

        addSale(productName, productPrice);

        salesForm.reset();
    });

    function addSale(name, price) {
        const saleItem = document.createElement('li');
        saleItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        saleItem.innerHTML = `
            <span>${name} - $${price}</span>
            <div>
                <button class="btn btn-warning btn-sm mr-2 edit-btn">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </div>
        `;

        salesList.appendChild(saleItem);

        const editBtn = saleItem.querySelector('.edit-btn');
        const deleteBtn = saleItem.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editSale(saleItem, name, price));
        deleteBtn.addEventListener('click', () => deleteSale(saleItem));
    }

    function editSale(saleItem, name, price) {
        const newName = prompt('Enter new product name', name);
        const newPrice = prompt('Enter new product price', price);

        if (newName && newPrice) {
            saleItem.querySelector('span').textContent = `${newName} - $${newPrice}`;
        }
    }

    function deleteSale(saleItem) {
        if (confirm('Are you sure you want to delete this sale?')) {
            salesList.removeChild(saleItem);
        }
    }
});
