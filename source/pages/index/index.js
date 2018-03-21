import 'fullpage.js/dist/jquery.fullpage.min';
import Swiper from '../../components/head/swiper/dist/js/swiper.min';

$(document).ready(function () {
    $('.slider-page').fullpage({
        menu: '#menu',
        anchors:['', 'secondPage', 'thirdPage', 'fourthPage', 'fivthPage', 'sixthPage', 'seventhPage', 'eighthPage'],
        lockAnchors: false,
        // css3: true,
        sectionSelector: '.section',

        scrollingSpeed: 700,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        verticalCentered: false,
        keyboardScrolling: true,
        animateAnchor: true,
    });

    const button = $('.order');
    const arrow = $('.arrow');

    button.on('mouseover', function () {
        $(this).siblings('img').toggleClass('show-arrow')
    });

    button.on('mouseout', function () {
        $(this).siblings('img').toggleClass('show-arrow')
    });

    button.on('click', function () {
        $('body').css({opacity: .4});
        $('.form-container').css({display: 'flex', opacity: '1 !important'});
    });

    const sliderOne = new Swiper('.slider-one', {

    })
});