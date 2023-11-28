    const swiper = new Swiper("#main-carrusel", {
        spaceBetween: 30,
        autoplay: {
        delay:5500,
        disableOnInteraction:true,
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

function validElSelect(selector,parent) {
    const el = parent ? parent.querySelector(selector) : 
    document.querySelector(selector)
    if (!el) throw new Error (`${selector} is not a valid query Element`)
    return el
}
const barsMenuBtn =  validElSelect('.bars-menu-btn')
const closeMenuBtn =  validElSelect('.close-menu-btn')
const navbar =  validElSelect('.navbar')
const transporteSubMenuBtn =  validElSelect('.transporte-btn')
const subMenuList = validElSelect('.subnavigation-wrapper')
const subList = validElSelect('#tipo-transportes')
const subEls = subList.querySelectorAll('li')


function showNavBar() {
    barsMenuBtn.setAttribute('aria-expanded', true)
    navbar.classList.add('open')
    barsMenuBtn.classList.add('clicked')
    subMenuList.classList.remove('open')
}
function hideNavBar() {
    barsMenuBtn.setAttribute('aria-expanded', false)
    navbar.classList.remove('open')
    barsMenuBtn.classList.remove('clicked')
    subMenuList.classList.remove('open')
}

barsMenuBtn.addEventListener('click', () =>{
    showNavBar()
    
})
closeMenuBtn.addEventListener('click', () => {
    hideNavBar()
})
navbar.addEventListener('click',(e) => {
    const link = e.target.closest('a')
    if (!link) return
    hideNavBar()
})
transporteSubMenuBtn.addEventListener('click', () => {
    subMenuList.classList.toggle('open')
    console.log(subEls)
    transporteSubMenuBtn.setAttribute('aria-expanded',true)
})


window.addEventListener('keydown', (e) => {
    if (navbar.classList.contains('open') && e.key === 'Escape') hideNavBar() 
})