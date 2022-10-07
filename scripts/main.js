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

const menu = document.querySelector(".nav-bar"),
  button = document.querySelector(".button"),
  dropdown = document.querySelector(".sidebar"),
  sideBarLinks = document.querySelector(".btn-sidebar"),
  red = document.querySelector(".btn-red"),
  orange = document.querySelector(".btn-orange"),
  yellow = document.querySelector(".btn-yellow"),
  green = document.querySelector(".btn-green"),
  blue = document.querySelector(".btn-blue"),
  violet = document.querySelector(".btn-violet");

button.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
});

//hide the menu bar
document.addEventListener("click", (event) => {
  // console.log("is button clicked:", event.target == button);

  if (event.target !== button) {
    dropdown.style.display = "none";
  }
});

red.addEventListener("click", (event) => {
  console.log("is red clicked:", event.target == red);
  document.body.style.backgroundColor = "red";
});

orange.addEventListener("click", (event) => {
  console.log("is orange clicked:", event.target == orange);
  document.body.style.backgroundColor = "orange";
});

yellow.addEventListener("click", (event) => {
  console.log("is orange clicked:", event.target == orange);
  document.body.style.backgroundColor = "yellow";
});

green.addEventListener("click", (event) => {
  console.log("is orange clicked:", event.target == orange);
  document.body.style.backgroundColor = "green";
});

blue.addEventListener("click", (event) => {
  console.log("is orange clicked:", event.target == orange);
  document.body.style.backgroundColor = "blue";
});

violet.addEventListener("click", (event) => {
  console.log("is orange clicked:", event.target == orange);
  document.body.style.backgroundColor = "violet";
});
