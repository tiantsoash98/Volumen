import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function homeScroll(){
    gsap.registerPlugin(ScrollTrigger);

    let showNavMenuBreakpoint = getComputedStyle(document.body).getPropertyValue('--default-show-nav-menu-breakpoint');
    let matchMedia = gsap.matchMedia();

    matchMedia.add(`(min-width : ${showNavMenuBreakpoint})`, () => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero__wrapper",
                //trigger element - viewport
                start: "top top",
                end: "30% top",
                scrub: 1,
            }
        });
        tl.to(".hero__overlay", {
            opacity: 0.9,
            duration: 1
        })
    });
}

export default homeScroll