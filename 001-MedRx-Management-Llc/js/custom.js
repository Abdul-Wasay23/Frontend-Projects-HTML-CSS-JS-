

// This js is for smooth load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
// This js is for smooth load

// this js is for aos animation
function handleAOS() {
  if (typeof AOS !== "undefined") {
    if (window.innerWidth > 768) {
      AOS.init();
    } else {
      const aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        el.removeAttribute("data-aos");
        el.style.opacity = 1;
        el.style.transform = "none";
      });
    }
  } else {
    console.warn("AOS is not loaded.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handleAOS();

  window.addEventListener("resize", () => {
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
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hide");
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
  $(".sell_slider").slick({
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
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Custom buttons for navigation
  $(".prev-slide").click(function () {
    $(".sell_slider").slick("slickPrev"); // Go to previous slide
  });

  $(".next-slide").click(function () {
    $(".sell_slider").slick("slickNext"); // Go to next slide
  });
});

// sell_slider end

// clientSliderMain start

$(".clientSmallSlider").slick({
  speed: 300,
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1, // show multiple small slides (thumbnails)
  slidesToScroll: 1,
  focusOnSelect: true, // allow click to change main slider
  asNavFor: ".clientSliderMain",
});

$(".clientSliderMain").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".clientSmallSlider",
});

// clientSliderMain end

// service-slider start
$(".service-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoPlay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
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

// service-slider end

// product slider  start
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  centerPadding: "100px",
  focusOnSelect: true,
});
// product slider  end

// simple slick slider start
$(".tab_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
// simple slick slider end

// wow animation js
$(function () {
  new WOW().init();
});
// wow animation js

// Cart Plus minus
document.addEventListener("DOMContentLoaded", function () {
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const numberDisplay = document.getElementById("number");

  if (minusButton && plusButton && numberDisplay) {
    minusButton.addEventListener("click", function () {
      let currentValue = parseInt(numberDisplay.textContent);
      if (currentValue > 0) {
        numberDisplay.textContent = currentValue - 1;
      }
    });

    plusButton.addEventListener("click", function () {
      let currentValue = parseInt(numberDisplay.textContent);
      numberDisplay.textContent = currentValue + 1;
    });
  }
});
// Cart Plus minus

// Responsive Menu
$(function () {
  $("#menu").slicknav();
});
// Responsive Menu

// Header And Footer Layout
$(document).ready(function () {
  // Load header
  $("#Header").load("layout/header.html", function () {
    // Initialize responsive menu
    $("#menu").slicknav({
      prependTo: ".header",
      label: "",
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

  if (
    currentPage === "" ||
    currentPage === "index" ||
    currentPage === "index.html"
  ) {
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

// This js is for video call
document
  .querySelector(".video-play-pause")
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
  });

document
  .querySelector(".microphone-play-pause")
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
  });
// This js is for video call
