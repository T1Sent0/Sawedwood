import './form.scss'
import './form-mobile.scss'
import './jquery.inputmask'

const openForm = $('.open-form');
const arrow = $('.arrow');
const closeForm = $('.close');
const messageBlock = $('.filed, .message');

openForm.on('mouseover', function () {
    $(this).siblings('img').toggleClass('show-arrow')
});

openForm.on('mouseout', function () {
    $(this).siblings('img').toggleClass('show-arrow');

});

openForm.on('click', function () {
    $('.slider-page, .header').css({opacity: .5});
    $('.form-container').css({display: 'flex'});
    messageBlock.show();
    $('form > span').show();
    setTimeout(function () {
        $('.form-container').css({opacity: 1, backgroundColor: 'rgba(237, 237, 237, 0.87)', transition: 'opacity .5s'});
        $('.form').addClass('animated fadeInUp');
        $('html, body').animate({scrollTop: 0},500);
        return false;
    }, 100);
    mask();
});

closeForm.on('click', function () {
    $('.slider-page, .header').css({opacity: 1});
    $('.form-container').css({display: 'none'});
});


$('input[type=text], input[type=tel]').on('focusout', function (event) {
    if(this.value === '') {
        $(this).addClass('error-input');
        $(this).siblings('span').addClass('error')
    } else {
        $(this).removeClass('error-input');
        $(this).siblings('span').removeClass('error');
        blockEditSymbolLite();
        focusOutTelFunc();
    }
});


$('body').on('keyup', '.name', blockEditSymbolLite);
$('body').on('focusout', '.phone', focusOutTelFunc);

function blockEditSymbolLite() {
    let valueRgx = $(this).val();
    let rgxp = /[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\;\\:\\?\\*\\=\\+\\~\\`\\1\\2\\3\\4\\5\\6\\7\\8\\9]/g;
    if (rgxp.test(valueRgx)) {
        $(this).val("");
    }
}

function focusOutTelFunc() {
    if ($(this).val()) {
        let valueRgx = $(this).val();
        let rgxp = /[\\_\\]/g;
        if (rgxp.test(valueRgx)) {
            $(this).val("");
            $(this).siblings('span').addClass('error');
            $(this).addClass('error');
            $(this).addClass('error-input');
        } else {
            $(this).siblings('span').removeClass('error');
            $(this).removeClass('error');
            $(this).removeClass('error-input');
        }
    }
}

function mask() {
    $('input[name=phone]').inputmask({mask: "+7 (999) 999-99-99"});
}

const form = $('form');

$(form).submit(function () {
    let th = $(this);
    let data = $(this).serialize();
    let err = false;

    th.find('input[type=tel], input[type=text]').each(function () {
        if ($(this).val() === '') {
            $(this).siblings('span').addClass('error');
            $(this).addClass('error-input');
            err = true;
        } else {
            $(this).siblings('span').removeClass('error');
            $(this).removeClass('error-input')
        }
    });

    if (!err) {
        $.ajax({
            type: "POST",
            url: "./send_message.php",
            data: data
        }).done(function () {
            $(form).find('label').removeClass('error');
            messageBlock.hide();
            $('.success').show();
            $('form > span').hide();
            setTimeout(showMenuAfterSendMessageThree, 5000);
            $(form).trigger("reset");
        });
        return false;
    }



    function showMenuAfterSendMessageThree() {
        $(".success, .form-container").hide();
        $('.slider-page').css({opacity: 1})
    }

    return false;
});