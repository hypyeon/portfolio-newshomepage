const hmbrgrMenu = document.querySelector('#hamburger');
const menuList = document.querySelector('.menu');
const overlay = document.querySelector('#overlay');

hmbrgrMenu.addEventListener('click', () => {
    hmbrgrMenu.classList.toggle('active');
    menuList.classList.toggle('active');
    overlay.classList.toggle('active');
});

const closeMenu = document.querySelector('#close-menu');

closeMenu.addEventListener('click', () => {
    hmbrgrMenu.classList.remove('active');
    menuList.classList.remove('active');
    overlay.classList.remove('active');
});