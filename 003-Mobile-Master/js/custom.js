$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");


//  language translator
    function googleTranslateElementInit() {
        new google.translate.TranslateElement(
            {pageLanguage: 'en'}, 
            'google_translate_element'
        );
    }
//  language translator
  



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