document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Always create or update the icon
    let icon = document.getElementById('darkModeIcon');
    if (!icon) {
        icon = document.createElement('span');
        icon.id = 'darkModeIcon';
        icon.style.marginLeft = '2px';
        toggle && toggle.appendChild(icon);
    }

    function setDarkMode(enabled) {
        if (enabled) {
            body.classList.add('dark-mode');
            icon.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            icon.textContent = '🌙';
        }
    }

    // Initial state from localStorage
    const darkPref = localStorage.getItem('darkMode');
    setDarkMode(darkPref === 'enabled');

    if (toggle) {
        toggle.onclick = function (e) {
            e.preventDefault();
            const isDark = !body.classList.contains('dark-mode');
            setDarkMode(isDark);
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        };
    }
});

// This script is for use in a PHP project that outputs HTML.
// You do not need a separate .html file.
// Make sure your PHP template outputs a button like:
// <button id="darkModeToggle" type="button"><span id="darkModeIcon"></span></button>
// and includes this script after that button in the HTML output.
