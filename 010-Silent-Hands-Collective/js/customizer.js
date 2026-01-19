$('[targt]').click(function () {

    $(this).closest('.art-step').removeClass('active');

    $(this).closest('.art-step').next().addClass('active');

    $(this).closest('.art-step').next().find('.this-one').removeClass('this-one');

    $('[triger="' + $(this).attr('targt') + '"]').addClass('this-one');

})

$('.back').click(function () {

    $(this).closest('.art-step').removeClass('active');

    $(this).closest('.art-step').prev().addClass('active');

})





$('#designform button:not(#buybutton)').click(function (e) {

    e.preventDefault();

});

$('.colorclass').click(function (e) {

    var value = $(this).data('id');

    $("#color_id").val(value);

});





$('.upl-img>.resize-drag:first-child').addClass("emoji-drag");





$('.shirt-selection .select-box').click(function () {

    if ($('#crw-neck').is(':checked')) {

        if ($('#long-slv').is(':checked')) {

            $(".shirt-frontview").attr("src", "images/round-half.png");

            $(".shirt-backview").attr("src", "images/round-half.png");

        } else if ($('#long-slv').not(':checked')) {

            $(".shirt-frontview").attr("src", "images/round-half.png");

            $(".shirt-backview").attr("src", "images/round-half.png");

        }



    } else if ($('#v-nack').is(':checked')) {

        if ($('#long-slv').is(':checked')) {

            $(".shirt-frontview").attr("src", "images/round-half.png");

            $(".shirt-backview").attr("src", "images/round-half.png");

        } else if ($('#long-slv').not(':checked')) {

            $(".shirt-frontview").attr("src", "images/round-half.png");

            $(".shirt-backview").attr("src", "images/round-half.png");

        }

    }

});







$('.desin-text.wintr .select-box').click(function () {

    if ($('#long-slv').is(':checked')) {

        $('#long-slv').prop("checked", false);

    }

    if ($('#tank_top').is(':checked')) {

        $(".shirt-frontview").attr("src", "images/hoodie0.png");

        $(".shirt-backview").attr("src", "images/hoodie0.png");

    } else if ($('#sweatshirt').is(':checked')) {

        $(".shirt-frontview").attr("src", "images/hoodie0.png");

        $(".shirt-backview").attr("src", "images/hoodie0.png");

    } else if ($('#hoodies').is(':checked')) {

        $(".shirt-frontview").attr("src", "images/hoodie0.png");

        $(".shirt-backview").attr("src", "images/hoodie0.png");

    }

});



// design it sec js









$('#colorPicker').change(function () {

    $("body").get(0).style.setProperty("--color", $('.pick_colr #colorPicker').val());

})





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

$('.art-box>img').click(function () {

    let src = $(this).attr('src');

    let div = '<div class="resize-drag"><span><i class="fal fa-times-circle"></i></span><i class="fal fa-arrows-v"></i><img id="uploadedImage" class="front cls-cmmn" src="' + src + '" alt="Uploaded Image" accept="image/png, image/jpeg"></div>';



    $('.active .upl-img').append(div);

    $('.resize-drag>span').click(function () {

        $(this).parent().remove();

        $('html').css('cursor', 'auto');

    })

    $('.add-arts').removeClass('show');

})

$('.add-Arts-btn').click(function () {

    $('.add-arts').addClass('show');

})

$('.close-pp>i').click(function () {

    $('.add-arts').removeClass('show');

})









// $('#printShirt').on('input', function() {

//     $('.active #output').html($('#printShirt')[0].value);

// });

let id = 1;

