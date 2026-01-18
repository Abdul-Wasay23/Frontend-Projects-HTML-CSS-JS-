document.querySelectorAll('.toggle-password').forEach(function (icon) {
    icon.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});

document.querySelectorAll('.toggle-password-login').forEach(function (icon) {
    icon.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});

// this js is for counter
document.addEventListener("DOMContentLoaded", () => {
    const animateCounter = (el) => {
        const target = +el.getAttribute("data-target");
        let count = 0;
        const duration = 1000;
        const stepTime = Math.max(Math.floor(duration / target), 20);

        const updateCount = () => {
            count += Math.ceil(target / (duration / stepTime));
            if (count >= target) {
                el.textContent = target;
            } else {
                el.textContent = count;
                requestAnimationFrame(updateCount);
            }
        };

        el.textContent = 0;
        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterElements = entry.target.querySelectorAll(".count");
                counterElements.forEach(counter => animateCounter(counter));
                observer.unobserve(entry.target); // optional: stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    // ✅ Observe all .counter sections
    document.querySelectorAll(".counter").forEach(section => {
        observer.observe(section);
    });
});


// this js is for counter

// this js is for loader 
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hide');
        }
    }, 5000);
});

// this js is for loader 

// this js is for smooth scroll 

// window.addEventListener('load', () => {
//     if (typeof ScrollTrigger !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
//         let scrollFunc = ScrollTrigger.getScrollFunc(window),
//             scroll, scroll2;

//         let smoother = ScrollSmoother.create({
//             smooth: 3.5,
//             effects: true,
//             smoothTouch: 0.9,
//         });
//     } else {
//         console.error("ScrollTrigger or ScrollSmoother not loaded. Please check script loading order.");
//     }
// });

// this js is for smooth scroll 




// sell_slider end
$(document).ready(function () {
    const $slider = $('.banner-slider');
    const $slideCurrent = $('.slide-current');
    const $progressFill = $('.progress-bar-fill');

    $slider.slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false,
                },
            },
        ]
    });

    $('.prev-slide1').click(function () {
        $slider.slick('slickPrev');
    });

    $('.next-slide1').click(function () {
        $slider.slick('slickNext');
    });

    const totalSlides = $slider.slick("getSlick").slideCount;

    function formatNumber(num) {
        return num < 10 ? '0' + num : num;
    }

    function updateSlideInfo(currentIndex) {
        const currentSlideNum = currentIndex + 1;
        $slideCurrent.text(formatNumber(currentSlideNum));

        const percent = (currentSlideNum / totalSlides) * 100;
        $progressFill.css('width', percent + '%');
    }

    $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSlideInfo(currentSlide);
    });

    updateSlideInfo(0);
});

// banner-slider end



// prod-slider slider start
$(".prod-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            autoPlay: true,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            autoPlay: true,
            slidesToScroll: 1,
            dots: false,
        },
    },
    ],
});

// prod-slider slider end


// merch-slider slider start
$(".merch-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            autoPlay: true,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            autoPlay: true,
            slidesToScroll: 1,
            dots: false,
        },
    },
    ],
});

// merch-slider slider end

// Testi slider 

$(".testi-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            dots: false

        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false

        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false


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
// end 



// product slider  start
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
    centerPadding: '100px',
    focusOnSelect: true
});
// product slider  end

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
// wow animation js

// Cart Plus minus
document.addEventListener('DOMContentLoaded', function () {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const numberDisplay = document.getElementById('number');

    if (minusButton && plusButton && numberDisplay) {
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
    }
});
// Cart Plus minus


// Responsive Menu  
$(function () {
    $('#menu').slicknav();
});
// Responsive Menu  

// Header And Footer Layout 
$(document).ready(function () {
    $("#Header").load("layout/header.html", function () {
        $('#menu').slicknav({
            prependTo: ".header",
            label: ''
        });
    });

    $("#Footer").load("layout/footer.html");
});

// Header And Footer Layout


