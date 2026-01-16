// For Active Menu
// Load Header and Footer
document.addEventListener("DOMContentLoaded", function () {
    $("#Header").load("layout/header.html", function () {
        // Wait until header is actually loaded
        highlightActiveMenu();
    });

    $("#Footer").load("layout/footer.html");
});

function highlightActiveMenu() {
    // Get current page filename
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    if (currentPage === "" || currentPage === "index" || currentPage === "index.html") {
        currentPage = "index.html";
    }

    // Loop through each nav link
    $("#menu li a").each(function () {
        let linkPage = $(this).attr("href").toLowerCase();

        if (linkPage === currentPage) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}


// For Active Menu

// Responsive Menu  
$(function () {
    $('#menu').slicknav();
});
// Responsive Menu

// ***********************************************************                 *****************************************************

// Header And Footer Layout 
$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");
// Header And Footer Layout

// ***********************************************************                 *****************************************************

// this js is for select btn 
const buttons = document.querySelectorAll('.detail-new .select-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active')); // Remove from all
        btn.classList.add('active'); // Add to clicked
    });
});
// this js is for select btn


// ***********************************************************                 *****************************************************


// this js is for loader
window.addEventListener('load', () => {
    const bannerSec = document.querySelector('.banner_sec');
    const loader = document.getElementById('loader');
    const SCROLL_OFFSET = 122;
    const SCROLL_COOLDOWN = 5 * 60 * 1000; // 5 minutes in milliseconds

    const now = Date.now();
    const lastScrollTime = sessionStorage.getItem('lastBannerScroll');

    const shouldScroll = !lastScrollTime || now - parseInt(lastScrollTime) > SCROLL_COOLDOWN;

    // Always scroll into view instantly on load, only once
    if (bannerSec && shouldScroll) {
        bannerSec.scrollIntoView({ behavior: 'auto' });
    }

    setTimeout(() => {
        if (loader) loader.classList.add('hide');

        if (bannerSec && shouldScroll) {
            const offsetTop = bannerSec.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });

            // Set timestamp for 5-minute cooldown
            sessionStorage.setItem('lastBannerScroll', Date.now().toString());
        }
    }, 1000);
    // this js is for loader
});
// this js is for loader


// ***********************************************************                 *****************************************************

// this js is for smooth scroll 
window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
        let scrollFunc = ScrollTrigger.getScrollFunc(window),
            scroll, scroll2;

        let smoother = ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.5,
        });
    } else {
        console.error("ScrollTrigger or ScrollSmoother not loaded. Please check script loading order.");
    }
});
// this js is for smooth scroll

// ***********************************************************                 *****************************************************

// this js is for video popup 
document.querySelectorAll('.openVideo').forEach(btn => {
    btn.addEventListener('click', function () {
        const modal = this.closest('.about_sec').querySelector('.videoModal');
        const video = modal.querySelector('video');
        modal.style.display = 'flex';
        video.play();

        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
            video.pause();
            video.currentTime = 0;
        };

        window.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                video.pause();
                video.currentTime = 0;
            }
        };

        document.onkeydown = function (e) {
            if (e.key === "Escape") {
                modal.style.display = 'none';
                video.pause();
                video.currentTime = 0;
            }
        };
    });
});
// this js is for video popup

// ***********************************************************                 *****************************************************


// reval_slider start
$(document).ready(function () {
    $('.reval_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
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
    $('.prev-slide4').click(function () {
        $('.reval_slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide4').click(function () {
        $('.reval_slider').slick('slickNext'); // Go to next slide
    });
});

// reval_slider end

// ***********************************************************                 *****************************************************


// banner-slider start
$(document).ready(function () {
    $('.banner-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        asNavFor: '.banner-slider-nav',
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

    const navSlideCount = $('.banner-slider-nav > div').length;

    $('.banner-slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        centerPadding: '100px',
        focusOnSelect: false,
        infinite: false
    });

    $('.prev-slide1').click(function () {
        $('.banner-slider').slick('slickPrev');
    });

    $('.next-slide1').click(function () {
        $('.banner-slider').slick('slickNext');
    });

    $('.banner-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.banner-text-inner').removeClass('animate-in');
        // REMOVE: $('.banner-slider-nav .slick-slide').removeClass('image-animate-right');
    });

    $('.banner-slider').on('afterChange', function (event, slick, currentSlide) {
        $('.slick-current .banner-text-inner').addClass('animate-in');
        // REMOVE: $('.banner-slider-nav .slick-slide').eq(currentSlide).addClass('image-animate-right');
        updateSlideInfo(currentSlide);
    });

    // First load animation
    $('.slick-current .banner-text-inner').addClass('animate-in');
    // REMOVE: $('.banner-slider-nav .slick-slide.slick-current + .slick-slide').addClass('image-animate-right');

    // Slide number and progress bar logic
    const $slideCurrent = $('.slide-current');
    const $progressFill = $('.progress-bar-fill');
    const $slideTotal = $('.slide-total');

    const totalSlides = $('.banner-slider').slick("getSlick").slideCount;

    function formatNumber(num) {
        return num < 10 ? '0' + num : num;
    }

    $slideTotal.text(formatNumber(totalSlides));

    function updateSlideInfo(currentIndex) {
        const currentSlideNum = currentIndex + 1;
        $slideCurrent.text(formatNumber(currentSlideNum));
        const percent = (currentSlideNum / totalSlides) * 100;
        $progressFill.css('width', percent + '%');
    }

    updateSlideInfo(0);
});
// banner-slider end

// ***********************************************************                 *****************************************************


// service-slider start
$(document).ready(function () {
    $('.service-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        centerMode: false,
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
        $('.service-slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide2').click(function () {
        $('.service-slider').slick('slickNext'); // Go to next slide
    });
});
// service-slider end

// ***********************************************************                 *****************************************************


// testi-slider start
$(document).ready(function () {
    $('.testi-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        centerMode: false,
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
        $('.testi-slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide3').click(function () {
        $('.testi-slider').slick('slickNext'); // Go to next slide
    });
});
// testi-slider end

// ***********************************************************                 *****************************************************


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

// ***********************************************************                 *****************************************************


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


// ***********************************************************                 *****************************************************


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

// ***********************************************************                 *****************************************************


// wow animation js
$(function () {
    new WOW().init();
});
// wow animation js

// ***********************************************************                 *****************************************************


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

// ***********************************************************                 *****************************************************



// ***********************************************************                 *****************************************************


// Password Hide 
function togglePasswordVisibility(toggleButton) {
    $(toggleButton).toggleClass("fa-eye fa-eye-slash");
    var input = $($(toggleButton).attr("toggle"));
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
}
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});
// Password Hide

// ***********************************************************                 *****************************************************

// this js is for before and after
let active = false;

document.querySelector('.scroller').addEventListener('mousedown', function () {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('mouseup', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});

document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    let x = e.pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});

function scrollIt(x) {
    let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform + "px";
    document.querySelector('.scroller').style.left = transform - 25 + "px";
}
scrollIt(150);

document.querySelector('.scroller').addEventListener('touchstart', function () {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
// this js is for before and after

// ***********************************************************                 *****************************************************
