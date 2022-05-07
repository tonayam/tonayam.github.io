const open = document.querySelector(`.mob-nav  img`);
const close = document.querySelector(`.close img`);
const menu = document.querySelector(`.mobile-nav`);
console.log(close);
console.log(open);

open.addEventListener(`click`, () => {
  menu.classList.add(`show-menu`);
});

close.addEventListener(`click`, () => {
  menu.classList.remove(`show-menu`);
});
