// This js is for smooth load 
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
// This js is for smooth load 

// this js is for aos animation
function handleAOS() {
    if (typeof AOS !== 'undefined') {
        if (window.innerWidth > 768) {
            AOS.init();
        } else {
            const aosElements = document.querySelectorAll('[data-aos]');
            aosElements.forEach(el => {
                el.removeAttribute('data-aos');
                el.style.opacity = 1;
                el.style.transform = 'none';
            });
        }
    } else {
        console.warn("AOS is not loaded.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleAOS();

    window.addEventListener('resize', () => {
        handleAOS(); // Just reinitialize AOS, don't reload the page
    });
});
// this js is for aos animation 

// this js is for counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count-num");

    const animateCounter = (el) => {
        const target = +el.getAttribute("data-target");
        let count = 0;
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / target), 50);

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
                const counterElements = entry.target.querySelectorAll(".count-num");
                counterElements.forEach(counter => animateCounter(counter));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector(".mission-counter");
    if (section) {
        observer.observe(section);
    }
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
/*
window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
        let scrollFunc = ScrollTrigger.getScrollFunc(window),
            scroll, scroll2;

        let smoother = ScrollSmoother.create({
            smooth: 3.5,
            effects: true,
            smoothTouch: 0.9,
        });
    } else {
        console.error("ScrollTrigger or ScrollSmoother not loaded. Please check script loading order.");
    }
});
*/
// this js is for smooth scroll 


// testi-slider end
$(document).ready(function () {
    $('.testi-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// testi-slider end



// Banner slider start
const $bannerSlider = $(".banner-slider");

// Initialize Shutter
const $bannerSliderBox = $('.banner-slider-box');
if ($bannerSliderBox.length) {
    const $shutterWrapper = $('<div class="shutter-wrapper"></div>');
    const bladeCount = 12;
    for (let i = 0; i < bladeCount; i++) {
        $shutterWrapper.append('<div class="shutter-blade"></div>');
    }
    $bannerSliderBox.append($shutterWrapper);
}

$bannerSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide !== nextSlide) {
        const tl = gsap.timeline();

        // Close shutter
        tl.to('.shutter-blade', {
            scaleY: 1,
            duration: 0.5,
            stagger: {
                each: 0.03,
                from: "random"
            },
            ease: "expo.inOut"
        });

        // Open shutter
        tl.to('.shutter-blade', {
            scaleY: 0,
            duration: 0.5,
            stagger: {
                each: 0.03,
                from: "random"
            },
            ease: "expo.inOut"
        }, "+=0.2");
    }
});

$bannerSlider.slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    draggable: true,
    swipe: true,
    touchMove: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            dots: true,
        },
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1,
            dots: true,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1,
            dots: true,
        },
    },
    ],
});

// Banner slider end



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

// about testimonial slick slider start
$(".about-testimonial").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
// about testimonial slick slider end

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
    // Load header
    $("#Header").load("layout/header.html", function () {
        // Initialize responsive menu
        $('#menu').slicknav({
            prependTo: ".header",
            label: ''
        });

        // Highlight active menu
        highlightActiveMenu();
    });

    // Load footer
    $("#Footer").load("layout/footer.html");
});
// Header And Footer Layout

// this js is for Active Menu
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
// this js is for Active Menu

// Password Hide Start 
function togglePasswordVisibility(toggleButton) {
    $(toggleButton).toggleClass("fa-eye fa-eye-slash");
    var input = $($(toggleButton).attr("toggle"));
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
}
// Attach event listener
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});
// Password Hide End