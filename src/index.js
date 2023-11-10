const menuBtn = document.querySelector(".menu-btn");
const menuCircle = document.querySelector(".menu-circle-container");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuCircle.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuCircle.classList.remove("open");
    menuOpen = false;
  }
});
menuCircle.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  menuCircle.classList.remove("open");
  menuOpen = false;
});
