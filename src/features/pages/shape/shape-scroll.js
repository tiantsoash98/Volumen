import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function shapeScroll(){
    gsap.registerPlugin(ScrollTrigger);

    let showNavMenuBreakpoint = getComputedStyle(document.body).getPropertyValue('--default-show-nav-menu-breakpoint');
    let matchMedia = gsap.matchMedia();

    // Header
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-introduction",
            //trigger element - viewport
            start: "top bottom",
            end: "top top",
            scrub: true,
        }
    })
    .to('.shape-hero__img-overlay', {
        opacity: 0.9
    })
    // .to('.shape-hero__img', {
    //     yPercent: 30,
    // }, '<')
    .to('.shape-hero__scroll', {
        xPercent: 100,
    })


    // Introduction
    let introductionText = '.shape-introduction__content';
    let introductionLineClass = 'shape-introduction__content--line';
    runSplitIntroduction();

    // Rerun split on resize
    window.addEventListener('resize', () => {
        SplitType.revert(introductionText);
        runSplitIntroduction();
    });


    // Content sticky
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-content__img-track",
            //trigger element - scroller
            start: "5% top",
            end: "30% top",
            scrub: true,
        }
    })
    .to('.shape-content__img--1', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        scale: 1
    })
    .to('.shape-content__img--2', {
        scale: 1
    }, '<')


    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-content__img-track",
            //trigger element - viewport
            start: "35% top",
            end: "60% top",
            scrub: true,
        }
    })
    .to('.shape-content__img--2', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        scale: 1
    })
    .to('.shape-content__img--3', {
        scale: 1
    }, '<')


    // Mobile
    matchMedia.add(`(min-width : ${showNavMenuBreakpoint})`, () => {

        // Visual clip
        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: ".shape-visual__sticky-wrapper",
                //trigger element - viewport
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        .to('.shape-visual__clip', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        })
        .to('.shape-visual__img', {
            scale: 1
        }, '<')


        // Visual overlay
        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: ".shape-content",
                //trigger element - viewport
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
        .to('.shape-visual__overlay', {
            opacity: 0.9
        })
        .to('.shape-visual__sticky-wrapper', {
            yPercent: 30
        }, '<')


        // Content design by
        SplitType.create('.shape-content__author', {types: 'chars', charClass: 'shape-content__author--char'});

        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: ".shape-content__img-track",
                //trigger element - viewport
                start: "top top",
                end: "10% top"
            }
        })
        .from('.shape-content__by', {
            opacity: 0
        })
        .from('.shape-content__author--char', {
            yPercent: 100,
            duration: 0.6,
            stagger: 0.03,
        });
    });


    function runSplitIntroduction(){
        SplitType.create(introductionText, {types: 'lines, words', lineClass: introductionLineClass});
        
        let triggerElement = '.shape-introduction__row';
        let targetElement = '.' + introductionLineClass;
        
        gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                //trigger element - viewport
                start: "top 80%",
            }
        })
        .from(targetElement, {
            opacity: 0.1,
            duration: 1,
            stagger: 0.05,
        })
    }   
}

export default shapeScroll