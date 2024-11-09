import Chart from 'chart.js/auto';

function renderAppointmentChart() {
    const ctx = document.getElementById('activityChart') as HTMLCanvasElement;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                { label: 'Virtual Appointments', data: [50, 60, 70, 80, 90], borderColor: 'blue' }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true, position: 'top' } }
        }
    });
}

export { renderAppointmentChart };
