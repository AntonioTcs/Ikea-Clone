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

const shareIcon = document.querySelector(".share-icon");
const thirdSidebar = document.querySelector(".third-sidebar");
const closing3 = document.querySelector(".plus-3");

shareIcon.addEventListener("click", () => {
  thirdSidebar.style.right = 0;
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
});

closing3.addEventListener("click", () => {
  thirdSidebar.style.right = "-590px";
  body.style.overflow = "visible";
  overlay.style.visibility = "hidden";
});

const hamb2 = document.querySelector(".header-hamb");

hamb2.addEventListener("click", () => {
  sidebarLeft.style.left = 0;
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
});

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const eMail = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const formBtn = document.getElementById("form-btn");

function submitPersonForm() {
  const person = {
    firstName: firstName.value,
    lastName: lastName.value,
    eMail: eMail.value,
    phone: phoneNumber.value,
  };
  console.log(person);
}

formBtn.addEventListener("click", submitPersonForm);

function scrollFunction() {
  if (document.documentElement.scrollTop > 2500) {
    shareIcon.style.visibility = "visible";
  } else {
    shareIcon.style.visibility = "hidden";
  }
}

window.addEventListener("scroll", scrollFunction);
