document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('.app-header');

    function openMobileMenu() {
        mobileMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = '';
    }

    mobileMenuButton.addEventListener('click', openMobileMenu);
    closeMobileMenuButton.addEventListener('click', closeMobileMenu);

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            closeMobileMenu();
        }
    });

    // Close mobile menu when clicking on a menu item
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Change header style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});