import './form.scss'
import './form-mobile.scss'

const openForm = $('.open-form');
const arrow = $('.arrow');
const closeForm = $('.close');


function manipulateForm() {

}

openForm.on('mouseover', function () {
    $(this).siblings('img').toggleClass('show-arrow')
});

openForm.on('mouseout', function () {
    $(this).siblings('img').toggleClass('show-arrow')
});

openForm.on('click', function () {
    $('.slider-page, .header').css({opacity: .5});
    $('.form-container').css({display: 'flex'});
    setTimeout(function () {
        $('.form-container').css({opacity: 1, backgroundColor: 'rgba(237, 237, 237, 0.87)', transition: 'opacity .5s'});
        $('.form').addClass('animated fadeInUp');
        $('html, body').animate({scrollTop: 0},500);
        return false;
    }, 100);

});

closeForm.on('click', function () {
    $('.slider-page, .header').css({opacity: 1});
    $('.form-container').css({display: 'none'});
});


$("input").on("checkval", function () {
    let label = $(this).prev("label");
    if (this.value !== "") {
        label.addClass();
    } else {
        label.removeClass();
    }
}).on("keyup", function () {
    $(this).trigger("checkval");
}).on("focus", function () {
    $(this).prev("label").addClass();
}).on("blur", function () {
    $(this).prev("label").removeClass();
}).trigger("checkval");

const form = $('form');

$(form).submit(function () {
    let th = $(this);
    let data = $(this).serialize();
    let err = false;

    th.find('input[type=tel], input[type=text]').each(function () {
        if ($(this).val() === '') {
            $(this).addClass('error');
            err = true;
        }
    });

    if (!err) {
        $.ajax({
            type: "POST",
            url: "./send_message.php",
            data: data
        }).done(function () {
            $(form).find('label').removeClass();
            // messageBlock.hide();
            // $('.success').show();
            setTimeout(showMenuAfterSendMessage, 5000);
            $(form).trigger("reset");
        })
    }

    return false;
});