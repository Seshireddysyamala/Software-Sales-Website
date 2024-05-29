document.addEventListener('DOMContentLoaded', () => {
    // Bar Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Data',
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff'  // Y-axis tick labels color
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'  // Y-axis grid lines color
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'  // X-axis tick labels color
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'  // X-axis grid lines color
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'  // Legend text color
                    }
                }
            }
        }
    });

    // Pie Chart
    const pieCtx = document.getElementById('salesPieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Distribution',
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'  // Legend text color
                    }
                }
            }
        }
    });

    // Line Chart
    const lineCtx = document.getElementById('salesLineChart').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Trend',
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff'  // Y-axis tick labels color
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'  // Y-axis grid lines color
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'  // X-axis tick labels color
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.```html
document.addEventListener('DOMContentLoaded', () => {
                            // Bar Chart
                            const salesCtx = document.getElementById('salesChart').getContext('2d');
                            new Chart(salesCtx, {
                                type: 'bar',
                                data: {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [{
                                        label: 'Sales Data',
                                        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                        borderColor: 'rgba(54, 162, 235, 1)',
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: {
                                                color: '#ffffff'  // Y-axis tick labels color
                                            },
                                            grid: {
                                                color: 'rgba(255, 255, 255, 0.2)'  // Y-axis grid lines color
                                            }
                                        },
                                        x: {
                                            ticks: {
                                                color: '#ffffff'  // X-axis tick labels color
                                            },
                                            grid: {
                                                color: 'rgba(255, 255, 255, 0.2)'  // X-axis grid lines color
                                            }
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            labels: {
                                                color: '#ffffff'  // Legend text color
                                            }
                                        }
                                    }
                                }
                            });

                            // Pie Chart
                            const pieCtx = document.getElementById('salesPieChart').getContext('2d');
                            new Chart(pieCtx, {
                                type: 'pie',
                                data: {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [{
                                        label: 'Sales Distribution',
                                        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                                        backgroundColor: [
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)',
                                            'rgba(54, 162, 235, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)',
                                            'rgba(54, 162, 235, 1)'
                                        ],
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    plugins: {
                                        legend: {
                                            labels: {
                                                color: '#ffffff'  // Legend text color
                                            }
                                        }
                                    }
                                }
                            });

                            // Line Chart
                            const lineCtx = document.getElementById('salesLineChart').getContext('2d');
                            new Chart(lineCtx, {
                                type: 'line',
                                data: {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [{
                                        label: 'Sales Trend',
                                        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                        borderColor: 'rgba(54, 162, 235, 1)',
                                        borderWidth: 1,
                                        fill: false
                                    }]
                                },
                                options: {
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: {
                                                color: '#ffffff'  // Y-axis tick labels color
                                            },
                                            grid: {
                                                color: 'rgba(255, 255, 255, 0.2)'  // Y-axis grid lines color
                                            }
                                        },
                                        x: {
                                            ticks: {
                                                color: '#ffffff'  // X-axis tick labels color
                                            },
                                            grid: {
                                                color: 'rgba(255, 255, 255, 0.2)'  // X-axis grid lines color
                                            }
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            labels: {
                                                color: '#ffffff'  // Legend text color
                                            }
                                        }
                                    }
                                }
                            });
                        });
