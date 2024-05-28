document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('add-sale-form');
    const salesList = document.getElementById('sales-ul');

    salesForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const product = document.getElementById('product').value;
        const amount = document.getElementById('amount').value;

        addSale(product, amount);

        salesForm.reset();
    });

    function addSale(product, amount) {
        const li = document.createElement('li');
        li.textContent = `${product}: $${amount}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            salesList.removeChild(li);
        });

        li.appendChild(deleteButton);
        salesList.appendChild(li);
    }

    // Sample sales data
    const sampleSales = [
        { product: 'Software A', amount: 500 },
        { product: 'Software B', amount: 1200 },
        { product: 'Software C', amount: 700 },
        // Add more sample data as needed
    ];

    sampleSales.forEach(sale => addSale(sale.product, sale.amount));
});
