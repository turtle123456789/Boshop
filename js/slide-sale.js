var swiper = new Swiper('.sale-products ', {
    slidesPerView:5,
    speed: 1000, 
    loop: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
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
        
    }
}
});