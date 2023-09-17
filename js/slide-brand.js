var swiper = new Swiper('.brand-products_trend ', {
    slidesPerView:4,
    spaceBetween:30,
    speed: 1000, 
    loop: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
breakpoints: {
    768: {
        slidesPerView:1.5,
        spaceBetween:15,
    },
    992: {
        slidesPerView:2,
        spaceBetween:15,
    },
    1200: {
        slidesPerView:5,
        spaceBetween:30,
    }
}
});