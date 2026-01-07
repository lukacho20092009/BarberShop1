let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active'); 
});


