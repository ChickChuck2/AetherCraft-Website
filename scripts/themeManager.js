const themeSwitchButton = document.getElementById('themeSwitch');
const body = document.body;

themeSwitchButton.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
});

// Set default theme to day
body.classList.add('light');