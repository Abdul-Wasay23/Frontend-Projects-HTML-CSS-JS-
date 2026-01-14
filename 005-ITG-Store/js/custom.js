$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");


function togglePasswordVisibility(toggleButton) {
    $(toggleButton).toggleClass("fa-eye fa-eye-slash");
    var input = $($(toggleButton).attr("toggle"));
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
}


// banner-slider end
$(document).ready(function () {
    $('.banner-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
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

    // Custom buttons for navigation
    $('.prev-slide1').click(function () {
        $('.banner-slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide1').click(function () {
        $('.banner-slider').slick('slickNext'); // Go to next slide
    });
});

// banner-slider end

// pro-slider end
$(document).ready(function () {
    $('.pro-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
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

    // Custom buttons for navigation
    $('.prev-slide2').click(function () {
        $('.pro-slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide2').click(function () {
        $('.pro-slider').slick('slickNext'); // Go to next slide
    });
});

// pro-slider end


// feat-pro-slider end
$(document).ready(function () {
    $('.feat-pro-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
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

    // Custom buttons for navigation
    $('.prev-slide3').click(function () {
        $('.feat-pro-slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide3').click(function () {
        $('.feat-pro-slider').slick('slickNext'); // Go to next slide
    });
});

// pro-slider end


// Attach event listener
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});

// ban-bot-slider start
$('.ban-bot-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
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

// banner-slider end

// testimonial-slider start
$(".testimonial-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// testimonial-slider end

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
    centerMode: false,

    focusOnSelect: true,
    responsive: [{
        breakpoint: 1199,
        settings: {
            centerMode: false
        }
    }
    ]
});


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

document.addEventListener("DOMContentLoaded", function () {
    const incrementButtons = document.querySelectorAll(".input-number-increment");
    const decrementButtons = document.querySelectorAll(".input-number-decrement");

    incrementButtons.forEach(button => {
        button.addEventListener("click", function () {
            const input = this.previousElementSibling;
            let value = parseInt(input.value);
            const max = parseInt(input.getAttribute('max'));
            if (!isNaN(value) && (!max || value < max)) {
                input.value = value + 1;
            }
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener("click", function () {
            const input = this.nextElementSibling;
            let value = parseInt(input.value);
            const min = parseInt(input.getAttribute('min')) || 1;
            if (!isNaN(value) && value > min) {
                input.value = value - 1;
            }
        });
    });
});
