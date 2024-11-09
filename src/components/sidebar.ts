export function createSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.innerHTML = `
            <nav>
                <h2>Afrigem</h2>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Appointments</a></li>
                    <li><a href="#">Patients</a></li>
                    <!-- Add other sidebar items -->
                </ul>
            </nav>
        `;
    }
}
