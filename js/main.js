
// slick slider

$('.banner_parent').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:".prev",
    nextArrow:".next",
  });
  

  $('.blog_parent').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:".prev",
    nextArrow:".next",
    centerMode: true,
    centerPadding: '0px',
  
  });



  //counterup

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

//testimonial

$('.partent_feedback').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.parent_img'

  
});
$('.parent_img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.partent_feedback',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  prevArrow:".prev_testi",
  nextArrow:".next_testi",
  centerPadding:"0"

  
});

$('.parent_brand').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:".prev",
  nextArrow:".next",
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  centerPadding: '0px',
  autoplaySpeed: 500,
});


