const navLinks = document.querySelectorAll(".header-nav__link");
for (let item of navLinks) {
  item.addEventListener("click", (e) => {
    for (let link of navLinks) {
      link.classList.remove("header-nav__link--active");
    }
    item.classList.add("header-nav__link--active");
  });
}

const burgerBtn = document.querySelector(".header-nav__burger");
const nav = document.querySelector(".header-nav");
burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("header-nav--open");
  burgerBtn.classList.toggle("header-nav__burger--active");
});
nav.addEventListener("click", (e) => {
  e.stopPropagation();
});
for (let item of navLinks) {
  item.addEventListener("click", (e) => {
    if (nav.classList.contains("header-nav--open")) {
      nav.classList.remove("header-nav--open");
    }

    if (burgerBtn.classList.contains("header-nav__burger--active")) {
      burgerBtn.classList.remove("header-nav__burger--active");
    }
  });
}

document.body.addEventListener("click", (e) => {
  if (burgerBtn.classList.contains("header-nav__burger--active")) {
    burgerBtn.classList.remove("header-nav__burger--active");
    nav.classList.remove("header-nav--open");
  }
});
