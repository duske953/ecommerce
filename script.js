const html = document.querySelector("html");
const btnIcon = document.querySelector(".btn-icon");
const body = document.querySelector("body");
const heroSection = document.querySelector(".hero-section");
const header = document.querySelector(".header");

btnIcon.addEventListener("click", (e) => {
  if (e.target.getAttribute("name") === "menu-outline") {
    e.target.setAttribute("name", "close-outline");
    html.classList.add("header__active");
  } else {
    e.target.setAttribute("name", "menu-outline");
    html.classList.remove("header__active");
  }
});

function outOfView(entry, observer) {
  if (entry[0].isIntersecting) header.classList.remove("header__active-nav");
  if (!entry[0].isIntersecting) header.classList.add("header__active-nav");
}

const observer = new IntersectionObserver(outOfView, {
  root: null,
  threshold: 0,
});

observer.observe(heroSection);
