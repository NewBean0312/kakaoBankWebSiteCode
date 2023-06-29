function SliderBox1__init() {
    $('.slider-box-1 > .slick').slick({
      dots:false,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding:0,
      arrows:true,
      prevArrow: ".slider-box-1 > .arrows > .btn-arrow-left",
      nextArrow: ".slider-box-1 > .arrows > .btn-arrow-right"
    });
  }
  
  SliderBox1__init();