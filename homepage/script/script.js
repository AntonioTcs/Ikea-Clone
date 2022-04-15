window.onload = () => {
  let hamburger = document.querySelector(".header-hamburger");
  let profile = document.querySelector(".header-profile-link");
  let btn = document.querySelector(".shopJs");

  hamburger.addEventListener("click", () => {
    function close() {
      sidebar.classList.remove("active");
      document.body.style.overflowY = "initial";
    }

    let sidebar = document.querySelector("aside#hamburger-sidebar");
    let closebtn = sidebar.querySelector("#svg-container");
    let closeSpace = sidebar.querySelector(".sidebar-opacity-zone");

    sidebar.classList.toggle("active");
    document.body.style.overflowY = "hidden";

    closebtn.addEventListener("click", close);
    closeSpace.addEventListener("click", close);
  });

  profile.addEventListener("click", () => {
    function close() {
      sidebar.classList.remove("active");
      document.body.style.overflowY = "initial";
    }

    let sidebar = document.querySelector("aside#profile-sidebar");
    let btnclose = sidebar.querySelector("#right-svg-container");
    let closeSpace = sidebar.querySelector(".sidebar-opacity-zone");

    sidebar.classList.toggle("active");
    document.body.style.overflowY = "hidden";

    btnclose.addEventListener("click", close);
    closeSpace.addEventListener("click", close);
  });

  btn.addEventListener("click", (event) => {
    event.preventDefault();

    function close() {
      sidebar.classList.remove("active");
      document.body.style.overflowY = "initial";
    }
    let sidebar = document.querySelector("#shop-sidebar");
    let closeBtn = document.querySelector("#shop-svg-close-container");
    let closeSpace = sidebar.querySelector(".sidebar-opacity-zone");

    sidebar.classList.toggle("active");
    document.body.style.overflowY = "hidden";

    closeBtn.addEventListener("click", close);
    closeSpace.addEventListener("click", close);
  });

  let input = document.querySelectorAll("#inputContainer input");
  let buttonForm = document.querySelector("#submitFormBtn");

  buttonForm.addEventListener("click", (event) => {
    event.preventDefault();
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for (let singleInput of input) {
      console.log(
        `${capitalizeFirstLetter(singleInput.id)}: ${singleInput.value}`
      );
      singleInput.value = "";
    }
  });
};
