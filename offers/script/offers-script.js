const footer = document.getElementById("footer");
const bodyContainer = document.querySelector(".body-container");
let shareBtn = document.getElementById("share");
let userBtn = document.getElementById("user-btn");
let closeSide = document.getElementById("close-side");
let closeSidebarCta = document.getElementById("close-cta-sidebar");
// navigation menu hamburger :D
function openNav() {
  document.getElementById("sideNav").style.width = "480px";
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
}

function openNav2() {
  document.getElementById("sideNav").style.width = "100%";
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0%";
  bodyContainer.style.opacity = "1";
  bodyContainer.style.display = "none";
}
// navigation menu hamburger :D

function open() {
  document.getElementById("user-side").style.width = "400px";
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
}

function close() {
  document.getElementById("user-side").style.width = "0";
  bodyContainer.style.opacity = "1";
  bodyContainer.style.display = "none";
}

userBtn.addEventListener("click", open);
bodyContainer.addEventListener("click", close);
bodyContainer.addEventListener("click", closeNav);

//icone cta sulla sinistra compaiono e cambiano colore allo sroll
window.onscroll = function () {
  CTA();
};
let startingHeight =
  document.documentElement.scrollHeight -
  footer.clientHeight -
  window.innerHeight;

function CTA() {
  if (
    document.documentElement.scrollTop <=
    document.documentElement.scrollHeight / 3
  ) {
    document.getElementById("white").style.display = "flex";
    document.getElementById("white").style.height = "fit-content";
    document.getElementById("go-up").style.display = "none";
    document.getElementById("black").style.display = "none";
  } else if (
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight / 3 &&
    document.documentElement.scrollTop < startingHeight
  ) {
    document.getElementById("white").style.height = "100px";
    document.getElementById("white").style.display = "flex";
    document.getElementById("go-up").style.display = "flex";
    document.getElementById("black").style.display = "none";
  } else if (document.documentElement.scrollTop >= startingHeight) {
    document.getElementById("white").style.display = "none";
    document.getElementById("black").style.display = "flex";
    document.getElementById("go-up").style.display = "flex";
  }
}

function open() {
  document.getElementById("user-side").style.width = "400px";
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
}

function close() {
  document.getElementById("user-side").style.width = "0";
  bodyContainer.style.opacity = "1";
  bodyContainer.style.display = "none";
}

userBtn.addEventListener("click", open);
closeSide.addEventListener("click", close);
bodyContainer.addEventListener("click", close);
bodyContainer.addEventListener("click", closeNav);

function openCta() {
  document.getElementById("cta-sidebar").style.width = "460px";
  document.getElementById("cta-sidebar").style.padding = "0 3rem 2rem 3rem";
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
}

function closeCta() {
  document.getElementById("cta-sidebar").style.width = "0";
  document.getElementById("cta-sidebar").style.padding = "0";
  bodyContainer.style.opacity = "1";
  bodyContainer.style.display = "none";
}

shareBtn.addEventListener("click", openCta);
closeSidebarCta.addEventListener("click", closeCta);
bodyContainer.addEventListener("click", closeCta);
