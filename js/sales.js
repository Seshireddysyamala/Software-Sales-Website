document.addEventListener('DOMContentLoaded', () => {
    const salesList = document.getElementById('salesList');
    const addSaleButton = document.getElementById('addSaleButton');

    const createSaleRow = (name, amount) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${amount}</td>
            <td>
                <button class="btn btn-warning btn-sm edit-sale">Edit</button>
                <button class="btn btn-danger btn-sm delete-sale">Delete</button>
            </td>
        `;
        salesList.appendChild(row);
    };

    addSaleButton.addEventListener('click', () => {
        const saleName = prompt('Enter sale name:');
        const saleAmount = prompt('Enter sale amount:');
        if (saleName && saleAmount) {
            createSaleRow(saleName, saleAmount);
        }
    });

    salesList.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-sale')) {
            const row = event.target.closest('tr');
            const saleName = row.cells[0].textContent;
            const saleAmount = row.cells[1].textContent;
            const newSaleName = prompt('Edit sale name:', saleName);
            const newSaleAmount = prompt('Edit sale amount:', saleAmount);
            if (newSaleName && newSaleAmount) {
                row.cells[0].textContent = newSaleName;
                row.cells[1].textContent = newSaleAmount;
            }
        }

        if (event.target.classList.contains('delete-sale')) {
            const row = event.target.closest('tr');
            salesList.removeChild(row);
        }
    });
});
