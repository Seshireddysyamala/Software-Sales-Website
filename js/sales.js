document.addEventListener('DOMContentLoaded', () => {
    const salesTable = document.getElementById('sales-table');
    const saleNameInput = document.getElementById('sale-name');
    const saleAmountInput = document.getElementById('sale-amount');
    const saveSaleBtn = document.querySelector('.save-sale-btn');
    const editSaleModal = document.getElementById('editSaleModal');
    const editSaleNameInput = document.getElementById('edit-sale-name');
    const editSaleAmountInput = document.getElementById('edit-sale-amount');
    const saveEditSaleBtn = document.querySelector('.save-edit-sale-btn');
    let editIndex = -1;

    const createRow = (name, amount) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${amount}</td>
            <td>
                <button class="btn btn-warning edit-sale" data-toggle="modal" data-target="#editSaleModal">Edit</button>
                <button class="btn btn-danger delete-sale">Delete</button>
            </td>
        `;
        salesTable.appendChild(row);
    };

    saveSaleBtn.addEventListener('click', () => {
        const saleName = saleNameInput.value.trim();
        const saleAmount = saleAmountInput.value.trim();
        if (saleName && saleAmount) {
            createRow(saleName, saleAmount);
            saleNameInput.value = '';
            saleAmountInput.value = '';
        }
    });

    salesTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-sale')) {
            const row = event.target.closest('tr');
            editIndex = row.rowIndex - 1;
            editSaleNameInput.value = row.cells[0].textContent;
            editSaleAmountInput.value = row.cells[1].textContent;
        } else if (event.target.classList.contains('delete-sale')) {
            const row = event.target.closest('tr');
            salesTable.deleteRow(row.rowIndex);
            if (editIndex !== -1) {
                editIndex = -1;
                editSaleNameInput.value = '';
                editSaleAmountInput.value = '';
            }
        }
    });

    saveEditSaleBtn.addEventListener('click', () => {
        const saleName = editSaleNameInput.value.trim();
        const saleAmount = editSaleAmountInput.value.trim();
        if (saleName && saleAmount && editIndex !== -1) {
            const row = salesTable.rows[editIndex];
            row.cells[0].textContent = saleName;
            row.cells[1].textContent = saleAmount;
            $('#editSaleModal').modal('hide');
        }
    });
});
