const hamburger = document.querySelector('.main i');
const media = document.getElementsByClassName('media')[0];

function toggle() {
    hamburger.style.display = 'none';
    media.style.display = 'block';
}

function closeMenu() {
    hamburger.style.display = 'block';
    media.style.display = 'none';
}

