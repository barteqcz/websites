document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        toggleMode();
    }
});

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const toggleBtn = document.querySelectorAll('.toggle-btn');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.forEach(function (toggleBtn) {
            toggleBtn.classList.add('fa-toggle-on');
            toggleBtn.classList.remove('fa-toggle-off');
        });

    } else {
        toggleBtn.forEach(function (toggleBtn) {
            toggleBtn.classList.remove('fa-toggle-on');
            toggleBtn.classList.add('fa-toggle-off');
        });

    }

    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}
