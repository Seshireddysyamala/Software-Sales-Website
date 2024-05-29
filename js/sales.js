document.addEventListener('DOMContentLoaded', () => {
    const salesTable = document.getElementById('sales-table');
    const saleNameInput = document.getElementById('sale-name');
    const saleAmountInput = document.getElementById('sale-amount');
    const saveSaleBtn = document.querySelector('.save-sale-btn');
    let editIndex = -1;

    const createRow = (name, amount) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${amount}</td>
            <td>
                <button class="btn btn-warning edit-sale">Edit</button>
                <button class="btn btn-danger delete-sale">Delete</button>
            </td>
        `;
        salesTable.appendChild(row);
    };

    saveSaleBtn.addEventListener('click', () => {
        const saleName = saleNameInput.value.trim();
        const saleAmount = saleAmountInput.value.trim();
        if (saleName && saleAmount) {
            if (editIndex === -1) {
                createRow(saleName, saleAmount);
            } else {
                const row = salesTable.rows[editIndex];
                row.cells[0].textContent = saleName;
                row.cells[1].textContent = saleAmount;
                editIndex = -1;
                saveSaleBtn.textContent = 'Add Sale';
            }
            saleNameInput.value = '';
            saleAmountInput.value = '';
        }
    });

    salesTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-sale')) {
            const row = event.target.closest('tr');
            editIndex = row.rowIndex - 1;
            saleNameInput.value = row.cells[0].textContent;
            saleAmountInput.value = row.cells[1].textContent;
            saveSaleBtn.textContent = 'Save Sale';
        } else if (event.target.classList.contains('delete-sale')) {
            salesTable.deleteRow(event.target.closest('tr').rowIndex);
            if (editIndex !== -1) {
                editIndex = -1;
                saleNameInput.value = '';
                saleAmountInput.value = '';
                saveSaleBtn.textContent = 'Add Sale';
            }
        }
    });
});
