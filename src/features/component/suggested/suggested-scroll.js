import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function suggestedScroll(){

    SplitType.create('.suggested__title', {types: 'lines, words', lineClass: 'suggested__title--line', wordClass: "suggested__title--word"});

    gsap.timeline({
        scrollTrigger: {
            trigger: ".suggested__title",
            //trigger element - viewport
            start: "top 80%",
            end: "top 40%",
        }
    })
    .from('.suggested__title--word', {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
    })
}

export default suggestedScroll