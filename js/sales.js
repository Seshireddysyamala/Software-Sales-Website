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
                <button class="btn btn-danger delete-sale" data-toggle="modal" data-target="#confirmDeleteModal">Delete</button>
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

    let deleteRowIndex = -1;
    salesTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-sale')) {
            const row = event.target.closest('tr');
            editIndex = row.rowIndex;
            editSaleNameInput.value = row.cells[0].textContent;
            editSaleAmountInput.value = row.cells[1].textContent;
        } else if (event.target.classList.contains('delete-sale')) {
            deleteRowIndex = event.target.closest('tr').rowIndex;
        }
    });

    document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
        if (deleteRowIndex !== -1) {
            salesTable.deleteRow(deleteRowIndex - 1);
            deleteRowIndex = -1;
        }
        $('#confirmDeleteModal').modal('hide');
    });

    document.getElementById('sale-amount').addEventListener('input', function () {
        const value = this.value.replace(/\D/g, ''); // Remove non-digit characters
        this.value = value ? $${ value } : '';
    });

    document.getElementById('edit-sale-amount').addEventListener('input', function () {
        const value = this.value.replace(/\D/g, ''); // Remove non-digit characters
        this.value = value ? $${ value } : '';
    });

    saveEditSaleBtn.addEventListener('click', () => {
        const saleName = editSaleNameInput.value.trim();
        const saleAmount = editSaleAmountInput.value.trim();
        if (saleName && saleAmount && editIndex !== -1) {
            const row = salesTable.rows[editIndex - 1];
            row.cells[0].textContent = saleName;
            row.cells[1].textContent = saleAmount;
            $('#editSaleModal').modal('hide');
            editIndex = -1;
        }
    });
});