var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

$(".slick").slick();

var swiperTwo = new Swiper(".my-container", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
