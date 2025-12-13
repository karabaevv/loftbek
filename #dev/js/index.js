document.addEventListener("DOMContentLoaded", () => {
  const heroSwiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 500,
    effect: "fade",
    autoplay: { delay: 4000 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper = new Swiper(".popularSwiper", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const recommendSwiper = new Swiper(".recommendSwiper", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
