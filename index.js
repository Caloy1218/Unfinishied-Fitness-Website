let mainContainer = document.querySelector(".main-container");

function darkMode() {
  mainContainer.style.background = "#1b1c1e";
  document.querySelector(".meet-coach-Container").style.background = "#1b1c1e";
  document.querySelector(".semi-main").style.color = "white";
  document.querySelector(".meet-coach").style.color = "white";
  document.querySelector(".takeControl").style.color = "white";
}
function lightMode() {
  mainContainer.style.background = "#48cfad";
  document.querySelector(".meet-coach-Container").style.background = "white";
  document.querySelector(".semi-main").style.color = "#1b1c1e";
  document.querySelector(".meet-coach").style.color = "#1b1c1e";
  document.querySelector(".takeControl").style.color = "#1b1c1e";
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
