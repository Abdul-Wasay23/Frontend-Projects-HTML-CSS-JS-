// this js is for theme-btn
document.addEventListener("DOMContentLoaded", () => {
    const lettersDivs = document.querySelectorAll(".theme-btn .letters");

    lettersDivs.forEach(div => {
        const text = div.getAttribute("data-text");
        div.innerHTML = ""; // Clear previous letters

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;

            // Alternate transform: even-index = down, odd-index = up
            span.style.transform = index % 2 === 0 ? "translateY(15px)" : "translateY(-15px)";

            // Transition delay
            span.style.transitionDelay = `${index * 0.05}s`;

            div.appendChild(span);
        });
    });
});
// this js is for theme-btn

// this js is for counter 
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".f94");

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
                const counterElements = entry.target.querySelectorAll(".f94");
                counterElements.forEach(counter => animateCounter(counter));
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector(".about-counter");
    observer.observe(section);
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
window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
        let scrollFunc = ScrollTrigger.getScrollFunc(window),
            scroll, scroll2;

        let smoother = ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.4,
        });
    } else {
        console.error("ScrollTrigger or ScrollSmoother not loaded. Please check script loading order.");
    }
});
// this js is for smooth scroll 



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
// simple slick slider start


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
$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");
// Header And Footer Layout


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
// Attach event listener
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});
// Password Hide 