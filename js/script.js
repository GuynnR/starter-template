document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
});
