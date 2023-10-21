import gsap from "gsap";
import CustomEase from "gsap/CustomEase";


function animateOnPageLoaded(){
    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');

    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);

    let timeline = gsap.timeline({
        defaults: { duration: 1.5, ease: "customEase" },
    })
    
    timeline.to('.loader__frame', {opacity: 0 })
    timeline.to('.loader__logo', {opacity: 0, duration: 1 })
    timeline.to('.loader', {display: 'none' })
}

export default animateOnPageLoaded