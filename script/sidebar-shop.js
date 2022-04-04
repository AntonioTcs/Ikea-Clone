window.onload = () => {
  let btn = document.querySelector(".shopJs");

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
