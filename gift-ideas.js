const hamburger = document.querySelector(".header-hamburger");
const sidebarLeft = document.querySelector(".sidebar-left");
const closingXL = document.querySelector(".plus-3L");
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
  thirdSidebar.style.visibility = "hidden";
});

closingXL.addEventListener("click", () => {
  sidebarLeft.style.visibility = "hidden";
  header.style.opacity = 1;
  aside.style.opacity = 1;
  main.style.opacity = 1;
  footer.style.opacity = 1;
});

const user = document.querySelector(".header-profile-link");
const sidebarRight = document.querySelector(".sidebar-right");
const closingXR = document.querySelector(".plus-3R");

user.addEventListener("click", () => {
  sidebarRight.style.visibility = "visible";
  header.style.opacity = 0.5;
  aside.style.opacity = 0.5;
  main.style.opacity = 0.5;
  footer.style.opacity = 0.5;
  sidebarLeft.style.visibility = "hidden";
  thirdSidebar.style.visibility = "hidden";
});

closingXR.addEventListener("click", () => {
  sidebarRight.style.visibility = "hidden";
  header.style.opacity = 1;
  aside.style.opacity = 1;
  main.style.opacity = 1;
  footer.style.opacity = 1;
});

const shareIcon = document.querySelector(".share-icon");
const thirdSidebar = document.querySelector(".third-sidebar");
const closing3 = document.querySelector(".plus-3");

shareIcon.addEventListener("click", () => {
  thirdSidebar.style.visibility = "visible";
  header.style.opacity = 0.5;
  aside.style.opacity = 0.5;
  main.style.opacity = 0.5;
  footer.style.opacity = 0.5;
  sidebarLeft.style.visibility = "hidden";
  sidebarRight.style.visibility = "hidden";
});

closing3.addEventListener("click", () => {
  thirdSidebar.style.visibility = "hidden";
  header.style.opacity = 1;
  aside.style.opacity = 1;
  main.style.opacity = 1;
  footer.style.opacity = 1;
});

const hamb2 = document.querySelector(".header-hamb");

hamb2.addEventListener("click", () => {
  sidebarLeft.style.visibility = "visible";
  header.style.opacity = 0.5;
  aside.style.opacity = 0.5;
  main.style.opacity = 0.5;
  footer.style.opacity = 0.5;
  sidebarRight.style.visibility = "hidden";
  thirdSidebar.style.visibility = "hidden";
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
