const menu = document.querySelector(".nav-bar"),
  button = document.querySelector(".button"),
  sideBar = document.querySelector(".sidebar"),
  sideBarLinks = document.querySelector(".btn-sidebar"),
  red = document.querySelector(".background-red"),
  orange = document.querySelector(".background-orange"),
  yellow = document.querySelector(".background-yellow"),
  green = document.querySelector(".background-green"),
  blue = document.querySelector(".background-blue"),
  violet = document.querySelector(".background-violet");

//Show the menu bar
button.addEventListener("mouseover", () => {
  sideBar.classList.add("sidebar-is-open");
});

//hide the menu bar
document.addEventListener("click", (event) => {
  if (event.target !== button) {
    sideBar.classList.remove("sidebar-is-open");
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
