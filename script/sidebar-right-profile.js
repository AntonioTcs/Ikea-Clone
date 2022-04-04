export function sidebarProfile() {
  window.onload = () => {
    let profile = document.querySelector(".header-profile-link");
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
  };
}
