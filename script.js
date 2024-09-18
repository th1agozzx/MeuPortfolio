document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Configura o modo escuro como padrão
    let currentMode = localStorage.getItem('theme');
    if (!currentMode) {
        currentMode = 'dark-mode'; // Define o modo escuro como padrão
        localStorage.setItem('theme', currentMode); // Salva o modo escuro na localStorage
    }

    document.body.classList.add(currentMode);

    // Alterna o menu
    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
    };

    // Alterna o tema
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        document.body.classList.replace(currentTheme, newTheme);
        localStorage.setItem('theme', newTheme); // Salva o novo tema na localStorage
        themeToggleButton.textContent = newTheme === 'dark-mode' ? '🌙' : '🌞';
    });

    // Inicializa o botão de alternância de tema
    themeToggleButton.textContent = currentMode === 'dark-mode' ? '🌙' : '🌞';
});
