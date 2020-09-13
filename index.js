function openMenu() {
  const btn = document.querySelector('.header__menu');
  const menu = document.querySelector('.header__nav--mobile');

  btn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  openMenu();
});
