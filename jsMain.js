function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready!');
});
