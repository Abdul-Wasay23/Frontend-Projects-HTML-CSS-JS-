$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");

// Search Js
document.addEventListener("DOMContentLoaded", function () {
  const searchTrigger = document.querySelector(".search-trigger");
  const searchWrap = document.querySelector(".search-wrap");
  const searchClose = document.querySelector("#search-close");

  searchTrigger.addEventListener("click", function () {
    searchWrap.classList.add("active"); // Show search wrap
  });

  searchClose.addEventListener("click", function () {
    searchWrap.classList.remove("active"); // Hide search wrap
  });
});

// Search Js

// partner_slider
$('.partner_slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1524,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// partner_slider
// testimonial_slider start
$('.testimonial_slider').slick({
  dots: false,
  arrows: false,
  // autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// testimonial_slider end


// product slider jas start

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
// product slider jas end

// wow animation js

$(function () {
  new WOW().init();
});


// responsive menu js

$(function () {
  $('#menu').slicknav();
});




// slick slider in tabs js end