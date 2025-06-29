document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Always create or update the icon
    let icon = document.getElementById('darkModeIcon');
    if (!icon && toggle) {
        icon = document.createElement('span');
        icon.id = 'darkModeIcon';
        icon.style.marginLeft = '2px';
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
            e.stopPropagation();
            e.preventDefault();
            const isDark = !body.classList.contains('dark-mode');
            setDarkMode(isDark);
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        });
    }
});
