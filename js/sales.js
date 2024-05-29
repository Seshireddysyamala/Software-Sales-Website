document.addEventListener('DOMContentLoaded', () => {
    const salesTable = document.getElementById('sales-table');
    const saleNameInput = document.getElementById('sale-name');
    const saleAmountInput = document.getElementById('sale-amount');
    const addSaleBtn = document.querySelector('.add-sale-btn');
    const saveSaleBtn = document.querySelector('.save-sale-btn');
    let editIndex = -1;

    addSaleBtn.addEventListener('click', () => {
        saleNameInput.value = '';
        saleAmountInput.value = '';
        editIndex = -1;
        saveSaleBtn.textContent = 'Add Sale';
    });

    saveSaleBtn.addEventListener('click', () => {
        const saleName = saleNameInput.value.trim();
        const saleAmount = saleAmountInput.value.trim();
        if (saleName && saleAmount) {
            if (editIndex === -1) {
                const newRow = salesTable.insertRow();
                newRow.innerHTML = `
                    <td>${saleName}</td>
                    <td>${saleAmount}</td>
                    <td>
                        <button class="btn btn-warning edit-sale">Edit</button>
                        <button class="btn btn-danger delete-sale">Delete</button>
                    </td>
                `;
            } else {
                salesTable.rows[editIndex].cells[0].textContent = saleName;
                salesTable.rows[editIndex].cells[1].textContent = saleAmount;
            }
            saleNameInput.value = '';
            saleAmountInput.value = '';
            saveSaleBtn.textContent = 'Add Sale';
            editIndex = -1;
        }
    });

    salesTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-sale')) {
            editIndex = event.target.closest('tr').rowIndex - 1;
            saleNameInput.value = salesTable.rows[editIndex].cells[0].textContent;
            saleAmountInput.value = salesTable.rows[editIndex].cells[1].textContent;
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

