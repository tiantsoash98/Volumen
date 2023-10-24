import $ from 'jquery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function textRevealAnimation(){
    gsap.registerPlugin(ScrollTrigger)

    $(".text-reveal").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this);
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top 90%",
                end: "top center",
                scrub: true,
            }
        });
        tl.from(targetElement, {
            opacity: 0.1,
            duration: 1
        })
    });
}

export default textRevealAnimation