document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('-translate-x-full')) {
                icon.className = 'fa-solid fa-bars text-lg';
            } else {
                icon.className = 'fa-solid fa-xmark text-lg';
            }
        });
    }
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active-section');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-section');
            }
        });
    });
});