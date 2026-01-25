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
/*
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
*/
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

    // Custom buttons for navigation
    $('.prev-slide').click(function () {
        $('.sell_slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide').click(function () {
        $('.sell_slider').slick('slickNext'); // Go to next slide
    });
});

// sell_slider end



// Banner slider start
$(".banner-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 300,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
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

// Banner slider end

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

// more plus minus

document.addEventListener('click', function (e) {
    // PLUS button
    if (e.target.classList.contains('plus')) {
        const wrapper = e.target.closest('.d-flex');
        const input = wrapper.querySelector('.qa-input');
        input.value = parseInt(input.value) + 1;
    }

    // MINUS button
    if (e.target.classList.contains('minus')) {
        const wrapper = e.target.closest('.d-flex');
        const input = wrapper.querySelector('.qa-input');
        let value = parseInt(input.value);

        if (value > 1) { // minimum limit
            input.value = value - 1;
        }
    }
});

// more plus minus

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

        // Sticky Header Animation
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass("fixed");
            } else {
                $('.header').removeClass("fixed");
            }
        });
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

// Dropdown Menu Interaction
$(document).on('click', '.nav-dropdown', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // Close other dropdowns if any
    $('.nav-dropdown-box').not($(this).closest('.nav-dropdown-box')).removeClass('active');
    // Toggle current
    $(this).closest('.nav-dropdown-box').toggleClass('active');
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.nav-dropdown-box').length) {
        $('.nav-dropdown-box').removeClass('active');
    }
});
// Dropdown Menu Interaction


