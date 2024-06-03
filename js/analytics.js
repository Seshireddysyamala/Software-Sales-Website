document.addEventListener('DOMContentLoaded', () => {
    const ctxBar = document.getElementById('salesChart').getContext('2d');
    const ctxPie = document.getElementById('salesPieChart').getContext('2d');
    const ctxLine = document.getElementById('salesLineChart').getContext('2d');

    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C'],
            datasets: [{
                label: 'Sales Distribution',
                data: [3000, 2000, 5000],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    });

    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Trend',
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});