$(function () {
  $(".slideShow")
   .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("slider");
   })
  .slick({
  autoplaySpeed: 2500, 
  speed: 1200, 
  fade:true,
  autoplay: true, 
  infinite: true, 
  slideToShow: 1, 
  slideToScroll: 1, 
  arrows: false, 
  prevArrow: false, 
  dots: false,
  pauseOnFocus: false, 
  pauseOnHover: false,
  pauseOnDotsHover: false, 
  })
   .on({
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        $(".slick-slide", this).eq(nextSlide).addClass("slider");
        $(".slick-slide", this).eq(currentSlide).addClass("remove");
      },
      afterChange: function () {
        $(".remove", this).removeClass(
          "remove slider"
        );
      },
    });
});

  $(".pht_slider").slick({
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1200,
  slidesToShow:4,
  infinite:true,
    slidesToScroll: 4,
    Arrows: true,
    prevArrow: '<div class="slick_prev"></div>',
    nextArrow:'<div class="slick_next"></div>',
    dots: true,
  
});
