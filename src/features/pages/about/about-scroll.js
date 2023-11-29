import $ from "jquery";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";

function aboutScroll(){
    gsap.registerPlugin(CustomEase);
    const defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    CustomEase.create("customEase", defaultEase);

    // Symphony
    SplitType.create('.about-symphony__title', {types: 'lines, words', lineClass: 'about-symphony__title--line', wordClass: "about-symphony__title--word"});

    let delay = 0
    let symphonyLines = gsap.utils.toArray('.about-symphony__title--line')

    symphonyLines.forEach((line) => {
        gsap.timeline({
            defaults: { duration: 1.5, ease: "customEase" },
            scrollTrigger: {
                trigger: ".about-symphony",
                //trigger element - viewport
                start: "top 90%",
                end: "top 40%",
            }
        })
        .from(line.querySelectorAll('.about-symphony__title--word'), {
            opacity: 0,
            yPercent: 100,
            delay: delay
        })

        delay+=0.15
    })

    // Horizontal scrolling
    // From Timothy Ricks https://www.youtube.com/watch?v=xEkbMs6BR88
    setTrackHeights();
    
    window.addEventListener("resize", function () {
        setTrackHeights();
    });

    // Horizontal scroll
    let tlMain = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-beauty__section-height",
            //trigger element - viewport
            start: "1% top",
            end: "bottom bottom",
            scrub: true,
        }
    })
    .to('.about-beauty__track', {
        xPercent: -100,
        ease: "none"
    })

    // Visual end
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".about-beauty__img-wrapper--2",
    //         //trigger element - viewport
    //         start: "left right",
    //         end: "left left",
    //         scrub: true,
    //         containerAnimation: tlMain
    //     }
    // })
    // .from('.about-beauty__img-wrapper--2', {
    //     xPercent: -100,
    //     ease: "none"
    // })
    // .from('.about-beauty__img-wrapper--2 .about-beauty__img', {
    //     scale: 2,
    // },'<')
    


    // Beauty
    SplitType.create('.about-beauty__title', {types: 'lines, words', lineClass: 'about-beauty__title--line', wordClass: "about-beauty__title--word"});

    delay = 0;
    let descriptionLines = gsap.utils.toArray('.about-beauty__title--line')

    descriptionLines.forEach((line) => {
        gsap.timeline({
            defaults: { duration: 1.5, ease: "customEase" },
            scrollTrigger: {
                trigger: ".about-beauty__content-wrapper",
                //trigger element - viewport
                start: "left 90%",
                end: "left 80%",
                containerAnimation: tlMain,
            }
        })
        .from(line.querySelectorAll('.about-beauty__title--word'), {
            opacity: 0,
            yPercent: 100,
            delay: delay
        })

        delay+=0.15
    })

    // Grid
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "left left",
            end: "right right",
            scrub: true,
            containerAnimation: tlMain,
        }
    })
    .to('.about-grid__sticky-element', {
        xPercent: 100,
        ease: "none"
    })


    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "left right",
            end: "right right",
            scrub: true,
            containerAnimation: tlMain
        }
    })
    .fromTo('.about-grid__column-wrapper--left', {
        yPercent: -10,
        ease: "none"
    },{
        yPercent: 10,
        ease: "none"
    })
    .fromTo('.about-grid__column-wrapper--right', {
        yPercent: 10,
        ease: "none"
    }, {
        yPercent: -10,
        ease: "none"
    }, "<")


    
    // Quote
    gsap.timeline({
        defaults: { 
            duration: 1.5, 
            ease: "customEase" 
        },
        scrollTrigger: {
            trigger: ".about-quote",
            //trigger element - viewport
            start: "top center",
            end: "top top",
        }
    })
    .from('.about-quote__content--3', {
        xPercent: -30,
        
    })

    function setTrackHeights(){
        $(".about-beauty__section-height").each(function(index) {
            let trackWidth = $(this).find(".about-beauty__track").outerWidth();
            $(this).height(trackWidth);
        });
    }
}

export default aboutScroll