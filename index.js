    const swiper = new Swiper("#main-carrusel", {
        spaceBetween: 30,
        autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
});

/*
    Por hacer:

    close-menu-btn
    open-menu-btn
    Aria hidden en cada elemento dentro del menu cuando este cerrado.

    Funcionalidad de abrir y cerrar el menu
    
*/