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

const pets = [
  {
    id: "1",
    name: "Jennifer",
    img: "../../assets/images/our-pets/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: "2",
    name: "Sophia",
    img: "../../assets/images/our-pets/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: "3",
    name: "Woody",
    img: "../../assets/images/our-pets/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    id: "4",
    name: "Scarlett",
    img: "../../assets/images/our-pets/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: "5",
    name: "Katrine",
    img: "../../assets/images/our-pets/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: "6",
    name: "Timmy",
    img: "../../assets/images/our-pets/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    id: "7",
    name: "Freddie",
    img: "../../assets/images/our-pets/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: "8",
    name: "Charly",
    img: "../../assets/images/our-pets/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const buttonNext = document.querySelector(".our-Frineds__slider__arrow-next");
const buttonPrev = document.querySelector(".our-Frineds__slider__arrow-prev");
const slider = document.querySelector(".our-Frineds__slider-inner");

// Находим блоки, в которые будем вставлять карточки
let left = document.querySelector(".left");
let center = document.querySelector(".center");
let right = document.querySelector(".right");

// Инициируем массивы, которые генерируют случайные числа
let prev = [];
let visible = [];
let future = [];

function createCard(name, img) {
  let cardItem = document.createElement("div");
  let image = document.createElement("img");
  let namePets = document.createElement("h4");
  let button = document.createElement("button");

  cardItem.classList.add("our-Frineds__card");
  cardItem.classList.add("card");

  image.src = img;
  namePets.textContent = name;
  button.textContent = "Learn more";

  cardItem.append(image);
  cardItem.append(namePets);
  cardItem.append(button);
  return cardItem;
}
function createCardForBlock(array, block) {
  for (let item of pets) {
    let [a, b, c] = array;
    if (a == item.id) {
      let result = createCard(item.name, item.img);
      block.append(result);
    }
    if (b == item.id) {
      let result = createCard(item.name, item.img);
      block.append(result);
    }
    if (c == item.id) {
      let result = createCard(item.name, item.img);
      block.append(result);
    }
  }
}
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function createVisible() {
  let a = randomInteger(1, 8);
  visible.push(a);

  let b;
  do {
    b = randomInteger(1, 8);
  } while (visible.includes(b));
  visible.push(b);

  let c;
  do {
    c = randomInteger(1, 8);
  } while (visible.includes(c));
  visible.push(c);
}
function createFuture() {
  let a;
  do {
    a = randomInteger(1, 8);
  } while (visible.includes(a) || future.includes(a));
  future.push(a);

  let b;
  do {
    b = randomInteger(1, 8);
  } while (visible.includes(b) || future.includes(b));
  future.push(b);

  let c;
  do {
    c = randomInteger(1, 8);
  } while (visible.includes(c) || future.includes(c));
  future.push(c);
}
function updateArr() {
  prev.splice(0, 3, ...visible);
  visible.splice(0, 3, ...future);
  future.splice(0, 3);
  createFuture();
}

// Создаем массивы
createVisible();
createFuture();

left.innerHTML = "";
center.innerHTML = "";
right.innerHTML = "";
createCardForBlock(visible, center);
createCardForBlock(future, left);
createCardForBlock(future, right);

let counterNext = 0;
let counterPrev = 0;
buttonNext.addEventListener("click", () => {
  slider.classList.add("swipe-right");
  counterPrev = 0;
  counterNext += 1;
  //Проверяем на первое нажатие
  if (counterNext === 1) {
    //Если в PREV ничего не сохранено, сохраняем туда значение VISIBLE
    if (prev.length == 0) {
      prev = [...visible];
      visible.splice(0, 3, ...future);
      future.splice(0, 3);
      createFuture();
      return;
    } else {
      //Если в PREV  уже что-то есть, тогда меняем visible / prev
      visible.push(...prev);
      prev.push(visible[0], visible[1], visible[2]);
      visible.splice(0, 3);
      prev.splice(0, 3);
      return;
    }
  }
  updateArr();
});
buttonPrev.addEventListener("click", () => {
  slider.classList.add("swipe-left");
  counterPrev += 1;
  counterNext = 0;
  //Проверяем на первое нажатие
  if (counterPrev === 1) {
    //Если в PREV ничего не сохранено, сохраняем туда значение VISIBLE
    if (prev.length == 0) {
      prev = [...visible];
      visible.splice(0, 3, ...future);
      future.splice(0, 3);
      createFuture();
      console.log(`prev:${prev}, visible:${visible}, future:${future}`);
      return;
    } else {
      // Если в PREV  уже что-то есть, тогда меняем visible / prev
      visible.push(...prev);
      prev.push(visible[0], visible[1], visible[2]);
      visible.splice(0, 3);
      prev.splice(0, 3);
      console.log(`prev:${prev}, visible:${visible}, future:${future}`);
      return;
    }
  }
  updateArr();
  console.log(`prev:${prev}, visible:${visible}, future:${future}`);
});
slider.addEventListener("animationend", (e) => {
  if (e.animationName === "slide-right") {
    slider.classList.remove("swipe-right");
    left.innerHTML = "";
    center.innerHTML = "";
    right.innerHTML = "";
    createCardForBlock(visible, center);
    createCardForBlock(future, right);
    createCardForBlock(prev, left);
  } else {
    slider.classList.remove("swipe-left");
    left.innerHTML = "";
    center.innerHTML = "";
    right.innerHTML = "";
    createCardForBlock(visible, center);
    createCardForBlock(future, left);
    createCardForBlock(prev, right);
  }
});