$('.add-text').click(function () {

    let text = $(this).closest('.des-sec-text').find('#printShirt').val();

    let fontStyle = $(this).closest('.des-sec-text').find('#fonts').val();

    let fontSize = $(this).closest('.des-sec-text').find('#font_size').val();

    let color = $(this).closest('.des-sec-text').find('#font_color').val();

    let Bold = $(this).closest('.des-sec-text').find('#bold_this.actv').html();

    if (Bold == null) {

        Bold = "normal"

    } else {

        Bold = "bold"

    }

    let Italic = $(this).closest('.des-sec-text').find('#italic_this.actv').html();

    if (Italic == null) {

        Italic = "normal"

    } else {

        Italic = "italic"

    }

    let align = $(this).closest('.des-sec-text').find('.align_text.actv').attr('cont');

    if (align == null) {

        align = "left"

    } else {

        align = align;

    }

    let div = '<div class="resize-drag-text" style="justify-content:' + align + '" txtid="' + id + '"><span class="close1"><i class="fal fa-times-circle"></i></span><p class="out-put" contenteditable="true" style="font-family:' + fontStyle + ';font-size:' + fontSize + 'px;font-weight:' + Bold + ';font-style:' + Italic + ';color:' + color + ';text-align:' + align + '" clr="' +

        color + '">' + text + '</p><span class="resze"><i class="fa-solid fa-down-left-and-up-right-to-center"></i></span></div>';

    $('.active .upl-img').append(div);

    $('.close1').click(function () {

        $(this).parent().remove();

        $('html').css('cursor', 'auto');

        $('.des-sec-text').removeClass('edit');

        $('.des-sec-text').find('input').each(function () {

            $(this).val('');

        })

        $('.actv').removeClass('actv');

    })

    id = id + 1;

    $('.des-sec-text').find('input').each(function () {

        $(this).val('');

    })

    $('.actv').removeClass('actv');



    // Edit

    $('.resize-drag-text').click(function () {

        $('.resize-drag-text').removeClass('edits')

        $(this).addClass('edits');

        $('.des-sec-text').addClass('edit');

        $('.des-sec-text').attr('tid', $(this).attr('txtid'));

        $('.des-sec-text.edit>input').val($(this).find('.out-put').text());

        $('.des-sec-text.edit #font_size').val(parseInt($(this).find('.out-put').css('font-size')));

        $('.des-sec-text.edit #font_color').val($(this).find('.out-put').attr('clr'));



        if ($(this).find('.out-put').css('font-weight') == "700") {

            $('#bold_this').addClass('actv')

        }

        if ($(this).find('.out-put').css('font-style') == "italic") {

            $('#italic_this').addClass('actv')

        }

        $('.align_text').removeClass('actv');

        $('.align_text[cont=' + $(this).css('justify-content') + ']').addClass('actv');

    })

    $('.image_container').click(function (e) {

        if ($(e.target).closest('.resize-drag-text').length != 0) return false;

        $('.resize-drag-text').removeClass('edits');

        $('.des-sec-text').removeClass('edit');

        $('.des-sec-text').find('input').each(function () {

            $(this).val('');

        })

        $('.actv').removeClass('actv');

    });

    $('.edit-text').click(function () {

        let texte = $(this).closest('.des-sec-text.edit').find('#printShirt').val();

        let fontStylee = $(this).closest('.des-sec-text').find('#fonts').val();

        let fontSizee = $(this).closest('.des-sec-text').find('#font_size').val();

        let colore = $(this).closest('.des-sec-text').find('#font_color').val();

        let Bolde = $(this).closest('.des-sec-text').find('#bold_this.actv').html();

        if (Bolde == null) {

            Bolde = "normal"

        } else {

            Bolde = "bold"

        }

        let Italice = $(this).closest('.des-sec-text').find('#italic_this.actv').html();

        if (Italice == null) {

            Italice = "normal"

        } else {

            Italice = "italic"

        }

        let align = $(this).closest('.des-sec-text').find('.align_text.actv').attr('cont');

        if (align == null) {

            align = "left"

        } else {

            align = align;

        }

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').text(texte)

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').css('font-family', fontStylee)

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').css('font-size', fontSizee + 'px')

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').css('color', colore)

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').css('font-weight', Bolde)

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').css('font-style', Italice)

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + '] p').css('text-align', align)

        $('.resize-drag-text[txtid=' + $('.des-sec-text').attr('tid') + ']').css('justify-content', align)

    })

})

setInterval(function () {

    if ($('input#font_size').val() == '') {

        $('input#font_size').val(16)

    }

}, 100)





$('#bold_this').click(function () {

    if ($(this).hasClass('actv')) {

        $(this).removeClass('actv');

    } else {

        $(this).addClass('actv');

    }

})

$('#italic_this').click(function () {

    if ($(this).hasClass('actv')) {

        $(this).removeClass('actv');

    } else {

        $(this).addClass('actv');

    }

})

$('.align_text').click(function () {

    $('.align_text').removeClass('actv');

    $(this).addClass('actv');

})























let listElements = document.querySelectorAll('.des-rad-colr li');

listElements.forEach(element => {

    element.addEventListener('click', function () {

        let clr = this.getAttribute('data-color');

        let flrt = this.getAttribute('data-filter');

        document.documentElement.style.setProperty('--color', clr);

        document.documentElement.style.setProperty('--filter', flrt);

        listElements.forEach(element => {

            element.style.border = "none";

        })



    })

});













