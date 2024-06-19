const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  searchToggle = document.querySelector('.searchtoggle'),
  sidebarOpen = document.querySelector('.sidebaropen'),
  siderbarClose = document.querySelector('.siderbarclose');

searchToggle.addEventListener('click', () => {
  searchToggle.classList.toggle('active');
});

sidebarOpen.addEventListener('click', () => {
  nav.classList.add('active');
});

body.addEventListener('click', (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains('sidebaropen') &&
    !clickedElm.classList.contains('menu')
  ) {
    nav.classList.remove('active');
  }
});
