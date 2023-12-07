import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";
import { createApp } from "vue";
import Header from './Header.vue';

function header(){
    createApp(Header).mount('#header');

    let menuToogler = document.querySelector('.nav__toogle');
    let menu =  document.querySelector('.menu');
    let nav =  document.querySelector('nav.header__mobile');
    let isAnimating = false;

    nav.classList.remove('nav--open')
    menu.classList.remove('menu--open')
    menu.setAttribute('aria-expanded', 'false')

    splitNavLinks();

    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');

    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);


    let menuOpenTl = gsap.timeline({
        defaults: { duration: 1, ease: "customEase" }
    });
    menuOpenTl.pause();

    let menuCloseTl = gsap.timeline({
        defaults: { duration: 1, ease: "customEase" }
    });
    menuCloseTl.pause();

    /*==============================================================
    Menu open animation
    ==============================================================*/
    menuOpenTl
        .set(menu, {display: 'block'})
        .set('.menu__links', {opacity: 1})
        .from('.menu__frame', {scaleY: 0} )
        .to('.header__label--menu, .header__label--close', {yPercent: -100}, '<')
        .from('.menu__link--1 .char' , { yPercent: 100, stagger: 0.06 }, '<+0.2')
        .from('.menu__link--2 .char' , { yPercent: 100, stagger: 0.06 }, '<')
        .from('.menu__link--3 .char' , { yPercent: 100, stagger: 0.06 }, '<')
        .from('.menu__bottom-wrapper', {opacity: 0}, '<+0.5')
        

   /*==============================================================
    Menu close animation
    ==============================================================*/
    menuCloseTl
        .to('.header__label--menu, .header__label--close', {yPercent: 0})
        .to('.menu__links', {opacity: 0, duration: 0.7}, '<')
        .to('.menu__bottom-wrapper', {opacity: 0, duration: 0.7}, '<')
        .to('.menu__frame', {scaleY: 0}, '<')
        .to(menu, {display: 'none', duration: 0})


    menuToogler.addEventListener('click', () => {
        let navbarAreaExpanded = menu.getAttribute('aria-expanded')

        if (!isAnimating && navbarAreaExpanded && navbarAreaExpanded == 'false') {
            isAnimating = true;
            menu.setAttribute('aria-expanded', 'true')
            menu.classList.add('menu--open')
            nav.classList.add('nav--open')
            menuOpenTl.play(0).then(() => {
                isAnimating = false;
            })
        } 
        else if(!isAnimating && navbarAreaExpanded && navbarAreaExpanded == 'true') {
            isAnimating = true;
            nav.classList.remove('nav--open')
            menu.classList.remove('menu--open')
            menu.setAttribute('aria-expanded', 'false')
            menuCloseTl.play(0).then(() => {
                isAnimating = false;
            })
        }
    });

    function splitNavLinks(){
        SplitType.create('.menu__link-wrapper a')
    }    
}


export default header