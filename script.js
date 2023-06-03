function initSlider() {
  $('.introBanner').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
  });
  $('.TestimonialContent').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
  });
}
$(document).on('ready', function () {
  initSlider();
});
largeur = window.innerWidth
console.log(largeur)