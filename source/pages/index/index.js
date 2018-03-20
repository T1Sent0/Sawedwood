import 'fullpage.js/dist/jquery.fullpage.min';

$(document).ready(function () {
    $('.slider-page').fullpage({
        menu: '#menu',
        anchors:['', 'secondPage', 'thirdPage', 'fourthPage', 'fivthPage', 'sixthPage', 'seventhPage', 'seventhPage'],
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
    })
});