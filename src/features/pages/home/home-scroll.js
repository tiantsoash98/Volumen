import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function homeScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Hero content
    SplitType.create('.hero__content', {types: 'lines, words', lineClass: 'hero__content--line', wordClass: "hero__content--word"});
    
    let delay = 0
    let heroLines = gsap.utils.toArray('.hero__content--line')

    heroLines.forEach((heroLine) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".hero__content",
                //trigger element - viewport
                start: "top 80%",
                end: "top 40%",
            }
        })
        .from(heroLine.querySelectorAll('.hero__content--word'), {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            delay: delay
        })

        delay+=0.1
    })


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