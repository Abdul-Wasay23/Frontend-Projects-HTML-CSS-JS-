// This js is for smooth load 
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
// This js is for smooth load 


document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('resize', () => {
    });
});

// this js is for loader 
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hide');
    }
});

// this js is for loader 

// sell_slider end
$(document).ready(function () {
    $('.sell_slider').slick({
        dots: false,
        arrows: false,
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

    $('.prev-slide').click(function () {
        $('.sell_slider').slick('slickPrev');
    });

    $('.next-slide').click(function () {
        $('.sell_slider').slick('slickNext');
    });
});

// sell_slider end



// Testi slider start
$(".testi_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 3,
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

// Testi slider end

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
        $('#menu').slicknav({
            prependTo: ".header",
            label: ''
        });

        highlightActiveMenu();
    });

    $("#Footer").load("layout/footer.html");
});
// Header And Footer Layout

// this js is for Active Menu
function highlightActiveMenu() {
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    if (currentPage === "" || currentPage === "index" || currentPage === "index.html") {
        currentPage = "index.html";
    }

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
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});
// Password Hide End