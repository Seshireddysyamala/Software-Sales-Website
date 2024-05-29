document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('salesForm');
    const addSaleBtn = document.getElementById('addSaleBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const salesTableBody = document.getElementById('salesTableBody');

    let sales = [
        { name: 'Sale 1', amount: 100 },
        { name: 'Sale 2', amount: 200 },
        { name: 'Sale 3', amount: 300 }
    ];

    let editIndex = -1;

    function renderSales() {
        salesTableBody.innerHTML = '';
        sales.forEach((sale, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${sale.name}</td>
                <td>${sale.amount}</td>
                <td>
                    <button class="btn btn-warning btn-sm edit-btn" data-index="${index}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            salesTableBody.appendChild(tr);
        });
    }

    function resetForm() {
        salesForm.reset();
        editIndex = -1;
        salesForm.classList.add('d-none');
        addSaleBtn.classList.remove('d-none');
    }

    addSaleBtn.addEventListener('click', () => {
        salesForm.classList.remove('d-none');
        addSaleBtn.classList.add('d-none');
    });

    cancelBtn.addEventListener('click', () => {
        resetForm();
    });

    salesForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const saleName = document.getElementById('saleName').value;
        const saleAmount = document.getElementById('saleAmount').value;

        if (editIndex === -1) {
            sales.push({ name: saleName, amount: saleAmount });
        } else {
            sales[editIndex] = { name: saleName, amount: saleAmount };
        }

        renderSales();
        resetForm();
    });

    salesTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            editIndex = event.target.dataset.index;
            const sale = sales[editIndex];
            document.getElementById('saleName').value = sale.name;
            document.getElementById('saleAmount').value = sale.amount;
            salesForm.classList.remove('d-none');
            addSaleBtn.classList.add('d-none');
        } else if (event.target.classList.contains('delete-btn')) {
            const deleteIndex = event.target.dataset.index;
            sales.splice(deleteIndex, 1);
            renderSales();
        }
    });

    renderSales();
});
