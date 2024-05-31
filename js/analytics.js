document.addEventListener('DOMContentLoaded', () => {
    const salesChart = document.getElementById('salesChart').getContext('2d');
    const salesPieChart = document.getElementById('salesPieChart').getContext('2d');
    const salesLineChart = document.getElementById('salesLineChart').getContext('2d');

    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales Data',
            data: [500, 700, 400, 600, 800],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const salesChartConfig = new Chart(salesChart, {
        type: 'bar',
        data: salesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const salesPieChartConfig = new Chart(salesPieChart, {
        type: 'pie',
        data: {
            labels: ['Software 1', 'Software 2', 'Software 3'],
            datasets: [{
                data: [300, 200, 500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    });

    const salesLineChartConfig = new Chart(salesLineChart, {
        type: 'line',
        data: salesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const salesTableBody = document.querySelector('#salesTable tbody');
    const salesTableData = [
        { product: 'Software 1', price: 50, quantity: 10 },
        { product: 'Software 2', price: 70, quantity: 5 },
        { product: 'Software 3', price: 30, quantity: 8 },
    ];

    salesTableData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${item.price * item.quantity}</td>
        `;
        salesTableBody.appendChild(row);
    });
});