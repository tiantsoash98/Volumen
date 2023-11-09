import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function shapeScroll(){
    gsap.registerPlugin(ScrollTrigger);

    let showNavMenuBreakpoint = getComputedStyle(document.body).getPropertyValue('--default-show-nav-menu-breakpoint');
    let matchMedia = gsap.matchMedia();

    // Header
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-introduction",
            //trigger element - viewport
            start: "top bottom",
            end: "top top",
            scrub: true,
        }
    })
    .to('.shape-hero__img-overlay', {
        opacity: 0.9
    })
    .to('.shape-hero__img', {
        yPercent: 30
    }, '<')


    // Visual clip
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-visual__sticky-wrapper",
            //trigger element - viewport
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    })
    .to('.shape-visual__clip', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    })
    .to('.shape-visual__img', {
        scale: 1
    }, '<')

    // Visual overlay
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-content",
            //trigger element - viewport
            start: "top bottom",
            end: "top top",
            scrub: true,
        }
    })
    .to('.shape-visual__overlay', {
        opacity: 0.9
    })
    .to('.shape-visual__sticky-wrapper', {
        yPercent: 30
    }, '<')
}

export default shapeScroll