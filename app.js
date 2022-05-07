const open = document.querySelector(`.mob-nav  img`);
const close = document.querySelector(`.close img`);
const menu = document.querySelector(`.mobile-nav`);
console.log(close);
console.log(open);

open.addEventListener(`click`, () => {
  menu.classList.add(`show-menu`);
  open.style.display = `none`;
});

close.addEventListener(`click`, () => {
  menu.classList.remove(`show-menu`);
  open.style.display = `block`;
});

window.addEventListener(`scroll`, () => {
  let scroll = pageYOffset;
  console.log(scroll);
  if (scroll > 500) {
    menu.classList.remove(`show-menu`);
    open.style.display = `block`;
  }
});
