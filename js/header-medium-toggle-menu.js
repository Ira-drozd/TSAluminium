
let toggleButton=document.querySelectorAll('.header__nav-button')[0];
let toggleMenu=document.querySelectorAll('.header__nav')[0];

let toggleMobileButton=document.querySelectorAll('.outer-menu__nav-button')[0];
let toggleMobileMenu=document.querySelectorAll('.outer-menu')[0];


function toggleMediumMenu() {
   toggleMenu.classList.toggle('toggle');
}

toggleButton.addEventListener('click', toggleMediumMenu)

function toggleFullMenu() {
   toggleMobileMenu.classList.toggle('toggle');
}

toggleMobileButton.addEventListener('click', toggleFullMenu)

