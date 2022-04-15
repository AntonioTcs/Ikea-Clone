let hamburger = document.querySelector(".header-hamburger")
let sidebar = document.querySelector("#hamburger-sidebar")
let close = document.querySelector("#svg-container")
hamburger.addEventListener("click", function openSidebar() {
    sidebar.style.visibility = "visible";
    sidebar.style.opacity = "1";
    sidebar.style.top = "0";
})
close.addEventListener("click", function closeSidebar() {
    sidebar.style.visibility = "hidden";
    sidebar.style.opacity = "0";
})