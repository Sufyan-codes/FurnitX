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

/*==============REMOVE MENU AFTER CLICK===========*/
const navLink = document.querySelectorAll('nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SHADOW HEADER =================*/
const  shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*==============Animation======================*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
// }) 

// sr.reveal(`.about__content, .explore, .blog__container-left, .favorites__text`, {origin: 'right'})
// sr.reveal(` .favorites, .content__text, .explore__img, nav__right`, {origin: 'left'})
// sr.reveal(`.home__text, .oval, .about__intro`, {origin: 'top'})
// sr.reveal(`.about__content, .connect, .form`, {origin: 'bottom'})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__text', {origin:'left', delay: 400})
sr.reveal('.oval', {origin:'right', delay: 400})

/*OUR FAVE*/
sr.reveal('.about__img', {delay: 200})
sr.reveal('.favorites__text', {origin:'left', delay: 400})
sr.reveal('.favorites', {origin:'bottom', delay: 400})
sr.reveal('.about__content', {origin:'top', delay: 400})
sr.reveal('.about__intro', {origin:'bottom', delay: 600, delay: 400})
sr.reveal('.explore__text', {origin:'left', delay: 400})
sr.reveal('.explore__img', {origin:'right', delay: 400})
sr.reveal('.blog__container-left', {origin:'left', delay: 400})
sr.reveal('.contact', {origin:'bottom', delay: 400})




/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})
sr.reveal('.contact__form', {delay: 600})
