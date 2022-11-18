const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('.body');
const container = document.querySelector('.header-container');
const images = [...document.querySelectorAll('.image-content')];
const controlWrapper = document.querySelector('.control-items');
const controlButtons = [...document.querySelectorAll('.control-button')].splice(0, 3);
const priceContainer = document.querySelector('.price-btns');
const select = document.querySelector('.select');
const selectButton = document.querySelector('.contact-select');
const contactsArray = [
  {
    'City': 'Canandaigua, NY',
    'Phone': '+1	585	393 0001',
    'Office adress:': '151 Charlotte Street',
  },
  {
    'City': 'New York City',
    'Phone': '+1	212	456 0002',
    'Office adress:': '9 East 91st Street',
  },
  {
    'City': 'Yonkers, NY',
    'Phone': '+1	914	678 0003',
    'Office adress:': '511 Warburton Ave',
  },
  {
    'City': 'Sherrill, NY',
    'Phone': '+1	315	908 0004',
    'Office adress:': '14 WEST Noyes BLVD',
  },
]
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

//accordion in section price

function showAccordionBody(event) {
  if (event.target.classList.contains('arrow-square')) {
    event.target.closest('.accordion-item').classList.toggle('show');
    event.target.classList.toggle('arrow-up');
  } 
  if (event.target.closest('.accordion-item').classList.contains('show')) {
    const accordionItems = [...document.querySelectorAll('.accordion-item')].filter(item => item.classList.contains('show') === true);
    const accordionArrows = [...document.querySelectorAll('.arrow-square')].filter(item => item.classList.contains('arrow-up') === true);
    accordionItems.forEach(item => {
      item.classList.remove('show');
    });
    accordionArrows.forEach(item => {
      item.classList.remove('arrow-up');
    });
  event.target.closest('.accordion-item').classList.toggle('show');
  event.target.classList.add('arrow-up');
  }
}

priceContainer.addEventListener('click', showAccordionBody);

// select in section contacts

function showSelect(event) {
  if (event.target.classList.contains('select-arrow')){
    event.target.nextElementSibling.nextElementSibling.classList.toggle('active');
    event.target.classList.toggle('arrow-up');
    event.target.nextElementSibling.classList.add('select-active');
    const selectItems = [...document.querySelectorAll('.select-item')];
    selectItems.forEach(item => item.addEventListener('click', closeSelect));
    let selectchildrens = [...select.children];
    if(selectchildrens.length > 3) {
      select.lastChild.remove();
    }
  }
}

function closeSelect(e) {
  const selectBody = document.querySelector('.select-body');
  selectBody.classList.toggle('active');
  selectButton.innerText = `${e.target.innerText}`;
  addContactsBlock(selectButton.innerText);
}

select.addEventListener('click', showSelect);

function addContactsBlock(name) { 
  const contactObject = document.createElement('div');
  contactObject.classList.add('contact-object');
  select.append(contactObject);
  const contactWrap = document.createElement('div');
  contactWrap.classList.add('contact-wrap');
  contactObject.append(contactWrap);
  let resultObj = Object.entries(contactsArray.find(item => item['City'] === `${name}`));
  resultObj.forEach(item => {
    const name = document.createElement('div');
    name.classList.add('contact-title');
    name.innerHTML = `${item[0]}`;
    contactWrap.append(name);
    const content = document.createElement('div');
    content.classList.add('contact-content');
    content.innerHTML = `${item[1]}`;
    contactWrap.append(content);
  });
  const telButton = document.createElement('a');
  telButton.classList.add('tel-button');
  telButton.innerHTML = `Call us`;
  const telContent = [...document.querySelectorAll('.contact-content')].find(item => item.innerHTML.startsWith('+'));
  telButton.href = `tel:${telContent.innerHTML}`;
  contactObject.append(telButton);
}




