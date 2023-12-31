import gsap from "gsap";
import CustomEase from 'gsap/CustomEase';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function shapeScroll(){
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    const defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    CustomEase.create("customEase", defaultEase);

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
    .to('.shape-hero__img', {
        yPercent: 20,
        ease: "none"
    }, '<')
    .to('.shape-hero__scroll', {
        xPercent: 100,
        ease: "none"
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


    // Content title
    SplitType
        .create('.shape-content__sticky-title', 
        {
            types: 'lines, words', 
            lineClass: 'shape-content__sticky-title--line', 
            wordClass: 'shape-content__sticky-title--word',
        });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".shape-content__sticky-title",
            //trigger element - viewport
            start: "top 80%",
            end: "top 40%",
        }
    })
    .from('.shape-content__sticky-title--word', {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        stagger: 0.05
    })

    // Content Infos
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-content__right-wrapper",
            //trigger element - viewport
            start: "bottom bottom",
            end: "bottom center",
            scrub: true
        }
    })
    .to('.shape-content__info-wrapper', {
        yPercent: 100,
    })


    // Content author
    SplitType.create('.shape-content__author', {types: 'chars', charClass: 'shape-content__author--char'});

    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".shape-content__img-track",
            //trigger element - viewport
            start: "top top",
            end: "5% top",
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

    
    let desktopBreakpoint = getComputedStyle(document.body).getPropertyValue('--br-min-width-sm');
    let matchMedia = gsap.matchMedia();

    // Desktop only
    matchMedia.add(`(min-width : ${desktopBreakpoint})`, () => {

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
    });


    function runSplitIntroduction(){
        SplitType.create(introductionText, {types: 'lines, words, chars', lineClass: introductionLineClass});
        
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