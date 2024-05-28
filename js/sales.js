document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('add-sale-form');
    const salesList = document.getElementById('sales-ul');

    salesForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const product = document.getElementById('product').value;
        const amount = document.getElementById('amount').value;

        const li = document.createElement('li');
        li.textContent = `${product}: $${amount}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            salesList.removeChild(li);
        });

        li.appendChild(deleteButton);
        salesList.appendChild(li);

        salesForm.reset();
    });
});
// JavaScript source code
