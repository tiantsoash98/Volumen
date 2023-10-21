import gsap from "gsap";
import CustomEase from "gsap/CustomEase";


function animateWhilePageLoading(){
    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');

    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);

    let timeline = gsap.timeline({
        defaults: { duration: 1, ease: "customEase" }
    })
    
    timeline.set('.loader', {display: 'flex'})
    timeline.from('.loader__logo path', {y: -276, opacity: 0.3, stagger: {each: 0.06, from: 'end'}, duration: 0.8 })
    timeline.to('.loader__logo', {'--bottom-y': 100, '--y-percent': 100 }, '+=0.6s')
}


export default animateWhilePageLoading