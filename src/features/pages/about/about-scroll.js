import $ from "jquery";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";

function aboutScroll(){
    gsap.registerPlugin(CustomEase);
    const defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    CustomEase.create("customEase", defaultEase);

    // Horizontal scrolling
    // From Timothy Ricks https://www.youtube.com/watch?v=xEkbMs6BR88
    setTrackHeights();
    
    window.addEventListener("resize", function () {
        setTrackHeights();
    });


    gsap.timeline({
        defaults: { duration: 0.8, ease: "customEase" },
        scrollTrigger: {
            trigger: ".about-symphony",
            //trigger element - viewport
            start: "top 80%",
            end: "top 40%",
        }
    })
    .fromTo('.about-symphony__title-line',
    {
        opacity: 0,
        yPercent: 100
    },
    {
        opacity: 1,
        yPercent: 0,
        stagger: 0.1
    })

    // Horizontal scroll
    let tMain = gsap.timeline({
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


    // Scale shape item
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "left right",
            end: "left left",
            scrub: true,
            containerAnimation: tMain,
        }
    })
    .to('.about-shape__item', {
        scale: 0.5
    })

    // Grid
    // Title
    SplitType.create('.about-grid__title', 
    {
        types: 'lines', 
        lineClass: 'about-grid__title--line-wrapper'
    })

    $('.about-grid__title').children().wrapInner('<div class="about-grid__title--line"></div>')

    gsap.timeline({
        defaults: { duration: 2 },
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "10% left",
            end: "20% left",
            containerAnimation: tMain,
            scrub: true
        }
    })
    .to('.about-grid__title--line', 
    {
        opacity: 1,
        yPercent: -100,
        ease: "none", 
        stagger: 0.3
    })

    gsap.timeline({
        defaults: { duration: 2 },
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "30% left",
            end: "45% left",
            containerAnimation: tMain,
            scrub: true,
        }
    })
    .fromTo('.about-grid__description', {
        opacity: 0,
    }, {
        opacity: 1
    })

    
    // Image
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-grid__section-width",
            //trigger element - viewport
            start: "left right",
            end: "left left",
            scrub: true,
            containerAnimation: tMain
        }
    })
    .set('.about-grid__img-wrapper--1 .about-grid__img', {
        scale: 1.6,
    })
    .from('.about-grid__img-wrapper', {
        xPercent: -50,
        ease: "none"
    })
    .to('.about-grid__img-wrapper--1 .about-grid__img', {
        scale: 1,
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
    }, '<')
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
        defaults: { duration: 1.5, ease: "customEase" },
        scrollTrigger: {
            trigger: ".about-quote",
            //trigger element - viewport
            start: "top 40%",
            end: "top top",
        }
    })
    .from('.about-quote__content--3', {
        xPercent: -30,
    })


    let desktopBreakpoint = getComputedStyle(document.body).getPropertyValue('--br-min-width-sm');
    let mobileBreakpoint = getComputedStyle(document.body).getPropertyValue('--default-show-nav-menu-breakpoint');
    let matchMedia = gsap.matchMedia();

    matchMedia.add({
        isDesktop: `(min-width : ${desktopBreakpoint})`,
        isMobile: `(max-width : ${mobileBreakpoint})`
    }, (context) => {
        let { isMobile, isDesktop } = context.conditions;

        // Grid
        // Sticky horizontal
        gsap.timeline({
            scrollTrigger: {
                trigger: ".about-grid__section-width",
                //trigger element - viewport
                start: "left left",
                end: "right right",
                scrub: true,
                containerAnimation: tMain,
            }
        })
        .to('.about-grid__sticky-element', {
            xPercent: isMobile ? 200 : 100,
            ease: "none"
        })

        // Desktop only
        if(isDesktop) {

            // Shapes
            let delay = 0
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
                        containerAnimation: tMain,
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

            // Credits
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-credits",
                    //trigger element - viewport
                    start: "top 70%",
                    end: "top 40%",
                    // scrub: true
                }
            })
            .from('.about-credits__title', {
                opacity: 0,
                duration: 1,
            })
            .from('.about-credits__credits', {
                opacity: 0,
                duration: 1
            }, '<')

            // end of is desktop only
        }
        
        // end of gsap match media
    });
    

    function setTrackHeights(){
        $(".about-beauty__section-height").each(function(index) {
            let trackWidth = $(this).find(".about-beauty__track").outerWidth();
            $(this).height(trackWidth);
        });
    }
}

export default aboutScroll