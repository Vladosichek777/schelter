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

function activeMenu() {
  const sections = document.querySelectorAll("[data-section]");
  const cb = function (entries) {
    entries.forEach((item) => {
      if (item.isIntersecting && item.intersectionRatio >= 0.8) {
        navLinks.forEach((link) => link.classList.remove("header-nav__link--active"));

        let currentSection = item.target.id;
        let currentMenuLink = document.querySelector(`[href = "#${currentSection}"]`);

        if (currentMenuLink) {
          currentMenuLink.classList.add("header-nav__link--active");
        }
      }
    });
  };
  const options = {
    threshold: [0.8, 1],
  };
  const observer = new IntersectionObserver(cb, options);
  sections.forEach((section) => observer.observe(section));
  console.log();
}
activeMenu();
