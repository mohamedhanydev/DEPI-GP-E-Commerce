const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

menu.addEventListener("click", () => {
  header.classList.toggle("open");
});