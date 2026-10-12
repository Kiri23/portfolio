const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');

// localStorage lanza SecurityError cuando el navegador bloquea el almacenamiento
// (cookies bloqueadas, iframes sandbox, about:blank). Sin esta guarda el script
// muere al leer el tema guardado y nada de lo de abajo corre, ni el año del footer.
function readTheme() {
    try { return localStorage.getItem('kiri-theme'); } catch { return null; }
}

function saveTheme(theme) {
    try { localStorage.setItem('kiri-theme', theme); } catch { /* el tema dura solo esta visita */ }
}

const savedTheme = readTheme();

if (savedTheme) {
    root.dataset.kiri = savedTheme;
}

function updateThemeLabel() {
    if (!themeButton) return;
    const isLight = root.dataset.kiri === 'claro';
    themeButton.textContent = isLight ? 'Dark' : 'Light';
    themeButton.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
}

if (themeButton) {
    updateThemeLabel();
    themeButton.addEventListener('click', () => {
        const nextTheme = root.dataset.kiri === 'claro' ? 'oscuro' : 'claro';
        root.dataset.kiri = nextTheme;
        saveTheme(nextTheme);
        updateThemeLabel();
    });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});
