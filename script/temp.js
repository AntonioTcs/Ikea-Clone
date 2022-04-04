window.onload = () => {
  let hamburger = document.querySelector(".header-hamburger");
  let profile = document.querySelector(".header-profile-link");
  let btn = document.querySelector(".shopJs");

  hamburger.addEventListener("click", () => {
    function close() {
      sidebar.style.opacity = "0";
      sidebar.style.visibility = "hidden";
      document.body.style.overflowY = "initial";
    }

    let sidebar = document.querySelector("aside#hamburger-sidebar");
    let closebtn = sidebar.querySelector("#svg-container");
    let closeSpace = sidebar.querySelector(".sidebar-opacity-zone");

    sidebar.style.opacity = "1";
    sidebar.style.visibility = "visible";
    document.body.style.overflowY = "hidden";

    closebtn.addEventListener("click", close);
    closeSpace.addEventListener("click", close);
  });

  profile.addEventListener("click", () => {
    function close() {
      sidebar.style.opacity = "0";
      sidebar.style.visibility = "hidden";
      document.body.style.overflowY = "initial";
    }

    let sidebar = document.querySelector("aside#profile-sidebar");
    let btnclose = sidebar.querySelector("#right-svg-container");
    let closeSpace = sidebar.querySelector(".sidebar-opacity-zone");

    sidebar.style.opacity = "1";
    sidebar.style.visibility = "visible";
    document.body.style.overflowY = "hidden";

    btnclose.addEventListener("click", close);
    closeSpace.addEventListener("click", close);
  });

  btn.addEventListener("click", (event) => {
    event.preventDefault();

    function close() {
      sidebar.style.visibility = "hidden";
      sidebar.style.opacity = "0";
      document.body.style.overflowY = "initial";
    }
    let sidebar = document.querySelector("#shop-sidebar");
    let closeBtn = document.querySelector("#shop-svg-close-container");
    let closeSpace = sidebar.querySelector(".sidebar-opacity-zone");

    sidebar.style.visibility = "visible";
    sidebar.style.opacity = "1";
    document.body.style.overflowY = "hidden";

    closeBtn.addEventListener("click", close);
    closeSpace.addEventListener("click", close);
  });
};
