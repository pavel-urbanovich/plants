// burger-menu
const burger = document.querySelector('.hamburger');

function openMenu() {
  burger.classList.toggle('open')
}

burger.addEventListener('click', openMenu);
