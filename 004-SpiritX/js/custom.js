// This js is for 
document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll('.trend-column');

    columns.forEach(column => {
        const dot = column.querySelector('.trend-dot');
        const card = column.querySelector('.trend-card');

        let cameFromDot = false;

        dot.addEventListener('mouseenter', () => {
            cameFromDot = true;
            card.classList.add('show');
        });

        card.addEventListener('mouseenter', () => {
            if (cameFromDot) card.classList.add('show');
        });

        column.addEventListener('mouseleave', () => {
            cameFromDot = false;
            card.classList.remove('show');
        });
    });
});


// Smooth load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// AOS Animation Handling
function handleAOS() {
    if (typeof AOS !== 'undefined') {
        if (window.innerWidth > 768) {
            AOS.init();
        } else {
            document.querySelectorAll('[data-aos]').forEach(el => {
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
    window.addEventListener('resize', handleAOS);
});

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hide');
    }, 5000);
});

// This js is for product Detail Slider

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
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// This js is for Testimonial Slider
$('.test-slide').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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


// WOW Animation
$(function () { new WOW().init(); });

// Responsive Menu
$(function () { $('#menu').slicknav(); });

// Header & Footer Load
$(document).ready(function () {
    $("#Header").load("layout/header.html", function () {
        $('#menu').slicknav({ prependTo: ".header", label: '' });
        highlightActiveMenu();
    });
    $("#Footer").load("layout/footer.html");
});

// Active Menu
function highlightActiveMenu() {
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();
    if (!currentPage || currentPage === "index" || currentPage === "index.html") currentPage = "index.html";

    $("#menu li a").each(function () {
        const linkPage = $(this).attr("href").toLowerCase();
        $(this).toggleClass("active", linkPage === currentPage);
    });
}

// Password Toggle
function togglePasswordVisibility(toggleButton) {
    $(toggleButton).toggleClass("fa-eye fa-eye-slash");
    const input = $($(toggleButton).attr("toggle"));
    input.attr("type", input.attr("type") === "password" ? "text" : "password");
}
$(document).on("click", ".toggle-password", function () { togglePasswordVisibility(this); });

// Custom Dropdown
$(document).on('click', '.custom-dropdown .dropdown-toggle', function (e) {
    e.preventDefault();
    const parent = $(this).closest('.custom-dropdown');
    const menu = parent.find('.dropdown-menu');

    $('.custom-dropdown .dropdown-menu').not(menu).removeClass('show').attr('aria-expanded', 'false');
    $('.custom-dropdown .dropdown-toggle').not(this).attr('aria-expanded', 'false');

    menu.toggleClass('show');
    $(this).attr('aria-expanded', menu.hasClass('show'));
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.custom-dropdown').length) {
        $('.custom-dropdown .dropdown-menu').removeClass('show');
        $('.custom-dropdown .dropdown-toggle').attr('aria-expanded', 'false');
    }
});

// Color Options
document.addEventListener('DOMContentLoaded', () => {

    // Select all color boxes
    const colorBoxes = document.querySelectorAll('.color-box');
    if (!colorBoxes.length) return;

    colorBoxes.forEach(box => {
        const colorNav = box.querySelector('.color-nav');
        const colorOptions = box.querySelector('.color-options');
        const closeButton = box.querySelector('.close-color-options');
        const colorItems = colorOptions.querySelectorAll('li span');

        if (!colorNav || !colorOptions || !closeButton) return;

        const updateArrow = () => {
            const arrow = colorNav.querySelector('.arrow-down');
            if (arrow) {
                arrow.style.transform = colorOptions.classList.contains('hidden')
                    ? 'rotate(0deg)'
                    : 'rotate(180deg)';
            }
        };

        const closeOptions = () => {
            colorOptions.classList.add('hidden');
            updateArrow();
        };

        // Toggle dropdown
        colorNav.addEventListener('click', e => {
            e.preventDefault();
            colorOptions.classList.toggle('hidden');
            updateArrow();
        });

        // Close button
        closeButton.addEventListener('click', closeOptions);

        // Click outside only for this color box
        document.addEventListener('click', e => {
            if (!box.contains(e.target)) closeOptions();
        });

        // Select color
        colorItems.forEach(item => {
            item.addEventListener('click', () => {
                colorItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                closeOptions();
            });
        });
    });

});


// For per-card size selection
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const sizeOptions = card.querySelectorAll('.size-options .option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active only from options in this card
                sizeOptions.forEach(o => o.classList.remove('active'));
                option.classList.add('active');
            });
        });
    });
});


function increaseCount(e, el) {
    var input = el.parentElement.querySelector('input');
    var value = parseInt(input.value, 10);
    if (isNaN(value)) value = 0;
    input.value = value + 1;
}
function decreaseCount(e, el) {
    var input = el.parentElement.querySelector('input');
    var value = parseInt(input.value, 10);
    if (isNaN(value)) value = 0;
    if (value > 1) {
        input.value = value - 1;
    }
}


// Select all password fields with their icons
document.querySelectorAll('.form-group').forEach(group => {
    const input = group.querySelector('input[type="password"], input[type="text"]');
    const icon = group.querySelector('.password-icon i');

    if (input && icon) {
        icon.addEventListener('click', () => {

            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }

        });
    }
});
