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
    }

    const sliderOne = new Swiper('.slider-one', {
        speed: 700,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    })

});