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

    
    // Shapes
    delay = 0
    let shapesVisible = gsap.utils.toArray('.about-shape__item--1, .about-shape__item--2, .about-shape__item--3')
    let shapes = gsap.utils.toArray('.about-shape__item--4, .about-shape__item--5')

    shapesVisible.forEach((shape) => {
        gsap.timeline({
            defaults: {
                duration: 1,
                ease: "customEase"
            },
            scrollTrigger: {
                trigger: ".about-beauty",
                //trigger element - viewport
                start: "top 70%",
                end: "top center"
            }
        })
        .fromTo(shape, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        }, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: delay,
        })
        .from(shape.querySelector('.about-shape__img'), {
            scale: 1.4
        }, '<')

        delay += 0.15
    })

    shapes.forEach((shape) => {
        gsap.timeline({
            defaults: {
                duration: 1,
                ease: "customEase"
            },
            scrollTrigger: {
                trigger: shape,
                //trigger element - viewport
                start: "left right",
                end: "left center",
                containerAnimation: tlMain,
            }
        })
        .fromTo(shape.querySelector('.about-shape__img-wrapper'), {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        }, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        })
        .from(shape.querySelector('.about-shape__img'), {
            scale: 1.4
        }, '<')
    })

    // Visual
    // Sticky horizontal
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
        xPercent: 200,
        ease: "none"
    })

     // Grid
    // Title
    SplitType.create('.about-grid__title', {types: 'lines, words', lineClass: 'about-grid__title--line', wordClass: "about-grid__title--word"});

    delay = 0;
    let gridTitleLines = gsap.utils.toArray('.about-grid__title--line');
    let titleTL = gsap.timeline({
        defaults: { duration: 2, ease: "customEase" },
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "10% left",
            end: "30% left",
            containerAnimation: tlMain,
            scrub: true,
        }
    })

    gridTitleLines.forEach((line) => {
        
        titleTL.from(line.querySelectorAll('.about-grid__title--word'), {
            opacity: 0,
            yPercent: 100,
        }, '<+0.15s')

        delay+=0.15
    })

    titleTL.from('.about-grid__description', {
        opacity: 0,
        duration: 3
    }, '+=0.5s')

    
    // Image 1
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "left right",
            end: "left left",
            scrub: true,
            containerAnimation: tlMain
        }
    })
    .from('.about-grid__img-wrapper', {
        xPercent: -50,
        ease: "none"
    })
    .from('.about-grid__img-wrapper--1 .about-grid__img', {
        scale: 1.6,
    }, '<')

    // Image 2
    gsap.timeline({
        defaults: { 
            duration: 2
        },
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "40% left",
            end: "55% left",
            scrub: 1,
            containerAnimation: tlMain,
        }
    })
    .to('.about-grid__img-wrapper--1 .about-grid__img', {
        opacity: 0,
        scale: 1.3,
    })
    .from('.about-grid__img-wrapper--2 .about-grid__img', {
        scale: 1.3,
    }, '<')



    // Quote
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-quote",
            //trigger element - viewport
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    })
    .to('.about-grid__content-wrapper', {
        opacity: 0,
        duration: 1.5
    })
    .to('.about-grid__sticky-element', {
        yPercent: 50,
        ease: "none",
        duration: 1.5
    }, '<')
    .to('.about-grid__overlay', {
        opacity: 1,
        duration: 1.5
    }, '<')

    gsap.timeline({
        defaults: { 
            duration: 1.5, 
            ease: "customEase" 
        },
        scrollTrigger: {
            trigger: ".about-quote",
            //trigger element - viewport
            start: "top center",
            end: "top 20%"
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