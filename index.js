const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')

if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== SHADOW HEADER =================*/
const  shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*==============Animation======================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
}) 

sr.reveal(`.home__text, .favorites__text, .about__intro, .about__content, .explore, .blog__container-left, .connect, .nav__left`, {origin: 'right'})
sr.reveal(`.oval, .favorites, .about__content, .content__text, .explore__img,.form, nav__right`, {origin: 'left'})