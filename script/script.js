const body = document.querySelector('body');
const nav = document.querySelector('nav');
const searchToggle = document.querySelector('.searchtoggle');
const sidebarOpen = document.querySelector('.sidebaropen');
const sidebarClose = document.querySelector('.sidebarclose'); //

searchToggle.addEventListener('click', () => {
  searchToggle.classList.toggle('active');
});

sidebarOpen.addEventListener('click', () => {
  nav.classList.add('active');
});

sidebarClose.addEventListener('click', () => {
  nav.classList.remove('active');
});

body.addEventListener('click', (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains('sidebaropen') &&
    !clickedElm.classList.contains('menu') &&
    !clickedElm.closest('.menu') &&
    !clickedElm.classList.contains('sidebarclose')
  ) {
    nav.classList.remove('active');
  }
});
