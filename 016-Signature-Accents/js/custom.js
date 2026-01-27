/* ---------------------------------------------------------
   1. Page Ready Functions
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    initializeTimer();
    initAOS();
    initCartButtons();
    initPasswordToggle();
    initHeaderFooter();
});

/* ---------------------------------------------------------
   2. Window Load Functions
--------------------------------------------------------- */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    // Loader fade-out
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.classList.add("hide");
    }, 2000);
});

/* ---------------------------------------------------------
   3. Timer / Counter
--------------------------------------------------------- */
function initializeTimer() {
    const daysEl = document.getElementById("days");
    const hrsEl = document.getElementById("hours");
    const minEl = document.getElementById("minutes");
    const secEl = document.getElementById("seconds");

    if (!daysEl || !hrsEl || !minEl || !secEl) return;

    let days = +daysEl.textContent;
    let hours = +hrsEl.textContent;
    let minutes = +minEl.textContent;
    let seconds = +secEl.textContent;

    function updateCounter() {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;

            if (minutes >= 60) {
                minutes = 0;
                hours++;

                if (hours >= 24) {
                    hours = 0;
                    days++;
                }
            }
        }

        daysEl.textContent = String(days).padStart(2, "0");
        hrsEl.textContent = String(hours).padStart(2, "0");
        minEl.textContent = String(minutes).padStart(2, "0");
        secEl.textContent = String(seconds).padStart(2, "0");
    }

    setInterval(updateCounter, 1000);
}

/* ---------------------------------------------------------
   4. AOS Animation Handler
--------------------------------------------------------- */
function initAOS() {
    if (typeof AOS === "undefined") {
        console.warn("AOS not loaded.");
        return;
    }

    function applyAOS() {
        if (window.innerWidth > 768) {
            AOS.init();
        } else {
            document.querySelectorAll("[data-aos]").forEach(el => {
                el.removeAttribute("data-aos");
                el.style.opacity = 1;
                el.style.transform = "none";
            });
        }
    }

    applyAOS();

    // Debounce resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(applyAOS, 300);
    });
}

/* ---------------------------------------------------------
   5. Slick Sliders
--------------------------------------------------------- */
$(document).ready(function () {

    /* Client Slider */
    $(".client_slider").slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 1, infinite: true } },
            { breakpoint: 992, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });

    $(".prev-slide").click(() => $(".client_slider").slick("slickPrev"));
    $(".next-slide").click(() => $(".client_slider").slick("slickNext"));

    /* Product Slider */
    $(".product-slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, autoplay: true } },
            { breakpoint: 992, settings: { slidesToShow: 2, autoplay: true } },
            { breakpoint: 768, settings: { slidesToShow: 1, autoplay: true } }
        ]
    });

    $(".banner-nav-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".banner-for-slider"
    });

    $(".banner-for-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        dots: false,
        focusOnSelect: true,
        arrows: false,
        asNavFor: ".banner-nav-slider",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    let totalSlides = $(".banner-nav-slider").slick("getSlick").slideCount;
    $(".total-num").text(totalSlides.toString().padStart(2, "0"));

    $(".banner-nav-slider").on("afterChange", function (e, slick, current) {
        const num = (current + 1).toString().padStart(2, "0");
        $(".start-num").text(num);

        let progress = ((current + 1) / totalSlides) * 100;
        $(".fill").css("width", progress + "%");
    });

    $(".prev-slide1").click(() => $(".banner-nav-slider").slick("slickPrev"));
    $(".next-slide1").click(() => $(".banner-nav-slider").slick("slickNext"));

    /* Tab Slider */
    $(".tab_slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    /* WOW Animation */
    if (typeof WOW !== "undefined") {
        new WOW().init();
    }
});

/* ---------------------------------------------------------
   6. Cart Increment / Decrement
--------------------------------------------------------- */
function initCartButtons() {
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const numberEl = document.getElementById("number");

    if (!minusBtn || !plusBtn || !numberEl) return;

    minusBtn.addEventListener("click", () => {
        let value = +numberEl.textContent;
        if (value > 0) numberEl.textContent = value - 1;
    });

    plusBtn.addEventListener("click", () => {
        let value = +numberEl.textContent;
        numberEl.textContent = value + 1;
    });
}

/* ---------------------------------------------------------
   7. Password Toggle
--------------------------------------------------------- */
function initPasswordToggle() {
    $(document).on("click", ".toggle-password", function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        const input = $($(this).attr("toggle"));
        input.attr("type", input.attr("type") === "password" ? "text" : "password");
    });
}

/* ---------------------------------------------------------
   8. Header & Footer Load + Active Menu
--------------------------------------------------------- */
function initHeaderFooter() {
    $("#Header").load("layout/header.html", function () {
        $("#menu").slicknav({
            prependTo: ".header",
            label: ""
        });
        highlightActiveMenu();
    });

    $("#Footer").load("layout/footer.html");
}

function highlightActiveMenu() {
    let current = window.location.pathname.split("/").pop().toLowerCase();
    if (!current || current === "index" || current === "index.html") {
        current = "index.html";
    }

    $("#menu li a").each(function () {
        $(this).toggleClass("active", $(this).attr("href").toLowerCase() === current);
    });
}




/* ---------------------------------------------------------
   9. Password Toggle
--------------------------------------------------------- */
const togglePasswordIcons = document.querySelectorAll('.fa-eye');

togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordInput = icon.previousElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = "password";
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});


/* ---------------------------------------------------------
   10. Dropdown Toggle
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownTrigger && dropdownContent) {
        dropdownTrigger.addEventListener('click', function () {
            dropdownTrigger.classList.toggle('active');
            dropdownContent.classList.toggle('active');
        });
    }
});



/* ---------------------------------------------------------
   11. Increase and Decrease
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const numBlocks = document.querySelectorAll('.num-block.skin-2');

    numBlocks.forEach(numBlock => {
        const minusBtn = numBlock.querySelector('.minus');
        const plusBtn = numBlock.querySelector('.plus');
        const inputField = numBlock.querySelector('.in-num');

        minusBtn.addEventListener('click', function () {
            let currentValue = parseInt(inputField.value);
            if (currentValue > 1) {
                inputField.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', function () {
            let currentValue = parseInt(inputField.value);
            inputField.value = currentValue + 1;
        });
    });
});


/* ---------------------------------------------------------
   12. Product Detail Slider
--------------------------------------------------------- */
$('.productdetailfor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.productdetailnav',
});
$('.productdetailnav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.productdetailfor',
    vertical: true,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});