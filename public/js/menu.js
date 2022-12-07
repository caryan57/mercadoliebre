let menuIcon = document.querySelector('.nav-icon');
let mobileNav = document.querySelector('.nav-mobile');

menuIcon.addEventListener('click', e => {
  mobileNav.classList.toggle('show');
});
