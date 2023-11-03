import $ from 'jquery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from 'gsap/CustomEase';

function onPageLoad(){
    window.addEventListener('load', () => {
        $(".shape-hero__wrapper").each(function (index) {
            let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    
            gsap.registerPlugin(CustomEase) 
            CustomEase.create("customEase", defaultEase);
    
            let timeline = gsap.timeline({
                defaults: { duration: 1.5, ease: "customEase" },
            })
            
            timeline.from('.shape-hero__img', {scale: 1.4, duration: 2})
        });
    })
    
}

function headerOnScroll(){
    $(".shape-introduction").each(function (index) {
        let triggerElement = $(this);
    
        let tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        });
        tl.to('.shape-hero__img-overlay', {opacity: 0.9})
        tl.to('.shape-hero__img', {yPercent: 30}, '<')
    });
}

function visualClipOnScroll(){
    $(".shape-visual__sticky-wrapper").each(function (index) {
        let triggerElement = $(this);
    
        let tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
        tl.to('.shape-visual__clip', {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
        tl.to('.shape-visual__img', {scale: 1}, '<')
    });
}

function visualOverlay(){
    $(".shape-content").each(function (index) {
        let triggerElement = $(this);
    
        let tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        });
        tl.to('.shape-visual__overlay', {opacity: 0.9})
        tl.to('.shape-visual__sticky-wrapper', {yPercent: 30}, '<')
    });
}

function shapePageAnimations(){
    gsap.registerPlugin(ScrollTrigger)
    onPageLoad()
    headerOnScroll()
    visualClipOnScroll()
    visualOverlay()
}

export default shapePageAnimations