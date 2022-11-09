// burger-menu
const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('.body');
const container = document.querySelector('.header-container');


function openMenu() {
    burger.classList.toggle('open');
    navigation.classList.toggle('active');
    body.classList.toggle('active');
  
}

burger.addEventListener('click', openMenu);

function closeMenu (event) {
  if (event.target.classList.contains('nav-link') || event.target.classList.contains('nav-container')) {
    navigation.classList.remove('active');
    body.classList.remove('active');
    burger.classList.remove('open');
  }
  else {
    for (let name of event.target.classList) {
      if (name === 'navigation') {
        navigation.classList.remove('active');
        body.classList.remove('active');
        burger.classList.remove('open');
      }
    }
  }
}

navigation.addEventListener('click', closeMenu);
