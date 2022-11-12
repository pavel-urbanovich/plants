const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('.body');
const container = document.querySelector('.header-container');
const images = [...document.querySelectorAll('.image-content')];
const controlWrapper = document.querySelector('.control-items');
const controlButtons = [...document.querySelectorAll('.control-button')].splice(0, 3);
let switchButton;



// burger-menu
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

//blur effect in section service

// function addBlurEffect(event) {
//   let buttonName = event.target.innerHTML.slice(0, 3).toLowerCase();

//   images.forEach(item => {
//     if (buttonName !== item.dataset.name && !item.classList.contains('effect')) {
//       if (!effect) {
//         item.classList.add('effect');
//         event.target.classList.add('active-button');
        
//       }
//     }
//     if (buttonName === item.dataset.name && item.classList.contains('effect')) {
//       item.classList.remove('effect');
//     }       
//   })
  
// }


function addBlurEffect(event) {
  let buttonName = event.target.innerHTML.slice(0, 3).toLowerCase();
  if (!event.target.classList.contains('active-button') && switchButton) {
    console.log ('on');
    images.forEach(item => {
      if (buttonName === item.dataset.name && item.classList.contains('effect')) {
        item.classList.remove('effect');
        event.target.classList.add('active-button');
        switchButton = true;
        controlButtons.forEach(item => {
          if (!item.classList.contains('active-button')) {
          item.classList.add('pointer');
          }
        })
      } 
    })
    return;
  }
  if (event.target.classList.contains('active-button') && switchButton === true) {
    const blurImages = [...document.querySelectorAll('.effect')];
    controlButtons.forEach(item => item.classList.remove('active-button'));
    blurImages.forEach(item => item.classList.remove('effect'));
    controlButtons.forEach(item => {
      if (item.classList.contains('pointer')) {
        item.classList.remove('pointer');
      }
    })
    switchButton = false;
  } else {
    images.forEach(item => {
      if (buttonName !== item.dataset.name && !item.classList.contains('effect')) {
        item.classList.add('effect');
        event.target.classList.add('active-button');
        switchButton = true;
      }      
    })
  }
}

controlWrapper.addEventListener('click', addBlurEffect)
