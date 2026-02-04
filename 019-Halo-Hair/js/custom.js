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

});
// this js is for aos animation 


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
    // âœ… Observe all .counter sections
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
window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
        let scrollFunc = ScrollTrigger.getScrollFunc(window),
            scroll, scroll2;
        let smoother = ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.9,
        });
    } else {
        console.error("ScrollTrigger or ScrollSmoother not loaded. Please check script loading order.");
    }
});
// this js is for smooth scroll 
// Testi slider 
$(".testi-slider").slick({
    arrows: true,
    dots: true,
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
// wow animation js
$(function () {
    new WOW().init();
});
// wow animation js
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



// gallery-slider end

$('.gallery-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
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


// gallery-slider end