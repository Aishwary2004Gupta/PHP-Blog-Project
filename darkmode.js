document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const icon = document.getElementById('darkModeIcon');
    const body = document.body;

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
        toggle.addEventListener('click', function () {
            const isDark = body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
            setDarkMode(isDark);
        });
    }
});
