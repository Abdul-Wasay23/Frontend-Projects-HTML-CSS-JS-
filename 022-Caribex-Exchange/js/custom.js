// this js is for aos animation
function handleAOS() {
    if (typeof AOS !== 'undefined') {
        if (window.innerWidth > 768) {
            AOS.init({
                offset: 0,
                once: true,
                duration: 1000,
                anchorPlacement: 'top-bottom'
            });

            // Re-refresh after a slight delay
            setTimeout(() => {
                AOS.refresh();
            }, 600);
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

// this js is for loader 
window.addEventListener('load', () => {
    const loader = document.getElementById('visual-loader') || document.getElementById('loader');
    const registrationModal = document.getElementById('registration-modal');

    const now = Date.now();
    const loaderLastShown = localStorage.getItem('loaderLastShown');
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

    if (loaderLastShown && (now - parseInt(loaderLastShown) < fiveMinutes)) {
        // Skip loader if shown within last 5 minutes
        if (loader) {
            loader.style.display = 'none';
        }
        // Show registration modal immediately on reload
        if (registrationModal) {
            registrationModal.style.display = 'flex';
            setTimeout(() => {
                registrationModal.classList.add('show');
            }, 100);
        }
    } else {
        // First visit or 5 minutes passed: Normal path with 5s loader
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hide');
            }
            // Show registration modal after loader ends
            if (registrationModal) {
                registrationModal.style.display = 'flex';
                setTimeout(() => {
                    registrationModal.classList.add('show');
                }, 10);
            }
            // Record the time loader was last shown
            localStorage.setItem('loaderLastShown', Date.now());
        }, 5000);
    }
});
// this js is for loader 


// product slider  start
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
// Custom buttons for navigation
$('.prev-slide').click(function () {
    $('.slider-for').slick('slickPrev');
});

$('.next-slide').click(function () {
    $('.slider-for').slick('slickNext');
});
// product slider  end


// wow animation js
$(function () {
    new WOW().init();
});
// wow animation js

// Cart Plus minus
document.addEventListener("click", e => {
    if (e.target.closest(".plus")) {
        let input = e.target.closest(".quantity").querySelector(".cart-value");
        input.value++;
    }
    if (e.target.closest(".minus")) {
        let input = e.target.closest(".quantity").querySelector(".cart-value");
        if (input.value > 1) input.value--;
    }
});
// Cart Plus minus

// Code Box
const summaryCode = document.querySelector(".summary-code");
if (summaryCode) {
    summaryCode.onclick = (e) => {
        e.preventDefault();
        const codeInputBox = document.querySelector(".code-input-box");
        if (codeInputBox) {
            codeInputBox.classList.toggle("active");
        }
    };
}
// Code Box

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
    const $button = $(toggleButton);
    const targetSelector = $button.attr("toggle");
    const $input = $(targetSelector);

    if ($input.length > 0) {
        // Toggle icon classes
        $button.toggleClass("fa-eye fa-eye-slash");

        // Toggle input type
        const currentType = $input.attr("type");
        $input.attr("type", currentType === "password" ? "text" : "password");
    }
}

// Attach event listener
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});



// Product Image Hover Gallery
$(document).ready(function () {
    $(".product-nav-img a").on("mouseenter", function () {
        const targetClass = $(this).data("bs-target");
        const productCard = $(this).closest(".product-card");
        productCard.find(".product-card-image a").removeClass("active");
        productCard.find("." + targetClass).addClass("active");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
});

// Registration Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const registrationModal = document.getElementById('registration-modal');
    const otherStoreField = document.getElementById('otherStoreField');
    const closeModal = document.getElementById('close-modal');
    const registrationForm = document.getElementById('registration-form');

    // Toggle "Other" store type field
    document.querySelectorAll('input[name="storeType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.id === 'storeTypeOther') {
                otherStoreField.style.display = 'block';
                otherStoreField.querySelector('input').setAttribute('required', 'required');
            } else {
                otherStoreField.style.display = 'none';
                otherStoreField.querySelector('input').removeAttribute('required');
                otherStoreField.querySelector('input').value = '';
            }
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            registrationModal.classList.remove('show');
            setTimeout(() => {
                registrationModal.style.display = 'none';
            }, 500); // Wait for transition duration
        });
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === registrationModal) {
            registrationModal.classList.remove('show');
            setTimeout(() => {
                registrationModal.style.display = 'none';
            }, 500);
        }
    });

    // Handle form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would send this data to a server
            const formData = new FormData(registrationForm);
            console.log('Form Data Registered:', Object.fromEntries(formData));
            alert('Registration submitted successfully!');
            registrationModal.classList.remove('show');
            setTimeout(() => {
                registrationModal.style.display = 'none';
            }, 500);
        });
    }
});

