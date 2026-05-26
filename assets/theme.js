// Theme Toggle Manager - VLabs

(function() {
    // Run FOUC check immediately on load
    const theme = localStorage.getItem('vlabs_theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('vlabs_theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
    
    // Dispatch an event so sub-components (like iframes or canvas graphs) can refresh if needed
    window.dispatchEvent(new Event('theme-changed'));
}

function updateThemeIcon() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    if (document.documentElement.classList.contains('dark')) {
        btn.innerText = 'light_mode';
    } else {
        btn.innerText = 'dark_mode';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();
});

// Export functions to window
window.toggleTheme = toggleTheme;
window.updateThemeIcon = updateThemeIcon;
