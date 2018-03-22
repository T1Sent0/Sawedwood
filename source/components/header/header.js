import './header.scss'
import './header-mobile.scss'
import './menu/menu'
import './menu/menu-mobile.scss'


const burger = $('.burger-mobile');
const menu = $('.menu');
const menuItem = $('.menu-item');

burger.on('click', function () {
    if (this.className === "burger-mobile") {
        burger.toggleClass('burger-mobile close');
        menu.css({display: 'flex'});
    } else {
        burger.toggleClass('burger-mobile close');
        menu.css({display: 'none'});
    }
});

if (document.documentElement.clientWidth <= 650) {
    menuItem.on('click', function () {
        menu.css({display: 'none'});
        burger.toggleClass('close burger-mobile');
        let a = $(this).children().attr('href'), top = $(a).offset().top;
        $('body, html').animate({scrollTop: top}, 1000)
    });
} else {
    $('.section').prop('id', '')
}