import 'fullpage.js/dist/jquery.fullpage.min';
import Swiper from '../../components/head/swiper/dist/js/swiper.min';

$(document).ready(function () {

    if (document.documentElement.clientWidth > 650) {
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

        const sliderOne = new Swiper('.slider-one', {
            speed: 700,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide: 3,
            loop: true,
            spaceBetween: 0,
            coverflowEffect: {
                rotate: 0,
                stretch: 300,
                depth: 200,
                modifier: 1.5,
                slideShadows : true,
            },
            navigation: {
                nextEl: '.slider-one-button-prev',
                prevEl: '.slider-one-button-next',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        })

    } else {
        const sliderOne = new Swiper('.slider-one', {
            speed: 700,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide: 1,
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: '.slider-one-button-prev',
                prevEl: '.slider-one-button-next',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        })
    }



});