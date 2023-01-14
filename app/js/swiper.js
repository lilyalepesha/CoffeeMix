document.addEventListener('DOMContentLoaded', ()=>{
  const swiper = new Swiper('.popular__slider', {
    // Optional parameters
    slidesPerView: 2, 
    spaceBetween: 20,
    // If we need pagination
    breakpoints: {
        // when window width is >= 320px
        992: {
            slidesPerView: 4,
        },
        // when window width is >= 480px
        625: {
            slidesPerView: 3,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  

  });
});