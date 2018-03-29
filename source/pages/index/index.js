import 'fullpage.js/dist/jquery.fullpage.min';
import Swiper from '../../components/head/swiper/dist/js/swiper.min';
import handmade from './img/why-me/handmade.svg';
import material from './img/why-me/material.svg';
import design from './img/why-me/design.svg'
import garany from './img/why-me/garanty.svg'
import houseimage from './img/why-me/house_icon.svg'
import Typed from 'typed.js';

$(document).ready(function () {

    const sliderIdealFor = new Swiper('.slider-two', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows : false,
        },
        navigation: {
            nextEl: '.slider-two-button-next',
            prevEl: '.slider-two-button-prev',
        },
        slideChange: function () {}
    });

    const sliderthree = new Swiper('.slider-three', {
        speed: 700,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        initialSlide: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.slider-three-button-prev',
            prevEl: '.slider-three-button-next',
        },
    });

    const sliderOne = new Swiper('.slider-one', {
        speed: 700,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 0,
        navigation: {
            nextEl: '.slider-one-button-prev',
            prevEl: '.slider-one-button-next',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        slideChange: function () {}
    });

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

            afterLoad: function(anchorLink, index){
                if(index === 1){

                    let typed = new Typed(".typed-text", {
                        strings: [''],
                        showCursor: false,
                    });

                    if($('.typed-text').text() && sliderOne.activeIndex === 0) {
                        typed.destroy();
                        typed = new Typed(".typed-text", {
                            strings: ['Авторнская мебель ручной работы'],
                            typeSpeed: 40,
                            showCursor: false,
                            loop: true,
                            loopCount: 1,
                        });
                    } else if($('.typed-text').text() && sliderOne.activeIndex === 1) {
                        typed.destroy();
                        typed = new Typed(".typed-text", {
                            strings: ['Собственное производство'],
                            typeSpeed: 40,
                            showCursor: false,
                            loop: true,
                            loopCount: 1,
                        });
                    } else if($('.typed-text').text() && sliderOne.activeIndex === 1) {
                        typed.destroy();
                        typed = new Typed(".typed-text", {
                            strings: ['Только натуральные материалы'],
                            typeSpeed: 40,
                            showCursor: false,
                            loop: true,
                            loopCount: 1,
                        });
                    }


                    $('.slider-two-button-prev, .slider-two-button-next').on('click', function () {
                        if(sliderOne.activeIndex === 0) {
                            typed.destroy();
                            typed = new Typed(".typed-text", {
                                strings: ['Авторнская мебель ручной работы'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderOne.activeIndex === 1) {
                            typed.destroy();
                            typed = new Typed(".typed-text", {
                                strings: ['Собственное производство'],
                                typeSpeed: 40,
                                backSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderOne.activeIndex === 2) {
                            typed.destroy();
                            typed = new Typed(".typed-text", {
                                strings: ['Только натуральные материалы'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }
                    });

                    sliderOne.on('slideChange', function () {
                        if(sliderOne.activeIndex === 0) {
                            typed.destroy();
                            typed = new Typed(".typed-text", {
                                strings: ['Авторнская мебель ручной работы'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderOne.activeIndex === 1) {
                            typed.destroy();
                            typed = new Typed(".typed-text", {
                                strings: ['Собственное производство'],
                                typeSpeed: 40,
                                backSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderOne.activeIndex === 2) {
                            typed.destroy();
                            typed = new Typed(".typed-text", {
                                strings: ['Только натуральные материалы'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }
                    });

                    setTimeout(function() {
                        $('.firstPage').addClass('animated fadeInUp')
                    },500);


                } if (index === 2) {
                    setTimeout(function() {
                        $('.container-slide-page-two').addClass('animated fadeInUp')
                    },500);
                } if (index === 3) {
                    setTimeout(function() {
                        $('.content-slide-page-three').addClass('animated fadeInUp')
                    },500);
                } if (index === 4) {
                    let type = new Typed(".dynamicText", {
                        strings: [''],
                        showCursor: false,
                    });



                    if($('.dynamicText').text() && sliderIdealFor.activeIndex === 0) {
                        type.destroy();
                        type = new Typed(".dynamicText", {
                            strings: ['дома и кухни'],
                            typeSpeed: 40,
                            showCursor: false,
                            loop: true,
                            loopCount: 1,
                        });
                    } else if ($('.dynamicText').text() && sliderIdealFor.activeIndex === 1) {
                        type.destroy();
                        type = new Typed(".dynamicText", {
                            strings: ['бара и ресторана'],
                            typeSpeed: 40,
                            showCursor: false,
                            loop: true,
                            loopCount: 1,
                        });
                    } else if ($('.dynamicText').text() && sliderIdealFor.activeIndex === 2) {
                        type.destroy();
                        type = new Typed(".dynamicText", {
                            strings: ['офиса'],
                            typeSpeed: 40,
                            showCursor: false,
                            loop: true,
                            loopCount: 1,
                        });
                    }

                    $('.slider-two-button-prev, .slider-two-button-next').on('click', function () {
                        if(sliderIdealFor.activeIndex === 0) {
                            type.destroy();
                            type = new Typed(".dynamicText", {
                                strings: ['дома и кухни'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderIdealFor.activeIndex === 1) {
                            type.destroy();
                            type = new Typed(".dynamicText", {
                                strings: ['бара и ресторана'],
                                typeSpeed: 40,
                                backSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderIdealFor.activeIndex === 2) {
                            type.destroy();
                            type = new Typed(".dynamicText", {
                                strings: ['офиса'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }
                    });

                    sliderIdealFor.on('slideChange', function () {
                        if(sliderIdealFor.activeIndex === 0) {
                            type.destroy();
                            type = new Typed(".dynamicText", {
                                strings: ['дома и кухни'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderIdealFor.activeIndex === 1) {
                            type.destroy();
                            type = new Typed(".dynamicText", {
                                strings: ['бара и ресторана'],
                                typeSpeed: 40,
                                backSpeed: 40,
                                showCursor: false,
                            })
                        }

                        if(sliderIdealFor.activeIndex === 2) {
                            type.destroy();
                            type = new Typed(".dynamicText", {
                                strings: ['офиса'],
                                typeSpeed: 40,
                                showCursor: false,
                            })
                        }
                    });
                    setTimeout(function() {
                        $('.wrap').addClass('animated fadeInUp');
                    },100);

                } if (index === 5) {
                    setTimeout(function() {
                        $('.container-slide-five').addClass('animated fadeInUp');
                    },100);
                } if (index === 6) {
                    setTimeout(function() {
                        $('.container-page').addClass('animated fadeInUp');
                    },100);
                    $('#first-indicators').animateNumber({ number: 60 },6000);
                    $('#second-indicators').animateNumber({ number: 24 },6000);
                    $('#third-indicators').animateNumber({ number: 15 },4000);
                    $('#fourth-indicators').animateNumber({ number: 2 },4000);
                } if (index === 7) {
                    setTimeout(function() {
                        $('.container-page-galery').addClass('animated fadeInUp');
                    },100);
                } if (index === 8) {
                    setTimeout(function() {
                        $('.containder-contact').addClass('animated fadeInUp');
                    },100);
                }
            }

        });

        const $itemHover = $('.template');
        const $containerRender = $('.info-container');

        $itemHover.on('mouseover', function () {
                if($(this).attr('class') === 'template one-element') {
                    // $(this).parent('.more-info').css({transform: 'scaleY(3)', background: 'white', position: 'relative'}).end().css({position: 'absolute'})
                        // .children('.title-info-container').find('img').attr('src', handmade).end().find('span').text('Ручная работа');
                    // $containerRender
                        // .children('span').text('Вот тут было бы тотже замечательно положить какой-то текст');
                } if($(this).attr('class') === 'template two-element') {
                    $containerRender.children('.title-info-container').find('img').attr('src', material).end().find('span').text('Натуральныые материалы');
                    $containerRender.children('span').text('Короткое описание самых натуральных матеириатов будет при наведении на иконку ' +
                        'Натуральные материалы');
                } if($(this).attr('class') === 'template three-element') {
                    $containerRender.children('.title-info-container').find('img').attr('src', design).end().find('span').text('Индивидуальный дизайн');
                    $containerRender.children('span').text('Только у нас вы получите супер уникальный дизай стола и так далее и так далее');
                } if($(this).attr('class') === 'template four-element') {
                    $containerRender.children('.title-info-container').find('img').attr('src', garany).end().find('span').text('Бессрочная гарантия');
                    $containerRender.children('span').text('Наши столы сделанны настолько прочно что мы гарантируем их службу 100500 лет');
                }
            });

        $itemHover.on('mouseout', function () {
            $containerRender.children('.title-info-container').find('img').attr('src', houseimage).end().find('span').text('Собственное производство');
            $containerRender.children('span').text('На этом самом месте должно быть описание почему мы и никто больше, очень ' +
                'хорошо будет если это будет кратко и по делу, без лишней воды')
        });
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
        let type;
        let typed;
        let typedOffice;

        type = new Typed(".dynamicText", {
            strings: ['бара и ресторана'],
            typeSpeed: 40,
            showCursor: false,
        });

       $(".typed-text").text('Авторская мебель ручной работы');

        $('.slider-two-button-prev, .slider-two-button-next').on('click', function () {
            if(sliderIdealFor.activeIndex === 0) {
                type.destroy();
                type = new Typed(".dynamicText", {
                    strings: ['дома и кухни'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }
            if(sliderIdealFor.activeIndex === 1) {
                type.destroy();
                type = new Typed(".dynamicText", {
                    strings: ['бара и ресторана'],
                    typeSpeed: 40,
                    backSpeed: 40,
                    showCursor: false,
                })
            }

            if(sliderIdealFor.activeIndex === 2) {
                type.destroy();
                type = new Typed(".dynamicText", {
                    strings: ['офиса'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }
        });

        sliderIdealFor.on('slideChange', function () {
            if(sliderIdealFor.activeIndex === 0) {
                type.destroy();
                type = new Typed(".dynamicText", {
                    strings: ['дома и кухни'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }

            if(sliderIdealFor.activeIndex === 1) {
                type.destroy();
                type = new Typed(".dynamicText", {
                    strings: ['бара и ресторана'],
                    typeSpeed: 40,
                    backSpeed: 40,
                    showCursor: false,
                })
            }

            if(sliderIdealFor.activeIndex === 2) {
                type.destroy();
                type = new Typed(".dynamicText", {
                    strings: ['офиса'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }
        });


        $('.slider-one-button-prev, .slider-one-button-next').on('click', function () {
            if(sliderOne.activeIndex === 0) {
                typed.destroy();
                typed = new Typed(".typed-text", {
                    strings: ['Авторская мебель ручной работы'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }
            if(sliderOne.activeIndex === 1) {
                typed.destroy();
                typed = new Typed(".typed-text", {
                    strings: ['Собственное производство'],
                    typeSpeed: 40,
                    backSpeed: 40,
                    showCursor: false,
                })
            }
            if(sliderOne.activeIndex === 2) {
                typed.destroy();
                typed = new Typed(".typed-text", {
                    strings: ['Только натуральные материалы'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }
        });

        sliderOne.on('slideChange', function () {
            if(sliderOne.activeIndex === 0) {
                typed.destroy();
                typed = new Typed(".typed-text", {
                    strings: ['Авторская мебель ручной работы'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }

            if(sliderOne.activeIndex === 1) {
                typed.destroy();
                typed = new Typed(".typed-text", {
                    strings: ['Собственное производство'],
                    typeSpeed: 40,
                    backSpeed: 40,
                    showCursor: false,
                })
            }

            if(sliderOne.activeIndex === 2) {
                typed.destroy();
                typed = new Typed(".typed-text", {
                    strings: ['Только натуральные материалы'],
                    typeSpeed: 40,
                    showCursor: false,
                })
            }
        });
    }

    const sliderMaterial = new Swiper('.full-information-material', {
        navigation: {
            nextEl: '.slider-material-button-next',
            prevEl: '.slider-material-button-prev',
        },
    });


    $('.close-slider').on('click', function () {
        $(this).parents().find('.full-information-material').css({opacity: 0, transition: '.5s'});
        $('.content-slide-page-three').css({opacity: '1'});
        $('.thirdPage').css({background: 'white'});
        setTimeout(function () {
            $('.wrapper').css({opacity: '0', zIndex: -1});
        }, 500);
        $('.full-information-material').removeClass('animated fadeInUp');

    });

    $('.korgach').on('click', function () {
        sliderMaterial.slideTo(0, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        $('.full-information-material').addClass('animated fadeInUp');
        setTimeout(function () {
        $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200)
    });

    $('.klen').on('click', function () {
        sliderMaterial.slideTo(1, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        setTimeout(function () {
            $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200);
        $('.full-information-material').addClass('animated fadeInUp');
    });

    $('.yasen').on('click', function () {
        sliderMaterial.slideTo(2, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        setTimeout(function () {
            $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200)
        $('.full-information-material').addClass('animated fadeInUp');
    });

    $('.shelkovica').on('click', function () {
        sliderMaterial.slideTo(3, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        setTimeout(function () {
            $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200)
        $('.full-information-material').addClass('animated fadeInUp');
    });

    $('.dub').on('click', function () {
        sliderMaterial.slideTo(4, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        setTimeout(function () {
            $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200)
        $('.full-information-material').addClass('animated fadeInUp');
    });

    $('.topol').on('click', function () {
        sliderMaterial.slideTo(5, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        setTimeout(function () {
            $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200)
        $('.full-information-material').addClass('animated fadeInUp');
    });

    $('.oreh').on('click', function () {
        sliderMaterial.slideTo(6, 100);
        $('.thirdPage').css({background: 'rgba(230, 230, 230, 0.55)'});
        $('.wrapper').css({opacity: '1', zIndex: 1});
        $('.header, .content-slide-page-three').css({opacity: '.5'}).removeClass('animated');
        setTimeout(function () {
            $('.full-information-material').css({opacity: 1, transition: '.5s'});
        }, 200)
        $('.full-information-material').addClass('animated fadeInUp');
    })

});