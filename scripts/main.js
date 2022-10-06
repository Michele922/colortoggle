// let toggleNavStatus = false;

// // let setBackgroundColor =

// let toggleNav = function () {
//   let getSidebar = document.querySelector(".nav-sidebar");
//   let getSidebarUL = document.querySelector(".nav-sidebar ul");
//   let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

//   if (toggleNavStatus === false) {
//     getSidebarUL.style.visibility = "visible";
//     getSidebar.style.width = "272px";

//     let arrayLength = getSidebarLinks.length;
//     for (let i = 0; i < arrayLength; i++) {
//       getSidebarLinks[i].style.backgroundcolor = Red;
//     }
//   }
// };

let isNavVisible = false;

const menu = document.querySelector(".nav-bar"),
  button = document.querySelector(".button"),
  dropdown = document.querySelector(".sidebar"),
  sideBarLinks = document.querySelector(".btn-sidebar");

button.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
});

//hide the menu bar
document.addEventListener("click", () => {
  dropdown.style.display = "none";
});

// //Close menu when clicking outside
// document.addEventListener("click", function (event) {
//   if (event.target !== menu && !menu.contains(event.target)) {
//     //hide the menu
//     classie.removeClass(sideBar, "sideBar-active");
//   }
// });
