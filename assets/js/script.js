const swiper = new Swiper(".hero-slider", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const header = document.getElementById("main-header");
const hero = document.querySelector(".hero");

function setHeroHeight() {
  const headerHeight = header.offsetHeight;
  hero.style.height = `calc(100vh - ${headerHeight}px)`;
}

setHeroHeight();
window.addEventListener("resize", setHeroHeight);

document.addEventListener("DOMContentLoaded", () => {
  const instaStrip = document.querySelector(".insta-strip");
  const items = instaStrip.querySelectorAll(".insta-item");

  // Clone items for a seamless loop
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    instaStrip.appendChild(clone);
  });
});
