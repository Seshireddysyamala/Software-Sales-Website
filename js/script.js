document.getElementById('sales-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const customerName = document.getElementById('customer-name').value;

    const saleItem = document.createElement('li');
    saleItem.textContent = `Product: ${productName}, Quantity: ${quantity}, Price: ${price}, Customer: ${customerName}`;

    document.getElementById('sales-list-items').appendChild(saleItem);

    document.getElementById('sales-form').reset();
});
// JavaScript source code
