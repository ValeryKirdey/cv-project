var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.navbar-menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})