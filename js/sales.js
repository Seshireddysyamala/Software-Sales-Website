document.addEventListener('DOMContentLoaded', () => {
    const salesList = document.getElementById('salesList');
    const saleNameInput = document.getElementById('saleName');
    const saleAmountInput = document.getElementById('saleAmount');
    const addSaleButton = document.getElementById('addSale');

    let sales = [
        { name: 'Software A', amount: 100 },
        { name: 'Software B', amount: 200 },
        { name: 'Software C', amount: 300 }
    ];

    function renderSales() {
        salesList.innerHTML = '';
        sales.forEach((sale, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sale.name}</td>
                <td>$${sale.amount}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editSale(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="confirmDelete(${index})">Delete</button>
                </td>
            `;
            salesList.appendChild(row);
        });
    }

    function addSale() {
        const saleName = saleNameInput.value.trim();
        const saleAmount = parseFloat(saleAmountInput.value);
        if (saleName && !isNaN(saleAmount)) {
            sales.push({ name: saleName, amount: saleAmount });
            renderSales();
            saleNameInput.value = '';
            saleAmountInput.value = '';
        }
    }

    addSaleButton.addEventListener('click', addSale);

    window.editSale = function (index) {
        const sale = sales[index];
        saleNameInput.value = sale.name;
        saleAmountInput.value = sale.amount;
        addSaleButton.textContent = 'Save Sale';
        addSaleButton.onclick = function () {
            saveSale(index);
        };
    };

    function saveSale(index) {
        const saleName = saleNameInput.value.trim();
        const saleAmount = parseFloat(saleAmountInput.value);
        if (saleName && !isNaN(saleAmount)) {
            sales[index] = { name: saleName, amount: saleAmount };
            renderSales();
            saleNameInput.value = '';
            saleAmountInput.value = '';
            addSaleButton.textContent = 'Add Sale';
            addSaleButton.onclick = addSale;
        }
    }

    window.confirmDelete = function (index) {
        if (confirm('Are you sure you want to delete this sale?')) {
            deleteSale(index);
        }
    };

    function deleteSale(index) {
        sales.splice(index, 1);
        renderSales();
    }

    renderSales();
});
