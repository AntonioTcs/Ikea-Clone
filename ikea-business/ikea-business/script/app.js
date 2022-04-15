const hamburgerMenu = document.querySelector(".header-menu-hamburger");
const loginMenu = document.querySelector(".header-menu-login");

const footerArrow1 = document.querySelector(".main-li-a-1");
const footerArrow2 = document.querySelector(".main-li-a-2");
const footerArrow3 = document.querySelector(".main-li-a-3");
const footerArrow4 = document.querySelector(".main-li-a-4");

const footerUl1 = document.querySelector(".ul-1");
const footerUl2 = document.querySelector(".ul-2");
const footerUl3 = document.querySelector(".ul-3");
const footerUl4 = document.querySelector(".ul-4");

const arrowUp1 = document.querySelector(".tablet-phone-arrow-down-1");
const arrowUp2 = document.querySelector(".tablet-phone-arrow-down-2");
const arrowUp3 = document.querySelector(".tablet-phone-arrow-down-3");
const arrowUp4 = document.querySelector(".tablet-phone-arrow-down-4");

const shareBtn = document.querySelector(".btn-social-link");
const shareSlide = document.querySelector(".btn-share");
const shareSlideicon = document.querySelector(".svg-icon-3");

const hamburgerOpen = document
  .querySelector(".header-hamburger")
  .addEventListener("click", hamburgerMenuActive);
const hamburgerClose = document
  .querySelector(".svg-icon-2")
  .addEventListener("click", hamburgerMenuCloser);
document
  .querySelector(".bg-menu")
  .addEventListener("click", hamburgerMenuCloser);

const loginMenuOpen = document
  .querySelector(".header-login-open")
  .addEventListener("click", loginMenuActive);
const loginMenuClose = document
  .querySelector(".svg-icon-1")
  .addEventListener("click", loginMenuCloser);
document.querySelector(".bg-menu").addEventListener("click", loginMenuCloser);

const footerActiveArrow1 = footerArrow1.addEventListener(
  "click",
  footerActive1
);
const footerActiveArrow2 = footerArrow2.addEventListener(
  "click",
  footerActive2
);
const footerActiveArrow3 = footerArrow3.addEventListener(
  "click",
  footerActive3
);
const footerActiveArrow4 = footerArrow4.addEventListener(
  "click",
  footerActive4
);

const shareSlideOpen = shareBtn.addEventListener("click", shareSlideOpened);
const shareSlideClose = shareSlideicon.addEventListener(
  "click",
  shareSlideClosed
);
document.querySelector(".bg-menu").addEventListener("click", shareSlideClosed);

function hamburgerMenuActive() {
  if (window.innerWidth < 480) {
    hamburgerMenu.style.width = "30rem";
    hamburgerMenu.style.opacity = "1";
    hamburgerMenu.style.transition = "0.3s";
    document.body.style.overflow = "hidden";
    hamburgerMenu.style.left = "0px";
    document.querySelector(".change-langueges-container").style.right = "10px";
    document.querySelector(".change-langueges-container").style.top = "-15px";
    document.querySelector(".bg-menu").style.display = "block";
  } else if (window.innerWidth > 480) {
    hamburgerMenu.style.width = "30rem";
    hamburgerMenu.style.opacity = "1";
    hamburgerMenu.style.transition = "0.3s";
    document.body.style.overflow = "hidden";
    hamburgerMenu.style.left = "0px";
    document.querySelector(".bg-menu").style.display = "block";
  }
}

function hamburgerMenuCloser() {
  hamburgerMenu.style.opacity = ".3";
  hamburgerMenu.style.transition = "0.2s";
  hamburgerMenu.style.width = "0rem";
  document.body.style.overflow = "";
  document.querySelector(".bg-menu").style.display = "none";
  hamburgerMenu.style.left = "-290px";
}

function loginMenuActive() {
  if (window.innerWidth < 481) {
    loginMenu.style.right = "0";
    loginMenu.style.width = "100%";
    loginMenu.style.opacity = "1";
    loginMenu.style.transition = "0.3s";
    document.body.style.overflow = "hidden";
    document.querySelector(".bg-menu").style.display = "block";
  } else if (window.innerWidth > 481) {
    loginMenu.style.right = "0";
    loginMenu.style.width = "30rem";
    loginMenu.style.opacity = "1";
    loginMenu.style.transition = "0.3s";
    document.body.style.overflow = "hidden";
    document.querySelector(".bg-menu").style.display = "block";
  }
}

function loginMenuCloser() {
  loginMenu.style.right = "-20px";
  loginMenu.style.width = "0rem";
  loginMenu.style.opacity = ".3";
  loginMenu.style.transition = "0.2s";
  document.querySelector(".bg-menu").style.display = "none";
  document.body.style.overflow = "";
}

