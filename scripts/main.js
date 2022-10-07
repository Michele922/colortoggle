const menu = document.querySelector(".nav-bar"),
  button = document.querySelector(".button"),
  sideBar = document.querySelector(".sidebar"),
  sideBarLinks = document.querySelectorAll(".btn-sidebar");

const setBodyBackground = (event) => {
  const backgroundColor = getComputedStyle(event.target).backgroundColor;
  document.querySelector("body").style.backgroundColor = backgroundColor;
};

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

sideBar.addEventListener("mouseleave", () => {
  sideBar.classList.remove("sidebar-is-open");
});

// Add eventlistener for all links
sideBarLinks.forEach((sideBarLink) => {
  sideBarLink.addEventListener("click", (event) => {
    setBodyBackground(event);
  });
});
