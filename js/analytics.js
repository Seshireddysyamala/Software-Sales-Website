document.addEventListener('DOMContentLoaded', () => {
    // Bar Chart
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesChartCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Windows 11',
                    data: [5000, 6000, 7000, 8000, 9000, 10000],
                    backgroundColor: '#66FCF1'
                },
                {
                    label: 'Zoom',
                    data: [7000, 8000, 9000, 10000, 11000, 12000],
                    backgroundColor: '#45A29E'
                },
                {
                    label: 'GTA 6',
                    data: [6000, 7000, 8000, 9000, 10000, 11000],
                    backgroundColor: '#C5C6C7'
                },
                {
                    label: 'Microsoft Office',
                    data: [8000, 9000, 10000, 11000, 12000, 13000],
                    backgroundColor: '#0B0C10'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart
    const salesPieChartCtx = document.getElementById('salesPieChart').getContext('2d');
    const salesPieChart = new Chart(salesPieChartCtx, {
        type: 'pie',
        data: {
            labels: ['Windows 11', 'Zoom', 'GTA 6', 'Microsoft Office'],
            datasets: [{
                data: [45000, 57000, 51000, 63000],
                backgroundColor: ['#66FCF1', '#45A29E', '#C5C6C7', '#0B0C10']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Line Chart
    const salesLineChartCtx = document.getElementById('salesLineChart').getContext('2d');
    const salesLineChart = new Chart(salesLineChartCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Windows 11',
                    data: [5000, 6000, 7000, 8000, 9000, 10000],
                    borderColor: '#66FCF1',
                    fill: false
                },
                {
                    label: 'Zoom',
                    data: [7000, 8000, 9000, 10000, 11000, 12000],
                    borderColor: '#45A29E',
                    fill: false
                },
                {
                    label: 'GTA 6',
                    data: [6000, 7000, 8000, 9000, 10000, 11000],
                    borderColor: '#C5C6C7',
                    fill: false
                },
                {
                    label: 'Microsoft Office',
                    data: [8000, 9000, 10000, 11000, 12000, 13000],
                    borderColor: '#0B0C10',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
