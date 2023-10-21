import $ from 'jquery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function imageScrollAnimation() {
    gsap.registerPlugin(ScrollTrigger)

    $(".image-scroll__wrapper").each(function (index) {
        let triggerElement = $(this);
        let targetElement = this.querySelector('.image-scroll');
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top 80%",
                end: "top top",
                scrub: true,
            }
        });
        tl.from(targetElement, {
            scale: 1.2
        })
    });
}

export default imageScrollAnimation