document.addEventListener('DOMContentLoaded', () => {
    let sales = [
        { name: "Software A", amount: 100 },
        { name: "Software B", amount: 200 },
        { name: "Software C", amount: 300 }
    ];

    const salesList = document.getElementById('salesList');
    const saleNameInput = document.getElementById('saleName');
    const saleAmountInput = document.getElementById('saleAmount');
    const addSaleButton = document.getElementById('addSaleButton');
    const saveSaleButton = document.getElementById('saveSaleButton');

    let editIndex = -1;

    function renderSales() {
        salesList.innerHTML = '';

        sales.forEach((sale, index) => {
            const saleItem = document.createElement('tr');

            saleItem.innerHTML = `
                <td>${sale.name}</td>
                <td>${sale.amount}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editSale(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="confirmDeleteSale(${index})">Delete</button>
                </td>
            `;

            salesList.appendChild(saleItem);
        });
    }

    function editSale(index) {
        saleNameInput.value = sales[index].name;
        saleAmountInput.value = sales[index].amount;
        editIndex = index;
        addSaleButton.style.display = 'none';
        saveSaleButton.style.display = 'block';
    }

    function confirmDeleteSale(index) {
        if (confirm("Are you sure you want to delete this sale?")) {
            deleteSale(index);
        }
    }

    function deleteSale(index) {
        sales.splice(index, 1);
        renderSales();
    }

    addSaleButton.addEventListener('click', () => {
        const name = saleNameInput.value.trim();
        const amount = parseInt(saleAmountInput.value.trim());

        if (name && amount) {
            sales.push({ name, amount });
            saleNameInput.value = '';
            saleAmountInput.value = '';
            renderSales();
        }
    });

    saveSaleButton.addEventListener('click', () => {
        const name = saleNameInput.value.trim();
        const amount = parseInt(saleAmountInput.value.trim());

        if (name && amount && editIndex !== -1) {
            sales[editIndex] = { name, amount };
            saleNameInput.value = '';
            saleAmountInput.value = '';
            editIndex = -1;
            addSaleButton.style.display = 'block';
            saveSaleButton.style.display = 'none';
            renderSales();
        }
    });

    renderSales();
});