// Products Sidebar Toggle Logic
$(document).ready(function () {
    $('.filter-header').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.filter-content').slideToggle(300, function () {
            // If this is the price section, refresh slider
            if ($(this).find('.price-range-slider').length > 0) {
                if (typeof updateSlider === 'function') updateSlider();
            }
        });
    });

    // Show more functionality
    $('.show-more-link').on('click', function () {
        alert('Showing more options...');
        // In a real implementation, this would unhide more list items
    });

    // Size selection toggle
    $('.size-btn').on('click', function () {
        $(this).toggleClass('active');
    });

    // Color swatch selection
    $('.color-swatch').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // Price Range Slider Logic
    const $slider = $('.price-range-slider');
    const $track = $('.slider-track');
    const $minHandle = $('.min-handle');
    const $maxHandle = $('.max-handle');
    const $minInput = $('.price-field:first input');
    const $maxInput = $('.price-field:last input');

    if ($slider.length > 0) {
        let minPrice = 0;
        let maxPrice = 100; // Assuming a max of 100 for now
        let currentMin = 0;
        let currentMax = 100;

        function updateSlider() {
            const rangeWidth = $slider.width();
            const minPos = (currentMin / maxPrice) * rangeWidth;
            const maxPos = (currentMax / maxPrice) * rangeWidth;

            $minHandle.css('left', minPos + 'px');
            $maxHandle.css('left', maxPos + 'px');

            // Update track fill
            $track.css({
                'left': minPos + 'px',
                'width': (maxPos - minPos) + 'px'
            });

            $minInput.val(currentMin.toFixed(2));
            $maxInput.val(currentMax.toFixed(2));
        }

        // Initial update
        updateSlider();

        // Simple dragging logic
        let isDraggingMin = false;
        let isDraggingMax = false;

        $(document).on('mousedown touchstart', '.slider-handle', function (e) {
            if ($(this).hasClass('min-handle')) isDraggingMin = true;
            if ($(this).hasClass('max-handle')) isDraggingMax = true;
            e.preventDefault();
        });

        $(document).on('mousemove touchmove', function (e) {
            if (!isDraggingMin && !isDraggingMax) return;

            const sliderOffset = $slider.offset().left;
            const sliderWidth = $slider.width();
            let pageX = e.pageX || (e.originalEvent.touches ? e.originalEvent.touches[0].pageX : 0);
            let mousePos = pageX - sliderOffset;

            // Clamp mousePos
            mousePos = Math.max(0, Math.min(sliderWidth, mousePos));
            const price = (mousePos / sliderWidth) * maxPrice;

            if (isDraggingMin) {
                if (price < currentMax) {
                    currentMin = price;
                }
            } else if (isDraggingMax) {
                if (price > currentMin) {
                    currentMax = price;
                }
            }

            updateSlider();
        });

        $(document).on('mouseup touchend', function () {
            isDraggingMin = false;
            isDraggingMax = false;
        });

        // Sync inputs back to slider
        $('.price-field input').on('change', function () {
            let val = parseFloat($(this).val());
            if (isNaN(val)) val = 0;

            if ($(this).is($minInput)) {
                currentMin = Math.min(val, currentMax);
            } else {
                currentMax = Math.max(val, currentMin);
            }
            updateSlider();
        });
    }
});
// Product Detail Slider (asNavFor)
$(document).ready(function () {
    $('.main-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.variation-slider-nav'
    });

    $('.variation-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.main-slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

// Amazon Product Detail Logic
$(document).ready(function () {
    // Gallery Thumbnails
    $('.thumb-item').on('mouseenter click', function () {
        const newSrc = $(this).find('img').attr('src');
        $('#main-product-img').attr('src', newSrc);
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Color Swatches - HOVER logic
    $('.swatch-item').on('mouseenter', function () {
        const newSrc = $(this).find('img').attr('src');
        $('#main-product-img').attr('src', newSrc);
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Size Boxes
    $('.size-box').not('.out-of-stock').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Accordion Logic
    $('.accordion-header-amazon').on('click', function () {
        const $item = $(this).closest('.accordion-item-amazon');
        const $body = $item.find('.accordion-body-amazon');
        const $icon = $(this).find('i');

        $body.slideToggle(400, function () {
            $(this).toggleClass('show', $(this).is(':visible'));
        });
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
            $icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });

    // Size Chart Modal Logic
    $('#open-size-chart').on('click', function () {
        $('#size-chart-modal').css('display', 'flex').hide().fadeIn(400).addClass('show');
        $('body').css('overflow', 'hidden');
    });

    $('.close-modal-custom, .modal-overlay').on('click', function () {
        $('#size-chart-modal').fadeOut(400, function () {
            $(this).removeClass('show').css('display', 'none');
            $('body').css('overflow', 'auto');
        });
    });
});
