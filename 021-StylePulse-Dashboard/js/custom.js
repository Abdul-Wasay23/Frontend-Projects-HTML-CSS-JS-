// Responsive Menu  
$(function () {
    $('#menu').slicknav();
});
// Responsive Menu  

// Sidebar And TopBar Layout 
$(document).ready(function () {
    $("#Sidebar").load("layout/sidebar.html", function () {
        $('#menu').slicknav({
            prependTo: ".sidebar",
            label: ''
        });
        highlightActiveMenu();
    });
    $("#TopBar").load("layout/topbar.html", function () {
        initializeDropdowns();
    });
});
// Sidebar And TopBar Layout

// this js is for Active Menu
function highlightActiveMenu() {
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();
    if (currentPage === "" || currentPage === "index" || currentPage === "index.html" || currentPage === "index1.html" || currentPage === "index2.html" || currentPage === "index3.html") {
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


// Profile Questionnaire Interaction
$(document).ready(function () {
    let currentStep = 0;
    const steps = $('.question-block');
    const totalSteps = steps.length;
    updateProgress(0);
    $('#next-question-btn').on('click', function (e) {
        e.preventDefault();
        const currentBlock = $(steps[currentStep]);
        const selectedOption = currentBlock.find('input[type="radio"]:checked').val();
        if (selectedOption) {
            console.log("Step " + (currentStep + 1) + " Answer: " + selectedOption);
            currentBlock.hide();
            currentStep++;
            if (currentStep < totalSteps) {
                $(steps[currentStep]).fadeIn();
                updateProgress(currentStep);
            } else {
                $('.completion-msg').fadeIn();
                $('#next-question-btn').hide();
                $('#quest-progress').hide();
            }
        } else {
            alert("Please select an option to proceed.");
        }
    });
    function updateProgress(index) {
        const dots = $('#quest-progress span');
        dots.removeClass('active');
        if (dots.length > index) {
            $(dots[index]).addClass('active');
        }
    }
});
// Profile Questionnaire Interaction


// Profile Image Upload Preview
$(document).ready(function () {
    $('#profile-upload').change(function (e) {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-img-container img').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });
});

// Style Profile Dropdown
$(document).ready(function () {
    $('.style-dropdown-btn').on('click', function () {
        // Toggle the extra items with a slide effect
        $('.extra-style-item').slideToggle(300);

        // Toggle the icon class between down and up
        var icon = $(this).find('i');
        if (icon.hasClass('fa-chevron-down')) {
            icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else if (icon.hasClass('fa-angle-double-down')) {
            icon.removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
        } else if (icon.hasClass('fa-angle-double-up')) {
            icon.removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
        } else {
            icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });
});

// Affiliate Products Page Interactions
$(document).ready(function () {
    $('.filter-btn').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('dropdown-toggle-btn')) {
            $(this).toggleClass('active');
            $(this).siblings('.filter-dropdown-menu').slideToggle(200);

            var icon = $(this).find('i');
            if (icon.hasClass('fa-chevron-down')) {
                icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else {
                icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        } else {
            $(this).closest('.filter-buttons').find('.filter-btn').not('.dropdown-toggle-btn').removeClass('active');
            $(this).addClass('active');

            $('.filter-dropdown-menu').slideUp(200);
            $('.dropdown-toggle-btn').find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.filter-dropdown-wrapper').length) {
            $('.filter-dropdown-menu').slideUp(200);
            $('.dropdown-toggle-btn').find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });

    $('.bookmark-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        var icon = $(this).find('i');
        if (icon.hasClass('fa-regular')) {
            icon.removeClass('fa-regular').addClass('fa-solid');
        } else {
            icon.removeClass('fa-solid').addClass('fa-regular');
        }
    });

    // Profile Picture Upload Logic
    $(document).on('click', '.change-pic-btn', function (e) {
        e.preventDefault();
        $('#profile-upload').click();
    });

    $(document).on('change', '#profile-upload', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profile-preview').attr('src', e.target.result);
            }
            reader.readAsDataURL(file);
        }
    });

    // Date of Birth Datepicker
    if ($('#dob-datepicker').length > 0) {
        flatpickr("#dob-datepicker", {
            dateFormat: "d/m/Y",
            disableMobile: "true",
            // Custom styling logic if needed
        });
    }

    // Profile Form Navigation Logic
    $('.profile-steps .theme-btn').on('click', function () {
        if ($(this).text() === 'NEXT') {
            $('#step1').fadeOut(300, function () {
                $('#step2').fadeIn(300);
            });
        } else if ($(this).hasClass('prev-btn')) {
            $('#step2').fadeOut(300, function () {
                $('#step1').fadeIn(300);
            });
        }
    });

    // Service Detail Slider Initialization
    if ($('.service-detail-slider').length > 0) {
        $('.service-detail-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }

    // Upload Box Functionality
    const dropzone = $('.dropzone-area');
    const uploadInput = $('#upload-input');

    if (dropzone.length > 0) {
        dropzone.on('click', function () {
            uploadInput.click();
        });

        uploadInput.on('change', function () {
            const files = this.files;
            handleFiles(files);
        });

        dropzone.on('dragover', function (e) {
            e.preventDefault();
            $(this).addClass('dragover');
        });

        dropzone.on('dragleave', function () {
            $(this).removeClass('dragover');
        });

        dropzone.on('drop', function (e) {
            e.preventDefault();
            $(this).removeClass('dragover');
            const files = e.originalEvent.dataTransfer.files;
            handleFiles(files);
        });

        function handleFiles(files) {
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        $('#upload-preview').attr('src', e.target.result);
                        $('.dropzone-content').hide();
                        $('.preview-container').fadeIn();
                    }
                    reader.readAsDataURL(file);
                } else {
                    alert('Please upload an image file.');
                }
            }
        }
    }

    // Zoom Controls Functionality
    const zoomText = $('.zoom-text');
    let currentZoom = 100;

    $('.zoom-btn').each(function () {
        const btn = $(this);
        btn.on('click', function () {
            if (btn.text() === '+') {
                currentZoom = Math.min(currentZoom + 10, 200);
            } else if (btn.text() === '-') {
                currentZoom = Math.max(currentZoom - 10, 50);
            }
            zoomText.text(currentZoom + '%');

            // Apply zoom to the preview image
            $('#upload-preview').css('transform', `scale(${currentZoom / 100})`);
        });
    });
});


// Chat Functionality
$(document).ready(function () {
    const chatInput = $('#chat-input');
    const sendBtn = $('#chat-send-btn');
    const chatBody = $('.chat-body');
    const attachBtn = $('#chat-attach-btn');
    const fileInput = $('#chat-file-input');
    const emojiBtn = document.querySelector('#emoji-picker-btn');

    // Initialize Emoji Picker (EmojiButton v3.1.1)
    if ($('#emoji-picker-btn').length > 0) {
        try {
            const picker = new EmojiButton({
                position: 'top-start',
                zIndex: 9999,
                showSearch: false,
                showVariants: false
            });

            picker.on('emoji', emoji => {
                const currentInput = document.getElementById('chat-input');
                if (currentInput) {
                    currentInput.value += emoji;
                    currentInput.focus();
                }
            });

            $('#emoji-picker-btn').on('click', function (e) {
                e.preventDefault();
                picker.togglePicker(this);
            });
        } catch (e) {
            console.error("EmojiButton v3 initialization failed:", e);
        }
    }

    function sendMessage(content, isImage = false, fileName = null) {
        if (!content && !isImage && !fileName) return;

        let messageBody = '';
        if (isImage) {
            messageBody = `<img src="${content}" style="max-width: 100%; border-radius: 8px; margin-bottom: 5px;" alt="Attached Image">`;
        } else if (fileName) {
            const isPdf = fileName.toLowerCase().endsWith('.pdf');
            const iconClass = isPdf ? 'fa-file-pdf' : 'fa-file-word';
            const iconColor = isPdf ? '#ff0000' : '#1e3a8a';
            messageBody = `
                <div class="file-attachment" style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.05); padding: 10px; border-radius: 8px;">
                    <i class="fa-solid ${iconClass}" style="font-size: 24px; color: ${iconColor};"></i>
                    <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        <span style="font-weight: 600; font-size: 12px;">${fileName}</span>
                    </div>
                </div>`;
        } else {
            messageBody = `<p>${content}</p>`;
        }

        const messageHtml = `
            <div class="message outgoing">
                <div class="msg-bubble">
                    ${messageBody}
                </div>
                <div class="msg-avatar">
                    <img src="images/user-1.jpg" alt="Ellie Clark">
                </div>
            </div>
        `;

        chatBody.append(messageHtml);
        chatInput.val('');

        // Scroll to bottom
        chatBody.animate({ scrollTop: chatBody[0].scrollHeight }, 300);
    }

    sendBtn.on('click', function () {
        sendMessage(chatInput.val());
    });

    chatInput.on('keypress', function (e) {
        if (e.which === 13) {
            sendMessage(chatInput.val());
        }
    });

    // File Attachment
    attachBtn.on('click', function () {
        fileInput.attr('accept', 'image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        fileInput.click();
    });

    fileInput.on('change', function () {
        const file = this.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    sendMessage(e.target.result, true);
                };
                reader.readAsDataURL(file);
            } else {
                sendMessage(null, false, file.name);
            }
        }
        this.value = '';
    });
});
