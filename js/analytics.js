document.addEventListener('DOMContentLoaded', () => {
    const salesData = {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        software1: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
        software2: [1000, 1600, 2500, 4200, 1800, 2600, 4000],
        deal1: [800, 1500, 2300, 3800, 1600, 2400, 3500],
        deal2: [600, 1200, 2000, 3000, 1400, 2200, 3000]
    };

    // Bar Chart
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesChartCtx, {
        type: 'bar',
        data: {
            labels: salesData.months,
            datasets: [
                { label: 'Software 1', data: salesData.software1, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
                { label: 'Software 2', data: salesData.software2, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
                { label: 'Deal 1', data: salesData.deal1, backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 1 },
                { label: 'Deal 2', data: salesData.deal2, backgroundColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgba(153, 102, 255, 1)', borderWidth: 1 }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart
    const salesPieChartCtx = document.getElementById('salesPieChart').getContext('2d');
    new Chart(salesPieChartCtx, {
        type: 'pie',
        data: {
            labels: ['Software 1', 'Software 2', 'Deal 1', 'Deal 2'],
            datasets: [{
                data: [
                    salesData.software1.reduce((a, b) => a + b, 0),
                    salesData.software2.reduce((a, b) => a + b, 0),
                    salesData.deal1.reduce((a, b) => a + b, 0),
                    salesData.deal2.reduce((a, b) => a + b, 0)
                ],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Line Chart
    const salesLineChartCtx = document.getElementById('salesLineChart').getContext('2d');
    new Chart(salesLineChartCtx, {
        type: 'line',
        data: {
            labels: salesData.months,
            datasets: [
                { label: 'Software 1', data: salesData.software1, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', fill: false },
                { label: 'Software 2', data: salesData.software2, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', fill: false },
                { label: 'Deal 1', data: salesData.deal1, backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)', fill: false },
                { label: 'Deal 2', data: salesData.deal2, backgroundColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgba(153, 102, 255, 1)', fill: false }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sales Data Table
    const salesTableBody = document.getElementById('salesTableBody');
    salesData.months.forEach((month, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${month}</td>
            <td>${salesData.software1[index]}</td>
            <td>${salesData.software2[index]}</td>
            <td>${salesData.deal1[index]}</td>
            <td>${salesData.deal2[index]}</td>
        `;
        salesTableBody.appendChild(row);
    });
});