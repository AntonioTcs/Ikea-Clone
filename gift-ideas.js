//INTERAZIONE HAMBURGER PRIMA SIDEBAR - LEFT
const hamburger = document.querySelector(".header-hamburger");
const sidebarLeft = document.querySelector(".sidebar-left");
const closingXL = document.querySelector(".plus-3L");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  sidebarLeft.style.left = 0;
  overlay.style.visibility = "visible";
  body.style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
  sidebarLeft.style.left = "-490px";
  sidebarRight.style.right = "-460px";
  thirdSidebar.style.right = "-590px";
  overlay.style.visibility = "hidden";
  body.style.overflow = "visible";
});

closingXL.addEventListener("click", () => {
  sidebarLeft.style.left = "-483px";
  overlay.style.visibility = "hidden";
  body.style.overflow = "visible";
});

//INTERAZIONE ICONA USER PRIMA SIDEBAR - RIGHT
const user = document.querySelector(".header-profile-link");
const sidebarRight = document.querySelector(".sidebar-right");
const closingXR = document.querySelector(".plus-3R");

user.addEventListener("click", () => {
  sidebarRight.style.right = 0;
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
});

closingXR.addEventListener("click", () => {
  sidebarRight.style.right = "-460px";
  body.style.overflow = "visible";
  overlay.style.visibility = "hidden";
});

//INTERAZIONE SHARE ICON SECONDA SIDEBAR - RIGHT
const shareIcon = document.querySelectorAll(".share-icon");
const thirdSidebar = document.querySelector(".third-sidebar");
const closing3 = document.querySelector(".plus-3");

shareIcon[0].addEventListener("click", () => {
  thirdSidebar.style.right = 0;
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
});

shareIcon[1].addEventListener("click", () => {
  thirdSidebar.style.right = 0;
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
});

closing3.addEventListener("click", () => {
  thirdSidebar.style.right = "-590px";
  body.style.overflow = "visible";
  overlay.style.visibility = "hidden";
});

//INTERAZIONE SECONDO HAMBURGER CHE A 1200px TROVIAMO IN ALTO A DESTRA - APRE SIDEBAR LEFT
const hamb2 = document.querySelector(".header-hamb");

hamb2.addEventListener("click", () => {
  sidebarLeft.style.left = 0;
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
});

// STAMPARE INFO DEL FORM IN CONSOLE
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const eMail = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const formBtn = document.getElementById("form-btn");

function submitPersonForm() {
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    eMail.value != "" &&
    phoneNumber.value != NaN &&
    phoneNumber.value != ""
  ) {
    const person = {
      firstName: firstName.value,
      lastName: lastName.value,
      eMail: eMail.value,
      phone: phoneNumber.value,
    };
    console.log(person);
  }
}

formBtn.addEventListener("click", submitPersonForm);

// FAR COMPARIRE SHARE ICON ALLO SCROLL POCO SOPRA IL FOOTER
function scrollFunction() {
  if (document.documentElement.scrollTop > 2500) {
    shareIcon[0].style.visibility = "visible";
  } else {
    shareIcon[0].style.visibility = "hidden";
  }
}

window.addEventListener("scroll", scrollFunction);

// PULSANTE TORNA SU
const startUp = document.querySelectorAll(".start-up");

startUp[0].addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
startUp[1].addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// FOOTER

const ulTitle = document.querySelectorAll(".ul-title");
const ulLink = document.querySelectorAll(".ul-link");
const overlay2 = document.querySelectorAll(".overlay2");

//APRI LISTE
ulTitle[0].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[0].style.display = "flex";
    overlay2[0].style.visibility = "visible";
  }
});

ulTitle[1].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[1].style.display = "flex";
    overlay2[1].style.visibility = "visible";
  }
});

ulTitle[2].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[2].style.display = "flex";
    overlay2[2].style.visibility = "visible";
  }
});

ulTitle[3].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[3].style.display = "flex";
    overlay2[3].style.visibility = "visible";
  }
});

//CHIUDI LISTE
overlay2[0].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[[0]].style.display = "none";
    overlay2[0].style.visibility = "collapse";
  }
});

overlay2[1].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[[1]].style.display = "none";
    overlay2[1].style.visibility = "collapse";
  }
});

overlay2[2].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[[2]].style.display = "none";
    overlay2[2].style.visibility = "collapse";
  }
});

overlay2[3].addEventListener("click", () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    ulLink[[3]].style.display = "none";
    overlay2[3].style.visibility = "collapse";
  }
});
