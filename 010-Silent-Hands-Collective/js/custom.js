
$("#Header").load("layout/header.html");
$("#Test").load("layout/test.html");
$("#Footer").load("layout/footer.html");




// blogslider start
$('.banner_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
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

// blogslider end

// simple slick slider start
$(".testi-slider").slick({
    arrows: true,
    dots: false,
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
            dots: false
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            dots: false

        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false

        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false


        }
    }
    ]
});
setInterval(function () {
    let next_img = $('.testi-box.slick-slide.slick-current').next().find('.testi-img>img').attr('src');
    let prev_img = $('.testi-box.slick-slide.slick-current').prev().find('.testi-img>img').attr('src');
    $('.testi-slider button.slick-prev').css('background-image', 'url(' + prev_img + ')');
    $('.testi-slider button.slick-next').css('background-image', 'url(' + next_img + ')');
    // $('.testi-slider button.slick-prev').css('background-image', 'url(' + prev_img + ')');
    // $('.testi-slider button.slick-next').css('background-image', 'url(' + next_img + ')');
}, 100);



$(".testi-slider").on('afterChange', function () {
    let crr = $(".testi-slider .slick-current").index();
    let total = $(".testi-slider .slick-slide").length;
    $('.sld-counts>span').eq(0).text(crr < 10 ? '0' + crr : crr);
    $('.sld-counts>span.small').eq(1).text(total < 10 ? '0' + total : total);
});



$('.categ_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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


$('.productdetailfor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.productdetailnav',
});
$('.productdetailnav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    asNavFor: '.productdetailfor',
    vertical: false,
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

/////////////////// product +/-
$(document).ready(function () {
    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
        if ($(this).hasClass('minus')) {
            var count = parseFloat($input.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count < 2) {
                $(this).addClass('dis');
            } else {
                $(this).removeClass('dis');
            }
            $input.val(count);
        } else {
            var count = parseFloat($input.val()) + 1
            $input.val(count);
            if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
            }
        }

        $input.change();
        return false;
    });

});
// product +/-



// upload image
document.getElementById('readUrl').addEventListener('change', function () {
    if (this.files[0]) {
        var picture = new FileReader();
        picture.readAsDataURL(this.files[0]);
        picture.addEventListener('load', function (event) {
            let src = event.target.result;
            let div = '<div class="resize-drag"><span><i class="fal fa-times-circle"></i></span><i class="fal fa-arrows-v"></i><img id="uploadedImage" class="front cls-cmmn" src="' + src + '" alt="Uploaded Image" accept="image/png, image/jpeg"></div>';

            $('.active .upl-img').append(div);
            $('.resize-drag>span').click(function () {
                $(this).parent().remove();
                $('html').css('cursor', 'auto');
            })
        });
    }
});
// end


// Add iamge
$('.art-box>img').click(function () {
    let src = $(this).attr('src');
    let div = '<div class="resize-drag"><span><i class="fal fa-times-circle"></i></span><i class="fal fa-arrows-v"></i><img id="uploadedImage" class="front cls-cmmn" src="' + src + '" alt="Uploaded Image" accept="image/png, image/jpeg"></div>';

    $('.active .upl-img').append(div);
    $('.resize-drag>span').click(function () {
        $(this).parent().remove();
        $('html').css('cursor', 'auto');
    })
    $('.add-arts').removeClass('show');
});
$('.add-Arts-btn').click(function () {
    $('.add-arts').addClass('show');
});
$('.close-pp>i').click(function () {
    $('.add-arts').removeClass('show');
});

$('[targt]').click(function () {
    $(this).closest('.art-step').removeClass('active');
    $(this).closest('.art-step').next().addClass('active');
    $(this).closest('.art-step').next().find('.this-one').removeClass('this-one');
    $('[triger="' + $(this).attr('targt') + '"]').addClass('this-one');
});
$('.back').click(function () {
    $(this).closest('.art-step').removeClass('active');
    $(this).closest('.art-step').prev().addClass('active');
});
// end


// testi slider start

// simple slick slider end
jQuery(document).ready(function () {
    $('#welcome_modal').modal('show');

});




// blogslider start
$(".graphic-slider").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
        },
    },
    ],
});
var $status = $(".start_number");
var $slickElement = $(".graphic-slider");
$slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text("0" + i + "");
    }
);
// blogslider end

// Testi slider start
$(".testi-slider").slick({
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
// wow animation js

$(function () {
    new WOW().init();
});


// responsive menu js

$(function () {
    $('#menu').slicknav();
});




// slick slider in tabs js end









// responsive menu js 

$(function () {
    $('#menu').slicknav();
});





// product detail slider js 

$('.hot_deal_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.hot_deal_small',
});
$('.hot_deal_small').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.hot_deal_big',
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: '5%',
    focusOnSelect: true,
});




// PRODUCT QUANTITY
(function () {

    window.inputNumber = function (el) {

        var min = el.attr('min') || false;
        var max = el.attr('max') || false;

        var els = {};

        els.dec = el.prev();
        els.inc = el.next();

        el.each(function () {
            init($(this));
        });

        function init(el) {

            els.dec.on('click', decrement);
            els.inc.on('click', increment);

            function decrement() {
                var value = el[0].value;
                value--;
                if (!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment() {
                var value = el[0].value;
                value++;
                if (!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();

inputNumber($('.input-number'));
inputNumber($('.input-number1'));

// $("#Slider").change(function() {
//         var value = $(this).val();
//         $('#uploadedImage').css("transform", "scale(" + value + ")");
//       });
// $("#myTabContent .tab-pane").click(function() {


//     if ($("#Front.active")) {
//         const slider = document.getElementById('Slider');
//         slider.addEventListener('input', handleChange);

//         function handleChange(e) {
//             const img = document.getElementById("#Front uploadedImage");
//             const { value, max } = e.target;
//             img.style.width = `${value*max}px`;
//             img.style.height = `${value*max}px`;

//         }
//     } else if ("#back.active") {
//         const slider = document.getElementById('Slider');
//         slider.addEventListener('input', handleChange);

//         function handleChange(e) {
//             const img = document.getElementById("#back uploadedImage");
//             const { value, max } = e.target;
//             img.style.width = `${value*max}px`;
//             img.style.height = `${value*max}px`;

//         }
//     } else {


//     }

// })


// design it sec js




