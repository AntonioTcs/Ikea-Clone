const hamburger = document.querySelector(".header-hamburger");
const user = document.querySelector(".header-profile-link");
const sidebarRight = document.querySelector(".sidebar-right");
const sidebarLeft = document.querySelector(".sidebar-left");
const closingX = document.querySelector(".plus-3");
const header = document.querySelector("header");
const aside = document.querySelector("aside");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

hamburger.addEventListener("click", () => {
  sidebarLeft.style.visibility = "visible";
  header.style.opacity = 0.5;
  aside.style.opacity = 0.5;
  main.style.opacity = 0.5;
  footer.style.opacity = 0.5;
  sidebarRight.style.visibility = "hidden";
});

closingX.addEventListener("click", () => {
  sidebarLeft.style.visibility = "hidden";
  header.style.opacity = 1;
  aside.style.opacity = 1;
  main.style.opacity = 1;
  footer.style.opacity = 1;
});

user.addEventListener("click", () => {
  sidebarRight.style.visibility = "visible";
  header.style.opacity = 0.5;
  aside.style.opacity = 0.5;
  main.style.opacity = 0.5;
  footer.style.opacity = 0.5;
  sidebarLeft.style.visibility = "hidden";
});

sidebarRight.addEventListener("click", () => {
  sidebarRight.style.visibility = "hidden";
  header.style.opacity = 1;
  aside.style.opacity = 1;
  main.style.opacity = 1;
  footer.style.opacity = 1;
});
