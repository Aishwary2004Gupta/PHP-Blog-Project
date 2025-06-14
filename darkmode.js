document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (!toggle) return; // Prevent errors if button is missing

    // Helper to update icon
    function updateIcon() {
        if (body.classList.contains('dark-mode')) {
            toggle.textContent = '☀️';
        } else {
            toggle.textContent = '🌙';
        }
    }

    // Load preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }
    updateIcon();

    toggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
        updateIcon();
    });
});
