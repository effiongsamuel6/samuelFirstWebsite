const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

function toggle() {
    mobileMenu.classList.add('active');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
}

