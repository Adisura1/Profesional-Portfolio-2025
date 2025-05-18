const hamburger = document.getElementById ('hamburger');
const mobileMenu = document.getElementById ('mobileMenu');

hamburger.addEventListener ('click', () => {
  hamburger.classList.toggle ('active');
  mobileMenu.classList.toggle ('show');
});

const menuLinks = mobileMenu.querySelectorAll ('a');
menuLinks.forEach (link => {
  link.addEventListener ('click', () => {
    hamburger.classList.remove ('active');
    mobileMenu.classList.remove ('show');
  });
});
