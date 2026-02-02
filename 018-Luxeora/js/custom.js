
$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");


$('.productdetailfor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.productdetailnav'
});
$('.productdetailnav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.productdetailfor',
    dots: false,
    arrows: false,
    centerMode: true,

    focusOnSelect: true,
    responsive: [{
        breakpoint: 1199,
        settings: {
            centerMode: false
        }
    }
    ]
});


function increaseCount(a, b) {

    var input = b.previousElementSibling;

    var value = parseInt(input.value, 10);

    value = isNaN(value) ? 0 : value;

    value++;

    input.value = value;

}



function decreaseCount(a, b) {

    var input = b.nextElementSibling;

    var value = parseInt(input.value, 10);

    if (value > 1) {

        value = isNaN(value) ? 0 : value;

        value--;

        input.value = value;

    }

}





//Show Popup menu
$(document).on("click", ".megamenu-clickable--toggler > a", function (e) {
    $("body").toggleClass("megamenu-popup-active");
    $(this).parent().find("ul").toggleClass("megamenu-clickable--active");
    e.preventDefault();
});
$(document).on("click", ".megamenu-clickable--close", function (e) {
    $("body").removeClass("megamenu-popup-active");
    $(".megamenu-clickable--active").removeClass("megamenu-clickable--active");
    e.preventDefault();
});

if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
        e.preventDefault();
        $(".mobile-nav__wrapper").toggleClass("expanded");
        $("body").toggleClass("locked");
    });
}

if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
        e.preventDefault();
        $(".search-popup").toggleClass("active");
        $(".mobile-nav__wrapper").removeClass("expanded");
        $("body").toggleClass("locked");
    });
}
if ($(".mini-cart__toggler").length) {
    $(".mini-cart__toggler").on("click", function (e) {
        e.preventDefault();
        $(".mini-cart").toggleClass("expanded");
        $(".mobile-nav__wrapper").removeClass("expanded");
        $("body").toggleClass("locked");
    });
}
if ($(".odometer").length) {
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
}


// Testi slider 
$(".testi-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,

        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,

        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,


        }
    }
    ]
});

setInterval(function () {
    let next_img = $('.testi-box.slick-slide.slick-current').next().find('.testi-img>img').attr('src');
    let prev_img = $('.testi-box.slick-slide.slick-current').prev().find('.testi-img>img').attr('src');
    $('.testi-slider button.slick-prev').css('background-image', 'url(' + prev_img + ')');
    $('.testi-slider button.slick-next').css('background-image', 'url(' + next_img + ')');
}, 100);

var $status = $('.start_number1');
var $slickElement = $('.testi-slider');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text("0" + i + '');
});
var $slider = $('.testi-slider');
var $progressBar = $('.progress3');
var $progressBarLabel = $('.slider__label');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
});

// end 

// banner_slider start
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

// banner_slider end
// Testi slider start
$(".testi_slider").slick({
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

$(function () {
    new WOW().init();
});


// responsive menu js

$(function () {
    $('#menu').slicknav();
});




// slick slider in tabs js end


document.addEventListener('DOMContentLoaded', function () {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const numberDisplay = document.getElementById('number');

    minusButton.addEventListener('click', function () {
        let currentValue = parseInt(numberDisplay.textContent);
        if (currentValue > 0) {
            numberDisplay.textContent = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', function () {
        let currentValue = parseInt(numberDisplay.textContent);
        numberDisplay.textContent = currentValue + 1;
    });
});
