document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Create icon if not present
    let icon = document.getElementById('darkModeIcon');
    if (!icon && toggle) {
        icon = document.createElement('span');
        icon.id = 'darkModeIcon';
        toggle.appendChild(icon);
    }

    function setDarkMode(enabled) {
        if (enabled) {
            body.classList.add('dark-mode');
            if (icon) icon.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            if (icon) icon.textContent = '🌙';
        }
    }

    // Initial state from localStorage
    const darkPref = localStorage.getItem('darkMode');
    setDarkMode(darkPref === 'enabled');

    if (toggle) {
        toggle.addEventListener('click', function (e) {
            // Prevent form submission if inside a form
            e.preventDefault();
            const isDark = !body.classList.contains('dark-mode');
            setDarkMode(isDark);
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        });
    }
});
