import $ from 'jquery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function homePageAnimations(){
    heroImageOverlay()
}

function heroImageOverlay(){
    gsap.registerPlugin(ScrollTrigger);

    let showNavMenuBreakpoint = getComputedStyle(document.body).getPropertyValue('--default-show-nav-menu-breakpoint');
    let matchMedia = gsap.matchMedia();

    $(".hero__wrapper").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".hero__overlay");

        matchMedia.add(`(min-width : ${showNavMenuBreakpoint})`, () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    //trigger element - viewport
                    start: "top top",
                    end: "30% top",
                    scrub: 1,
                }
            });
            tl.to(targetElement, {
                opacity: 0.9,
                duration: 1
            })
        });
    });
}

export default homePageAnimations