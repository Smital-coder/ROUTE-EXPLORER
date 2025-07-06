

jQuery(".country-image-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  // responsive: [
  //     {
  //         breakpoint: 1199,
  //         settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //             autoplay: false,
  //             arrows: false
  //         }
  //     },
  //     {
  //         breakpoint: 992,
  //         settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //             autoplay: false,
  //             arrows: false
  //         }
  //     },
  //     {
  //         breakpoint: 768,
  //         settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //             autoplay: true,
  //             arrows: false
  //         }
  //     }

  // ]
});
