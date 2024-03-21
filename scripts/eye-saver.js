// Immediately set the theme before the page renders
(function() {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    if (isDarkMode) {
        document.documentElement.style.backgroundColor = '#your-dark-background-color';
    }
})();