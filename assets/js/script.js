const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const closePromotionBtn = document.querySelector(".close-promotion");
menu.addEventListener("click", () => {
  header.classList.toggle("open");
});
closePromotionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".promotion").remove();
});





