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
    }, 100);

});

closeForm.on('click', function () {
    $('.slider-page, .header').css({opacity: 1});
    $('.form-container').css({display: 'none'});
});