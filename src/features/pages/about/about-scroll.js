import $ from "jquery";
import gsap from "gsap";

function aboutScroll(){
    setTrackHeights();
    
    window.addEventListener("resize", function () {
        setTrackHeights();
    });

    let tlMain = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-beauty__section-height",
            //trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    })
    .to('.about-beauty__track', {
        xPercent: -100
    })

    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-beauty__img-wrapper",
            //trigger element - viewport
            start: "left left",
            end: "right left",
            scrub: true,
            containerAnimation: tlMain
        }
    })
    .from('.about-beauty__img', {
        scale: 1.4
    })

    function setTrackHeights(){
        $(".about-beauty__section-height").each(function(index) {
            let trackWidth = $(this).find(".about-beauty__track").outerWidth();
            $(this).height(trackWidth);
        });
    }
}

export default aboutScroll