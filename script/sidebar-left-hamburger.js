window.onload = () => {
    let hamburger = document.querySelector(".header-hamburger");

    hamburger.addEventListener("click", () => {
        function close() {

            sidebar.style.opacity = "0";
            sidebar.style.visibility = "hidden";
            document.body.style.overflowY = "initial";
        }

        let sidebar = document.querySelector("aside#hamburger-sidebar");
        let closebtn = sidebar.querySelector("#svg-container");
        let closeSpace = sidebar.querySelector(".sidebar-opacity-zone")

        sidebar.style.opacity = "1";
        sidebar.style.visibility = "visible";
        document.body.style.overflowY = "hidden";



        closebtn.addEventListener("click", close);
        closeSpace.addEventListener("click", close);
    })
}