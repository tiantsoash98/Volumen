import $ from 'jquery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function heroImageOverlay(){
    gsap.registerPlugin(ScrollTrigger)

    $(".hero__wrapper").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".hero__overlay");
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top top",
                end: "center top",
                scrub: 1
            }
        });
        tl.to(targetElement, {
            opacity: 0.8,
            duration: 1
        })
    });
}

export default heroImageOverlay