// const inputFile = document.querySelector(".picture__input");

// const pictureImage = document.querySelector(".picture__image");

// const pictureImageTxt = "Choose an image";

// pictureImage.innerHTML = pictureImageTxt;



// inputFile.addEventListener("change", function (e) {

//     const inputTarget = e.target;

//     const file = inputTarget.files[0];



//     if (file) {

//         const reader = new FileReader();



//         reader.addEventListener("load", function (e) {

//             const readerTarget = e.target;



//             const img = document.createElement("img");

//             img.src = readerTarget.result;

//             img.classList.add("picture__img");



//             pictureImage.innerHTML = "";

//             pictureImage.appendChild(img);

//         });



//         reader.readAsDataURL(file);

//     } else {

//         pictureImage.innerHTML = pictureImageTxt;

//     }

// });





// wow animation js 



$(function () {

    new WOW().init();

});





// product detail slider js 



// $('.hot_deal_big').slick({

//     slidesToShow: 1,

//     slidesToScroll: 1,

//     arrows: false,

//     fade: true,

//     asNavFor: '.hot_deal_small'

// });

// $('.hot_deal_small').slick({

//     slidesToShow: 3,

//     slidesToScroll: 1,

//     asNavFor: '.hot_deal_big',

//     dots: false,

//     centerMode: false,

//     focusOnSelect: true,

//     responsive: [{

//             breakpoint: 1024,

//             settings: {

//                 slidesToShow: 2,

//                 slidesToScroll: 1,

//                 infinite: true,

//                 dots: false

//             }

//         },

//         {

//             breakpoint: 768,

//             settings: {

//                 slidesToShow: 2,

//                 slidesToScroll: 1

//             }

//         },

//         {

//             breakpoint: 300,

//             settings: {

//                 slidesToShow: 1,

//                 slidesToScroll: 1,

//                 dots: false

//             }

//         }

//     ]

// });





var checked = $(".colored-radio").first();

checked.css('background', checked.attr('data-color'));



$(".colored-radio:not(:checked)").click(function () {

    checked.prop('checked', false);

    // checked.css('background', 'transparent');

    checked = $(this);

    checked.css('background', checked.attr('data-color'));

    displayIdChecked();

});



function displayIdChecked() {

    var id = $('.colored-radio:checked').attr('id');

    if (id == undefined)

        id = $(".colored-radio").first().attr('id');

    console.log(id);

}



// blogslider start





// blogslider end



// product slider jas start



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

    focusOnSelect: true

});

// product slider jas end



// simple slick slider start

$(".regular").slick({

    dots: true,

    infinite: true,

    speed: 300,

    autoplay: true,

    slidesToShow: 3,

    slidesToScroll: 3

});



// simple slick slider end

















// slick slider in tabs js start



function openCity(evt, cityName) {

    // Declare all variables

    var i, tabcontent, tablinks;



    // Get all elements with class="tabcontent" and hide them

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";

    }



    // Get all elements with class="tablinks" and remove the class "active"

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].className = tablinks[i].className.replace("active", "");

    }



    // Show the current tab, and add an "active" class to the button that opened the tab

    document.getElementById(cityName).style.display = "block";

    evt.currentTarget.className += "active";

}





// slick slider in tabs js end







// search button js



(function ($) {



    $.fn.searchBox = function (ev) {



        var $searchEl = $('.search-elem');

        var $placeHolder = $('.placeholder');

        var $sField = $('#search-field');



        if (ev === "open") {

            $searchEl.addClass('search-open')

        };



        if (ev === 'close') {

            $searchEl.removeClass('search-open'),

                $placeHolder.removeClass('move-up'),

                $sField.val('');

        };



        var moveText = function () {

            $placeHolder.addClass('move-up');

        }



        $sField.focus(moveText);

        $placeHolder.on('click', moveText);



        $('.submit').prop('disabled', true);

        $('#search-field').keyup(function () {

            if ($(this).val() != '') {

                $('.submit').prop('disabled', false);

            }

        });

    }



}(jQuery));



$('.search-btn').on('click', function (e) {

    $(this).searchBox('open');

    e.preventDefault();

});



$('.close').on('click', function () {

    $(this).searchBox('close');

});

// const slider = document.getElementById('Slider');

// slider.addEventListener('input', handleChange);



// function handleChange(e) {

//     const img = document.getElementById("uploadedImage");

//     const { value, max } = e.target;

//     img.style.width = `${value * max}px`;

//     img.style.height = `${value * max}px`;

// }



