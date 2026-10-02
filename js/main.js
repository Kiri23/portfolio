const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');
const savedTheme = localStorage.getItem('kiri-theme');

if (savedTheme) {
    root.dataset.kiri = savedTheme;
}

function updateThemeLabel() {
    if (!themeButton) return;
    const isLight = root.dataset.kiri === 'claro';
    themeButton.textContent = isLight ? 'Oscuro' : 'Claro';
    themeButton.setAttribute('aria-label', `Cambiar a modo ${isLight ? 'oscuro' : 'claro'}`);
}

if (themeButton) {
    updateThemeLabel();
    themeButton.addEventListener('click', () => {
        const nextTheme = root.dataset.kiri === 'claro' ? 'oscuro' : 'claro';
        root.dataset.kiri = nextTheme;
        localStorage.setItem('kiri-theme', nextTheme);
        updateThemeLabel();
    });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});
