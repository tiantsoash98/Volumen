import $ from 'jquery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                end: "top 20%",
                scrub: true,
            }
        });
        tl.to('.shape-visual__img', {opacity: 0.3})
    });
}

function shapePageAnimations(){
    gsap.registerPlugin(ScrollTrigger)
    visualClipOnScroll()
    visualOverlay()
}

export default shapePageAnimations