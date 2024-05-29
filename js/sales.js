document.addEventListener('DOMContentLoaded', () => {
    const addSaleButton = document.getElementById('addSaleButton');
    const addSaleForm = document.getElementById('addSaleForm');
    const saveSaleButton = document.getElementById('saveSaleButton');
    const saleNameInput = document.getElementById('saleNameInput');
    const saleAmountInput = document.getElementById('saleAmountInput');
    const salesList = document.getElementById('salesList');

    let sales = [
        { name: 'Software A', amount: 100 },
        { name: 'Software B', amount: 200 },
        { name: 'Software C', amount: 300 }
    ];

    const renderSales = () => {
        salesList.innerHTML = '';
        sales.forEach((sale, index) => {
            const saleRow = document.createElement('tr');
            saleRow.innerHTML = `
                <td>${sale.name}</td>
                <td>$${sale.amount}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editSale(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteSale(${index})">Delete</button>
                </td>
            `;
            salesList.appendChild(saleRow);
        });
    };

    addSaleButton.addEventListener('click', () => {
        addSaleForm.style.display = 'block';
    });

    saveSaleButton.addEventListener('click', () => {
        const saleName = saleNameInput.value;
        const saleAmount = saleAmountInput.value;

        if (saleName && saleAmount) {
            sales.push({ name: saleName, amount: Number(saleAmount) });
            renderSales();
            saleNameInput.value = '';
            saleAmountInput.value = '';
            addSaleForm.style.display = 'none';
        }
    });

    window.editSale = (index) => {
        const sale = sales[index];
        saleNameInput.value = sale.name;
        saleAmountInput.value = sale.amount;
        addSaleForm.style.display = 'block';

        saveSaleButton.onclick = () => {
            sales[index] = { name: saleNameInput.value, amount: Number(saleAmountInput.value) };
            renderSales();
            saleNameInput.value = '';
            saleAmountInput.value = '';
            addSaleForm.style.display = 'none';
        };
    };

    window.deleteSale = (index) => {
        sales.splice(index, 1);
        renderSales();
    };

    renderSales();
});
