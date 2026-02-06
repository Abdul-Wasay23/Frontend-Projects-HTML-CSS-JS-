
$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");

// blogslider start
$('.banner_slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// blogslider end
// Testi slider start
$(".testi-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoPlay: true,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                autoPlay: true,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                autoPlay: true,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
});

// Testi slider end
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

// simple slick slider start
$(".tab_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

// simple slick slider end

// wow animation js

$(function() {
    new WOW().init();
});


// responsive menu js

$(function() {
    $('#menu').slicknav();
});




// slick slider in tabs js end