function footerActive1() {
  const yourUl = footerUl1;
  const arrowUp = arrowUp1;

  if (window.innerWidth < 901) {
    if (yourUl.style.height === "0vh") {
      yourUl.style.height = "100%";
      yourUl.style.maxHeight = "100%";
      yourUl.style.overflow = "visible";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "1";
      yourUl.style.marginBottom = "30px";
    } else {
      yourUl.style.height = "0vh";
      yourUl.style.maxHeight = "0";
      yourUl.style.overflow = "hidden";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "0%";
      yourUl.style.marginBottom = "";
    }
    if (arrowUp.style.transform === "rotate(0deg)") {
      arrowUp.style.transform = "rotate(180deg)";
      arrowUp.style.transition = "0.2s linear";
    } else {
      arrowUp.style.transform = "rotate(0deg)";
      arrowUp.style.transition = "0.2s linear";
    }
  }
}

function footerActive2() {
  const yourUl = footerUl2;
  const arrowUp = arrowUp2;
  if (window.innerWidth < 901) {
    if (yourUl.style.height === "0vh") {
      yourUl.style.height = "100%";
      yourUl.style.maxHeight = "100%";
      yourUl.style.overflow = "visible";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "1";
      yourUl.style.marginBottom = "30px";
    } else {
      yourUl.style.height = "0vh";
      yourUl.style.maxHeight = "0";
      yourUl.style.overflow = "hidden";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "0%";
      yourUl.style.marginBottom = "";
    }
    if (arrowUp.style.transform === "rotate(0deg)") {
      arrowUp.style.transform = "rotate(180deg)";
      arrowUp.style.transition = "0.2s linear";
    } else {
      arrowUp.style.transform = "rotate(0deg)";
      arrowUp.style.transition = "0.2s linear";
    }
  }
}

function footerActive3() {
  const yourUl = footerUl3;
  const arrowUp = arrowUp3;
  if (window.innerWidth < 901) {
    if (yourUl.style.height === "0vh") {
      yourUl.style.height = "100%";
      yourUl.style.maxHeight = "100%";
      yourUl.style.overflow = "visible";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "1";
      yourUl.style.marginBottom = "30px";
    } else {
      yourUl.style.height = "0vh";
      yourUl.style.maxHeight = "0";
      yourUl.style.overflow = "hidden";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "0%";
      yourUl.style.marginBottom = "";
    }
    if (arrowUp.style.transform === "rotate(0deg)") {
      arrowUp.style.transform = "rotate(180deg)";
      arrowUp.style.transition = "0.2s linear";
    } else {
      arrowUp.style.transform = "rotate(0deg)";
      arrowUp.style.transition = "0.2s linear";
    }
  }
}

function footerActive4() {
  const yourUl = footerUl4;
  const arrowUp = arrowUp4;
  if (window.innerWidth < 901) {
    if (yourUl.style.height === "0vh") {
      yourUl.style.height = "100%";
      yourUl.style.maxHeight = "100%";
      yourUl.style.overflow = "visible";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "1";
      yourUl.style.marginBottom = "30px";
    } else {
      yourUl.style.height = "0vh";
      yourUl.style.maxHeight = "0";
      yourUl.style.overflow = "hidden";
      yourUl.style.transition = "0.2s ease-out";
      yourUl.style.opacity = "0%";
      yourUl.style.marginBottom = "";
    }
    if (arrowUp.style.transform === "rotate(0deg)") {
      arrowUp.style.transform = "rotate(180deg)";
      arrowUp.style.transition = "0.2s linear";
    } else {
      arrowUp.style.transform = "rotate(0deg)";
      arrowUp.style.transition = "0.2s linear";
    }
  }
}

function shareSlideOpened() {
  shareSlide.style.width = "30rem";
  shareSlide.style.transition = "0.1s ease";
  document.body.style.overflow = "hidden";
  document.querySelector(".bg-menu").style.display = "block";
}

function shareSlideClosed() {
  shareSlide.style.width = "0px";
  document.body.style.overflow = "";
  document.querySelector(".bg-menu").style.display = "none";
}

const popup = document.querySelector(".header-top-page-icon");
const share = document.querySelector(".btn-social-link");
const hamburger = document.querySelector(".header-hamburger");

const showPopup = function () {
  let y = window.scrollY;

  if (y >= 2400 && window.innerWidth > 991) {
    popup.className = "show";
    popup.style.display = "flex";
    share.style.marginTop = "1410px";
    popup.style.top = "846px";
    hamburger.style.marginTop = "-56px";
  } else {
    popup.className = "hide";
    popup.style.display = "none";
    share.style.marginTop = "";
    popup.style.top = "";
    hamburger.style.marginTop = "-15px";
  }
};

window.addEventListener("scroll", showPopup);

const popupChangeColor = function () {
  let y = window.scrollY;
  let x = window.innerWidth;
  if (y >= 5370 && x >= 1700) {
    popup.className = "change-color";
    share.className = "change-color-1";
  } else if (y >= 4800 && x <= 1700) {
    popup.className = "change-color";
    share.className = "change-color-1";
  } else if (y >= 4700 && x <= 1500) {
    popup.className = "change-color";
    share.className = "change-color-1";
  } else {
    share.className = "btn-social-link";
  }

  if (x <= 1151) {
   share.style.display = "none";
   popup.style.display = "none";
  } else {
    share.style.display = "";
    popup.style.display = "";
  }

};

window.addEventListener("scroll", popupChangeColor);
