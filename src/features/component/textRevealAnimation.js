import $ from "jquery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


function textRevealAnimation(){
    SplitType.revert('.text-reveal');
    runSplit();
}

function runSplit(){
    let currentElement = $('.text-reveal');
    let splitText = new SplitType(currentElement, {types: 'lines, words'});
    runAnimation();
}   

function runAnimation(){
    gsap.registerPlugin(ScrollTrigger);
    
    $('.text-reveal').each(function (index){

        // Get reveal animation type
        let revealTypeAttribute = $(this).attr('data-text-reveal');
        let revealType = (typeof revealTypeAttribute !== 'undefined' && revealTypeAttribute !== false) ? '.'+ revealTypeAttribute : '.line';

        let triggerElement = $(this);
        let targetElement = $(this).find(revealType);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top 90%",
                end: "top 40%",
                scrub: true
            }
        });
        tl.from(targetElement, {
            opacity: 0,
            yPercent: 10,
            duration: 2.5,
            stagger: 1,
        })
    });
}

export default textRevealAnimation