document.addEventListener('DOMContentLoaded', function () {

    // Set up hover animations for each entry
    document.querySelectorAll('.winner-item').forEach((entry, index) => {
        entry.addEventListener('mouseenter', () => {
            // Create hover effect
            gsap.to(entry, {
                duration: 0.3,
                x: 10,
                backgroundColor: 'rgba(39, 39, 42, 0.3)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                ease: 'power1.out'
            });

            // Animate the prize amount with a quick bounce
            const prizeElement = entry.querySelector('.prize-amount');
            if (prizeElement) {
                gsap.fromTo(prizeElement,
                    { scale: 1 },
                    { scale: 1.1, duration: 0.3, yoyo: true, repeat: 1, ease: 'back.out(1.5)' }
                );
            }

            // Pulse the badge
            const badgeElement = document.getElementById(`winner-badge-${index}`);
            if (badgeElement) {
                gsap.to(badgeElement, {
                    duration: 0.5,
                    scale: 1.15,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power1.inOut'
                });
            }

            // Create mini confetti effect
            if (Math.random() > 0.5) {
                createConfetti(entry);
            }
        });

        entry.addEventListener('mouseleave', () => {
            gsap.to(entry, {
                duration: 0.3,
                x: 0,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                ease: 'power1.in'
            });
        });
    });

    // Function to create confetti effect
    function createConfetti(parentElement) {
        const colors = ['#321060'];
        const rect = parentElement.getBoundingClientRect();

        for (let i = 0; i < 15; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * 100}%`;
            parentElement.appendChild(confetti);

            gsap.to(confetti, {
                duration: 1 + Math.random(),
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
                opacity: 0,
                scale: 0,
                rotation: Math.random() * 360,
                ease: 'power1.out',
                onComplete: () => {
                    confetti.remove();
                }
            });
        }
    }

    // Animate badges on page load
    document.querySelectorAll('[id^="winner-badge-"]').forEach((badge, index) => {
        gsap.to(badge, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2
        });
    });
});

/* Competition Page Logic */
$(document).ready(function () {
    // 1. Slick Gallery
    if ($('.comp-slider-main').length) {
        $('.comp-slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.comp-slider-thumb'
        });
        $('.comp-slider-thumb').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.comp-slider-main',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            arrows: false,
            variableWidth: true
        });
    }

    // 2. Related Products Slider
    if ($('.related-slider').length) {
        $('.related-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    // 3. noUiSlider for Tickets
    var slider = document.getElementById('ticket-slider');
    if (slider) {
        noUiSlider.create(slider, {
            start: [1],
            connect: [true, false],
            step: 1,
            range: {
                'min': 1,
                'max': 1000
            },
            tooltips: true,
            format: wNumb({
                decimals: 0
            })
        });

        var ticketTotalSpan = document.getElementById('ticket-total');
        var pricePerTicket = 0.00; // Free

        slider.noUiSlider.on('update', function (values, handle) {
            var val = parseInt(values[handle]);

            // Update UI if needed
            var total = (val * pricePerTicket).toFixed(2);
            if (ticketTotalSpan) ticketTotalSpan.innerText = total;

            // Sync with radio buttons if value matches
            $('input[name="ticket_preset"]').prop('checked', false);
            $('input[name="ticket_preset"][value="' + val + '"]').prop('checked', true);

            // Update "Add to cart" button text
            $('#add-to-cart-btn').text('Add ' + val + ' tickets to basket');
        });

        // Ticket Preset Radio Click
        $('input[name="ticket_preset"]').on('change', function () {
            var val = $(this).val();
            // Check if slider exists and set value
            if (slider && slider.noUiSlider) {
                slider.noUiSlider.set(val);
            }
        });

        // Minus / Plus Buttons
        $('#btn-minus').on('click', function () {
            var currentVal = parseInt(slider.noUiSlider.get());
            if (currentVal > 1) {
                slider.noUiSlider.set(currentVal - 1);
            }
        });

        $('#btn-plus').on('click', function () {
            var currentVal = parseInt(slider.noUiSlider.get());
            if (currentVal < 1000) {
                slider.noUiSlider.set(currentVal + 1);
            }
        });
    }

    // 4. Tabs (Online / Postal)
    $('.comp-tab-btn').on('click', function () {
        $('.comp-tab-btn').removeClass('active');
        $(this).addClass('active');

        var tabId = $(this).data('tab');
        $('.comp-tab-content').hide();
        $('#tab-' + tabId).fadeIn();
    });

    // 5. Countdown Timer
    var countdownEl = document.getElementById('countdown-timer');
    if (countdownEl) {
        // Set target date: Jan 31st 7:00pm (Use current year or next)
        var now = new Date();
        var currentYear = now.getFullYear();
        var targetDate = new Date("Jan 31, " + currentYear + " 19:00:00").getTime();

        // If date has passed, add 1 year
        if (now.getTime() > targetDate) {
            targetDate = new Date("Jan 31, " + (currentYear + 1) + " 19:00:00").getTime();
        }

        var x = setInterval(function () {
            var nowTime = new Date().getTime();
            var distance = targetDate - nowTime;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $('#days').text(days);
            $('#hours').text(hours);
            $('#minutes').text(minutes);
            $('#seconds').text(seconds);

            if (distance < 0) {
                clearInterval(x);
                $('#countdown-timer').html('<div class="text-white text-center w-100"><h3>EXPIRED</h3></div>');
            }
        }, 1000);
    }

    // New Competition Card Timers
    function startCompTimers() {
        $('.comp-timer-wrapper').each(function () {
            let $timer = $(this);
            let days = parseInt($timer.find('.timer-box:eq(0) .timer-num').text());
            let hours = parseInt($timer.find('.timer-box:eq(1) .timer-num').text());
            let mins = parseInt($timer.find('.timer-box:eq(2) .timer-num').text());
            let secs = parseInt($timer.find('.timer-box:eq(3) .timer-num').text());

            // Convert to total seconds
            let totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (mins * 60) + secs;

            if (totalSeconds > 0) {
                let interval = setInterval(function () {
                    totalSeconds--;

                    if (totalSeconds <= 0) {
                        clearInterval(interval);
                        $timer.html('<div class="text-white text-center w-100">EXPIRED</div>');
                        return;
                    }

                    let d = Math.floor(totalSeconds / (24 * 60 * 60));
                    let h = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
                    let m = Math.floor((totalSeconds % (60 * 60)) / 60);
                    let s = totalSeconds % 60;

                    $timer.find('.timer-box:eq(0) .timer-num').text(d);
                    $timer.find('.timer-box:eq(1) .timer-num').text(h);
                    $timer.find('.timer-box:eq(2) .timer-num').text(m);
                    $timer.find('.timer-box:eq(3) .timer-num').text(s);
                }, 1000);
            }
        });
    }

    startCompTimers();
});

/* Ticket List Detail (TLD) Logic */
$(document).ready(function () {
    // 1. Slider Value Update
    var tldSlider = document.getElementById('tld-ticket-slider');
    if (tldSlider && !tldSlider.noUiSlider) {
        // Initialize noUiSlider if it hasn't been yet
        noUiSlider.create(tldSlider, {
            start: [20],
            connect: [true, false],
            step: 1,
            range: {
                'min': 1,
                'max': 1000
            }
        });

        tldSlider.noUiSlider.on('update', function (values, handle) {
            var val = parseInt(values[handle]);
            $('#slider-value').text(val);
            $('.tld-add-btn, .comp-add-btn').text('Add ' + val + ' tickets to basket');

            // Move the value box to follow the handle
            var handlePos = values[handle]; // This is the value (1-1000)
            var percentage = (handlePos - 1) / (1000 - 1) * 100;

            // Adjust for the width of the box itself to keep it centered
            $('.tld-value-display').css({
                'left': percentage + '%',
                'transform': 'translateX(-50%)'
            });
        });

        // TLD Minus / Plus
        $('#tld-btn-minus').on('click', function () {
            var currentVal = parseInt(tldSlider.noUiSlider.get());
            if (currentVal > 1) tldSlider.noUiSlider.set(currentVal - 1);
        });

        $('#tld-btn-plus').on('click', function () {
            var currentVal = parseInt(tldSlider.noUiSlider.get());
            if (currentVal < 1000) tldSlider.noUiSlider.set(currentVal + 1);
        });
    }

    // 2. Bundle Button Clicks
    $('.tld-bundle-btn').on('click', function () {
        $('.tld-bundle-btn').removeClass('active');
        $(this).addClass('active');

        // Extract number from text
        var text = $(this).text();
        var match = text.match(/\d+/);
        if (match && tldSlider && tldSlider.noUiSlider) {
            tldSlider.noUiSlider.set(parseInt(match[0]));
        }
    });

    // 3. TLD Tabs
    $('.tld-tab-btn').on('click', function () {
        $('.tld-tab-btn').removeClass('active');
        $(this).addClass('active');

        var tabId = $(this).data('tab');
        $('.tld-tab-content').hide();
        $('#tab-' + tabId).fadeIn();
    });

    // 4. Radio Card Selection
    $('.tld-radio-card').on('click', function () {
        $('.tld-radio-card').removeClass('active');
        $(this).addClass('active');
        $(this).find('input[type="radio"]').prop('checked', true);
    });

    // 5. TLD Timer Logic
    function startTldTimer() {
        var tldTimerEl = $('.tld-countdown-grid');
        if (tldTimerEl.length) {
            // Target: March 1st 8:00pm
            var target = new Date("March 1, 2026 20:00:00").getTime();

            var x = setInterval(function () {
                var now = new Date().getTime();
                var distance = target - now;

                if (distance < 0) {
                    clearInterval(x);
                    return;
                }

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                tldTimerEl.find('.tld-time-box:eq(0) .tld-time-val').text(days);
                tldTimerEl.find('.tld-time-box:eq(1) .tld-time-val').text(hours);
                tldTimerEl.find('.tld-time-box:eq(2) .tld-time-val').text(minutes);
                tldTimerEl.find('.tld-time-box:eq(3) .tld-time-val').text(seconds);
            }, 1000);
        }
    }
    startTldTimer();
});

/* Instant Win Modal Functions */
function openInstantWinModal(title, tickets) {
    $('#tld-modal-title').text(title);
    var container = $('#tld-ticket-container');
    container.empty();

    tickets.forEach(function (num) {
        container.append('<div class="tld-ticket-item">' + num + '</div>');
    });

    $('#tld-modal-overlay').css('display', 'flex').hide().fadeIn(300);
}

function closeInstantWinModal() {
    $('#tld-modal-overlay').fadeOut(300);
}

// Close on outside click
$(window).on('click', function (e) {
    if ($(e.target).is('#tld-modal-overlay')) {
        closeInstantWinModal();
    }
});
// Ticket List View (TLV) Logic
$(document).ready(function () {
    // Search simulation
    $('.tlv-input').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".tlv-table tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // Pagination Click simulation
    $('.tlv-page-btn').not('.disabled').on('click', function () {
        console.log("Pagination clicked");
    });

    // Add to Cart Modal Logic
    $('#atc-trigger-btn').on('click', function () {
        var tldSlider = document.getElementById('tld-ticket-slider');
        if (tldSlider && tldSlider.noUiSlider) {
            var val = parseInt(tldSlider.noUiSlider.get());
            $('#atc-modal-overlay .atc-header-left span').text('x' + val + ' Added To Cart');
        }
        $('#atc-modal-overlay').css('display', 'flex').hide().fadeIn(300);
    });

    $('#atc-close').on('click', function () {
        $('#atc-modal-overlay').fadeOut(300);
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('#atc-modal-overlay')) {
            $('#atc-modal-overlay').fadeOut(300);
        }
    });

    // Checkout Accordion Logic
    $('#checkout-accordion-toggle').on('click', function () {
        var $body = $('#checkout-accordion-body');
        var $icon = $('#accordion-icon');

        $body.stop().slideToggle(300);

        if ($icon.hasClass('fa-minus')) {
            $icon.removeClass('fa-minus').addClass('fa-plus');
        } else {
            $icon.removeClass('fa-plus').addClass('fa-minus');
        }
    });

    // Discount Code Popup Toggle
    $('#discount-btn').on('click', function (e) {
        e.stopPropagation();
        $('#discount-popup').fadeToggle(300);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.discount-container').length) {
            $('#discount-popup').fadeOut(300);
        }
    });

    // Spin Machine Logic using HTML symbols
    $('.th-reel-strip').each(function () {
        let $strip = $(this);
        let $originalSymbols = $strip.children().clone();

        // Clone original symbols multiple times to create a long strip
        for (let i = 0; i < 20; i++) {
            $strip.append($originalSymbols.clone());
        }
    });

    let isSpinning = false;
    let spinsRemaining = 3;

    $('#spin-machine-trigger').on('click', function () {
        if (isSpinning || spinsRemaining <= 0) return;

        isSpinning = true;
        spinsRemaining--;
        $('#spins-count').text(spinsRemaining);

        if (spinsRemaining === 0) {
            $(this).prop('disabled', true).text('Out of Spins');
        }

        $('.th-reel-strip').each(function (i) {
            let $strip = $(this);
            const symbolHeight = 114;

            // Reset to top without transition
            $strip.css({
                'transition': 'none',
                'transform': 'translateY(0)'
            });

            // Force reflow
            $strip[0].offsetHeight;

            // Large random move (e.g., spin through 40-60 symbols)
            let moveCount = 40 + Math.floor(Math.random() * 20);
            let stopOffset = moveCount * symbolHeight;

            setTimeout(() => {
                $strip.css({
                    'transition': `transform ${4 + (i * 0.5)}s cubic-bezier(0.1, 0.7, 0.1, 1)`,
                    'transform': `translateY(-${stopOffset}px)`
                });
            }, 50);
        });

        setTimeout(() => {
            isSpinning = false;
        }, 5500); // Wait for animations to finish
    });

    // Scratch Off Game Logic
    const canvas = document.getElementById('scratch-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let lastX, lastY;

        function initScratch() {
            // Get actual display size
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            // Fill with silver/gray cover
            ctx.fillStyle = '#777';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add texture noise
            for (let i = 0; i < 3000; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const alpha = Math.random() * 0.3;
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fillRect(x, y, 1, 1);
            }

            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 60; // Larger round brush
        }

        function getCoords(e) {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        }

        function scratch(e) {
            if (!isDrawing) return;

            const { x, y } = getCoords(e);

            ctx.beginPath();
            if (lastX !== undefined && lastY !== undefined) {
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(x, y);
            } else {
                ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
            }
            ctx.stroke();

            lastX = x;
            lastY = y;
        }

        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            const { x, y } = getCoords(e);
            lastX = x;
            lastY = y;
            scratch(e);
        });

        canvas.addEventListener('touchstart', (e) => {
            isDrawing = true;
            const { x, y } = getCoords(e);
            lastX = x;
            lastY = y;
            scratch(e);
            e.preventDefault();
        });

        window.addEventListener('mousemove', scratch);
        window.addEventListener('touchmove', (e) => {
            scratch(e);
            e.preventDefault();
        }, { passive: false });

        window.addEventListener('mouseup', () => {
            isDrawing = false;
            lastX = lastY = undefined;
        });
        window.addEventListener('touchend', () => {
            isDrawing = false;
            lastX = lastY = undefined;
        });

        // Use a small timeout to ensure container is rendered properly for sizing
        setTimeout(initScratch, 100);

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initScratch, 250);
        });
    }
});
