import './galery.scss';
import './galery-mobile.scss';

import Swiper from "../head/swiper/dist/js/swiper.min";


if (document.documentElement.clientWidth <= 650) {
    const sliderGalery = new Swiper('.slider-galery', {
        speed: 700,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 15,
        initialSlide: 0,
        navigation: {
            nextEl: '.slider-galery-button-prev',
            prevEl: '.slider-galery-button-next',
        },
    });
} else {
    const sliderGalery = new Swiper('.slider-galery', {
        speed: 700,
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 15,
        initialSlide: 0,
        navigation: {
            nextEl: '.slider-galery-button-prev',
            prevEl: '.slider-galery-button-next',
        },
    });
}
